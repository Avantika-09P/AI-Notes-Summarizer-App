# GitHub Pages Deployment Guide

## Quick Start

### Step 1: Update homepage in frontend/package.json
Replace the placeholder URL with your actual GitHub Pages URL:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/AI-study-notes-app"
```

Or if you have a custom domain:
```json
"homepage": "https://your-custom-domain.com"
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Select "Deploy from a branch"
4. Branch: `gh-pages`
5. Save

### Step 3: Set Backend API URL
The GitHub Actions workflow will deploy the frontend, but it needs a backend API to connect to.

**Option A: Use Render (Recommended)**
1. Deploy your backend to Render (see RENDER_DEPLOYMENT.md)
2. On GitHub, go to Settings → Secrets and variables → Actions
3. Create a new secret: `REACT_APP_API_URL` = `https://your-backend.onrender.com`
4. The workflow will use this automatically

**Option B: No Backend (API won't work)**
- If you don't set a backend, the app will still load but uploads/AI features won't work

### Step 4: Push to GitHub
```bash
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the React app
2. Deploy to GitHub Pages
3. Your site goes live at `https://username.github.io/AI-study-notes-app`

## How It Works

- **Frontend**: Hosted on GitHub Pages (free static hosting)
- **Backend**: Hosted on Render (or another service)
- **API calls**: Frontend connects to Render backend via `REACT_APP_API_URL`

## Troubleshooting

### Pages not showing up
- Check Settings → Pages is set to `gh-pages` branch
- Wait 1-2 minutes for GitHub to rebuild

### 404 errors on routes
- This is a React Router issue on GitHub Pages
- The workflow includes a build that handles this

### API calls fail (404)
- Make sure `REACT_APP_API_URL` secret is set correctly
- Make sure your backend is running on Render/Vercel/etc.

## Customizations

### Use custom domain
1. Go to Settings → Pages → Custom domain
2. Enter your domain (e.g., `notes.example.com`)
3. Update `homepage` in package.json to match
4. Add DNS records as GitHub instructs

### Change deployment branch
Edit `.github/workflows/deploy.yml`:
```yaml
on:
  push:
    branches:
      - main  # Change to your branch name
```

## Architecture

```
GitHub (Frontend Code) → GitHub Actions (Build)
                              ↓
                        GitHub Pages (Host Frontend)
                              ↓
                    Frontend makes API calls
                              ↓
                    Render Backend (or other service)
```
