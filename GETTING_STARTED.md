# 🚀 Getting Started with BlueMind

This guide will help you get the BlueMind Ocean Restoration Platform up and running in minutes!

## 📦 What You've Got

A complete, production-ready platform with:
- ✅ FastAPI backend with AI-powered ocean simulations
- ✅ Next.js frontend with beautiful UI
- ✅ Real-time IoT sensor data streaming
- ✅ JWT authentication
- ✅ Carbon sequestration predictions
- ✅ WebSocket support for live updates
- ✅ Complete API documentation

## 🎯 Quick Start (2 Steps!)

### Step 1: Start the Backend (FastAPI)

Open Terminal 1:

```bash
cd backend
./start.sh    # On Linux/Mac
# or
start.bat     # On Windows
```

The backend will:
- Create a virtual environment
- Install all Python dependencies
- Initialize the database
- Start at http://localhost:8000

**API Documentation**: http://localhost:8000/docs

### Step 2: Start the Frontend (Next.js)

Open Terminal 2:

```bash
# From the root directory
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

The frontend will start at: **http://localhost:3000**

## 🎮 Using the Platform

### 1. Create an Account
1. Navigate to http://localhost:3000
2. Click "Start Exploring" or "Sign Up"
3. Enter your email, name, and password
4. You'll be automatically logged in!

### 2. Explore the Dashboard
- View simulation statistics
- Monitor ecosystem health
- Track carbon sequestration
- See preset scenarios

### 3. Run Simulations in Action Lab
1. Go to Dashboard → "Create Custom" or directly to Action Lab
2. Adjust environmental parameters:
   - Temperature (0-35°C)
   - Nutrients (0-100%)
   - Light intensity (0-100%)
   - Salinity (30-40 PSU)
3. Click "Play" to run the simulation
4. Watch real-time population dynamics
5. See AI predictions for carbon sequestration

### 4. Learn About Ocean Microbes
- Navigate to "Learn" page
- Explore key microorganisms
- Read educational lessons
- Understand ocean ecology

## 🔬 Key Features to Try

### AI Predictions
After running a simulation for a few weeks:
1. The system calculates:
   - Carbon sequestration rate (kg CO₂/week)
   - Biodiversity index (0-1)
   - Ecosystem health score (0-100)
2. Get AI-powered recommendations

### Real-time Monitoring
The platform simulates SmartBuoy IoT sensors:
- Temperature
- Salinity
- pH levels
- Dissolved oxygen
- Nutrient levels (nitrate, phosphate, silicate)
- Microbe populations

### Event Simulation
Simulate oceanographic events:
- Algal blooms
- Upwelling events
- Storms
- Pollution incidents

## 📊 API Testing

The backend provides a complete REST API. Test it at:
**http://localhost:8000/docs**

### Example API Calls

**1. Create an account** (POST /api/v1/auth/signup):
```json
{
  "email": "scientist@bluemind.org",
  "password": "ocean123",
  "name": "Ocean Researcher"
}
```

**2. Create a simulation** (POST /api/v1/simulations):
```json
{
  "name": "Coral Reef Restoration",
  "temperature": 22.0,
  "nutrients": 60.0,
  "light": 80.0
}
```

**3. Step through simulation** (POST /api/v1/simulations/{id}/step?weeks=4)

**4. Get AI predictions** (POST /api/v1/simulations/{id}/predict?weeks_ahead=8)

## 🔧 Troubleshooting

### Backend Won't Start

**Problem**: Python packages not installing
```bash
# Solution: Upgrade pip
python -m pip install --upgrade pip
pip install -r requirements.txt
```

**Problem**: Port 8000 already in use
```bash
# Solution: Change port in start script or kill process
lsof -ti:8000 | xargs kill -9  # Mac/Linux
```

### Frontend Won't Start

**Problem**: Module not found
```bash
# Solution: Clean install
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json
pnpm install
```

**Problem**: Can't connect to backend
```bash
# Solution: Check .env.local exists
cat .env.local
# Should contain: NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

### Database Issues

**Problem**: Database corruption or errors
```bash
# Solution: Reset database
cd backend
rm bluemind.db
# Restart backend - it will recreate the database
```

## 🎓 Understanding the Science

### Ocean Microbiome Simulation

The simulation engine models:
1. **Phytoplankton** - Primary producers (photosynthesis)
2. **Zooplankton** - Primary consumers (grazers)
3. **Bacteria** - Decomposers (nutrient recycling)

### Population Dynamics
- Growth rates affected by temperature, nutrients, and light
- Predator-prey interactions (zooplankton eat phytoplankton)
- Nutrient cycling (bacteria release nutrients)

### Carbon Sequestration
```
1. Phytoplankton fix CO₂ through photosynthesis
2. Organic matter sinks to deep ocean (15% export efficiency)
3. Bacteria remineralize 60% back to CO₂
4. Net sequestration = 6% of fixed carbon
```

### Ecosystem Health Score
Calculated from:
- Population balance (50%) - Are populations at optimal levels?
- Environmental health (30%) - Are conditions optimal?
- Biodiversity (20%) - Is the ecosystem diverse?

## 🌊 Advanced Features

### WebSocket Streaming

Connect to real-time sensor data:
```javascript
const ws = new WebSocket('ws://localhost:8000/api/v1/ws/sensors/1')
ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  console.log('Sensor reading:', data)
}
```

### Custom Bio-Agents

Future feature: Design and deploy engineered microbes for:
- Enhanced carbon sequestration
- Pollutant degradation
- Coral reef restoration

## 📚 Next Steps

1. **Experiment**: Try different environmental scenarios
2. **Learn**: Read the educational content
3. **Explore**: Check out the API documentation
4. **Extend**: Add custom features or bio-agents
5. **Deploy**: Take it to production with Docker

## 🤝 Need Help?

- Check the main README.md
- View API docs at http://localhost:8000/docs
- Backend README: backend/README.md

## 🎉 You're Ready!

You now have a fully functional AI-powered ocean restoration platform. Go save some oceans! 🌊🐋🐠

---

**Pro Tip**: Keep both terminals (backend and frontend) running. The backend auto-reloads on code changes, and so does the frontend!
