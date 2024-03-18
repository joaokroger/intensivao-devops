from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import get_settings

app = FastAPI()

settings = get_settings()

allowed_origins = settings.allowed_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=['GET", "POST", "PUT", "DELETE", "OPTIONS'],
    allow_headers=['*']
)

@app.get("/api/sum/{n1}/{n2}")
async def sum(n1: int, n2: int):
    return n1 + n2