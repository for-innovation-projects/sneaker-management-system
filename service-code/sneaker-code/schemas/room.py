from pydantic import BaseModel, Field


class RoomBase(BaseModel):
    room_name: str = Field(example="直播间01")
    account_first: str = Field(example="主播账号")
    password_first: str = Field(example="主播密码")
    account_second: str = Field(example="助播账号")
    password_second: str = Field(example="助播密码")


class RoomCreate(RoomBase):
    pass


class RoomUpdate(RoomBase):
    id: str = Field(exclude="1")
    pass


class RoomOut(RoomBase):
    id: int

    class Config:
        orm_mode = True
