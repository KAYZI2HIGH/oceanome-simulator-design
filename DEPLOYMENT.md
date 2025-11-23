# BlueMind Deployment Guide

This guide will walk you through deploying the BlueMind Ocean Restoration Platform on Render.

## Prerequisites

- A GitHub account with your code repository
- A Render account (free tier available at [render.com](https://render.com))
- Basic knowledge of environment variables

## Architecture Overview

The BlueMind platform consists of two main services:

1. **Backend API** (FastAPI/Python) - Handles business logic, database, and API endpoints
2. **Frontend** (Next.js/React) - User interface and client-side interactions

## Deployment Options

### Option 1: Automated Deployment with render.yaml (Recommended)

The project includes a `render.yaml` file that automates the deployment process.

#### Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**
   
   After the services are created, you'll need to manually set:
   
   **For Backend (`bluemind-backend`):**
   - `ALLOWED_ORIGINS`: Your frontend URL (e.g., `https://bluemind-frontend.onrender.com`)
   - `SECRET_KEY`: Will be auto-generated, but you can change it
   
   **For Frontend (`bluemind-frontend`):**
   - `NEXT_PUBLIC_API_URL`: Your backend URL (e.g., `https://bluemind-backend.onrender.com/api/v1`)

4. **Deploy**
   - Click "Apply" to create all services
   - Wait for the deployment to complete (5-10 minutes)

### Option 2: Manual Deployment

If you prefer to deploy services individually:

#### Step 1: Deploy Backend

1. **Create PostgreSQL Database (Optional but Recommended)**
   - Go to Render Dashboard
   - Click "New" → "PostgreSQL"
   - Name: `bluemind-db`
   - Plan: Free (90-day limit) or Starter ($7/month for persistence)
   - Click "Create Database"
   - Copy the "Internal Database URL"

2. **Create Backend Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `bluemind-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Python 3`
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   
3. **Add Environment Variables**
   
   Click "Advanced" and add:
   
   | Key | Value |
   |-----|-------|
   | `ENVIRONMENT` | `production` |
   | `DEBUG` | `False` |
   | `SECRET_KEY` | Generate with: `openssl rand -hex 32` |
   | `DATABASE_URL` | PostgreSQL Internal URL (or use SQLite default) |
   | `ALLOWED_ORIGINS` | `https://your-frontend.onrender.com` (update after frontend is deployed) |
   | `ACCESS_TOKEN_EXPIRE_MINUTES` | `30` |
   | `ENABLE_AI_PREDICTIONS` | `True` |
   | `ENABLE_SENSOR_SIMULATION` | `True` |

4. **Deploy**
   - Click "Create Web Service"
   - Wait for the build to complete
   - Copy your backend URL (e.g., `https://bluemind-backend.onrender.com`)

#### Step 2: Deploy Frontend

1. **Create Frontend Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `bluemind-frontend`
     - **Root Directory**: `frontend`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

2. **Add Environment Variables**
   
   | Key | Value |
   |-----|-------|
   | `NODE_ENV` | `production` |
   | `NEXT_PUBLIC_API_URL` | `https://bluemind-backend.onrender.com/api/v1` |

3. **Deploy**
   - Click "Create Web Service"
   - Wait for the build to complete
   - Copy your frontend URL (e.g., `https://bluemind-frontend.onrender.com`)

#### Step 3: Update CORS Settings

1. Go back to your backend service on Render
2. Update the `ALLOWED_ORIGINS` environment variable with your frontend URL
3. Save changes and wait for the service to redeploy

## Post-Deployment Steps

### 1. Test the Deployment

1. Visit your frontend URL
2. Try creating an account (Signup)
3. Login with your credentials
4. Test the dashboard and simulations

### 2. Verify API Health

Visit `https://your-backend-url.onrender.com/health` to ensure the API is running.

### 3. Check API Documentation

Visit `https://your-backend-url.onrender.com/docs` to view the interactive API documentation.

## Database Considerations

### SQLite (Default)

- Pros: No setup required, works out of the box
- Cons: Data is lost when the service restarts, not suitable for production

### PostgreSQL (Recommended)

- Pros: Persistent storage, better performance, production-ready
- Cons: Requires setup, free tier has limitations

To use PostgreSQL, update the `DATABASE_URL` environment variable:
```
postgresql+asyncpg://user:password@host:5432/dbname
```

## Custom Domains (Optional)

To use a custom domain:

1. Go to your service on Render
2. Click "Settings"
3. Scroll to "Custom Domain"
4. Add your domain and follow the DNS configuration instructions

## Monitoring and Logs

### Viewing Logs

- Go to your service on Render Dashboard
- Click on the "Logs" tab
- View real-time logs for debugging

### Health Checks

Both services have health check endpoints configured:
- Backend: `/health`
- Frontend: Automatic Next.js health check

## Updating Your Deployment

### Automatic Updates

By default, Render automatically deploys when you push to your connected GitHub branch.

### Manual Deploy

1. Go to your service on Render
2. Click "Manual Deploy"
3. Select "Deploy latest commit"

## Troubleshooting

### Backend Issues

**Service won't start:**
- Check logs for Python errors
- Verify all environment variables are set
- Ensure `requirements.txt` has all dependencies

**Database connection errors:**
- Verify `DATABASE_URL` is correct
- For PostgreSQL, ensure the database exists
- Check that you're using the correct driver (`asyncpg` for PostgreSQL)

**CORS errors:**
- Add your frontend URL to `ALLOWED_ORIGINS`
- Ensure URLs include protocol (https://)
- Restart the backend after updating

### Frontend Issues

**Build fails:**
- Check logs for TypeScript or dependency errors
- Verify `package.json` has all dependencies
- Ensure `NEXT_PUBLIC_API_URL` is set

**API calls fail:**
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check backend health at `/health` endpoint
- Verify CORS is configured correctly

**Pages not loading:**
- Check for JavaScript errors in browser console
- Verify environment variables are set
- Check if backend API is accessible

### Free Tier Limitations

Render's free tier includes:
- Services spin down after 15 minutes of inactivity
- First request after spin-down may take 30+ seconds
- 90-day free PostgreSQL database (then deleted)
- 750 hours/month per service

For production use, consider upgrading to a paid plan.

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use strong SECRET_KEY** - Generate with `openssl rand -hex 32`
3. **Use PostgreSQL** for production (not SQLite)
4. **Enable HTTPS** (Render provides this automatically)
5. **Rotate secrets regularly**
6. **Monitor logs** for suspicious activity
7. **Keep dependencies updated** - Run `pip list --outdated` and `npm outdated` regularly

## Scaling

### Vertical Scaling (Upgrade instance size)

1. Go to service settings on Render
2. Change the plan to a higher tier
3. Save changes

### Horizontal Scaling (Add more instances)

Available on paid plans:
1. Go to service settings
2. Increase the number of instances
3. Render will load balance automatically

## Backup and Recovery

### Database Backups

For PostgreSQL on Render:
1. Automatic daily backups on paid plans
2. Manual backups: `pg_dump` command via Render Shell

### Code Backups

- Your code is in GitHub (version controlled)
- Keep multiple branches for stability
- Tag releases for easy rollback

## Cost Optimization

1. Use the free tier for development/testing
2. Upgrade to Starter plan for production ($7/month per service)
3. Use PostgreSQL Starter plan for persistent database ($7/month)
4. Consider shared database for multiple projects
5. Monitor usage in Render Dashboard

## Support and Resources

- [Render Documentation](https://render.com/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project GitHub Issues](https://github.com/yourusername/bluemind/issues)

## Next Steps

After deployment:
1. Test all features thoroughly
2. Set up monitoring and alerts
3. Configure custom domain (optional)
4. Set up CI/CD for automated testing
5. Add error tracking (e.g., Sentry)
6. Monitor performance metrics
7. Plan for scaling based on usage

## Conclusion

Your BlueMind Ocean Restoration Platform should now be live and accessible! Share your deployment URLs with your team and start monitoring ocean microbiomes! 🌊

For issues or questions, check the logs first, then refer to the troubleshooting section above.
