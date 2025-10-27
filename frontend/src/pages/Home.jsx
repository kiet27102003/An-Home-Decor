import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-amber-50"></div>
        <div className="absolute inset-0 opacity-50 bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M20 10h60v80H20z' fill='%23fbbf24' opacity='0.05'/%3E%3C/svg%3E\")"}}></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
              <span className="text-amber-700 font-semibold text-sm tracking-wider">THIẾT KẾ & XÂY DỰNG CAO CẤP</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Tạo Không Gian
              <br />
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Sang Trọng
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Chúng tôi chuyên thiết kế, thi công nội thất cao cấp và cung cấp rượu vang hạng sang cho không gian sống hoàn hảo của bạn
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/interior-design"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-base font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Khám Phá Dự Án
              </Link>
              <Link
                to="/contact"
                className="bg-white text-amber-700 px-8 py-4 rounded-full text-base font-semibold border-2 border-amber-700 hover:bg-amber-50 transform transition-all duration-300 hover:scale-105"
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ba lĩnh vực chuyên nghiệp tạo nên sự hoàn hảo cho không gian sống của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Construction Service */}
            <Link to="/construction" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden card-hover h-full">
                <div className="p-10">
                  <div className="w-16 h-16 bg-amber-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thi Công Xây Dựng</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dịch vụ thi công xây dựng chuyên nghiệp với đội ngũ kỹ sư giàu kinh nghiệm và máy móc hiện đại
                  </p>
                  <span className="text-amber-700 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Khám phá thêm →
                  </span>
                </div>
              </div>
            </Link>

            {/* Interior Design */}
            <Link to="/interior-design" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden card-hover h-full">
                <div className="p-10">
                  <div className="w-16 h-16 bg-purple-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thiết Kế Nội Thất</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Thiết kế nội thất hiện đại, sang trọng phù hợp với từng không gian và phong cách sống của bạn
                  </p>
                  <span className="text-purple-700 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Khám phá thêm →
                  </span>
                </div>
              </div>
            </Link>

            {/* Wine Shop */}
            <Link to="/wine-shop" className="group">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl overflow-hidden card-hover h-full">
                <div className="p-10">
                  <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🍷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Rượu Vang Cao Cấp</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bộ sưu tập rượu vang cao cấp từ các nhà sản xuất nổi tiếng thế giới, hoàn hảo cho mọi dịp
                  </p>
                  <span className="text-red-700 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Khám phá thêm →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm tracking-wider uppercase">Dự Án Hoàn Thành</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm tracking-wider uppercase">Khách Hàng Hài Lòng</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm tracking-wider uppercase">Năm Kinh Nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-gray-300 text-sm tracking-wider uppercase">Rượu Vang</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Chúng Tôi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cam kết mang đến chất lượng dịch vụ tốt nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Chuyên Nghiệp</h3>
              <p className="text-gray-600">Đội ngũ giàu kinh nghiệm với trình độ chuyên môn cao</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Nhanh Chóng</h3>
              <p className="text-gray-600">Hoàn thành đúng hẹn với tiến độ rõ ràng</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Chất Lượng</h3>
              <p className="text-gray-600">Sử dụng vật liệu và thiết bị cao cấp</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tận Tâm</h3>
              <p className="text-gray-600">Phục vụ khách hàng với sự tận tâm và chu đáo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bắt Đầu Dự Án Của Bạn Hôm Nay
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để nhận tư vấn miễn phí về thiết kế và thi công
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transform transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Liên Hệ Ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
