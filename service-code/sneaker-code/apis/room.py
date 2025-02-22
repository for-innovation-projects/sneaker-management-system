from fastapi import APIRouter

from common.custom_log import my_logger
from common.depends import GetDB, PageQuery
from common.result import ResultSchema, Result
from common.route_log import LogRoute
from crud import room_curd
from schemas.room import RoomOut, RoomCreate, RoomUpdate

# router = APIRouter(route_class=LogRoute)
router = APIRouter()


@router.get("")
async def get_rooms(
        db: GetDB,
        page: PageQuery
) -> ResultSchema[list[RoomOut]]:
    """
    获取直播间数据
    """
    page.page = 1
    page.page_size = 100
    rooms_db = room_curd.get_all(db=db, page=page)
    return Result.success(data=rooms_db)


@router.post("")
async def add_room(
        db: GetDB,
        data: RoomCreate
) -> ResultSchema[RoomOut]:
    """
    添加直播间
    """
    try:
        room_curd.create(db, data)
    except Exception as e:
        my_logger.error("添加直播间失败：", e)
        return Result.fail()
    return Result.success()


@router.post("/update")
async def update_room(
        db: GetDB,
        data: RoomUpdate
) -> ResultSchema[RoomOut]:
    """
    修改直播间信息
    """
    try:
        # 获取db数据
        room_info = room_curd.get(db, data.id)
        room_curd.update(db, room_info, dict(data))
    except Exception as e:
        my_logger.error("修改直播间信息失败：", e)
        return Result.fail()
    return Result.success()





