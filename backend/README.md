# BlueMind Ocean Restoration Platform - Backend API

## 🌊 Overview

BlueMind is an AI-powered platform for ocean microbiome monitoring and restoration. This backend provides:

- **Real-time Ocean Simulations**: AI-powered microbiome ecosystem modeling
- **IoT Sensor Integration**: SmartBuoy sensor data streaming
- **Carbon Sequestration Predictions**: ML-based environmental forecasting
- **Bio-Agent Tracking**: Synthetic biology deployment monitoring
- **Digital Twin Simulations**: Virtual ocean zone modeling

## 🚀 Quick Start

### Prerequisites

- Python 3.9 or higher
- pip or pipenv

### Installation

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Run the server**:
   ```bash
   python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

4. **Access the API**:
   - API: http://localhost:8000
   - Documentation: http://localhost:8000/docs
   - Alternative docs: http://localhost:8000/redoc

## 📁 Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   ├── config.py            # Configuration settings
│   ├── database.py          # Database connection
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── api/                 # API endpoints
│   │   ├── auth.py          # Authentication
│   │   ├── simulations.py   # Simulation management
│   │   ├── sensors.py       # IoT sensor data
│   │   ├── dashboard.py     # Dashboard stats
│   │   └── websockets.py    # WebSocket endpoints
│   └── core/                # Business logic
│       ├── security.py      # Auth & JWT
│       ├── simulation_engine.py  # Ocean simulation
│       └── sensor_simulator.py   # IoT data generation
├── requirements.txt
├── .env.example
└── README.md
```

## 🔑 API Endpoints

### Authentication

- `POST /api/v1/auth/signup` - Create new user account
- `POST /api/v1/auth/login` - Login (OAuth2)
- `POST /api/v1/auth/login-json` - Login (JSON)
- `GET /api/v1/auth/me` - Get current user

### Simulations

- `POST /api/v1/simulations` - Create simulation
- `GET /api/v1/simulations` - List all simulations
- `GET /api/v1/simulations/{id}` - Get simulation details
- `PUT /api/v1/simulations/{id}` - Update parameters
- `POST /api/v1/simulations/{id}/step` - Advance simulation
- `POST /api/v1/simulations/{id}/reset` - Reset simulation
- `POST /api/v1/simulations/{id}/predict` - AI predictions
- `DELETE /api/v1/simulations/{id}` - Delete simulation

### Sensors

- `POST /api/v1/sensors/zones` - Create sensor zone
- `GET /api/v1/sensors/zones` - List sensor zones
- `GET /api/v1/sensors/zones/{id}` - Get zone details
- `GET /api/v1/sensors/zones/{id}/current` - Get current reading
- `POST /api/v1/sensors/zones/{id}/simulate-event` - Simulate event
- `DELETE /api/v1/sensors/zones/{id}` - Delete zone

### Dashboard

- `GET /api/v1/dashboard/stats` - Get dashboard statistics

### WebSocket

- `WS /api/v1/ws/sensors/{zone_id}` - Real-time sensor stream
- `WS /api/v1/ws/simulation/{id}` - Real-time simulation updates
- `WS /api/v1/ws/dashboard` - Dashboard updates

## 🧪 Features

### AI-Powered Simulation Engine

The simulation engine models ocean microbiome dynamics with:

- Multi-species population dynamics (phytoplankton, zooplankton, bacteria)
- Environmental parameter interactions (temperature, nutrients, light, salinity, pH, oxygen)
- Carbon sequestration calculations
- Biodiversity index computation
- Ecosystem health scoring
- Predictive analytics

### IoT Sensor Simulation

SmartBuoy simulators provide realistic ocean monitoring data:

- Diurnal and seasonal patterns
- Realistic noise and measurement uncertainty
- Correlated environmental parameters
- Event simulation (algal blooms, upwelling, storms, pollution)

### Database Schema

- **Users**: Authentication and user management
- **Simulations**: Ocean ecosystem simulations
- **SimulationHistory**: Time-series simulation data
- **SensorZones**: IoT sensor locations
- **SensorReadings**: Time-series sensor data
- **BioAgents**: Engineered microbe specifications
- **Deployments**: Bio-agent deployment tracking

## 🔐 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Rate limiting (recommended in production)

## 🌐 Environment Variables

```env
# Application
APP_NAME=BlueMind Ocean Restoration API
DEBUG=True
API_VERSION=v1

# Security
SECRET_KEY=your-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Database
DATABASE_URL=sqlite+aiosqlite:///./bluemind.db

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# AI/IoT
ENABLE_AI_PREDICTIONS=True
SENSOR_UPDATE_INTERVAL=5
```

## 📊 Database

The project uses SQLAlchemy with async support. By default, it uses SQLite for development.

### Initialize Database

The database is automatically initialized on startup.

### Migrations (Optional)

For production, use Alembic for database migrations:

```bash
# Initialize Alembic
alembic init alembic

# Create migration
alembic revision --autogenerate -m "Initial migration"

# Apply migration
alembic upgrade head
```

## 🧬 Core Algorithms

### Carbon Sequestration Model

```python
# Phytoplankton carbon fixation
carbon_fixed = phytoplankton_biomass * 0.001  # kg C per week

# Export to deep ocean (15%)
export_efficiency = 0.15

# Net sequestration (after remineralization)
net_carbon = carbon_fixed * export_efficiency * 0.4

# Convert C to CO2
co2_sequestered = net_carbon * (44/12)
```

### Biodiversity Index

Uses Shannon diversity index normalized to 0-1 scale:

```python
H' = -Σ(pi * ln(pi))
normalized = H' / ln(n_species)
```

### Ecosystem Health Score

Weighted combination of:
- Population balance (50%)
- Environmental conditions (30%)
- Biodiversity (20%)

## 🚢 Deployment

### Docker (Recommended)

```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Production Considerations

1. **Database**: Use PostgreSQL instead of SQLite
2. **Environment**: Set `DEBUG=False`
3. **Security**: Generate strong `SECRET_KEY`
4. **HTTPS**: Use nginx or Caddy as reverse proxy
5. **Monitoring**: Add logging and error tracking
6. **Scaling**: Use Gunicorn with multiple workers

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributors

Built for the BlueMind Ocean Restoration Initiative

## 📧 Support

For issues and questions, please open an issue on GitHub.
