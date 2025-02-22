from sqlalchemy import select, or_
from sqlalchemy.orm import Session

from common.custom_log import my_logger
from crud.base import CRUDBase
from models.database import Room
from schemas import PageSchema
from schemas.room import RoomCreate, RoomUpdate


class CRUDRoom(CRUDBase[Room, RoomCreate, RoomUpdate]):

    def get_all(self, db: Session, page: PageSchema, name: str = None, *args) -> list[Room | None]:
        stmt = select(self.model)
        if name is not None:
            stmt.where(self.model.name == name)

        return super().get_all(db=db, page=page, sql=stmt)

    def create(self, db: Session, obj_in: RoomCreate) -> Room:
        """ 创建直播间 """
        stmt = (
            select(Room)
            .where(or_(
                Room.account_first == obj_in.account_first,
                Room.account_first == obj_in.account_second,
                Room.account_second == obj_in.account_first,
                Room.account_second == obj_in.account_second
            ))
        )
        result = db.scalars(stmt).all()
        if len(result) != 0:
            my_logger.error("账号重复")
            raise
        return super().create(db, obj_in=obj_in)


room_curd = CRUDRoom(Room)