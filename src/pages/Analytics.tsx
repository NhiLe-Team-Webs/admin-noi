const Analytics = () => {
  return (
    <div className="p-6 sm:p-8">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Phân Tích & Báo Cáo</h2>
        <input 
          type="date" 
          className="bg-white p-2 rounded-lg border border-slate-300" 
          defaultValue="2025-08-24"
        />
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Automated Insights */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">💡 Insight Tự Động</h3>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="font-medium text-amber-800">
                "Phát hiện: <strong className="font-bold">Nhóm User có Số chủ đạo 8</strong> có tỷ lệ mua khóa học{' '}
                <strong className="font-bold">'Vận hành doanh nghiệp' cao hơn 70%</strong> so với trung bình. Gợi ý: Tạo một chiến dịch email riêng cho nhóm này."
              </p>
            </div>
          </div>
          
          {/* Sales Funnel Analysis */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Phân Tích Phễu Bán Hàng: Khóa "Là Chính Mình"</h3>
            <div className="space-y-2 text-center">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-lg font-bold">10,000</p>
                <p className="text-sm text-slate-500">Xem trang khóa học</p>
              </div>
              <p className="text-2xl text-slate-400">↓</p>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-lg font-bold">
                  3,000 <span className="text-sm font-normal text-slate-500">(30%)</span>
                </p>
                <p className="text-sm text-slate-500">Bấm nút "Đăng ký"</p>
              </div>
              <p className="text-2xl text-slate-400">↓</p>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-lg font-bold">
                  500 <span className="text-sm font-normal text-slate-500">(16.7%)</span>
                </p>
                <p className="text-sm text-slate-500">Hoàn tất thanh toán</p>
              </div>
            </div>
          </div>

          {/* Course Analytics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hiệu Quả Khóa Học</h3>
            <div className="space-y-4">
              {/* Course Item */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Là Chính Mình</span>
                  <span className="text-slate-500">92% Hoàn thành</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              {/* Course Item */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Sức mạnh vô hạn</span>
                  <span className="text-slate-500">75% Hoàn thành</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              {/* Course Item */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">99days with Nhile</span>
                  <span className="text-slate-500">45% Hoàn thành</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Group Performance */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hoạt Động Nhóm Cộng Đồng</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-slate-50">
                    <th className="p-3">Tên nhóm</th>
                    <th className="p-3">Thành viên</th>
                    <th className="p-3">Tin nhắn/ngày</th>
                    <th className="p-3">Mức độ sôi nổi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Học về vận hành doanh nghiệp</td>
                    <td className="p-3">1,205</td>
                    <td className="p-3">350</td>
                    <td className="p-3"><span className="text-red-500 font-bold">Rất cao</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Zoom hằng tuần - Tốt Nghiệp LCM</td>
                    <td className="p-3">850</td>
                    <td className="p-3">210</td>
                    <td className="p-3"><span className="text-orange-500 font-bold">Cao</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Tập Tiếng Anh</td>
                    <td className="p-3">2,530</td>
                    <td className="p-3">150</td>
                    <td className="p-3"><span className="text-green-500 font-bold">Trung bình</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-8">
          {/* User Health Score */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Phân Bố Điểm Gắn Kết</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-emerald-600">Fan Cứng (&gt;90đ)</span>
                  <span>1,500 users</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-sky-600">Gắn Bó (60-90đ)</span>
                  <span>2,500 users</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-rose-600">Nguy cơ rời bỏ (&lt;30đ)</span>
                  <span>500 users</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Active User Insights */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Chân Dung User Tích Cực</h3>
            <p className="text-sm text-slate-500 mb-4">Đặc điểm của 500 thành viên hoạt động nhiều nhất.</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Số chủ đạo phổ biến</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-10 font-bold">Số 9:</span>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="w-10 text-right text-sm">45%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-10 font-bold">Số 1:</span>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="w-10 text-right text-sm">25%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-10 font-bold">Số 8:</span>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="w-10 text-right text-sm">15%</span>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Mục tiêu hàng đầu</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-24 font-bold">Sự nghiệp:</span>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-blue-500 h-4 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="w-10 text-right text-sm">60%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 font-bold">Chữa lành:</span>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div className="bg-blue-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="w-10 text-right text-sm">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;