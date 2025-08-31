const Dashboard = () => {
  return (
    <div className="p-6 sm:p-8">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Tổng quan cộng đồng</h2>
        <div className="flex items-center space-x-4">
          <span className="text-slate-600">Xin chào, Nhile!</span>
          <img 
            src="https://placehold.co/40x40/3B82F6/FFFFFF?text=N" 
            alt="Admin Avatar" 
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-slate-500">Tổng Users</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">220,154</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-slate-500">Active Users (30 ngày)</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">5,320</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-slate-500">Users mới (hôm nay)</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">+128</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-slate-500">Tổng Lượt Views (YT)</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">16.1M</p>
        </div>
      </div>

      {/* User Management Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Quản lý User (CRM Lite)</h3>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Tìm theo tên hoặc email..." 
            className="flex-grow p-2 border border-slate-300 rounded-lg"
          />
          <select className="p-2 border border-slate-300 rounded-lg">
            <option>Lọc theo số chủ đạo</option>
            <option>Số 1</option>
            <option>Số 8</option>
            <option>Số 9</option>
          </select>
          <select className="p-2 border border-slate-300 rounded-lg">
            <option>Lọc theo mục tiêu</option>
            <option>Sự nghiệp</option>
            <option>Chữa lành</option>
          </select>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700">
            Lọc
          </button>
          <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700">
            Gửi Email cho nhóm này
          </button>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-3">Tên</th>
                <th className="p-3">Email</th>
                <th className="p-3">Ngày tham gia</th>
                <th className="p-3">Số CĐ</th>
                <th className="p-3">Mục tiêu</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-medium">Trần Minh An</td>
                <td className="p-3 text-slate-600">minhan@email.com</td>
                <td className="p-3 text-slate-600">20/08/2025</td>
                <td className="p-3 text-slate-600">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">1</span>
                </td>
                <td className="p-3 text-slate-600">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">Sự nghiệp</span>
                </td>
                <td className="p-3">
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Xem chi tiết</a>
                </td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-medium">Lê Bảo Quyên</td>
                <td className="p-3 text-slate-600">quyenle@email.com</td>
                <td className="p-3 text-slate-600">18/08/2025</td>
                <td className="p-3 text-slate-600">
                  <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold">9</span>
                </td>
                <td className="p-3 text-slate-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Chữa lành</span>
                </td>
                <td className="p-3">
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Xem chi tiết</a>
                </td>
              </tr>
              <tr className="border-b hover:bg-slate-50">
                <td className="p-3 font-medium">Phạm Thuỳ Hoa</td>
                <td className="p-3 text-slate-600">hoa.pham@email.com</td>
                <td className="p-3 text-slate-600">15/08/2025</td>
                <td className="p-3 text-slate-600">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">8</span>
                </td>
                <td className="p-3 text-slate-600">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">Sự nghiệp</span>
                </td>
                <td className="p-3">
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Xem chi tiết</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;