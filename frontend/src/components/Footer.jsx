import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src="/logo-footer.svg" alt="An Home Logo" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Chuyên thiết kế, thi công nội thất cao cấp và cung cấp rượu vang hạng sang
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">LIÊN KẾT NHANH</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors text-sm">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/construction" className="hover:text-amber-400 transition-colors text-sm">
                  Thi Công
                </Link>
              </li>
              <li>
                <Link to="/interior-design" className="hover:text-amber-400 transition-colors text-sm">
                  Nội Thất
                </Link>
              </li>
              <li>
                <Link to="/wine-shop" className="hover:text-amber-400 transition-colors text-sm">
                  Rượu Vang
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors text-sm">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">DỊCH VỤ</h4>
            <ul className="space-y-3">
              <li className="hover:text-amber-400 transition-colors text-sm cursor-pointer">
                Thiết Kế Nội Thất
              </li>
              <li className="hover:text-amber-400 transition-colors text-sm cursor-pointer">
                Thi Công Xây Dựng
              </li>
              <li className="hover:text-amber-400 transition-colors text-sm cursor-pointer">
                Tư Vấn Thiết Kế
              </li>
              <li className="hover:text-amber-400 transition-colors text-sm cursor-pointer">
                Rượu Vang Cao Cấp
              </li>
              <li className="hover:text-amber-400 transition-colors text-sm cursor-pointer">
                Cho Thuê Không Gian
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">LIÊN HỆ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">📍</span>
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-amber-400">📱</span>
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-amber-400">📧</span>
                <span>contact@anhomedecor.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-amber-400">🕒</span>
                <span>T2 - CN: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2024 An Home Decor. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Điều Khoản Sử Dụng
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

