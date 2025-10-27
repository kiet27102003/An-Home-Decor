import { useState, useEffect } from 'react';
import axios from 'axios';
import { createApiUrl } from '../config/api';

const Construction = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(createApiUrl('api/construction-services'));
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const constructionTypes = [
    { icon: '🏗️', title: 'Xây Dựng Mới', desc: 'Dự án nhà ở, biệt thự, chung cư' },
    { icon: '🔨', title: 'Sửa Chữa', desc: 'Cải tạo, nâng cấp công trình' },
    { icon: '🏢', title: 'Thi Công Nội Thất', desc: 'Lắp đặt, hoàn thiện nội thất' },
    { icon: '⚙️', title: 'M&E', desc: 'Điện, nước, điều hòa, thông gió' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-orange-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm tracking-wider">THI CÔNG XÂY DỰNG</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Xây Dựng Vững Chắc
            <br />
            <span className="text-amber-300">Cho Tương Lai</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dịch vụ thi công xây dựng chuyên nghiệp với đội ngũ kỹ sư giàu kinh nghiệm và máy móc hiện đại
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {constructionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 card-hover text-center shadow-md"
              >
                <div className="text-5xl mb-6">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-md card-hover overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">🏗️</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    {service.price && (
                      <p className="text-2xl font-bold text-amber-700 mb-2">
                        {new Intl.NumberFormat('vi-VN', { 
                          style: 'currency', 
                          currency: 'VND' 
                        }).format(service.price)}
                      </p>
                    )}
                    <button className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center">
                      Chi Tiết →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <div className="text-8xl mb-6">🏗️</div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Danh Sách Dịch Vụ Thi Công</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  Chúng tôi cung cấp đầy đủ các dịch vụ thi công từ xây dựng cơ bản đến hoàn thiện nội thất.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {['Dự án Biệt thự', 'Cải tạo Chung cư', 'Thi công Nội thất'].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-5xl opacity-30">🏛️</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item}</h4>
                      <p className="text-gray-600 text-sm">Dịch vụ chuyên nghiệp</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Chúng Tôi
            </h2>
            <p className="text-gray-600 text-lg">
              Cam kết chất lượng và tiến độ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Đảm Bảo Chất Lượng</h3>
              <p className="text-gray-600">Sử dụng vật liệu cao cấp, đạt chuẩn chất lượng</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Hoàn Thành Đúng Hẹn</h3>
              <p className="text-gray-600">Quy trình chuyên nghiệp đảm bảo tiến độ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Giá Cả Hợp Lý</h3>
              <p className="text-gray-600">Báo giá minh bạch, không phát sinh chi phí</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cần Tư Vấn Thi Công?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được báo giá miễn phí và tư vấn chi tiết
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transform transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Liên Hệ Ngay
          </a>
        </div>
      </section>
    </div>
  );
};

export default Construction;
