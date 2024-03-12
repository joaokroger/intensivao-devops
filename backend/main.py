from fastapi import FastAPI

app = FastAPI()

@app.get("/api/sum/{n1}/{n2}")
async def sum(n1: int, n2: int):
    return n1 + n2