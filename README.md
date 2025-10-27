# An Home Decor - Website Thiết Kế Nội Thất & Rượu Vang

Website đa năng về dịch vụ xây dựng, thiết kế nội thất và bán rượu vang cao cấp.

## 🚀 Tính Năng

- **Thi Công Xây Dựng**: Dịch vụ thi công xây dựng chuyên nghiệp
- **Thiết Kế Nội Thất**: Thiết kế nội thất hiện đại, sang trọng
- **Cửa Hàng Rượu Vang**: Bộ sưu tập rượu vang cao cấp
- **Giao Diện Đẹp**: Giao diện hiện đại, responsive với Tailwind CSS

## 🛠️ Công Nghệ

- **Frontend**: React + Vite + Tailwind CSS
- **Data**: Mock data (không cần backend)
- **Deployment**: Vercel (miễn phí)

## 📦 Cài Đặt

### 1. Cài đặt dependencies

```bash
cd frontend
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: http://localhost:3000

### 3. Deploy Production

Xem file `DEPLOY_SIMPLE.md` để biết chi tiết.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel --prod
```

Hoặc có thể chạy từng lệnh riêng lẻ.

## 📁 Cấu Trúc Project

```
an-home-decor/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── data/         # Mock data (db.js)
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── index.html
│   ├── package.json
│   └── vercel.json       # Vercel config
├── backend/              # Backend cũ (không cần dùng nữa)
└── DEPLOY_SIMPLE.md      # Hướng dẫn deploy
```

## 📊 Data

Data được lưu trong `frontend/src/data/db.js`:

- **6 loại rượu vang** - Bao gồm Château Margaux, Dom Pérignon, Barolo...
- **4 dịch vụ thi công** - Biệt thự, chung cư, nội thất, sửa chữa
- **6 dự án thiết kế** - Nhiều phong cách: hiện đại, cổ điển, Scandinavian

Thêm data mới bằng cách sửa file `db.js`

## 🎨 Giao Diện

Website có các trang sau:
- **Trang Chủ**: Giới thiệu về dịch vụ
- **Thi Công**: Dịch vụ thi công xây dựng
- **Nội Thất**: Thiết kế nội thất
- **Rượu Vang**: Cửa hàng rượu vang
- **Liên Hệ**: Thông tin liên hệ

## 📝 Ghi Chú

- Tất cả data trong `frontend/src/data/db.js` (mock data)
- Không cần backend hoặc database
- Deploy miễn phí trên Vercel
- Mã code được viết bằng tiếng Việt
- Giao diện sử dụng Tailwind CSS với màu sắc phù hợp

## 👨‍💻 Tác Giả

An Home Decor Team

## 📄 License

MIT

