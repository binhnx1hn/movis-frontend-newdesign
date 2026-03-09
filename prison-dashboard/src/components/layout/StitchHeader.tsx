import { useEffect, useState } from 'react';

/**
 * StitchHeader Component
 * Header component from Stitch design with system status and real-time clock
 */
export const StitchHeader = () => {
  const [currentTime, setCurrentTime] = useState<string>('--:--:--');

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
    <header 
      className="flex justify-between items-center px-6 py-3 neon-border bg-slate-900/80 backdrop-blur-md rounded-lg"
      data-purpose="top-navigation"
    >
      {/* Left side - Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/20 rounded-full border border-cyan-500">
          <svg 
            className="w-6 h-6 text-cyan-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-widest text-cyan-400 uppercase neon-text-cyan">
            Hệ Thống Giám Sát Trại Giam Trung Tâm
          </h1>
          <p className="text-xs text-slate-400">
            TRẠM ĐIỀU KHIỂN CHIẾN THUẬT V.2.4.0
          </p>
        </div>
      </div>

      {/* Right side - Status and Clock */}
      <div className="flex gap-8 text-right">
        <div data-purpose="status-indicator">
          <p className="text-[10px] text-slate-500 uppercase">
            Trạng Thái Hệ Thống
          </p>
          <p className="text-sm font-semibold text-green-400">
            HOẠT ĐỘNG
          </p>
        </div>
        <div data-purpose="clock">
          <p className="text-[10px] text-slate-500 uppercase">
            Thời Gian Hệ Thống
          </p>
          <p className="text-sm font-mono font-bold text-cyan-400">
            {currentTime}
          </p>
        </div>
      </div>
    </header>
  );
};
