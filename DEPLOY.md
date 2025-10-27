# 🚀 Hướng Dẫn Deploy Website An Home Decor

## ⚡ QUICK START - Deploy Ngay (15 phút)

### Bước 1: Deploy Frontend lên Vercel

```bash
# 1. Login Vercel
npm i -g vercel
vercel login

# 2. Deploy frontend
cd frontend
vercel --prod

# Lưu URL bạn nhận được (ví dụ: https://an-home.vercel.app)
```

### Bước 2: Deploy Backend lên Railway

```bash
# 1. Tạo account Railway: https://railway.app
# 2. Connect GitHub repo
# 3. New Project → Deploy from GitHub
# 4. Select "An Home Decor" repo
# 5. Railway sẽ auto-detect backend/

# 6. Set environment variables (nếu cần)
# PORT sẽ tự động set bởi Railway
```

### Bước 3: Update Frontend URL

```bash
# Update API URL trong frontend
cd frontend
echo "VITE_API_URL=https://your-backend-url.railway.app" > .env.production

# Redeploy
vercel --prod
```

---

## 📋 Chi Tiết Từng Bước

### A. Frontend trên Vercel

**Tại sao Vercel?**
- ✅ Free hosting cho static sites
- ✅ Automatic SSL
- ✅ CDN toàn cầu
- ✅ Deploy từ GitHub
- ✅ Preview URLs cho mỗi PR

**Setup:**
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. From project root
cd frontend

# 4. Deploy
vercel --prod

# 5. Lưu URL (ví dụ: https://an-home.vercel.app)
```

**Vercel sẽ:**
- Build file `frontend/`
- Detect Vite framework automatically
- Deploy to global CDN
- Provide HTTPS automatically

---

### B. Backend trên Railway

**Tại sao Railway?**
- ✅ Free tier $5/month
- ✅ Easy setup
- ✅ Auto HTTPS
- ✅ GitHub integration

**Setup:**
1. Truy cập: https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub"
5. Choose "An Home Decor" repository
6. Railway sẽ tự động:
   - Detect `backend/` folder
   - Run `npm install`
   - Start `node server.js`
   - Assign a public URL

**Get Backend URL:**
- Trong Railway dashboard, click vào service
- Copy "Domain" → URL này là backend API của bạn
- Ví dụ: `https://an-home-backend.up.railway.app`

---

## 🔧 Configuration

### Update Frontend để kết nối Backend

```javascript
// In frontend/src/pages/WineShop.jsx
// Change this:
const response = await axios.get('http://localhost:3001/api/wines');

// To this:
const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend.railway.app';
const response = await axios.get(`${API_URL}/api/wines`);
```

**Hoặc update all API calls:**

```bash
# 1. Create environment variable
cd frontend
echo "VITE_API_URL=https://your-backend.railway.app" > .env.production

# 2. Update all API files to use:
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

# 3. Redeploy
vercel --prod
```

---

## 🎯 Tóm Tắt

### What Changed:
- **FRONTEND**: Static build → Vercel deployment
- **BACKEND**: File-based DB → Railway hosting (persistent)

### Why This Works:
1. **Vercel** hosting frontend files (static, no state)
2. **Railway** hosting Express server (with persistent filesystem)
3. **CORS** enabled on backend (can accept requests from Vercel domain)

### Cost:
- Vercel: **FREE** (hobby plan)
- Railway: **$5/month** (free tier credit)

---

## 🚨 Common Issues & Fixes

### Issue 1: CORS Error
```javascript
// In backend/server.js
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:3000']
}));
```

### Issue 2: Environment Variables
```bash
# Railway dashboard → Variables tab
# Add: NODE_ENV=production
```

### Issue 3: Database File Not Found
Railway có persistent storage, nhưng để an toàn:
- Dùng MongoDB Atlas (free)
- Hoặc migrate sang PostgreSQL (Railway có free PostgreSQL)

---

## 📚 Next Steps (Optional Improvements)

### 1. Add MongoDB (Recommended)

```bash
# Install
cd backend
npm install mongodb

# Update server.js
import { MongoClient } from 'mongodb';
```

### 2. Environment Variables

```bash
# Railway → Add Variables:
MONGODB_URI=mongodb+srv://...
NODE_ENV=production
```

### 3. Database Migration

Convert file reads → MongoDB queries:
```javascript
// Old
const data = await fs.readFile(dbPath);

// New
const data = await db.collection('wines').find().toArray();
```

---

## ✅ Checklist Before Deploying

- [ ] Git add & commit tất cả thay đổi
- [ ] Backend đã test local thành công
- [ ] Frontend build không lỗi (`npm run build`)
- [ ] Environment variables đã set
- [ ] CORS đã configure cho production domain

---

Bạn muốn tôi giúp implement cái nào trước?

