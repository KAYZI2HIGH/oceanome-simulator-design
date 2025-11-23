# 🚀 Quick Start Guide

Get BlueMind running in 5 minutes!

## Prerequisites

- Node.js 18+ and npm/pnpm
- Python 3.9+
- Git

## Local Development

### 1️⃣ Clone & Navigate

```bash
cd /workspace  # You're already here!
```

### 2️⃣ Start Backend (Terminal 1)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python -m app.main
```

✅ Backend running at: http://localhost:8000
📚 API Docs at: http://localhost:8000/docs

### 3️⃣ Start Frontend (Terminal 2)

```bash
cd frontend
npm install  # or pnpm install
cp .env.example .env.local
npm run dev
```

✅ Frontend running at: http://localhost:3000

### 4️⃣ Test It Out

1. Open http://localhost:3000
2. Click "Sign Up"
3. Create an account
4. Login and explore! 🌊

## Deploy to Render (Production)

### Option 1: Automated (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to production"
git push origin main

# 2. On Render Dashboard:
#    - New → Blueprint
#    - Connect your repo
#    - Render auto-detects render.yaml
#    - Set environment variables
#    - Deploy!
```

### Option 2: Manual

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed step-by-step instructions.

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

For production:
```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api/v1
```

### Backend (.env)
```env
SECRET_KEY=generate-with-openssl-rand-hex-32
DEBUG=True
DATABASE_URL=sqlite+aiosqlite:///./bluemind.db
ALLOWED_ORIGINS=http://localhost:3000
```

For production:
```env
SECRET_KEY=your-secure-key-here
DEBUG=False
ENVIRONMENT=production
DATABASE_URL=postgresql+asyncpg://user:pass@host:5432/dbname
ALLOWED_ORIGINS=https://your-frontend.onrender.com
```

## Docker (Alternative)

```bash
# Build and start both services
docker-compose up --build

# Access:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8000
# - API Docs: http://localhost:8000/docs
```

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 8000 or 3000
lsof -ti:8000 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

**Module not found?**
```bash
# Backend
cd backend && pip install -r requirements.txt

# Frontend  
cd frontend && npm install
```

**CORS errors?**
- Add your frontend URL to `ALLOWED_ORIGINS` in backend/.env
- Restart backend

## Next Steps

- ✅ Read [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- ✅ Check [README.md](README.md) for full documentation
- ✅ Review [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- ✅ See [SETUP_COMPLETE.md](SETUP_COMPLETE.md) for what's ready

## Need Help?

- 📖 Full docs in README.md
- 🚀 Deployment guide in DEPLOYMENT.md
- 🐛 Check logs for errors
- 💬 Open an issue on GitHub

**Happy coding! 🌊**
