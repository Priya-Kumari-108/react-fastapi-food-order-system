import re
from pydantic import BaseModel, EmailStr, Field, field_validator
class OrderCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50, description="Customer full name")
    email: EmailStr = Field(..., description="Valid email address")
    phone: str = Field(
        ...,
        pattern=r"[0-9]{10}$",
        description="10-digit mobile number"
    )
    food: str = Field(..., min_length=1, description="selected food item")
    @field_validator("name", "food")
    @classmethod
    def prevent_empty_whitespace(cls,value: str) -> str:
        if not value.strip():
            raise ValueError("Field cannot be empty or contain only whitespace")
        return value.strip()
    @field_validator("name")
    @classmethod
    def name_must_not_contain_numbers(cls, value: str) -> str:
        if re.search(r'\d', value):
            raise ValueError("Name cannot contain numbers")
        return value
class OrderResponse(BaseModel):
    message: str = "Your Order has been placed successfully."