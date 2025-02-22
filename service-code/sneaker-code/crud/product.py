from typing import Sequence

from sqlalchemy import select, desc, update
from sqlalchemy.orm import Session

from crud.base import CRUDBase
from models.database import Product
from schemas.product import ProductCreate, ProductUpdate


class CRUDProduct(CRUDBase[Product, ProductCreate, ProductUpdate]):

    def get_all_by_room_id(self, db: Session, room_id: int) -> list[Product]:
        stmt = select(self.model).where(self.model.room_id==room_id).order_by(desc(self.model.id))
        return db.scalars(stmt).all()

    def update_all_not_award(self, db: Session, room_id: int):
        stmt = update(self.model).where(self.model.room_id == room_id).values(award=False)
        db.execute(stmt)
        db.commit()


product_crud = CRUDProduct(Product)