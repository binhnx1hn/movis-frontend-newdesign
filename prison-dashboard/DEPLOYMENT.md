# Prison Digital Map Dashboard - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel provides the best experience for Vite/React applications with zero configuration.

#### Steps:

1. **Push to GitHub** (if not already):
```bash
cd prison-dashboard
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Done! Your app will be live at `https://your-project.vercel.app`

3. **Or Deploy via CLI**:
```bash
npm install -g vercel
cd prison-dashboard
vercel login
vercel
```

**Environment Variables** (if needed):
- Go to Project Settings → Environment Variables
- Add: `VITE_API_URL`, `VITE_WS_URL`, etc.

---

### Option 2: Netlify

Great alternative with similar ease of use.

#### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"
   - Live at `https://your-project.netlify.app`

3. **Or Deploy via CLI**:
```bash
npm install -g netlify-cli
cd prison-dashboard
netlify login
netlify init
netlify deploy --prod
```

---

### Option 3: Azure Static Web Apps

Best for enterprise deployments and Azure ecosystem integration.

#### Steps:

1. **Install Azure CLI**:
```bash
# Windows (via winget)
winget install Microsoft.AzureCLI

# Or download from: https://aka.ms/installazurecliwindows
```

2. **Login to Azure**:
```bash
az login
```

3. **Create Static Web App**:
```bash
cd prison-dashboard

# Create resource group
az group create --name prison-dashboard-rg --location eastus

# Create static web app
az staticwebapp create \
  --name prison-dashboard \
  --resource-group prison-dashboard-rg \
  --source . \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

4. **Or use Azure Portal**:
   - Go to [portal.azure.com](https://portal.azure.com)
   - Create new "Static Web App"
   - Connect to GitHub
   - Configure build settings:
     - App location: `/`
     - Output location: `dist`
   - Deploy

---

### Option 4: GitHub Pages

Free hosting for public repositories.

#### Steps:

1. **Install gh-pages**:
```bash
cd prison-dashboard
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://<username>.github.io/<repo-name>"
}
```

3. **Update vite.config.ts**:
```typescript
export default defineConfig({
  base: '/<repo-name>/',
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are installed: `npm install`
- [ ] Build works locally: `npm run build`
- [ ] Preview build works: `npm run preview`
- [ ] No TypeScript errors: Check VSCode problems panel
- [ ] Environment variables are configured (if using real API)
- [ ] `.env.example` is committed (but not `.env`)
- [ ] README.md is updated with project info

---

## 🔧 Build Configuration

### Current Setup:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+
- **Framework**: Vite (auto-detected)

### Build Output:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── vite.svg
```

---

## 🌍 Environment Variables

For production deployment, set these environment variables in your hosting platform:

```env
VITE_API_URL=https://your-api-domain.com/api
VITE_WS_URL=wss://your-api-domain.com
VITE_USE_MOCK_DATA=false
```

### How to Set:

**Vercel**:
- Project Settings → Environment Variables

**Netlify**:
- Site Settings → Build & Deploy → Environment

**Azure**:
- Configuration → Application Settings

---

## 🔍 Troubleshooting

### Build Fails

1. **Clear cache and reinstall**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

2. **Check Node version**:
```bash
node --version  # Should be 18+
```

### Blank Page After Deploy

1. **Check base path** in `vite.config.ts`
2. **Check browser console** for errors
3. **Verify build output** in `dist/` folder

### 404 on Refresh

Add redirect rules (already configured in `vercel.json` and `netlify.toml`):
- All routes should redirect to `index.html`

---

## 📊 Performance Optimization

Already implemented:
- ✅ Code splitting (Vite automatic)
- ✅ Tree shaking
- ✅ Minification
- ✅ CSS optimization
- ✅ Asset optimization

Future optimizations:
- [ ] Image optimization (use `vite-plugin-imagemin`)
- [ ] PWA support (use `vite-plugin-pwa`)
- [ ] Lazy loading for routes
- [ ] CDN for static assets

---

## 🔐 Security Considerations

- ✅ No sensitive data in client code
- ✅ Environment variables for API URLs
- ✅ HTTPS enforced (automatic on Vercel/Netlify)
- ⚠️ Add authentication before production use
- ⚠️ Implement rate limiting on API
- ⚠️ Add CORS configuration

---

## 📈 Monitoring & Analytics

Recommended tools:
- **Vercel Analytics**: Built-in (free tier available)
- **Google Analytics**: Add to `index.html`
- **Sentry**: Error tracking
- **LogRocket**: Session replay

---

## 🎯 Next Steps After Deployment

1. **Test the deployed app** thoroughly
2. **Set up custom domain** (optional)
3. **Configure SSL certificate** (automatic on most platforms)
4. **Set up CI/CD** (automatic with GitHub integration)
5. **Monitor performance** and errors
6. **Implement backend API** to replace mock data
7. **Add authentication** for production use

---

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Azure: [docs.microsoft.com/azure](https://docs.microsoft.com/azure)

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀
