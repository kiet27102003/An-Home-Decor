import { useState, useEffect } from 'react';
import { getInteriorProjects } from '../data/db';

const InteriorDesign = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getInteriorProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const filters = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'modern', label: 'Hiện Đại' },
    { id: 'minimalist', label: 'Tối Giản' },
    { id: 'classic', label: 'Cổ Điển' },
    { id: 'scandinavian', label: 'Scandinavian' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm tracking-wider">THIẾT KẾ NỘI THẤT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Biến Không Gian
            <br />
            <span className="text-purple-300">Thành Tác Phẩm Nghệ Thuật</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Mỗi thiết kế là một câu chuyện riêng, được tạo nên bởi sự sáng tạo và tinh tế
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === item.id
                    ? 'bg-purple-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden card-hover shadow-md"
                >
                  <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl opacity-20">✨</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      {project.style && (
                        <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-700 shadow-md">
                          {project.style}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {project.area && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Diện tích: {project.area}
                      </div>
                    )}
                    <button className="text-purple-700 font-semibold hover:text-purple-800 inline-flex items-center">
                      Xem Chi Tiết →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="text-8xl mb-6">🏠</div>
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Danh Sách Dự Án</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  Khám phá những dự án thiết kế nội thất ấn tượng của chúng tôi. Mỗi không gian được tạo nên với sự tâm huyết và chuyên nghiệp.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-5xl opacity-30">🏡</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Dự Án Mẫu {item}</h4>
                      <p className="text-gray-600 text-sm">Thiết kế chuyên nghiệp</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quy Trình Thiết Kế
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quy trình chuyên nghiệp đảm bảo chất lượng từng dự án
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tư Vấn', desc: 'Lắng nghe và hiểu nhu cầu của bạn' },
              { step: '02', title: 'Thiết Kế', desc: 'Lên ý tưởng và bản vẽ chi tiết' },
              { step: '03', title: 'Phê Duyệt', desc: 'Chọn phương án hoàn hảo' },
              { step: '04', title: 'Thi Công', desc: 'Biến ý tưởng thành hiện thực' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-purple-700">{item.step}</span>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-700 py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Hãy để chúng tôi biến giấc mơ về không gian sống của bạn thành hiện thực
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transform transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Đặt Lịch Tư Vấn
          </a>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;
