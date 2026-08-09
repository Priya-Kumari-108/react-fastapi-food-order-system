import os
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from database import orders_collection
from models import OrderCreate, OrderResponse

app = FastAPI(title="Foodie Order API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(RequestValidationError)
async def custom_validation_exception_handler(request, exc):
    first_error = exc.errors()[0]
    field = first_error.get("loc", ["field"])[-1]
    msg = first_error.get("msg", "Invalid input value")
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={"message": f"Validation Error ({field}: {msg}"}
    )

@app.get("/")
async def root():
    return{"message": "Foodie API is running"}

@app.post(
    "/orders",
    response_model=OrderResponse,
    status_code=status.HTTP_201_CREATED,
    summary="place a new food order"
)
async def place_order(order: OrderCreate):
    try:
        order_dict = order.model_dump()
        result = await orders_collection.insert_one(order_dict)
        
        if not result.inserted_id:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save order to database"
            )

        return OrderResponse(message="Your order has been placed successfully.")

    except Exception as e:
        print("REAL ERROR:", repr(e))
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while placing your order. Please try again later."
        )

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 5000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)    