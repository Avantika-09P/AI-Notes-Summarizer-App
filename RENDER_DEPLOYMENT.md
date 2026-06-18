# AI Study Notes App - Render Deployment Guide

## Quick Start on Render

### Step 1: Connect GitHub to Render
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your repository

### Step 2: Deploy with render.yaml
1. Render will auto-detect `render.yaml` in the repo root
2. Click "New +" > "Blueprint" and select your repository
3. Render will create both services automatically

### Step 3: Configure Environment Variables
After deployment, set these on the Render dashboard:

**Backend Service (ai-study-notes-backend):**
- `OPENROUTER_API_KEY` - Get from https://openrouter.ai
- `JWT_SECRET` - Any random string (e.g., `your-secret-key-123`)
- `NODE_ENV` - Set to `production`

**Frontend Service (ai-study-notes-frontend):**
- `REACT_APP_API_URL` - Set to your backend service URL (e.g., `https://ai-study-notes-backend.onrender.com`)

### Step 4: Verify Deployment
1. Frontend loads at `https://your-frontend-service.onrender.com`
2. Backend runs at `https://your-backend-service.onrender.com`
3. Frontend auto-connects to backend via `REACT_APP_API_URL`

## Manual Setup (if not using render.yaml)

### Deploy Backend
1. New Web Service
2. Build Command: `cd backend && npm install`
3. Start Command: `cd backend && npm start`
4. Set environment variables

### Deploy Frontend
1. New Static Site
2. Build Command: `cd frontend && npm install && npm run build`
3. Publish Directory: `frontend/build`
4. Set `REACT_APP_API_URL` to backend URL

## Troubleshooting

- **404 errors on upload**: Make sure backend `OPENROUTER_API_KEY` is set
- **Frontend can't reach backend**: Check `REACT_APP_API_URL` matches your backend service URL
- **Uploads not persisting**: Render's ephemeral storage doesn't persist files. For persistent uploads, use S3 or similar.

## File Locations
- Backend: `./backend/`
- Frontend: `./frontend/`
- Config: `./render.yaml`
