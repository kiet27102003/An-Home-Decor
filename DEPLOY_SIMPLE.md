# 🚀 HƯỚNG DẪN DEPLOY - ĐƠN GIẢN

## ✅ Thay Đổi Đã Thực Hiện

### Đã Bỏ Backend
- ❌ Không cần backend server
- ❌ Không cần API calls
- ❌ Không cần axios
- ✅ Tất cả data trong `frontend/src/data/db.js`

### Dữ Liệu Mock
- ✅ 6 loại rượu vang
- ✅ 4 dịch vụ thi công
- ✅ 6 dự án thiết kế nội thất

## 🎯 Deploy Cực Kỳ Đơn Giản

### Bước 1: Build Frontend

```bash
cd frontend
npm install
npm run build
```

### Bước 2: Deploy lên Vercel

```bash
# Install Vercel CLI (nếu chưa có)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Hệ thống sẽ hỏi:**
```
? Set up and deploy? Y
? Which scope? [chọn account của bạn]
? Link to existing project? N
? What's your project's name? an-home-decor
? In which directory is your code located? ./
```

**Xong! Website của bạn sẽ online tại:**
`https://an-home-decor.vercel.app`

## 📋 Hướng Dẫn Chi Tiết

### 1. Setup Local (Optional)

```bash
# Từ root directory
cd frontend
npm install
npm run dev

# Website sẽ chạy tại http://localhost:3000
```

### 2. Deploy Production

```bash
# Install Vercel CLI
npm install -g vercel

# Login vào Vercel account
vercel login

# Deploy từ thư mục frontend
cd frontend
vercel --prod
```

### 3. Verify Deployment

1. Truy cập URL Vercel cung cấp
2. Kiểm tra tất cả các trang:
   - ✅ Trang chủ
   - ✅ Thi công
   - ✅ Nội thất
   - ✅ Rượu vang
   - ✅ Liên hệ

## 🎨 Cấu Trúc Dự Án

```
frontend/
├── src/
│   ├── data/
│   │   └── db.js              ← Mock data (6 wines, 4 services, 6 projects)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Construction.jsx   ← Dùng getConstructionServices()
│   │   ├── InteriorDesign.jsx ← Dùng getInteriorProjects()
│   │   ├── WineShop.jsx       ← Dùng getWines(), createOrder()
│   │   └── Contact.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── App.jsx
├── vercel.json                ← Config cho Vercel
├── package.json               ← Đã bỏ axios
└── vite.config.js
```

## 📝 Thêm Data Mới

Chỉnh sửa file `frontend/src/data/db.js`:

```javascript
// Thêm rượu mới
wines: [
  {
    id: "7",
    name: "Tên Rượu Mới",
    type: "Rượu đỏ",
    origin: "Nơi sản xuất",
    price: 5000000,
    isNew: false,
    description: "Mô tả..."
  },
  // ... existing wines
]
```

Sau đó:
```bash
cd frontend
vercel --prod  # Redeploy
```

## ✅ Lợi Ích

### So Với Backend
- ✅ Deploy cực nhanh (2 phút)
- ✅ Miễn phí hoàn toàn (Vercel free)
- ✅ Không cần quản lý server
- ✅ Không cần database
- ✅ Tốc độ cực nhanh (static site + CDN)
- ✅ Không có CORS issues

### Khi Nào Cần Backend?
Chỉ khi cần:
- User authentication
- Real orders processing
- Payment integration
- Dynamic content updates

## 🐛 Troubleshooting

### Build Error
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
vercel --prod
```

### Local Test
```bash
cd frontend
npm run dev
# Kiểm tra http://localhost:3000
```

## 🎉 Hoàn Thành!

Website của bạn bây giờ:
- ✅ Static site 100%
- ✅ Deploy miễn phí
- ✅ Tốc độ cao
- ✅ Không cần backend
- ✅ Dễ maintain

**Chỉ cần chạy:**
```bash
cd frontend && vercel --prod
```

Done! 🎊

