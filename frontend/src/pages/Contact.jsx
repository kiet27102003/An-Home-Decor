const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Thông Tin Liên Hệ
              </h2>
              <p className="text-gray-600 mb-12 text-lg">
                Hãy liên hệ với chúng tôi qua các kênh sau để được tư vấn miễn phí
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Điện Thoại</h3>
                    <p className="text-gray-600 text-lg">+84 123 456 789</p>
                    <p className="text-gray-600 text-lg">+84 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">contact@anhomedecor.com</p>
                    <p className="text-gray-600 text-lg">info@anhomedecor.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Địa Chỉ</h3>
                    <p className="text-gray-600 text-lg">123 Đường ABC, Quận 1</p>
                    <p className="text-gray-600 text-lg">TP.HCM, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Giờ Làm Việc</h3>
                    <p className="text-gray-600 text-lg">Thứ 2 - Chủ Nhật: 8:00 - 20:00</p>
                    <p className="text-gray-600 text-lg">Nghỉ các ngày lễ</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mạng Xã Hội</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:scale-105">
                    Facebook
                  </a>
                  <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:scale-105">
                    Instagram
                  </a>
                  <a href="#" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:scale-105">
                    Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gửi Tin Nhắn
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    HỌ VÀ TÊN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      EMAIL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      SỐ ĐIỆN THOẠI <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="0901234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    DỊCH VỤ QUAN TÂM
                  </label>
                  <select className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>Chọn dịch vụ</option>
                    <option>Thi Công Xây Dựng</option>
                    <option>Thiết Kế Nội Thất</option>
                    <option>Rượu Vang</option>
                    <option>Dịch vụ khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    TIN NHẮN <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="6"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  GỬI TIN NHẮN
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-300 text-lg">Bản đồ sẽ được hiển thị tại đây</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
