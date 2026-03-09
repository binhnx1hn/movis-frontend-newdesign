import { useEffect, useState } from 'react';

/**
 * Stitch Dashboard Component
 * Main dashboard with complete layout from Stitch design
 */
export function StitchDashboard() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = 
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0') + ':' +
        now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(timeStr);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-grid min-h-screen p-4 flex flex-col gap-4">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-3 neon-border bg-slate-900/80 backdrop-blur-md rounded-lg">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/20 rounded-full border border-cyan-500">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-widest text-cyan-400 uppercase neon-text-cyan">
              Hệ Thống Giám Sát Trại Giam Trung Tâm
            </h1>
            {/* <p className="text-xs text-slate-400">TRẠM ĐIỀU KHIỂN CHIẾN THUẬT V.2.4.0</p> */}
          </div>
        </div>
        <div className="flex gap-8 text-right">
          <div>
            <p className="text-[10px] text-slate-500 uppercase">Trạng Thái Hệ Thống</p>
            <p className="text-sm font-semibold text-green-400">HOẠT ĐỘNG</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase">Thời Gian Hệ Thống</p>
            <p className="text-sm font-mono font-bold text-cyan-400">{currentTime || '--:--:--'}</p>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="grid grid-cols-12 grid-rows-6 gap-4 flex-grow h-[calc(100vh-120px)]">
        {/* Left Sidebar - Alerts, Resources & Canteen */}
        <section className="col-span-3 row-span-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar pr-2">
          {/* KPI Overview Cards */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-cyan-400 mb-2 uppercase tracking-tighter">TỔNG QUAN TRẠI GIAM</h2>
            <div className="grid grid-cols-2 gap-2">
              {/* Total Inmates */}
              <div className="bg-slate-800/40 p-2 rounded border border-cyan-500/30">
                <div className="text-[9px] text-slate-400 uppercase">Tổng phạm nhân</div>
                <div className="text-xl font-bold text-cyan-400 font-mono">1,247</div>
                <div className="text-[8px] text-green-400">↑ 3 hôm nay</div>
              </div>
              {/* Overcrowding Rate */}
              <div className="bg-slate-800/40 p-2 rounded border border-red-500/30">
                <div className="text-[9px] text-slate-400 uppercase">Quá tải</div>
                <div className="text-xl font-bold text-red-400 font-mono">112%</div>
                <div className="text-[8px] text-red-400">Max: 1,110</div>
              </div>
              {/* High Risk */}
              <div className="bg-slate-800/40 p-2 rounded border border-amber-500/30">
                <div className="text-[9px] text-slate-400 uppercase">Nguy cơ cao</div>
                <div className="text-xl font-bold text-amber-400 font-mono">48</div>
                <div className="text-[8px] text-amber-400">Theo dõi đặc biệt</div>
              </div>
              {/* Disciplined */}
              <div className="bg-slate-800/40 p-2 rounded border border-purple-500/30">
                <div className="text-[9px] text-slate-400 uppercase">Đang kỷ luật</div>
                <div className="text-xl font-bold text-purple-400 font-mono">23</div>
                <div className="text-[8px] text-purple-400">↑ 27.8% tuần này</div>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-red-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full alert-pulse"></span>
              TÌNH HÌNH AN NINH
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-slate-800/40 rounded">
                <span className="text-[9px] text-slate-300">Vi phạm nội quy hôm nay</span>
                <span className="text-[11px] font-bold text-red-400 font-mono">7</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-800/40 rounded">
                <span className="text-[9px] text-slate-300">Camera hoạt động</span>
                <span className="text-[11px] font-bold text-green-400 font-mono">28/32</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-800/40 rounded">
                <span className="text-[9px] text-slate-300">Kiểm tra buồng giam</span>
                <span className="text-[11px] font-bold text-cyan-400 font-mono">45/60</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-800/40 rounded">
                <span className="text-[9px] text-slate-300">Cảnh báo an ninh</span>
                <span className="text-[11px] font-bold text-amber-400 font-mono">3</span>
              </div>
            </div>
          </div>

          {/* Daily Activity */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-cyan-400 mb-2 uppercase tracking-tighter">HOẠT ĐỘNG TRONG NGÀY</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span>Tham gia lao động</span>
                  <span className="text-cyan-400 font-mono">892/1247 (72%)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[72%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span>Tham gia học tập</span>
                  <span className="text-green-400 font-mono">345/1247 (28%)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[28%]"></div>
                </div>
              </div>
              <div className="pt-1 border-t border-slate-700">
                <div className="text-[8px] text-slate-400 mb-1 uppercase font-bold">Lịch hôm nay</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-300">06:00 - Điểm danh</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-300">07:00 - Lao động</span>
                    <span className="text-cyan-400">●</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-300">12:00 - Nghỉ trưa</span>
                    <span className="text-slate-500">○</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-300">14:00 - Học tập</span>
                    <span className="text-slate-500">○</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Alerts - Compact */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-red-500 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full alert-pulse"></span>
              THÔNG BÁO KHẨN CẤP
            </h2>
            <div className="space-y-2">
              {/* Alert Item 1 - Compact */}
              <div className="p-2 border-l-2 border-red-600 bg-red-950/20 rounded-r">
                <div className="flex justify-between text-[9px] text-red-400 mb-0.5">
                  <span>KHU A - TẦNG 2</span>
                  <span>10:45:12</span>
                </div>
                <p className="text-[10px] font-semibold">CẢNH BÁO: Rung chấn bất thường tại tường bao số 4</p>
              </div>
              {/* Alert Item 2 - Compact */}
              <div className="p-2 border-l-2 border-amber-500 bg-amber-950/20 rounded-r">
                <div className="flex justify-between text-[9px] text-amber-400 mb-0.5">
                  <span>KHU B - CỔNG CHÍNH</span>
                  <span>10:42:05</span>
                </div>
                <p className="text-[10px] font-semibold">THÔNG BÁO: Phát hiện thiết bị bay (Drone) lạ</p>
              </div>
              {/* Alert Item 3 - Compact */}
              <div className="p-2 border-l-2 border-blue-500 bg-blue-950/20 rounded-r">
                <div className="flex justify-between text-[9px] text-blue-400 mb-0.5">
                  <span>HỆ THỐNG</span>
                  <span>10:30:00</span>
                </div>
                <p className="text-[10px] font-semibold">KIỂM TRA: Bắt đầu kiểm tra quân số định kỳ</p>
              </div>
            </div>
          </div>

          {/* Server Resources - Compact */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-cyan-400 mb-2 tracking-tighter uppercase">TÀI NGUYÊN SERVER</h2>
            <div className="flex justify-around items-center">
              {/* CPU Gauge */}
              <div className="text-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="3" />
                    <circle className="text-cyan-500" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125" strokeDashoffset="31" strokeWidth="3" />
                  </svg>
                  <span className="absolute text-[9px] font-bold">75%</span>
                </div>
                <span className="text-[9px] uppercase text-slate-400 mt-0.5 block">CPU</span>
              </div>
              {/* RAM Gauge */}
              <div className="text-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="3" />
                    <circle className="text-amber-500" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125" strokeDashoffset="72" strokeWidth="3" />
                  </svg>
                  <span className="absolute text-[9px] font-bold">42%</span>
                </div>
                <span className="text-[9px] uppercase text-slate-400 mt-0.5 block">RAM</span>
              </div>
              {/* DISK Gauge */}
              <div className="text-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="3" />
                    <circle className="text-green-500" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125" strokeDashoffset="100" strokeWidth="3" />
                  </svg>
                  <span className="absolute text-[9px] font-bold">20%</span>
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 block">Bộ nhớ</span>
              </div>
            </div>
          </div>

          {/* Canteen Management */}
          <div className="neon-border bg-slate-900/60 p-3 rounded-lg">
            <h2 className="text-[11px] font-bold text-cyan-400 mb-2 uppercase tracking-tighter">QUẢN LÝ CANTEEN</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span>Nhu yếu phẩm tồn kho</span>
                  <span className="text-cyan-400 font-mono">82%</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[82%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span>Giao dịch trong ngày</span>
                  <span className="text-amber-400 font-mono">1,450 lượt</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[65%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span>Doanh thu hôm nay</span>
                  <span className="text-green-400 font-mono">45.2M VND</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[78%]"></div>
                </div>
              </div>
              <button className="w-full mt-1 py-1 bg-cyan-500/10 border border-cyan-500/50 text-[9px] hover:bg-cyan-500/20 transition-colors uppercase font-bold tracking-widest">
                XUẤT BÁO CÁO NHẬP KHO
              </button>
            </div>
          </div>
        </section>

        {/* Center Panel - Digital Map */}
        <section className="col-span-6 row-span-5 neon-border bg-slate-900/40 rounded-lg relative overflow-hidden shadow-[inset_0_0_30px_rgba(34,211,238,0.15)]">
          <div className="scan-line"></div>
          
          {/* Map Header Info - Hidden */}

          {/* Map Canvas Area */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                alt="Prison Map"
                className="w-full h-full object-cover"
                src="/BDS.png"
              />
              {/* Removed overlay labels for cleaner map view */}
            </div>
          </div>

          {/* Map Legend Overlay - Hidden */}
          {/* <div className="absolute bottom-4 right-4 z-10 space-y-2">
            <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
              <span className="w-2 h-2 bg-cyan-500 rounded-sm"></span>
              <span>KHU GIAM GIỮ</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
              <span className="w-2 h-2 bg-amber-500 rounded-sm"></span>
              <span>KHU CANH GÁC</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
              <span className="w-2 h-2 bg-red-500 rounded-sm"></span>
              <span>KHU VỰC CẤM</span>
            </div>
          </div> */}
        </section>

        {/* Right Sidebar - Population Stats */}
        <section className="col-span-3 row-span-6 flex flex-col">
          {/* Population by Area - Scrollable */}
          <div className="flex-1 neon-border bg-slate-900/60 p-3 rounded-lg flex flex-col overflow-hidden">
            <h2 className="text-[11px] font-bold text-cyan-400 mb-3 uppercase tracking-tighter">QUÂN SỐ THEO KHU VỰC</h2>
            <div className="space-y-3 overflow-y-auto pr-2 flex-grow custom-scrollbar">
              {/* Cổng */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">CỔNG</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    ỔN ĐỊNH
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-cyan-400">12</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Camera</p>
                    <p className="text-sm font-bold text-green-400">8/8</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Lượt vào</p>
                    <p className="text-sm font-bold">45</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Bình thường</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Kiểm soát:</span>
                    <span className="text-cyan-300">Nghiêm ngặt</span>
                  </div>
                </div>
              </div>

              {/* Khu A */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">KHU A</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    ỔN ĐỊNH
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">P.Nhân</p>
                    <p className="text-sm font-bold text-cyan-400">450</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">32</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Phòng</p>
                    <p className="text-sm font-bold">120</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Công suất:</span>
                    <span className="text-cyan-300 font-mono">450/500 (90%)</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Loại:</span>
                    <span className="text-amber-300">An ninh trung bình</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Bình thường</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Camera:</span>
                    <span className="text-green-400">48/48 hoạt động</span>
                  </div>
                </div>
              </div>

              {/* Khu B */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">KHU B</span>
                  <span className="text-[10px] text-amber-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full alert-pulse"></span>
                    CHỜ KIỂM TRA
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">P.Nhân</p>
                    <p className="text-sm font-bold text-cyan-400">380</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">28</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Phòng</p>
                    <p className="text-sm font-bold">100</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Công suất:</span>
                    <span className="text-cyan-300 font-mono">380/400 (95%)</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Loại:</span>
                    <span className="text-amber-300">An ninh thấp</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-amber-400">Đang kiểm tra</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Camera:</span>
                    <span className="text-amber-400">38/40 hoạt động</span>
                  </div>
                </div>
              </div>

              {/* Hội Trường Phạm Nhân */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">HỘI TRƯỜNG PHẠM NHÂN</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    ỔN ĐỊNH
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">Sức chứa</p>
                    <p className="text-sm font-bold text-cyan-400">500</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">8</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Camera</p>
                    <p className="text-sm font-bold text-green-400">12/12</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Bình thường</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Hoạt động:</span>
                    <span className="text-cyan-300">Họp phạm nhân 14:00</span>
                  </div>
                </div>
              </div>

              {/* Nhà ăn */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">NHÀ ĂN</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    ỔN ĐỊNH
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">Sức chứa</p>
                    <p className="text-sm font-bold text-cyan-400">300</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">6</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Camera</p>
                    <p className="text-sm font-bold text-green-400">8/8</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Bình thường</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Bữa ăn tiếp:</span>
                    <span className="text-cyan-300">Trưa - 11:30</span>
                  </div>
                </div>
              </div>

              {/* Nhà bếp */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">NHÀ BẾP</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    HOẠT ĐỘNG
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">Nhân viên</p>
                    <p className="text-sm font-bold text-cyan-400">18</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">4</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Camera</p>
                    <p className="text-sm font-bold text-green-400">6/6</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Đang nấu ăn</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Vệ sinh:</span>
                    <span className="text-green-400">Đạt tiêu chuẩn</span>
                  </div>
                </div>
              </div>

              {/* Bệnh Xá */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">BỆNH XÁ</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    HOẠT ĐỘNG
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">Bệnh nhân</p>
                    <p className="text-sm font-bold text-cyan-400">35</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Bác sĩ</p>
                    <p className="text-sm font-bold text-amber-400">6</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Giường</p>
                    <p className="text-sm font-bold">50</p>
                  </div>
                </div>
                <div className="border-t border-slate-700/50 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Công suất:</span>
                    <span className="text-cyan-300 font-mono">35/50 (70%)</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Camera:</span>
                    <span className="text-green-400">10/10 hoạt động</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Trạng thái:</span>
                    <span className="text-green-400">Hoạt động 24/7</span>
                  </div>
                </div>
              </div>

              {/* KSAN */}
              <div className="p-3 bg-slate-800/40 rounded border border-red-900/50 hover-glow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">KSAN</span>
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    ỔN ĐỊNH
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase mb-2">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">P.Nhân</p>
                    <p className="text-sm font-bold text-cyan-400">82</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">15</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Phòng</p>
                    <p className="text-sm font-bold">40</p>
                  </div>
                </div>
                <div className="border-t border-red-900/30 pt-2 mt-2 space-y-1">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Công suất:</span>
                    <span className="text-cyan-300 font-mono">82/100 (82%)</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Loại:</span>
                    <span className="text-red-400">An ninh tối đa</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Camera:</span>
                    <span className="text-amber-400">14/16 hoạt động</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-slate-500">Cảnh báo:</span>
                    <span className="text-red-400">Phạm nhân nguy hiểm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Panel - Camera System */}
        <section className="col-span-6 row-span-1 neon-border bg-slate-900/60 p-3 rounded-lg">
          <h2 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-tighter">HỆ THỐNG CAMERA AN NINH</h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Cổng</span>
              <span className="text-[11px] font-mono text-green-400">8/8</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Khu A</span>
              <span className="text-[11px] font-mono text-green-400">48/48</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Khu B</span>
              <span className="text-[11px] font-mono text-amber-400">38/40</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Hội Trường</span>
              <span className="text-[11px] font-mono text-green-400">12/12</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Nhà ăn</span>
              <span className="text-[11px] font-mono text-green-400">8/8</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Nhà bếp</span>
              <span className="text-[11px] font-mono text-green-400">6/6</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">Bệnh Xá</span>
              <span className="text-[11px] font-mono text-green-400">10/10</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-800/40 rounded">
              <span className="text-[11px] font-bold text-slate-200">KSAN</span>
              <span className="text-[11px] font-mono text-amber-400">14/16</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-[10px] text-slate-600 flex justify-between px-2 uppercase font-mono">
        <span>Dữ liệu được mã hóa đa lớp AES-256</span>
        <span>Trực ban: Đại úy Nguyễn Văn A - MS: 9942</span>
        <span>Cấp độ bảo mật: Class-5 Top Secret</span>
      </footer>
    </div>
  );
}
