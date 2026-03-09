/**
 * Area Population Data Interface
 */
export interface AreaPopulation {
  id: string;
  name: string;
  status: 'stable' | 'checking' | 'alert';
  inmates: number;
  officers: number;
  rooms: number;
}

/**
 * PopulationStats Component
 * Displays population statistics by area
 */
export const PopulationStats = () => {
  const areas: AreaPopulation[] = [
    {
      id: 'a',
      name: 'PHÂN KHU A',
      status: 'stable',
      inmates: 450,
      officers: 32,
      rooms: 120
    },
    {
      id: 'b',
      name: 'PHÂN KHU B',
      status: 'checking',
      inmates: 380,
      officers: 28,
      rooms: 100
    },
    {
      id: 'c',
      name: 'PHÂN KHU C (ĐẶC BIỆT)',
      status: 'stable',
      inmates: 120,
      officers: 45,
      rooms: 60
    }
  ];

  const getStatusStyles = (status: AreaPopulation['status']) => {
    switch (status) {
      case 'stable':
        return { text: 'ỔN ĐỊNH', color: 'text-green-400' };
      case 'checking':
        return { text: 'CHỜ KIỂM TRA', color: 'text-amber-400' };
      case 'alert':
        return { text: 'CẢNH BÁO', color: 'text-red-400' };
    }
  };

  return (
    <div 
      className="flex-[2] neon-border bg-slate-900/60 p-4 rounded-lg flex flex-col"
      data-purpose="population-stats"
    >
      <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">
        QUÂN SỐ THEO KHU VỰC
      </h2>
      
      <div className="space-y-4 overflow-y-auto pr-2 flex-grow custom-scrollbar">
        {areas.map((area) => {
          const statusStyle = getStatusStyles(area.status);
          return (
            <div 
              key={area.id}
              className="p-3 bg-slate-800/40 rounded border border-slate-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold">{area.name}</span>
                <span className={`text-[10px] ${statusStyle.color}`}>
                  {statusStyle.text}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-[9px] uppercase">
                <div className="bg-cyan-900/30 p-1 rounded">
                  <p className="text-slate-400">P.Nhân</p>
                  <p className="text-sm font-bold text-cyan-400">{area.inmates}</p>
                </div>
                <div className="bg-amber-900/30 p-1 rounded">
                  <p className="text-slate-400">Cán Bộ</p>
                  <p className="text-sm font-bold text-amber-400">{area.officers}</p>
                </div>
                <div className="bg-slate-700/50 p-1 rounded">
                  <p className="text-slate-400">Phòng</p>
                  <p className="text-sm font-bold">{area.rooms}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * CanteenManagement Component
 * Displays canteen inventory and transactions
 */
export const CanteenManagement = () => {
  return (
    <div 
      className="flex-1 neon-border bg-slate-900/60 p-4 rounded-lg"
      data-purpose="canteen-management"
    >
      <h2 className="text-xs font-bold text-cyan-400 mb-4 uppercase tracking-tighter">
        QUẢN LÝ CANTEEN
      </h2>
      
      <div className="space-y-3">
        {/* Inventory */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span>Nhu yếu phẩm tồn kho</span>
            <span className="text-cyan-400">82%</span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-cyan-500 h-full w-[82%]" />
          </div>
        </div>
        
        {/* Transactions */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span>Giao dịch trong ngày</span>
            <span className="text-amber-400">1,450 lượt</span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[65%]" />
          </div>
        </div>
        
        {/* Report Button */}
        <button className="w-full mt-2 py-1 bg-cyan-500/10 border border-cyan-500/50 text-[10px] hover:bg-cyan-500/20 transition-colors uppercase font-bold tracking-widest rounded">
          XUẤT BÁO CÁO NHẬP KHO
        </button>
      </div>
    </div>
  );
};

/**
 * RightSidebar Component
 * Contains Population Stats and Canteen Management
 */
export const RightSidebar = () => {
  return (
    <section className="col-span-3 row-span-6 flex flex-col gap-4">
      <PopulationStats />
      <CanteenManagement />
    </section>
  );
};
