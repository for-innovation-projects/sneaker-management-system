from typing import Dict

from fastapi import APIRouter

from common.custom_log import my_logger
from common.depends import GetDB, PageQuery
from common.result import ResultSchema, Result
from common.route_log import LogRoute
from crud import room_curd, product_crud
from schemas.product import ProductOut, ProductCreate, ProductUpdate
from schemas.room import RoomOut, RoomCreate, RoomUpdate

# router = APIRouter(route_class=LogRoute)
router = APIRouter()


@router.post("")
async def add_product(
        db: GetDB,
        data: ProductCreate
) -> ResultSchema[ProductOut]:
    """
    添加产品
    """
    try:
        page = PageQuery()
        page.page = 1
        page.page_size = 100
        products = product_crud.get_all_by_room_id(db=db, room_id=data.room_id)
        for product in products:
            if product.product_name == data.product_name:
                my_logger.error(f"不能添加重复的商品:{product.product_name}")
                return Result.fail(msg=f"不能添加重复的商品:{product.product_name}")
            # 只允许一个中奖
            if product.award and data.award:
                my_logger.error(f"只允许一个中奖，请先将:{product.product_name}设置为不中奖")
                return Result.fail(msg=f"只允许一个中奖，请先将:{product.product_name}设置为不中奖")
        product_crud.create(db, data)
    except Exception as e:
        my_logger.error("添加产品失败：", e)
        return Result.fail()
    return Result.success()


@router.get("")
async def list_products(
        db: GetDB,
        room_id: int
) -> ResultSchema[list[ProductOut]]:
    page = PageQuery()
    page.page = 1
    page.page_size = 100
    products = product_crud.get_all_by_room_id(db=db, room_id=room_id)
    return Result.success(data=products)


@router.delete("")
async def delete_product(
        db: GetDB,
        product_id: int
):
    try:
        product_crud.remove(db=db, id=product_id)
    except Exception as e:
        my_logger.error("删除产品失败：", e)
        return Result.fail(msg=f"删除产品失败")
    return Result.success()


@router.put("")
async def update_product(
        db: GetDB,
        data: ProductUpdate
):
    try:
        product_info = product_crud.get(db, data.id)
        if data.award:
            products = product_crud.get_all_by_room_id(db=db, room_id=data.room_id)
            for product in products:
                # 只允许一个中奖
                if product.award:
                    my_logger.error(f"只允许一个中奖，请先将:{product.product_name}设置为不中奖")
                    return Result.fail(msg=f"只允许一个中奖，请先将:{product.product_name}设置为不中奖")
        product_crud.update(db, product_info, dict(data))
    except Exception as e:
        my_logger.error("修改产品信息失败：", e)
        return Result.fail(msg=f"修改产品信息失败")
    return Result.success()


@router.get("/award")
async def get_award(
        db: GetDB,
        room_id: int
) -> ResultSchema[Dict]:
    products = product_crud.get_all_by_room_id(db=db, room_id=room_id)
    count = 0
    award_product_name = ""
    award_product_id = 0
    for product in products:
        if product.award:
            award_product_name = product.product_name
            award_product_id = product.id
            count = count + 1
    if count == 0:
        my_logger.error("未设置中奖的奖品，请仔细核对")
        return Result.fail(msg=f"奖品还未准备好，请先上架好产品哦～")
    if count > 1:
        my_logger.error("存在多个中奖的奖品，请仔细核对")
        return Result.fail(msg=f"奖品还未准备好，请先上架好产品哦～")
    return Result.success(
        data={
            "award_product_id": award_product_id,
            "award_product_name": award_product_name,
        }
    )


@router.put("/award")
async def set_award(
        db: GetDB,
        room_id: int,
        product_id: int
):
    try:
        product_crud.update_all_not_award(db, room_id=room_id)
        product_info = product_crud.get(db, product_id)
        product_crud.update(db, product_info, {"award": True})
    except Exception as e:
        my_logger.error("设置奖项失败：", e)
        return Result.fail(msg=f"设置奖项失败")
    return Result.success()
