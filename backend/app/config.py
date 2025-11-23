"""Application configuration settings"""

from pydantic_settings import BaseSettings
from typing import List
import os


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # App Info
    APP_NAME: str = "BlueMind Ocean Restoration API"
    DEBUG: bool = True
    API_VERSION: str = "v1"
    
    # Security
    SECRET_KEY: str = "dev-secret-key-change-in-production-please"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Database
    DATABASE_URL: str = "sqlite+aiosqlite:///./bluemind.db"
    
    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
    ]
    
    # AI/ML Settings
    ENABLE_AI_PREDICTIONS: bool = True
    MODEL_UPDATE_INTERVAL: int = 300
    
    # IoT Sensors
    SENSOR_UPDATE_INTERVAL: int = 5
    ENABLE_SENSOR_SIMULATION: bool = True
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
