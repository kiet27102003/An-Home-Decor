// Mock Database - All data stored in frontend
export const database = {
  wines: [
    {
      id: "1",
      name: "Château Margaux 2018",
      type: "Rượu đỏ",
      origin: "Bordeaux, Pháp",
      price: 15000000,
      isNew: true,
      description: "Một trong những loại rượu vang đỏ nổi tiếng nhất thế giới với hương vị phức tạp và đậm đà",
      createdAt: "2024-01-15T00:00:00.000Z"
    },
    {
      id: "2",
      name: "Dom Pérignon Vintage 2012",
      type: "Champagne",
      origin: "Reims, Pháp",
      price: 8000000,
      isNew: true,
      description: "Champagne cao cấp với bọt mịn và hương thơm tinh tế",
      createdAt: "2024-01-15T00:00:00.000Z"
    },
    {
      id: "3",
      name: "Barolo DOCG 2019",
      type: "Rượu đỏ",
      origin: "Piedmont, Italy",
      price: 3500000,
      description: "Rượu vang đỏ Ý với hương vị đậm đà, hoàn hảo cho thịt đỏ",
      createdAt: "2024-01-15T00:00:00.000Z"
    },
    {
      id: "4",
      name: "Opus One 2018",
      type: "Rượu đỏ",
      origin: "Napa Valley, Mỹ",
      price: 12000000,
      description: "Phối hợp tuyệt vời giữa phong cách Pháp và Mỹ",
      createdAt: "2024-01-15T00:00:00.000Z"
    },
    {
      id: "5",
      name: "Veuve Clicquot Brut",
      type: "Champagne",
      origin: "Reims, Pháp",
      price: 2500000,
      description: "Champagne vàng với vị tươi mát, lý tưởng cho mọi dịp",
      createdAt: "2024-01-15T00:00:00.000Z"
    },
    {
      id: "6",
      name: "Corton-Charlemagne 2018",
      type: "Rượu trắng",
      origin: "Burgundy, Pháp",
      price: 18000000,
      description: "Rượu trắng cao cấp với độ phức tạp và cân bằng tuyệt vời",
      createdAt: "2024-01-15T00:00:00.000Z"
    }
  ],
  
  constructionServices: [
    {
      id: "1",
      title: "Thi Công Biệt Thự",
      description: "Dịch vụ thi công biệt thự cao cấp với vật liệu nhập khẩu và thiết bị hiện đại",
      price: 5000000000,
      category: "Biệt thự",
      features: ["Vật liệu cao cấp", "Thiết bị nhập khẩu", "Bảo hành 5 năm"],
      createdAt: "2024-01-10T00:00:00.000Z"
    },
    {
      id: "2",
      title: "Cải Tạo Chung Cư",
      description: "Cải tạo và nâng cấp chung cư với thiết kế hiện đại, tiện nghi",
      price: 2000000000,
      category: "Chung cư",
      features: ["Thiết kế hiện đại", "Thi công nhanh", "Bảo hành 3 năm"],
      createdAt: "2024-01-10T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Thi Công Nội Thất",
      description: "Thi công nội thất trọn gói với gỗ tự nhiên và thiết bị cao cấp",
      price: 800000000,
      category: "Nội thất",
      features: ["Gỗ tự nhiên", "Thiết bị cao cấp", "Bảo hành 2 năm"],
      createdAt: "2024-01-10T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Sửa Chữa Nhà Phố",
      description: "Sửa chữa và cải tạo nhà phố với giải pháp tiết kiệm năng lượng",
      price: 1500000000,
      category: "Nhà phố",
      features: ["Tiết kiệm năng lượng", "Vật liệu thân thiện", "Bảo hành 5 năm"],
      createdAt: "2024-01-10T00:00:00.000Z"
    }
  ],
  
  interiorDesignProjects: [
    {
      id: "1",
      title: "Căn Hộ Hiện Đại Q1",
      description: "Thiết kế căn hộ hiện đại với phong cách minimalist, tối ưu không gian 80m²",
      style: "Hiện Đại",
      area: "80m²",
      location: "Quận 1, TP.HCM",
      images: ["🏠", "✨", "🌟"],
      createdAt: "2024-01-12T00:00:00.000Z"
    },
    {
      id: "2",
      title: "Biệt Thự Sang Trọng",
      description: "Thiết kế biệt thự sang trọng với phong cách cổ điển châu Âu, diện tích 400m²",
      style: "Cổ Điển",
      area: "400m²",
      location: "Quận 2, TP.HCM",
      images: ["🏰", "👑", "💎"],
      createdAt: "2024-01-12T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Chung Cư Scandinavian",
      description: "Thiết kế chung cư theo phong cách Scandinavian với tông màu trắng và gỗ tự nhiên",
      style: "Scandinavian",
      area: "60m²",
      location: "Quận 7, TP.HCM",
      images: ["🏡", "🌲", "❄️"],
      createdAt: "2024-01-12T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Penthouse Cao Cấp",
      description: "Thiết kế penthouse cao cấp với view toàn cảnh thành phố, diện tích 200m²",
      style: "Hiện Đại",
      area: "200m²",
      location: "Quận 1, TP.HCM",
      images: ["🏙️", "🌃", "✨"],
      createdAt: "2024-01-12T00:00:00.000Z"
    },
    {
      id: "5",
      title: "Nhà Phố Minimalist",
      description: "Thiết kế nhà phố tối giản với đường nét sạch sẽ và công năng tối ưu",
      style: "Tối Giản",
      area: "100m²",
      location: "Quận 3, TP.HCM",
      images: ["🪴", "⚪", "🧘"],
      createdAt: "2024-01-12T00:00:00.000Z"
    },
    {
      id: "6",
      title: "Villa Sang Trọng",
      description: "Thiết kế villa với không gian mở, hướng ra sân vườn xanh mát",
      style: "Hiện Đại",
      area: "300m²",
      location: "Quận Thủ Đức, TP.HCM",
      images: ["🌳", "🌿", "🏡"],
      createdAt: "2024-01-12T00:00:00.000Z"
    }
  ],
  
  orders: []
};

// Helper functions to simulate API
export const getWines = () => {
  return Promise.resolve(database.wines);
};

export const getConstructionServices = () => {
  return Promise.resolve(database.constructionServices);
};

export const getInteriorProjects = () => {
  return Promise.resolve(database.interiorDesignProjects);
};

export const createOrder = (orderData) => {
  const newOrder = {
    id: Date.now().toString(),
    ...orderData,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };
  database.orders.push(newOrder);
  console.log('Order created:', newOrder);
  alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
  return Promise.resolve(newOrder);
};

