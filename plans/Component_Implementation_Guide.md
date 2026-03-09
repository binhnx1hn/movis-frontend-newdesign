# 🧩 Component Implementation Guide
## Chi Tiết Triển Khai Từng Component

---

## 1. 🚨 AlertBanner Component

### File Structure
```
components/
└── AlertBanner/
    ├── AlertBanner.tsx
    ├── AlertBanner.module.css
    ├── AlertItem.tsx
    ├── AlertFilter.tsx
    └── index.ts
```

### Implementation

```typescript
// components/AlertBanner/AlertBanner.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X, Eye, Filter } from 'lucide-react';
import { Alert } from '@/types';
import { AlertItem } from './AlertItem';
import { AlertFilter } from './AlertFilter';
import { playAlertSound } from '@/utils/audio';

interface AlertBannerProps {
  alerts: Alert[];
  maxVisible?: number;
  onAlertClick?: (alert: Alert) => void;
  onDismiss?: (alertId: string) => void;
}

export const AlertBanner = ({ 
  alerts, 
  maxVisible = 3,
  onAlertClick,
  onDismiss 
}: AlertBannerProps) => {
  const [filter, setFilter] = useState<'all' | 'critical' | 'high' | 'medium'>('all');
  const [showFilter, setShowFilter] = useState(false);
  const previousAlertsRef = useRef<Alert[]>([]);

  useEffect(() => {
    // Detect new alerts and play sound
    const newAlerts = alerts.filter(
      alert => !previousAlertsRef.current.some(prev => prev.id === alert.id)
    );
    
    if (newAlerts.length > 0) {
      const criticalNew = newAlerts.find(a => a.type === 'critical');
      playAlertSound(criticalNew?.type || newAlerts[0].type);
    }
    
    previousAlertsRef.current = alerts;
  }, [alerts]);

  const filteredAlerts = alerts.filter(alert => 
    filter === 'all' ? true : alert.type === filter
  ).slice(0, maxVisible);

  const getSeverityColor = (type: string) => {
    switch (type) {
      case 'critical': return '#FF004D';
      case 'high': return '#FFB800';
      case 'medium': return '#00D9FF';
      default: return '#6B7A8F';
    }
  };

  return (
    <div className="alert-banner-container">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <AlertCircle className="w-6 h-6 text-cyber-blue" />
          </motion.div>
          <h2 className="text-xl font-orbitron text-cyber-blue">
            THÔNG BÁO KHẨN CẤP
          </h2>
          <span className="px-3 py-1 rounded-full bg-critical-red/20 text-critical-red text-sm font-mono">
            {alerts.length} cảnh báo
          </span>
        </div>
        
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="px-4 py-2 rounded-lg bg-dark-slate/80 border border-cyber-blue/30 
                     hover:border-cyber-blue hover:bg-dark-slate text-cyber-blue
                     transition-all duration-300 flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Lọc
        </button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilter && (
          <AlertFilter 
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        )}
      </AnimatePresence>

      {/* Alerts List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredAlerts.map((alert, index) => (
            <AlertItem
              key={alert.id}
              alert={alert}
              index={index}
              onClick={onAlertClick}
              onDismiss={onDismiss}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* View All Button */}
      {alerts.length > maxVisible && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 py-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30
                     hover:bg-cyber-blue/20 text-cyber-blue font-medium transition-all"
        >
          <Eye className="inline w-4 h-4 mr-2" />
          Xem tất cả {alerts.length} cảnh báo
        </motion.button>
      )}
    </div>
  );
};
```

```typescript
// components/AlertBanner/AlertItem.tsx
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, MapPin, User, X } from 'lucide-react';
import { Alert } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

interface AlertItemProps {
  alert: Alert;
  index: number;
  onClick?: (alert: Alert) => void;
  onDismiss?: (id: string) => void;
}

export const AlertItem = ({ alert, index, onClick, onDismiss }: AlertItemProps) => {
  const getSeverityColor = (type: string) => {
    switch (type) {
      case 'critical': return '#FF004D';
      case 'high': return '#FFB800';
      case 'medium': return '#00D9FF';
      default: return '#6B7A8F';
    }
  };

  const getStatusBadge = (status: string) => {
    const config = {
      processing: { text: 'Đang xử lý', color: '#FFB800' },
      controlled: { text: 'Đã kiểm soát', color: '#00D9FF' },
      resolved: { text: 'Đã giải quyết', color: '#00FF9D' },
    };
    return config[status] || config.processing;
  };

  const statusBadge = getStatusBadge(alert.status);
  const severityColor = getSeverityColor(alert.type);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: index * 0.1 }}
      className="alert-item glass-panel cursor-pointer"
      onClick={() => onClick?.(alert)}
      style={{
        borderLeft: `4px solid ${severityColor}`,
        boxShadow: `0 0 20px ${severityColor}40`,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              animate={{ 
                scale: alert.type === 'critical' ? [1, 1.2, 1] : 1,
                rotate: alert.type === 'critical' ? [0, 10, -10, 0] : 0,
              }}
              transition={{ 
                duration: 1, 
                repeat: alert.type === 'critical' ? Infinity : 0 
              }}
            >
              <AlertTriangle 
                className="w-5 h-5" 
                style={{ color: severityColor }}
              />
            </motion.div>
            
            <span className="font-mono text-sm" style={{ color: severityColor }}>
              {alert.type.toUpperCase()}
            </span>
            
            <span 
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{ 
                backgroundColor: `${statusBadge.color}20`,
                color: statusBadge.color 
              }}
            >
              {statusBadge.text}
            </span>
          </div>

          {/* Description */}
          <p className="text-white font-medium mb-3">
            {alert.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-neutral-gray">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatDistanceToNow(new Date(alert.timestamp), { 
                addSuffix: true,
                locale: vi 
              })}
            </div>
            
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {alert.zone} {alert.room && `- Buồng ${alert.room}`}
            </div>
            
            {alert.officer && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {alert.officer}
              </div>
            )}
          </div>
        </div>

        {/* Dismiss Button */}
        {onDismiss && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDismiss(alert.id);
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-neutral-gray hover:text-white" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
```

### CSS Styles

```css
/* components/AlertBanner/AlertBanner.module.css */
.alert-banner-container {
  @apply relative p-6 rounded-xl;
  background: rgba(26, 35, 50, 0.95);
  border: 1px solid rgba(0, 217, 255, 0.3);
  backdrop-filter: blur(10px);
}

.alert-item {
  @apply p-4 rounded-lg transition-all duration-300;
  background: rgba(13, 27, 42, 0.8);
  border: 1px solid rgba(0, 217, 255, 0.2);
}

.alert-item:hover {
  background: rgba(13, 27, 42, 0.95);
  border-color: rgba(0, 217, 255, 0.5);
  transform: translateX(4px);
}

/* Scanning line effect */
.alert-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--cyber-blue),
    transparent
  );
  animation: scan-horizontal 2s linear infinite;
}

@keyframes scan-horizontal {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

---

## 2. 🗺️ InteractivePrisonMap Component

### File Structure
```
components/
└── PrisonMap/
    ├── InteractivePrisonMap.tsx
    ├── ZoneCard.tsx
    ├── ZoneDetailModal.tsx
    ├── MapControls.tsx
    ├── MetricsOverlay.tsx
    └── index.ts
```

### Implementation

```typescript
// components/PrisonMap/InteractivePrisonMap.tsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, Search } from 'lucide-react';
import { Zone } from '@/types';
import { ZoneCard } from './ZoneCard';
import { ZoneDetailModal } from './ZoneDetailModal';
import { MetricsOverlay } from './MetricsOverlay';

interface InteractivePrisonMapProps {
  zones: Zone[];
  onZoneClick?: (zone: Zone) => void;
  showMetrics?: boolean;
  highlightedZone?: string;
}

export const InteractivePrisonMap = ({ 
  zones,
  onZoneClick,
  showMetrics = true,
  highlightedZone 
}: InteractivePrisonMapProps) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [zoom, setZoom] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);

  const handleZoneClick = (zone: Zone) => {
    setSelectedZone(zone);
    onZoneClick?.(zone);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  const filteredZones = zones.filter(zone =>
    zone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate map layout positions
  const getZoneStyle = (zone: Zone) => ({
    gridColumn: `span ${zone.size.width}`,
    gridRow: `span ${zone.size.height}`,
  });

  return (
    <div className="prison-map-container">
      {/* Header with Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-orbitron text-cyber-blue">
            BẢN ĐỒ SỐ TRẠI GIAM
          </h2>
          
          {showMetrics && <MetricsOverlay zones={zones} />}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-gray" />
          <input
            type="text"
            placeholder="Tìm kiếm khu vực..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg bg-dark-slate border border-cyber-blue/30
                     text-white placeholder-neutral-gray focus:border-cyber-blue
                     focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Map Grid */}
      <div 
        ref={mapRef}
        className="map-viewport relative"
        style={{ transform: `scale(${zoom})` }}
      >
        {/* Gate/Entrance */}
        <div className="gate-section">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-4 bg-dark-slate/80 border-2 border-cyber-blue/50 rounded-lg"
          >
            <h3 className="text-xl font-orbitron text-cyber-blue">🏛️ CỔNG CHÍNH</h3>
          </motion.div>
        </div>

        {/* Zone Grid */}
        <div className="zone-grid">
          {filteredZones.map((zone, index) => (
            <ZoneCard
              key={zone.id}
              zone={zone}
              index={index}
              onClick={handleZoneClick}
              isHighlighted={zone.id === highlightedZone}
            />
          ))}
        </div>

        {/* Grid Background Pattern */}
        <div className="grid-pattern" />
      </div>

      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button onClick={handleZoomIn} className="control-btn">
          <ZoomIn className="w-5 h-5" />
        </button>
        <button onClick={handleResetZoom} className="control-btn">
          <Maximize2 className="w-5 h-5" />
        </button>
        <button onClick={handleZoomOut} className="control-btn">
          <ZoomOut className="w-5 h-5" />
        </button>
      </div>

      {/* Zone Detail Modal */}
      {selectedZone && (
        <ZoneDetailModal
          zone={selectedZone}
          onClose={() => setSelectedZone(null)}
        />
      )}
    </div>
  );
};
```

```typescript
// components/PrisonMap/ZoneCard.tsx
import { motion } from 'framer-motion';
import { Users, Camera, DoorOpen, AlertTriangle, Thermometer } from 'lucide-react';
import { Zone } from '@/types';

interface ZoneCardProps {
  zone: Zone;
  index: number;
  onClick: (zone: Zone) => void;
  isHighlighted?: boolean;
}

export const ZoneCard = ({ zone, index, onClick, isHighlighted }: ZoneCardProps) => {
  const getStatusColor = () => {
    const occupancy = (zone.current / zone.capacity) * 100;
    if (occupancy >= 95) return '#FF004D';  // Critical Red
    if (occupancy >= 80) return '#FFB800';  // Warning Amber
    return '#00FF9D';  // Normal Green
  };

  const getStatusGlow = () => {
    const color = getStatusColor();
    return `0 0 20px ${color}60, 0 0 40px ${color}40`;
  };

  const occupancyRate = ((zone.current / zone.capacity) * 100).toFixed(0);
  const cameraRate = ((zone.cameras.active / zone.cameras.total) * 100).toFixed(0);
  const statusColor = getStatusColor();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(zone)}
      className={`zone-card ${isHighlighted ? 'highlighted' : ''}`}
      style={{
        borderColor: statusColor,
        boxShadow: getStatusGlow(),
      }}
    >
      {/* Zone Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-orbitron text-white mb-1">
            {zone.name}
          </h3>
          <span className="text-xs text-neutral-gray font-mono">
            {zone.type.toUpperCase()}
          </span>
        </div>
        
        {zone.alerts && zone.alerts.length > 0 && (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center gap-1 px-2 py-1 rounded bg-critical-red/20"
          >
            <AlertTriangle className="w-4 h-4 text-critical-red" />
            <span className="text-xs text-critical-red font-mono">
              {zone.alerts.length}
            </span>
          </motion.div>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-2 mb-3">
        {/* Population */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm text-neutral-gray">Phạm nhân</span>
          </div>
          <span className="font-mono text-white">
            {zone.current}/{zone.capacity}
          </span>
        </div>

        {/* Cameras */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm text-neutral-gray">Camera</span>
          </div>
          <span className="font-mono text-white">
            {zone.cameras.active}/{zone.cameras.total}
          </span>
        </div>

        {/* Rooms */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DoorOpen className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm text-neutral-gray">Phòng</span>
          </div>
          <span className="font-mono text-white">
            {zone.rooms.occupied}/{zone.rooms.total}
          </span>
        </div>

        {/* Temperature */}
        {zone.temperature && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm text-neutral-gray">Nhiệt độ</span>
            </div>
            <span className="font-mono text-white">
              {zone.temperature}°C
            </span>
          </div>
        )}
      </div>

      {/* Progress Bars */}
      <div className="space-y-2">
        {/* Occupancy */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-neutral-gray">Tỷ lệ lấp đầy</span>
            <span 
              className="font-mono font-medium"
              style={{ color: statusColor }}
            >
              {occupancyRate}%
            </span>
          </div>
          <div className="progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${occupancyRate}%` }}
              transition={{ duration: 1, delay: index * 0.05 }}
              className="progress-fill"
              style={{ 
                backgroundColor: statusColor,
                boxShadow: `0 0 10px ${statusColor}80`
              }}
            />
          </div>
        </div>

        {/* Camera Status */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-neutral-gray">Camera hoạt động</span>
            <span className="font-mono text-cyber-blue">
              {cameraRate}%
            </span>
          </div>
          <div className="progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${cameraRate}%` }}
              transition={{ duration: 1, delay: index * 0.05 }}
              className="progress-fill"
              style={{ 
                backgroundColor: '#00D9FF',
                boxShadow: '0 0 10px #00D9FF80'
              }}
            />
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="zone-card-overlay">
        <span className="text-sm font-medium">Click để xem chi tiết</span>
      </div>
    </motion.div>
  );
};
```

### CSS Styles

```css
/* components/PrisonMap/InteractivePrisonMap.module.css */
.prison-map-container {
  @apply relative p-6 rounded-xl;
  background: rgba(10, 22, 40, 0.95);
  border: 1px solid rgba(0, 217, 255, 0.3);
}

.map-viewport {
  @apply transition-transform duration-300 ease-out;
  transform-origin: center;
}

.zone-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.zone-card {
  @apply relative p-4 rounded-lg cursor-pointer transition-all duration-300;
  background: rgba(26, 35, 50, 0.8);
  border: 2px solid;
  backdrop-filter: blur(10px);
}

.zone-card.highlighted {
  @apply ring-4 ring-electric-cyan ring-opacity-50;
  animation: highlight-pulse 2s ease-in-out infinite;
}

@keyframes highlight-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.zone-card-overlay {
  @apply absolute inset-0 flex items-center justify-center rounded-lg;
  @apply opacity-0 hover:opacity-100 transition-opacity duration-300;
  background: rgba(0, 217, 255, 0.1);
  backdrop-filter: blur(5px);
}

.progress-bar {
  @apply relative h-2 rounded-full overflow-hidden;
  background: rgba(107, 122, 143, 0.2);
}

.progress-fill {
  @apply h-full rounded-full transition-all duration-500;
}

.grid-pattern {
  @apply absolute inset-0 pointer-events-none;
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

.zoom-controls {
  @apply absolute bottom-6 right-6 flex flex-col gap-2;
}

.control-btn {
  @apply p-3 rounded-lg bg-dark-slate/80 border border-cyber-blue/30;
  @apply hover:border-cyber-blue hover:bg-dark-slate text-cyber-blue;
  @apply transition-all duration-300;
}

.control-btn:hover {
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
}
```

---

## 3. 📊 Chart Components

### PopulationChart Implementation

```typescript
// components/Charts/PopulationChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ZonePopulation } from '@/types';

interface PopulationChartProps {
  data: ZonePopulation[];
}

export const PopulationChart = ({ data }: PopulationChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;

    return (
      <div className="glass-panel p-4">
        <p className="font-orbitron text-cyber-blue mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-neutral-gray">{entry.name}:</span>
            <span className="font-mono text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="chart-container">
      <h3 className="text-xl font-orbitron text-cyber-blue mb-4">
        BIỂU ĐỒ QUÂN SỐ THEO KHU VỰC
      </h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barGap={8}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(0, 217, 255, 0.1)" 
          />
          <XAxis 
            dataKey="zone" 
            stroke="#6B7A8F"
            style={{ fontFamily: 'JetBrains Mono' }}
          />
          <YAxis 
            stroke="#6B7A8F"
            style={{ fontFamily: 'JetBrains Mono' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ 
              fontFamily: 'Inter',
              color: '#6B7A8F' 
            }}
          />
          <Bar 
            dataKey="inmates" 
            fill="#00D9FF" 
            name="Phạm nhân"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="capacity" 
            fill="#6B7A8F" 
            name="Công suất"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="officers" 
            fill="#00FF9D" 
            name="Cán bộ"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
```

---

## 4. 💻 Widget Components

### ServerStatusWidget Implementation

```typescript
// components/Widgets/ServerStatusWidget.tsx
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Activity, AlertCircle } from 'lucide-react';
import { ServerMetrics } from '@/types';

interface ServerStatusWidgetProps {
  servers: ServerMetrics[];
  autoRefresh?: boolean;
}

export const ServerStatusWidget = ({ servers, autoRefresh = true }: ServerStatusWidgetProps) => {
  const getStatusColor = (value: number) => {
    if (value >= 90) return '#FF004D';
    if (value >= 75) return '#FFB800';
    return '#00FF9D';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '🟢';
      case 'warning': return '🟡';
      case 'critical': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-orbitron text-cyber-blue flex items-center gap-2">
          <Server className="w-5 h-5" />
          HỆ THỐNG SERVERS
        </h3>
        {autoRefresh && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Activity className="w-4 h-4 text-cyber-blue" />
          </motion.div>
        )}
      </div>

      <div className="space-y-3">
        {servers.map((server, index) => (
          <motion.div
            key={server.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="server-card glass-panel p-3"
          >
            {/* Server Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{getStatusIcon(server.status)}</span>
                <h4 className="font-medium text-white">{server.name}</h4>
              </div>
              <span className="text-xs text-neutral-gray font-mono">
                {server.type.toUpperCase()}
              </span>
            </div>

            {/* Metrics */}
            <div className="space-y-2">
              {/* CPU */}
              <MetricBar
                label="CPU"
                value={server.cpu}
                color={getStatusColor(server.cpu)}
                icon={<Cpu className="w-3 h-3" />}
              />

              {/* RAM */}
              <MetricBar
                label="RAM"
                value={server.ram}
                color={getStatusColor(server.ram)}
                icon={<HardDrive className="w-3 h-3" />}
              />

              {/* Disk */}
              <MetricBar
                label="Disk"
                value={server.disk}
                color={getStatusColor(server.disk)}
                icon={<HardDrive className="w-3 h-3" />}
              />
            </div>

            {/* Alerts */}
            {server.alerts && server.alerts.length > 0 && (
              <div className="mt-3 pt-3 border-t border-cyber-blue/20">
                {server.alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-warning-amber">
                    <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Metric Bar Component
const MetricBar = ({ label, value, color, icon }) => (
  <div>
    <div className="flex items-center justify-between text-xs mb-1">
      <div className="flex items-center gap-1 text-neutral-gray">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-mono" style={{ color }}>
        {value}%
      </span>
    </div>
    <div className="h-1.5 rounded-full bg-dark-slate overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="h-full rounded-full"
        style={{ 
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}80`
        }}
      />
    </div>
  </div>
);
```

---

## 🎨 Global Styles

```css
/* src/styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colors */
  --cyber-blue: #00D9FF;
  --electric-cyan: #00FFF7;
  --neon-green: #00FF9D;
  --deep-navy: #0A1628;
  --dark-slate: #1A2332;
  --warning-amber: #FFB800;
  --critical-red: #FF004D;
  --neutral-gray: #6B7A8F;
  
  /* Fonts */
  --font-header: 'Orbitron', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

body {
  @apply bg-deep-navy text-white;
  font-family: var(--font-body);
}

.font-orbitron {
  font-family: var(--font-header);
}

.font-mono {
  font-family: var(--font-mono);
}

/* Glass Morphism */
.glass-panel {
  background: rgba(26, 35, 50, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 217, 255, 0.3);
}

/* Glow Effects */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.6),
              0 0 40px rgba(0, 217, 255, 0.4);
}

.glow-green {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.6),
              0 0 40px rgba(0, 255, 157, 0.4);
}

.glow-red {
  box-shadow: 0 0 20px rgba(255, 0, 77, 0.6),
              0 0 40px rgba(255, 0, 77, 0.4);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(26, 35, 50, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 217, 255, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 217, 255, 0.8);
}
```

---

**Document Status**: ✅ Ready for Development  
**Version**: 1.0  
**Last Updated**: 2026-03-09
