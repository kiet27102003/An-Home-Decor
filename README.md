# An Home Decor - Website Thiết Kế Nội Thất & Rượu Vang

Website đa năng về dịch vụ xây dựng, thiết kế nội thất và bán rượu vang cao cấp.

## 🚀 Tính Năng

- **Thi Công Xây Dựng**: Dịch vụ thi công xây dựng chuyên nghiệp
- **Thiết Kế Nội Thất**: Thiết kế nội thất hiện đại, sang trọng
- **Cửa Hàng Rượu Vang**: Bộ sưu tập rượu vang cao cấp
- **Giao Diện Đẹp**: Giao diện hiện đại, responsive với Tailwind CSS

## 🛠️ Công Nghệ

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: JSON (file-based)

## 📦 Cài Đặt

### 1. Cài đặt tất cả dependencies

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

Hoặc có thể chạy từng lệnh riêng lẻ.

### 2. Chạy project

```bash
npm run dev
```

Điều này sẽ chạy cả frontend và backend:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Hoặc chạy riêng lẻ:

Chạy backend:
```bash
npm run server
```

Chạy frontend:
```bash
npm run client
```

## 📁 Cấu Trúc Project

```
an-home-decor/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── index.html
│   └── package.json
├── backend/           # Node.js backend
│   ├── data/         # Database storage
│   ├── server.js      # Express server
│   └── package.json
└── package.json       # Root package.json
```

## 🌐 API Endpoints

### Construction Services
- `GET /api/construction-services` - Lấy danh sách dịch vụ
- `POST /api/construction-services` - Thêm dịch vụ mới

### Interior Design Projects
- `GET /api/interior-design-projects` - Lấy danh sách dự án
- `POST /api/interior-design-projects` - Thêm dự án mới

### Wines
- `GET /api/wines` - Lấy danh sách rượu vang
- `POST /api/wines` - Thêm rượu vang mới

### Orders
- `GET /api/orders` - Lấy danh sách đơn hàng
- `POST /api/orders` - Tạo đơn hàng mới

## 🎨 Giao Diện

Website có các trang sau:
- **Trang Chủ**: Giới thiệu về dịch vụ
- **Thi Công**: Dịch vụ thi công xây dựng
- **Nội Thất**: Thiết kế nội thất
- **Rượu Vang**: Cửa hàng rượu vang
- **Liên Hệ**: Thông tin liên hệ

## 📝 Ghi Chú

- Database được lưu trong file `backend/data/database.json`
- Mã code được viết bằng tiếng Việt để dễ hiểu
- Giao diện sử dụng Tailwind CSS với màu sắc phù hợp

## 👨‍💻 Tác Giả

An Home Decor Team

## 📄 License

MIT

