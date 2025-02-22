from pydantic import Field, BaseModel


class ProductBase(BaseModel):
    product_name: str = Field(example="产品名称")
    product_url: str = Field("", nullable=True, example="产品url")
    award: bool = Field(example="产品中奖")
    room_id: int = Field(example="1")


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    id: int = Field(exclude="1")
    pass


class ProductOut(ProductBase):
    id: int

    class Config:
        orm_mode = True
