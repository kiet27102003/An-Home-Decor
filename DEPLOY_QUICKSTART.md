# ⚡ QUICK START - Deploy Website

## Vấn Đề: `vite: command not found`

**Nguyên nhân:** Vercel đang cố build từ thư mục root, nhưng code frontend ở trong `frontend/`

## 🔧 Giải Pháp

### Cách 1: Deploy từ thư mục frontend (Đơn Giản Nhất)

```bash
# 1. Di chuyển vào thư mục frontend
cd frontend

# 2. Deploy trực tiếp từ đây
vercel --prod

# Vercel sẽ tự động detect Vite và build
```

### Cách 2: Deploy từ root với cấu hình Vercel

Tôi đã tạo file `frontend/vercel.json` cho bạn. Bây giờ deploy như sau:

```bash
# Từ root directory
vercel --prod --cwd frontend

# Hoặc đơn giản hơn:
cd frontend
vercel --prod
```

## 📝 Các Bước Chi Tiết

### Bước 1: Setup Vercel

```bash
# Install Vercel CLI (nếu chưa có)
npm i -g vercel

# Login
vercel login
```

### Bước 2: Deploy Frontend

```bash
cd frontend
vercel --prod
```

**Hệ thống sẽ hỏi bạn:**
- ❓ Set up and deploy? **Y**
- ❓ Which scope? Chọn account của bạn
- ❓ Link to existing project? **N** (lần đầu)
- ❓ What's your project's name? `an-home-decor`
- ❓ In which directory is your code located? `./`
- ❓ Want to modify settings? **N**

**Sau khi deploy xong:**
- Bạn sẽ nhận URL: `https://an-home-decor.vercel.app`
- Copy URL này để update backend CORS

### Bước 3: Deploy Backend (Railway)

1. Truy cập https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Chọn repository "An Home Decor"
6. Railway sẽ tự động:
   - Detect thư mục `backend/`
   - Install dependencies
   - Start server
7. Copy backend URL (ví dụ: `https://an-home-backend.up.railway.app`)

### Bước 4: Kết Nối Frontend và Backend

```bash
# Quay lại thư mục frontend
cd frontend

# Set environment variable
vercel env add VITE_API_URL production

# Paste backend URL khi được hỏi:
# Ví dụ: https://an-home-backend.up.railway.app

# Redeploy để apply env variable
vercel --prod
```

### Bước 5: Cấu Hình CORS cho Backend

Cập nhật `backend/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://an-home-decor.vercel.app',  // Your frontend URL
    'https://*.vercel.app'  // Allow all vercel subdomains
  ]
}));
```

Push code và Railway sẽ auto-redeploy.

## ✅ Test Website

1. Visit frontend URL: `https://an-home-decor.vercel.app`
2. Kiểm tra API calls hoạt động
3. Test các tính năng:
   - Xem danh sách rượu
   - Đặt hàng rượu
   - Liên hệ

## 🐛 Troubleshooting

### Issue 1: Still getting "vite: command not found"

**Fix:**
```bash
cd frontend
npm install
vercel --prod
```

### Issue 2: CORS Error

**Fix:**
Update `backend/server.js` với đúng frontend URL:
```javascript
app.use(cors({
  origin: 'https://your-frontend.vercel.app'
}));
```

### Issue 3: Environment Variable Not Working

**Fix:**
```bash
cd frontend
vercel env ls  # Check if VITE_API_URL exists
vercel --prod  # Redeploy
```

## 🎯 Tóm Tắt

**Deploy dễ nhất:**
```bash
cd frontend
vercel --prod
```

**Sau đó:**
1. Deploy backend lên Railway
2. Set `VITE_API_URL` env variable
3. Redeploy frontend
4. Done! 🎉

