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
            <p className="text-xs text-slate-400">TRẠM ĐIỀU KHIỂN CHIẾN THUẬT V.2.4.0</p>
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
        {/* Left Sidebar - Alerts & Resources */}
        <section className="col-span-3 row-span-6 flex flex-col gap-4">
          {/* Emergency Alerts */}
          <div className="flex-1 neon-border bg-slate-900/60 p-4 rounded-lg overflow-hidden flex flex-col">
            <h2 className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full alert-pulse"></span>
              THÔNG BÁO KHẨN CẤP
            </h2>
            <div className="flex-grow space-y-3 overflow-y-auto pr-2 custom-scrollbar">
              {/* Alert Item 1 */}
              <div className="p-3 border-l-2 border-red-600 bg-red-950/20 rounded-r">
                <div className="flex justify-between text-[10px] text-red-400 mb-1">
                  <span>KHU A - TẦNG 2</span>
                  <span>10:45:12</span>
                </div>
                <p className="text-xs font-semibold">CẢNH BÁO: Rung chấn bất thường tại tường bao số 4</p>
              </div>
              {/* Alert Item 2 */}
              <div className="p-3 border-l-2 border-amber-500 bg-amber-950/20 rounded-r">
                <div className="flex justify-between text-[10px] text-amber-400 mb-1">
                  <span>KHU B - CỔNG CHÍNH</span>
                  <span>10:42:05</span>
                </div>
                <p className="text-xs font-semibold">THÔNG BÁO: Phát hiện thiết bị bay (Drone) lạ gần khu vực</p>
              </div>
              {/* Alert Item 3 */}
              <div className="p-3 border-l-2 border-blue-500 bg-blue-950/20 rounded-r">
                <div className="flex justify-between text-[10px] text-blue-400 mb-1">
                  <span>HỆ THỐNG</span>
                  <span>10:30:00</span>
                </div>
                <p className="text-xs font-semibold">KIỂM TRA: Bắt đầu quy trình kiểm tra quân số định kỳ</p>
              </div>
            </div>
          </div>

          {/* Server Resources */}
          <div className="h-48 neon-border bg-slate-900/60 p-4 rounded-lg">
            <h2 className="text-xs font-bold text-cyan-400 mb-4 tracking-tighter uppercase">TÀI NGUYÊN SERVER</h2>
            <div className="flex justify-around items-center h-24">
              {/* CPU Gauge */}
              <div className="text-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4" />
                    <circle className="text-cyan-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="44" strokeWidth="4" />
                  </svg>
                  <span className="absolute text-[10px] font-bold">75%</span>
                </div>
                <span className="text-[10px] uppercase text-slate-400 mt-1 block">CPU</span>
              </div>
              {/* RAM Gauge */}
              <div className="text-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4" />
                    <circle className="text-amber-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="100" strokeWidth="4" />
                  </svg>
                  <span className="absolute text-[10px] font-bold">42%</span>
                </div>
                <span className="text-[10px] uppercase text-slate-400 mt-1 block">RAM</span>
              </div>
              {/* DISK Gauge */}
              <div className="text-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4" />
                    <circle className="text-green-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="140" strokeWidth="4" />
                  </svg>
                  <span className="absolute text-[10px] font-bold">20%</span>
                </div>
                <span className="text-[10px] uppercase text-slate-400 mt-1 block">HDD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Center Panel - Digital Map */}
        <section className="col-span-6 row-span-4 neon-border bg-slate-900/40 rounded-lg relative overflow-hidden shadow-[inset_0_0_30px_rgba(34,211,238,0.15)]">
          <div className="scan-line"></div>
          
          {/* Map Header Info */}
          <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-3 rounded border border-cyan-500/30 backdrop-blur-sm">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">BẢN ĐỒ SỐ TỔNG QUAN</h2>
            <div className="grid grid-cols-2 gap-4 text-[10px]">
              <div>
                <p className="text-slate-500">Diện tích:</p>
                <p className="text-cyan-300 font-mono">50,000 m²</p>
              </div>
              <div>
                <p className="text-slate-500">Tổng phạm nhân:</p>
                <p className="text-amber-400 font-mono">1,200 / 1,500</p>
              </div>
            </div>
          </div>

          {/* Map Canvas Area */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                alt="Prison Map"
                className="w-full h-full object-cover"
                src="/BDS.png"
              />
              <div className="absolute inset-0 pointer-events-none">
                {/* Wireframe labels as HTML overlays */}
                <div className="absolute top-[35%] left-[30%] text-cyan-400 font-mono text-[10px] neon-text-cyan">KHU GIAM A</div>
                <div className="absolute top-[25%] right-[30%] text-cyan-400 font-mono text-[10px] neon-text-cyan">KHU GIAM B</div>
                <div className="absolute top-[20%] left-[20%] text-cyan-400 font-mono text-[10px] neon-text-cyan">
                  <span className="block w-3 h-3 border border-cyan-500 bg-cyan-500/20 mb-1"></span>
                  TOWER_01
                </div>
                <div className="absolute bottom-[20%] right-[20%] text-cyan-400 font-mono text-[10px] neon-text-cyan">
                  <span className="block w-3 h-3 border border-cyan-500 bg-cyan-500/20"></span>
                </div>
                <div className="absolute bottom-[20%] left-[20%] text-cyan-400 font-mono text-[10px] neon-text-cyan">
                  <span className="block w-3 h-3 border border-cyan-500 bg-cyan-500/20"></span>
                </div>
                <div className="absolute top-[15%] right-[20%] text-cyan-400 font-mono text-[10px] neon-text-cyan">
                  <span className="block w-3 h-3 border border-cyan-500 bg-cyan-500/20"></span>
                </div>
                {/* Perimeter simulation */}
                <div className="absolute inset-10 border border-cyan-500/30 border-dashed"></div>
              </div>
            </div>
          </div>

          {/* Map Legend Overlay */}
          <div className="absolute bottom-4 right-4 z-10 space-y-2">
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
          </div>
        </section>

        {/* Right Sidebar - Population & Canteen */}
        <section className="col-span-3 row-span-6 flex flex-col gap-4">
          {/* Population by Area */}
          <div className="flex-[2] neon-border bg-slate-900/60 p-4 rounded-lg flex flex-col">
            <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">QUÂN SỐ THEO KHU VỰC</h2>
            <div className="space-y-4 overflow-y-auto pr-2 flex-grow custom-scrollbar">
              {/* Area Card: Khu A */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">PHÂN KHU A</span>
                  <span className="text-[10px] text-green-400">ỔN ĐỊNH</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase">
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
              </div>

              {/* Area Card: Khu B */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">PHÂN KHU B</span>
                  <span className="text-[10px] text-amber-400">CHỜ KIỂM TRA</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase">
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
              </div>

              {/* Area Card: Khu C */}
              <div className="p-3 bg-slate-800/40 rounded border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold">PHÂN KHU C (ĐẶC BIỆT)</span>
                  <span className="text-[10px] text-cyan-400">ỔN ĐỊNH</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase">
                  <div className="bg-cyan-900/30 p-1 rounded">
                    <p className="text-slate-400">P.Nhân</p>
                    <p className="text-sm font-bold text-cyan-400">120</p>
                  </div>
                  <div className="bg-amber-900/30 p-1 rounded">
                    <p className="text-slate-400">Cán Bộ</p>
                    <p className="text-sm font-bold text-amber-400">45</p>
                  </div>
                  <div className="bg-slate-700/50 p-1 rounded">
                    <p className="text-slate-400">Phòng</p>
                    <p className="text-sm font-bold">60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Canteen Management */}
          <div className="flex-1 neon-border bg-slate-900/60 p-4 rounded-lg">
            <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">QUẢN LÝ CANTEEN</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span>Nhu yếu phẩm tồn kho</span>
                  <span className="text-cyan-400">82%</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[82%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span>Giao dịch trong ngày</span>
                  <span className="text-amber-400">1,450 lượt</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[65%]"></div>
                </div>
              </div>
              <button className="w-full mt-2 py-1 bg-cyan-500/10 border border-cyan-500/50 text-[10px] hover:bg-cyan-500/20 transition-colors uppercase font-bold tracking-widest">
                XUẤT BÁO CÁO NHẬP KHO
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Panel - Camera System */}
        <section className="col-span-6 row-span-2 neon-border bg-slate-900/60 p-4 rounded-lg">
          <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">HỆ THỐNG CAMERA AN NINH</h2>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {/* Sector 1 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_01 (Cổng)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></span>
              </div>
            </div>
            {/* Sector 2 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_02 (Khu A)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
            {/* Sector 3 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_03 (Khu B)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
            {/* Sector 4 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_04 (Sân bãi)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
            {/* Sector 5 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_05 (Bếp)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </div>
            {/* Sector 6 */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono">SECTOR_06 (Vòng ngoài)</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
              </div>
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
