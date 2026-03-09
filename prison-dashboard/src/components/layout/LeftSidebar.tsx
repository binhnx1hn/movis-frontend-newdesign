/**
 * Emergency Alert Types
 */
export interface EmergencyAlert {
  id: string;
  location: string;
  time: string;
  message: string;
  severity: 'critical' | 'warning' | 'info';
}

/**
 * EmergencyAlerts Component
 * Displays real-time emergency alerts from the prison system
 */
export const EmergencyAlerts = () => {
  // Mock data - replace with real data from your API
  const alerts: EmergencyAlert[] = [
    {
      id: '1',
      location: 'KHU A - TẦNG 2',
      time: '10:45:12',
      message: 'CẢNH BÁO: Rung chấn bất thường tại tường bao số 4',
      severity: 'critical'
    },
    {
      id: '2',
      location: 'KHU B - CỔNG CHÍNH',
      time: '10:42:05',
      message: 'THÔNG BÁO: Phát hiện thiết bị bay (Drone) lạ gần khu vực',
      severity: 'warning'
    },
    {
      id: '3',
      location: 'HỆ THỐNG',
      time: '10:30:00',
      message: 'KIỂM TRA: Bắt đầu quy trình kiểm tra quân số định kỳ',
      severity: 'info'
    }
  ];

  const getSeverityStyles = (severity: EmergencyAlert['severity']) => {
    switch (severity) {
      case 'critical':
        return {
          borderColor: 'border-red-600',
          bgColor: 'bg-red-950/20',
          textColor: 'text-red-400'
        };
      case 'warning':
        return {
          borderColor: 'border-amber-500',
          bgColor: 'bg-amber-950/20',
          textColor: 'text-amber-400'
        };
      case 'info':
        return {
          borderColor: 'border-blue-500',
          bgColor: 'bg-blue-950/20',
          textColor: 'text-blue-400'
        };
    }
  };

  return (
    <div 
      className="flex-1 neon-border bg-slate-900/60 p-4 rounded-lg overflow-hidden flex flex-col"
      data-purpose="emergency-alerts"
    >
      <h2 className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full alert-pulse" />
        THÔNG BÁO KHẨN CẤP
      </h2>
      
      <div className="flex-grow space-y-3 overflow-y-auto pr-2 custom-scrollbar">
        {alerts.map((alert) => {
          const styles = getSeverityStyles(alert.severity);
          return (
            <div 
              key={alert.id}
              className={`p-3 border-l-2 ${styles.borderColor} ${styles.bgColor} rounded-r`}
            >
              <div className={`flex justify-between text-[10px] ${styles.textColor} mb-1`}>
                <span>{alert.location}</span>
                <span>{alert.time}</span>
              </div>
              <p className="text-xs font-semibold">{alert.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * ServerResources Component
 * Displays server resource usage (CPU, RAM, HDD)
 */
export const ServerResources = () => {
  const resources = [
    { label: 'CPU', value: 75, color: 'text-cyan-500', offset: 44 },
    { label: 'RAM', value: 42, color: 'text-amber-500', offset: 100 },
    { label: 'HDD', value: 20, color: 'text-green-500', offset: 140 }
  ];

  return (
    <div 
      className="h-48 neon-border bg-slate-900/60 p-4 rounded-lg"
      data-purpose="server-resources"
    >
      <h2 className="text-xs font-bold text-cyan-400 mb-4 tracking-tighter uppercase">
        TÀI NGUYÊN SERVER
      </h2>
      
      <div className="flex justify-around items-center h-24">
        {resources.map((resource) => (
          <div key={resource.label} className="text-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-slate-800"
                  cx="32"
                  cy="32"
                  fill="transparent"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <circle
                  className={resource.color}
                  cx="32"
                  cy="32"
                  fill="transparent"
                  r="28"
                  stroke="currentColor"
                  strokeDasharray="175"
                  strokeDashoffset={resource.offset}
                  strokeWidth="4"
                />
              </svg>
              <span className="absolute text-[10px] font-bold">
                {resource.value}%
              </span>
            </div>
            <span className="text-[10px] uppercase text-slate-400 mt-1 block">
              {resource.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * LeftSidebar Component
 * Contains Emergency Alerts and Server Resources
 */
export const LeftSidebar = () => {
  return (
    <section className="col-span-3 row-span-6 flex flex-col gap-4">
      <EmergencyAlerts />
      <ServerResources />
    </section>
  );
};
