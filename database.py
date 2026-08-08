import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME", "food_order_db")

client = AsyncIOMotorClient(MONGO_URL)
database = client[DB_NAME]
orders_collection = database.get_collection("orders")
