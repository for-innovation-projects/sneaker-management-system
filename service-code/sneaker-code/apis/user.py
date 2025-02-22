#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2023/1/30 10:48
# @Author : zxiaosi
# @desc : 用户接口
from typing import Dict

from fastapi import APIRouter
from starlette.responses import Response

from common.custom_log import my_logger
from common.depends import GetDB, CheckCookie, PageQuery
from common.result import ResultSchema, Result
from common.route_log import LogRoute
from core.security import rsa_decrypt_password, verify_password
from crud import resource_crud, user_crud, role_crud, room_curd
from models import LocalUser
from schemas import MenuOut, UserOut, UserLogin, PageSchema
from common.custom_exc import UserErrors
from utils.handle_cookie import clear_cookie, set_cookie
from utils.handle_menu import generate_tree_menu

router = APIRouter()


@router.post("/login")
async def user_login(user: UserLogin, response: Response, db: GetDB) -> ResultSchema[Dict]:
    """ 登录 """
    try:
        # 判断是否是管理员
        if user.username == "admin" and user.password == "Admin@1233":
            return Result.success(data={"account_type":"admin"})
        if user.username == "admin" and user.password != "Admin@1233":
            raise UserErrors(err_desc="用户名或密码错误")
        # 获取所有直播间信息
        page = PageSchema()
        page.page = 1
        page.page_size = 100
        rooms = room_curd.get_all(db=db, page=page)
        for room in rooms:
            if user.username == room.account_first:
                if user.password == room.password_first:
                    return Result.success(data={
                        "account_type":"main",
                        "room_id":room.id,
                        "room_name":room.room_name,
                    })
                else:
                    raise UserErrors(err_desc="用户名或密码错误")
            if user.username == room.account_second:
                if user.password == room.password_second:
                    return Result.success(data={
                        "account_type":"assistant",
                        "room_id":room.id,
                        "room_name":room.room_name,
                    })
                else:
                    raise UserErrors(err_desc="用户名或密码错误")
    except Exception as e:
        my_logger.error("登陆失败：", e)
        return Result.fail()


@router.post("/signup")
async def user_signup(user: UserLogin, response: Response, db: GetDB) -> ResultSchema[UserOut]:
    """ 注册 """
    user_schema = user_crud.get_user_by_name(db, user.name)  # 获取用户信息
    if user_schema:
        raise UserErrors(err_desc="用户已存在")
    else:
        user.password = rsa_decrypt_password(user.password)  # 解密密码 (已在方法内抛出 Error)
        user_obj = user_crud.create(db, user)  # 创建用户
        user_schema = LocalUser.from_orm(user_obj)  # 将用户信息转换为 LocalUser
        role_obj = role_crud.get_role_by_code(db, "ROLE_GUEST")  # 获取游客角色
        user_schema.role_name = role_obj.name  # 设置用户角色名(游客不插入数据)

        set_cookie(user.name, user_schema, response)  # 设置 Cookie
        return Result.success(data=UserOut.from_orm(user_schema))


@router.post("/logout")
async def user_logout(response: Response, _user: CheckCookie) -> ResultSchema:
    """ 退出登录 """
    LocalUser.delete(_user.pk)  # 删除redis中的用户信息
    clear_cookie(response)  # 清除cookie
    return Result.success()


@router.get("/menu")
def user_menu(db: GetDB, _user: CheckCookie) -> ResultSchema[list[MenuOut]]:
    """ 获取用户菜单 """
    role_obj = role_crud.get_role_by_user_id(db, _user.id)
    if role_obj:
        resource_obj = resource_crud.get_resource_by_role_id(db, role_obj.id)
    else:
        resource_obj = resource_crud.get_resource_by_role_code(db, "ROLE_GUEST")
    menu = generate_tree_menu(resource_obj)
    return Result.success(data=menu)


# @router.get("/list", dependencies=[Depends(check_permission(["sys:user:list"]))])
@router.get("/list")
def users(db: GetDB, page: PageQuery, name: str | None = None) -> ResultSchema[list[UserOut]]:
    """ 获取用户列表 """
    users_obj = user_crud.get_all(db=db, page=page, name=name)
    total = user_crud.get_count(db)
    return Result.success(data=users_obj, total=total)
