const Communication = () => {
  return (
    <div className="p-6 sm:p-8">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Tạo Chiến Dịch Email Mới</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Filters & Actions */}
        <div className="lg:col-span-1 space-y-6">
          {/* Card: Chọn đối tượng */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-1">1. Chọn Đối Tượng</h3>
            <p className="text-sm text-slate-500 mb-4">Lọc để gửi email đến đúng người.</p>
            <div className="space-y-4">
              <div>
                <label className="font-semibold text-sm">Trạng thái khóa học</label>
                <select className="mt-1 w-full p-2 border border-slate-300 rounded-lg">
                  <option>Tất cả</option>
                  <option>Đã tốt nghiệp 'Là Chính Mình'</option>
                  <option>Chưa học 'Sức mạnh vô hạn'</option>
                  <option>Đang là TNV tại NLT</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-sm">Số chủ đạo</label>
                <select className="mt-1 w-full p-2 border border-slate-300 rounded-lg">
                  <option>Tất cả</option>
                  <option>Số 1</option>
                  <option>Số 8</option>
                  <option>Số 9</option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-sm">Mục tiêu</label>
                <select className="mt-1 w-full p-2 border border-slate-300 rounded-lg">
                  <option>Tất cả</option>
                  <option>Sự nghiệp</option>
                  <option>Chữa lành</option>
                </select>
              </div>
            </div>
            <div className="mt-6 text-center bg-blue-50 p-3 rounded-lg">
              <p>Đã tìm thấy <strong className="text-blue-600 text-lg">2,157</strong> người dùng phù hợp.</p>
            </div>
          </div>

          {/* Card: Hành động */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Gửi Email</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Gửi Ngay
              </button>
              <button className="w-full bg-slate-200 text-slate-700 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors">
                Lên Lịch Gửi
              </button>
              <div className="flex space-x-2">
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  Xem trước
                </button>
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  Lưu nháp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Email Composer */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-slate-900 mb-4">2. Soạn Nội Dung</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="subject" className="font-semibold text-sm">Tiêu đề email</label>
              <input 
                type="text" 
                id="subject" 
                className="mt-1 w-full p-3 border border-slate-300 rounded-lg" 
                placeholder="Một món quà đặc biệt dành cho bạn..."
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Nội dung</label>
              <div className="mt-1 border border-slate-300 rounded-lg">
                {/* Toolbar (Simulated) */}
                <div className="p-2 border-b border-slate-300 bg-slate-50">
                  <p className="text-xs text-slate-500">
                    Sử dụng <code className="bg-slate-200 text-red-500 px-1 rounded">{"{{tên}}"}</code> để cá nhân hóa tên người nhận.
                  </p>
                </div>
                <textarea 
                  className="w-full h-96 p-3 text-base border-none outline-none resize-none" 
                  placeholder="Chào {{tên}}, ..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;