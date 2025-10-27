import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="An Home Logo" className="h-14" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition duration-300 font-medium text-sm">
              TRANG CHỦ
            </Link>
            <Link to="/construction" className="text-gray-700 hover:text-amber-700 transition duration-300 font-medium text-sm">
              THI CÔNG
            </Link>
            <Link to="/interior-design" className="text-gray-700 hover:text-amber-700 transition duration-300 font-medium text-sm">
              THIẾT KẾ NỘI THẤT
            </Link>
            <Link to="/wine-shop" className="text-gray-700 hover:text-amber-700 transition duration-300 font-medium text-sm">
              RƯỢU VANG
            </Link>
            <Link to="/contact" className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors font-medium text-sm">
              LIÊN HỆ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-amber-700 transition font-medium text-sm">
              TRANG CHỦ
            </Link>
            <Link to="/construction" className="block text-gray-700 hover:text-amber-700 transition font-medium text-sm">
              THI CÔNG
            </Link>
            <Link to="/interior-design" className="block text-gray-700 hover:text-amber-700 transition font-medium text-sm">
              THIẾT KẾ NỘI THẤT
            </Link>
            <Link to="/wine-shop" className="block text-gray-700 hover:text-amber-700 transition font-medium text-sm">
              RƯỢU VANG
            </Link>
            <Link to="/contact" className="block bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition font-medium text-sm text-center">
              LIÊN HỆ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

