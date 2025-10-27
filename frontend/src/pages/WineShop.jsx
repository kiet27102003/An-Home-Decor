import { useState, useEffect } from 'react';
import axios from 'axios';
import { createApiUrl } from '../config/api';

const WineShop = () => {
  const [wines, setWines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    try {
      const response = await axios.get(createApiUrl('api/wines'));
      setWines(response.data);
    } catch (error) {
      console.error('Error fetching wines:', error);
    }
  };

  const handleOrder = async (wine) => {
    setIsOrdering(true);
    const name = prompt('Nhập tên của bạn:');
    if (!name) {
      setIsOrdering(false);
      return;
    }
    
    const phone = prompt('Nhập số điện thoại:');
    if (!phone) {
      setIsOrdering(false);
      return;
    }
    
    try {
      await axios.post(createApiUrl('api/orders'), {
        wineId: wine.id,
        wineName: wine.name,
        customerName: name,
        phone,
        quantity: 1
      });
      alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsOrdering(false);
    }
  };

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'red', label: 'Rượu Đỏ' },
    { id: 'white', label: 'Rượu Trắng' },
    { id: 'champagne', label: 'Champagne' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-rose-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm tracking-wider">BỘ SƯU TẬP RƯỢU VANG</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Rượu Vang
            <br />
            <span className="text-red-300">Hạng Sang</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Những chai rượu vang cao cấp từ các nhà sản xuất nổi tiếng thế giới, hoàn hảo cho mọi dịp đặc biệt
          </p>
        </div>
      </section>

      {/* Wine Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wines.length > 0 ? (
              wines.map((wine) => (
                <div
                  key={wine.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-red-50 to-rose-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-300">🍷</span>
                    </div>
                    {wine.isNew && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          MỚI
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {wine.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{wine.origin}</p>
                    <p className="text-sm text-gray-500 mb-4">{wine.type}</p>
                    {wine.price && (
                      <p className="text-2xl font-bold text-red-700 mb-6">
                        {new Intl.NumberFormat('vi-VN').format(wine.price)} ₫
                      </p>
                    )}
                    <button
                      onClick={() => handleOrder(wine)}
                      disabled={isOrdering}
                      className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isOrdering ? 'Đang xử lý...' : 'Đặt Hàng'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="text-8xl mb-6">🍷</div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Bộ Sưu Tập Rượu Vang</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  Khám phá những chai rượu vang cao cấp được tuyển chọn kỹ lưỡng từ các nhà sản xuất hàng đầu thế giới.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { name: 'Château Margaux 2018', origin: 'Bordeaux, Pháp', price: '15.000.000 ₫' },
                    { name: 'Dom Pérignon 2012', origin: 'Reims, Pháp', price: '8.000.000 ₫' },
                    { name: 'Barolo DOCG 2019', origin: 'Piedmont, Italy', price: '3.500.000 ₫' },
                  ].map((wine, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="h-48 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-6xl opacity-30">🍷</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">{wine.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{wine.origin}</p>
                      <p className="text-red-700 font-bold">{wine.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Wine Knowledge Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kiến Thức Về Rượu Vang
            </h2>
            <p className="text-gray-600 text-lg">
              Tìm hiểu cách thưởng thức và lưu trữ rượu vang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🍷</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Rượu Đỏ</h3>
              <p className="text-gray-600 mb-4">
                Nên phục vụ ở nhiệt độ phòng (16-18°C). Phù hợp với thịt đỏ, pho mát cứng, và chocolate đen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🥂</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Rượu Trắng</h3>
              <p className="text-gray-600 mb-4">
                Nên phục vụ lạnh (8-12°C). Kết hợp hoàn hảo với hải sản, thịt gà, và salad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🥃</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Champagne</h3>
              <p className="text-gray-600 mb-4">
                Nên phục vụ ướp lạnh (6-8°C). Hoàn hảo cho các dịp kỷ niệm và tiệc tùng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-800 to-rose-800 py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tìm Chai Rượu Hoàn Hảo Cho Bạn
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn và khám phá bộ sưu tập rượu vang cao cấp
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transform transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Liên Hệ Tư Vấn
          </a>
        </div>
      </section>
    </div>
  );
};

export default WineShop;
