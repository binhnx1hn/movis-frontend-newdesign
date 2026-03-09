/**
 * Camera Status Interface
 */
export interface CameraStatus {
  id: string;
  sector: string;
  location: string;
  cameras: Array<'online' | 'offline' | 'warning'>;
}

/**
 * CameraSystem Component
 * Displays security camera system status across all sectors
 */
export const CameraSystem = () => {
  const sectors: CameraStatus[] = [
    {
      id: '1',
      sector: 'SECTOR_01',
      location: 'Cổng',
      cameras: ['online', 'online', 'online', 'online']
    },
    {
      id: '2',
      sector: 'SECTOR_02',
      location: 'Khu A',
      cameras: ['online', 'offline', 'online', 'online']
    },
    {
      id: '3',
      sector: 'SECTOR_03',
      location: 'Khu B',
      cameras: ['online', 'online', 'online', 'online']
    },
    {
      id: '4',
      sector: 'SECTOR_04',
      location: 'Sân bãi',
      cameras: ['online', 'online', 'warning', 'online']
    },
    {
      id: '5',
      sector: 'SECTOR_05',
      location: 'Bếp',
      cameras: ['online', 'online', 'online', 'online']
    },
    {
      id: '6',
      sector: 'SECTOR_06',
      location: 'Vòng ngoài',
      cameras: ['online', 'warning', 'online', 'warning']
    }
  ];

  const getCameraIndicatorClass = (status: 'online' | 'offline' | 'warning') => {
    switch (status) {
      case 'online':
        return 'bg-green-500 shadow-[0_0_5px_#22c55e]';
      case 'offline':
        return 'bg-red-500 shadow-[0_0_5px_#ef4444]';
      case 'warning':
        return 'bg-amber-500 shadow-[0_0_5px_#f59e0b]';
      default:
        return 'bg-slate-600';
    }
  };

  return (
    <section 
      className="col-span-6 row-span-2 neon-border bg-slate-900/60 p-4 rounded-lg"
      data-purpose="camera-system-status"
    >
      <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">
        HỆ THỐNG CAMERA AN NINH
      </h2>
      
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {sectors.map((sector) => (
          <div key={sector.id} className="flex items-center justify-between">
            <span className="text-[10px] font-mono">
              {sector.sector} ({sector.location})
            </span>
            <div className="flex gap-1">
              {sector.cameras.map((status, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${getCameraIndicatorClass(status)}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * DashboardFooter Component
 * Displays security information and duty officer details
 */
export const DashboardFooter = () => {
  return (
    <footer className="text-[10px] text-slate-600 flex justify-between px-2 uppercase font-mono">
      <span>Dữ liệu được mã hóa đa lớp AES-256</span>
      <span>Trực ban: Đại úy Nguyễn Văn A - MS: 9942</span>
      <span>Cấp độ bảo mật: Class-5 Top Secret</span>
    </footer>
  );
};
