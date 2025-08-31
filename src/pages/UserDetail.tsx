import { Link } from 'react-router-dom';

const UserDetail = () => {
  return (
    <div className="p-6 sm:p-8">
      {/* Header */}
      <header className="flex items-center mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mr-4">
          &larr; Quay lại danh sách
        </Link>
        <div className="flex items-center">
          <img 
            src="https://placehold.co/48x48/93C5FD/1E40AF?text=A" 
            alt="User Avatar" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trần Minh An</h2>
            <p className="text-slate-500">Tham gia ngày 20/08/2025</p>
          </div>
        </div>
      </header>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-1 space-y-8">
          {/* Card: Thông tin cá nhân */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Thông tin cá nhân</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="font-medium">minhan@email.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Telegram:</span>
                <a 
                  href="https://t.me/minhan_username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  @minhan_username
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mục tiêu chính:</span>
                <span className="font-medium">Sự nghiệp</span>
              </div>
            </div>
          </div>

          {/* Card: Bản Đồ Năng Lượng */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Bản Đồ Năng Lượng</h3>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-700">Thần số học</h4>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Số chủ đạo:</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-lg font-bold">1</span>
              </div>
              <hr className="my-4" />
              <h4 className="font-semibold text-slate-700">Cung hoàng đạo</h4>
              <div className="flex justify-between">
                <span className="text-slate-500">Cung Mặt Trời:</span>
                <span className="font-medium">♌ Sư Tử</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Cung Mặt Trăng:</span>
                <span className="font-medium">♈ Bạch Dương</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Cung Mọc:</span>
                <span className="font-medium">♐ Nhân Mã</span>
              </div>
            </div>
          </div>

          {/* Card: Bát Tự */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Bát Tự</h3>
            <p className="text-slate-500 text-sm">
              Thông tin chi tiết về Bát Tự sẽ được hiển thị ở đây, bao gồm Thiên Can, Địa Chi của Trụ Năm, Tháng, Ngày, Giờ...
            </p>
          </div>
        </div>

        {/* Right Column: Course Status */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Tình Trạng Khóa Học</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">Là Chính Mình</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-green-200 text-green-800">
                Đã tốt nghiệp
              </span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">Cuộc sống của bạn, Thương hiệu của bạn</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-green-200 text-green-800">
                Đã tốt nghiệp
              </span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">Sức mạnh vô hạn</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-yellow-200 text-yellow-800">
                Đang học
              </span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">99days with Nhile</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-slate-200 text-slate-600">
                Chưa học
              </span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">Đang TNV tại NLT</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-200 text-blue-800">
                Tình nguyện viên
              </span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
              <span className="font-medium text-slate-700">Người Xem Kênh</span>
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-slate-200 text-slate-600">
                Thành viên
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;