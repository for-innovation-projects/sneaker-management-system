#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2023/1/28 17:27
# @Author : zxiaosi
# @desc : 表结构(只测试了MySQL)
"""
参考文档:
    [1]: https://docs.sqlalchemy.org/en/20/orm/mapping_styles.html#declarative-mapping
    [2]: https://docs.sqlalchemy.org/en/20/orm/declarative_config.html#mapper-configuration-options-with-declarative
    [3]: https://docs.sqlalchemy.org/en/20/orm/declarative_mixins.html#composing-mapped-hierarchies-with-mixins
    [4]: https://docs.sqlalchemy.org/en/20/orm/declarative_config.html#other-declarative-mapping-directives
"""
import re
from datetime import datetime
from typing import List

from sqlalchemy import String, Integer, SmallInteger, ForeignKey, func, text, Boolean, DECIMAL
from sqlalchemy.orm import DeclarativeBase, mapped_column, Mapped, declared_attr, relationship
from typing_extensions import Annotated
from utils.utils import id_worker

idPk = Annotated[int, mapped_column(primary_key=True, autoincrement=True, comment="主键ID")]
# idRmPk = Annotated[
#     str, mapped_column(
#         primary_key=True,
#         default_factory=lambda: RoomUUIDPrefix + id_worker.get_hex_id(),
#         comment="主键ID",
#     )
# ]
# idPdPk = Annotated[
#     str, mapped_column(
#         primary_key=True,
#         default_factory=lambda: ProductUUIDPrefix + id_worker.get_hex_id(),
#         comment="主键ID",
#     )
# ]
RoomUUIDPrefix = "rm-"
ProductUUIDPrefix = "pd-"


class Base(DeclarativeBase):
    """ ORM 基类 | 详见[1]、[3]"""
    # __table_args__ = {
    #     "postgresql_using": "btree",
    # }

    # 驼峰命名转为小写下划线命名: https://blog.csdn.net/mouday/article/details/90079956
    @declared_attr.directive
    def __tablename__(cls) -> str:
        snake_case = re.sub(r"(?P<key>[A-Z])", r"_\g<key>", cls.__name__)
        return snake_case.lower().strip('_')


class CommonMixin:
    """ 公共元素类 | 详见[4] """

    is_deleted: Mapped[int | None] = \
        mapped_column(SmallInteger, server_default=text('0'), comment="是否删除: 0 未删除 1 已删除")
    create_time: Mapped[datetime | None] = \
        mapped_column(insert_default=func.now(), comment="创建时间")
    update_time: Mapped[datetime | None] = \
        mapped_column(server_default=func.now(), onupdate=func.now(), comment="更新时间")


### SNEAKER TABLE START ###
# 小程序用户表
class WechatUser(Base, CommonMixin):
    id: Mapped[idPk]
    openid: Mapped[str] = mapped_column(String(30), unique=True, comment="openid")
    name: Mapped[str] = mapped_column(String(100), comment="用户姓名")
    id_code: Mapped[str] = mapped_column(String(20), comment="身份证号")
    balance: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="余额")
    receive_name: Mapped[str] = mapped_column(String(100), comment="用户姓名")
    # 目前只支持 alipay
    receive_code: Mapped[str] = mapped_column(String(30), comment="收款账号")


# 产品信息表 级联 产品表
class ProductInfo(Base):
    id: Mapped[idPk]
    product_id: Mapped[int] = mapped_column(ForeignKey('product.id'), nullable=False)
    size: Mapped[str] = mapped_column(String(64), comment="产品尺寸")
    number: Mapped[int] = mapped_column(Integer, comment="产品数量")
    # 正常 取消 退货
    status: Mapped[int] = mapped_column(Integer, comment="商品状态")
    # 单价
    price: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="单价")
    description: Mapped[str] = mapped_column(String(255), comment="报价描述")
    # 最终单价
    finally_price: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="最终单价")
    # 实物不符合原因
    reason: Mapped[str] = mapped_column(String(255), comment="实物不符合原因")

    # 与 Product 关联
    product = relationship("Product", back_populates="product_infos")


# 产品链接表 级联 产品表
class ProductUrl(Base):
    id: Mapped[idPk]
    product_id: Mapped[int] = mapped_column(ForeignKey('product.id'), nullable=False)
    url: Mapped[str] = mapped_column(String(512), comment="图片链接")

    # 与 Product 关联
    product = relationship("Product", back_populates="product_urls")


# 产品表
class Product(Base, CommonMixin):
    id: Mapped[idPk]
    user_id: Mapped[int] = mapped_column(ForeignKey("wechat_user.id"), comment="用户id")
    product_name: Mapped[str] = mapped_column(String(64), comment="产品名称")
    product_code: Mapped[str] = mapped_column(String(64), comment="货号")
    product_infos: Mapped[List[ProductInfo]] = relationship("ProductInfo", back_populates="product", cascade="all, delete-orphan")
    product_urls: Mapped[List[ProductUrl]] = relationship("ProductUrl", back_populates="product", cascade="all, delete-orphan")


# 订单表
class Order(Base, CommonMixin):
    id: Mapped[idPk]
    user_id: Mapped[int] = mapped_column(ForeignKey("wechat_user.id"), comment="用户id")
    status: Mapped[int] = mapped_column(Integer, comment="订单状态")
    delivery_site: Mapped[str] = mapped_column(String(30), comment="快递厂商")
    tracking_code: Mapped[str] = mapped_column(String(30), comment="快递单号")
    address_id: Mapped[int] = mapped_column(Integer, comment="地址id")
    products: Mapped[List[Product]] = relationship("Product", back_populates="order", cascade="all, delete-orphan")
    # 最终总价
    finally_cost: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="最终总价")


# 小程序banner
class Banner(Base, CommonMixin):
    id: Mapped[idPk]
    location: Mapped[str] = mapped_column(String(30), comment="位置")
    url: Mapped[str] = mapped_column(String(512), comment="图片链接")


# 提现记录
class Withdrawal(Base, CommonMixin):
    id: Mapped[idPk]
    user_id: Mapped[int] = mapped_column(ForeignKey("wechat_user.id"), comment="用户id")
    # 提现金额
    withdrawal_money: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="提现金额")
    # 提现前余额
    before_balance: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="提现前金额")
    # 提现后余额
    after_balance: Mapped[DECIMAL(10, 2)] = mapped_column(DECIMAL(10, 2), comment="提现后金额")
    status: Mapped[int] = mapped_column(Integer, comment="提现状态")
    reason: Mapped[str] = mapped_column(String(512), comment="商家备注")


# 退货单
class ReturnGoods(Base, CommonMixin):
    id: Mapped[idPk]
    order_id: Mapped[int] = mapped_column(ForeignKey("order.id"), comment="订单id")
    products: Mapped[List[Product]] = relationship("Product", back_populates="order", cascade="all, delete-orphan")
    name: Mapped[str] = mapped_column(String(512), comment="姓名")
    phone: Mapped[str] = mapped_column(String(512), comment="手机号")
    detail: Mapped[str] = mapped_column(String(512), comment="地址信息")


# 商家地址
class Address(Base, CommonMixin):
    id: Mapped[idPk]
    name: Mapped[str] = mapped_column(String(512), comment="姓名")
    phone: Mapped[str] = mapped_column(String(512), comment="手机号")
    detail: Mapped[str] = mapped_column(String(512), comment="地址信息")
### SNEAKER  TABLE  END ###


class Room(Base, CommonMixin):
    """
    直播间表
    """
    id: Mapped[idPk]
    room_name: Mapped[str] = mapped_column(String(60), unique=True, comment="直播间名称")
    account_first: Mapped[str] = mapped_column(String(64), comment="主播账号")
    password_first: Mapped[str] = mapped_column(String(64), comment="主播密码")
    account_second: Mapped[str] = mapped_column(String(64), comment="助播账号")
    password_second: Mapped[str] = mapped_column(String(64), comment="助播密码")


class User(Base, CommonMixin):
    """ 用户表 """

    id: Mapped[idPk]
    name: Mapped[str] = mapped_column(String(60), unique=True, comment="用户名")
    password: Mapped[str] = mapped_column(String(64), comment="密码")
    avatar: Mapped[str | None] = mapped_column(String(60), comment="头像")
    sex: Mapped[int | None] = mapped_column(SmallInteger, server_default=text('0'), comment="性别: 0 未知 1 男 2 女")
    phone: Mapped[str | None] = mapped_column(String(30), comment="手机号")
    version: Mapped[int] = mapped_column(Integer, server_default=text('1'), comment="版本号")

    user_role = relationship("UserRole", back_populates="user")


class Role(Base, CommonMixin):
    """ 角色表 """

    id: Mapped[idPk]
    name: Mapped[str] = mapped_column(String(32), comment="角色名称")
    code: Mapped[str] = mapped_column(String(32), comment="角色code")
    description: Mapped[str | None] = mapped_column(String(60), comment="角色描述")

    user_role = relationship("UserRole", back_populates="role")
    role_resource = relationship("RoleResource", back_populates="role")


class Resource(Base, CommonMixin):
    """ 资源表 """

    id: Mapped[idPk]
    name: Mapped[str] = mapped_column(String(32), comment="资源名称")
    level: Mapped[int] = mapped_column(SmallInteger, server_default=text('0'), comment="层级: 0 目录 1 菜单 2 权限")
    pid: Mapped[int] = mapped_column(server_default=text('0'), comment="父节点id")
    icon: Mapped[str | None] = mapped_column(String(64), comment="图标")
    menu_url: Mapped[str | None] = mapped_column(String(64), comment="页面路由")
    request_url: Mapped[str | None] = mapped_column(String(64), comment="请求url")
    permission_code: Mapped[str | None] = mapped_column(String(32), comment="权限code")

    role_resource = relationship("RoleResource", back_populates="resource")


class UserRole(Base):
    """ 用户角色表 """

    id: Mapped[idPk]
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), comment="用户id")
    role_id: Mapped[int] = mapped_column(ForeignKey("role.id"), comment="角色id")

    user = relationship("User", back_populates="user_role")
    role = relationship("Role", back_populates="user_role")


class RoleResource(Base):
    """ 角色资源表 """

    id: Mapped[idPk]
    role_id: Mapped[int] = mapped_column(ForeignKey("role.id"), comment="角色id")
    resource_id: Mapped[int] = mapped_column(ForeignKey("resource.id"), comment="资源id")

    role = relationship("Role", back_populates="role_resource")
    resource = relationship("Resource", back_populates="role_resource")


class SysLog(Base):
    """ 日志表 """

    id: Mapped[idPk]
    url: Mapped[str] = mapped_column(String(64), comment="请求url")
    method: Mapped[str] = mapped_column(String(10), comment="请求方法")
    ip: Mapped[str] = mapped_column(String(20), comment="请求ip")
    params: Mapped[str | None] = mapped_column(String(255), comment="请求参数")
    spend_time: Mapped[str | None] = mapped_column(String(30), comment="响应时间")
    create_time: Mapped[str | None] = mapped_column(String(30), comment="创建时间")
