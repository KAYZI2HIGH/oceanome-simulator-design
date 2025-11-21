# 🌊 BlueMind Ocean Restoration Platform

AI-powered platform for ocean microbiome monitoring and restoration through digital twin simulations, real-time IoT sensor data, and bio-agent deployment tracking.

## 📋 Project Overview

**BlueMind** combines synthetic biology, AI, and IoT to restore ocean health through microbial ecosystem balance. The platform enables:

- 🔬 **Real-time Microbiome Simulations** - Digital twin modeling of ocean ecosystems
- 📡 **IoT Sensor Integration** - SmartBuoy data streaming and monitoring
- 🤖 **AI Predictions** - Carbon sequestration and biodiversity forecasting
- 🧬 **Bio-Agent Tracking** - Engineered microbe deployment management
- 📊 **Interactive Dashboard** - Real-time ecosystem health monitoring

## 🏗️ Architecture

### Frontend (Next.js)
- React 19 with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Real-time WebSocket integration

### Backend (FastAPI)
- Python 3.9+ with FastAPI
- SQLAlchemy for database ORM
- JWT authentication
- WebSocket for real-time updates
- Advanced ocean simulation engine

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (Frontend)
- Python 3.9+ (Backend)
- pnpm or npm (Frontend package manager)

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment
cp .env.example .env

# Start the backend server
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Or use the startup scripts:
```bash
# Linux/Mac
chmod +x start.sh
./start.sh

# Windows
start.bat
```

Backend will be available at:
- API: http://localhost:8000
- Docs: http://localhost:8000/docs

### 2. Frontend Setup

```bash
# Install dependencies
pnpm install  # or npm install

# Start development server
pnpm dev  # or npm run dev
```

Frontend will be available at: http://localhost:3000

## 📁 Project Structure

```
bluemind/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Business logic
│   │   ├── models.py       # Database models
│   │   ├── schemas.py      # Pydantic schemas
│   │   └── main.py         # FastAPI app
│   ├── requirements.txt
│   └── README.md
│
├── app/                    # Next.js pages
│   ├── dashboard/          # Main dashboard
│   ├── action-lab/         # Simulation interface
│   ├── learn/              # Educational content
│   └── auth/               # Authentication
│
├── components/             # React components
│   ├── ui/                 # UI primitives
│   ├── header.tsx
│   ├── simulation-controls.tsx
│   └── data-visualization.tsx
│
├── lib/                    # Utilities
│   ├── api-client.ts       # Backend API client
│   ├── auth-context.tsx    # Auth provider
│   └── simulation-engine.ts
│
└── public/                 # Static assets
```

## 🔑 Key Features

### 1. Ocean Microbiome Simulation
- Multi-species population dynamics
- Environmental parameter controls (temperature, nutrients, light, salinity)
- Real-time visualization
- Carbon sequestration calculations
- Ecosystem health scoring

### 2. IoT Sensor Network
- SmartBuoy sensor simulation
- Real-time data streaming via WebSocket
- Environmental monitoring (temperature, pH, oxygen, nutrients)
- Event simulation (algal blooms, upwelling, storms)

### 3. AI-Powered Predictions
- Carbon sequestration forecasting
- Biodiversity index calculation
- Ecosystem health recommendations
- Future state predictions

### 4. Educational Platform
- Interactive microbe database
- Learning modules on ocean ecology
- Real-world scientific data

## 🧪 Core Technologies

### Backend Stack
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM with async support
- **Pydantic** - Data validation
- **JWT** - Authentication
- **NumPy/SciPy** - Scientific computing
- **WebSockets** - Real-time communication

### Frontend Stack
- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Radix UI** - Accessible components

## 📊 API Documentation

The backend provides a comprehensive REST API with automatic OpenAPI documentation:

- **Interactive Docs**: http://localhost:8000/docs
- **Alternative Docs**: http://localhost:8000/redoc

### Key Endpoints

#### Authentication
- `POST /api/v1/auth/signup` - Register
- `POST /api/v1/auth/login-json` - Login
- `GET /api/v1/auth/me` - Current user

#### Simulations
- `POST /api/v1/simulations` - Create
- `GET /api/v1/simulations` - List all
- `POST /api/v1/simulations/{id}/step` - Advance
- `POST /api/v1/simulations/{id}/predict` - AI predictions

#### Sensors
- `POST /api/v1/sensors/zones` - Create sensor zone
- `GET /api/v1/sensors/zones/{id}/current` - Current reading
- `WS /api/v1/ws/sensors/{id}` - Real-time stream

## 🧬 Scientific Background

### Ocean Microbiome Importance
- Produce 50% of Earth's oxygen
- Drive global carbon cycles
- Form base of marine food webs
- Critical for climate regulation

### Carbon Sequestration
The biological carbon pump:
1. Phytoplankton fix CO₂ through photosynthesis
2. Zooplankton consume phytoplankton
3. Organic matter sinks to deep ocean
4. Carbon stored for centuries

Our simulations model this process with realistic parameters based on oceanographic research.

## 🌐 Environment Variables

### Backend (.env)
```env
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite+aiosqlite:///./bluemind.db
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## 🐳 Docker Deployment

### Backend
```bash
cd backend
docker build -t bluemind-backend .
docker run -p 8000:8000 bluemind-backend
```

### Frontend
```bash
docker build -t bluemind-frontend .
docker run -p 3000:3000 bluemind-frontend
```

## 🧪 Development Workflow

1. **Start Backend**: Terminal 1
   ```bash
   cd backend && ./start.sh
   ```

2. **Start Frontend**: Terminal 2
   ```bash
   pnpm dev
   ```

3. **Access Application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## 🔧 Troubleshooting

### Backend Issues
- **Import errors**: Ensure virtual environment is activated
- **Database errors**: Delete `bluemind.db` and restart
- **Port in use**: Change port in start script

### Frontend Issues
- **Module not found**: Run `pnpm install`
- **API connection**: Check `NEXT_PUBLIC_API_URL` in `.env.local`
- **Build errors**: Clear `.next` folder and rebuild

## 📚 Learn More

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Ocean Microbiome Research](https://www.oceanmicrobiome.org/)

## 🤝 Contributing

This project was built for the BlueMind Ocean Restoration Initiative. Contributions are welcome!

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

Built with passion for ocean conservation and restoration. 🌊

---

**Note**: This platform is for educational and research purposes. Real-world bio-agent deployment requires extensive safety testing and regulatory approval.
