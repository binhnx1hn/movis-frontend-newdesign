# 🗺️ Kế Hoạch Kỹ Thuật: Bản Đồ Số Trại Giam - Sci-Fi Dashboard

## 📋 TỔNG QUAN DỰ ÁN

### Mục tiêu
Xây dựng một **bản đồ số interactive** cho hệ thống quản lý trại giam với giao diện **sci-fi/futuristic** tương tự hình mẫu [`6150092258628275799.jpg`](../6150092258628275799.jpg:1), kết hợp với thiết kế chi tiết từ [`Dashboard_Thong_Ke_Trai_Giam.md`](../Dashboard_Thong_Ke_Trai_Giam.md:1).

### Đặc điểm chính
- 🎨 **Giao diện**: Dark theme với hiệu ứng neon cyan/blue glow
- 🗺️ **Bản đồ tương tác**: Sơ đồ trại giam với realtime metrics
- 📊 **Visualization**: Biểu đồ, charts, và số liệu thống kê động
- ⚡ **Realtime**: WebSocket cho cập nhật trực tiếp
- 🔐 **Phân quyền**: Multi-role access control
- 📱 **Responsive**: Desktop, tablet, mobile

---

## 🏗️ KIẾN TRÚC HỆ THỐNG

### Tech Stack Đề Xuất

#### Frontend
```
┌─────────────────────────────────────────────────┐
│  PRESENTATION LAYER                             │
├─────────────────────────────────────────────────┤
│  • React 18+ (với TypeScript)                   │
│  • Vite (build tool - nhanh hơn CRA)           │
│  • React Router v6 (routing)                    │
│  • Zustand/Redux Toolkit (state management)     │
└─────────────────────────────────────────────────┘
```

**Lý do chọn React + Vite:**
- Dự án đã có sẵn skills về React components
- Vite build nhanh, HMR tốt
- TypeScript cho type safety
- Ecosystem phong phú

#### UI Framework & Components
```
┌─────────────────────────────────────────────────┐
│  UI COMPONENT LIBRARY                           │
├─────────────────────────────────────────────────┤
│  • shadcn/ui (headless components)              │
│  • Tailwind CSS (styling)                       │
│  • Radix UI (accessible primitives)             │
│  • Framer Motion (animations)                   │
└─────────────────────────────────────────────────┘
```

**Lý do:**
- shadcn/ui: Customizable, không vendor lock-in
- Tailwind: Rapid styling, consistent design
- Radix UI: Accessibility built-in
- Framer Motion: Smooth animations cho sci-fi effects

#### Data Visualization
```
┌─────────────────────────────────────────────────┐
│  VISUALIZATION & MAPPING                        │
├─────────────────────────────────────────────────┤
│  • D3.js v7 (custom visualizations)             │
│  • Recharts (declarative charts)                │
│  • React Flow (interactive diagrams)            │
│  • Leaflet/Mapbox (nếu cần bản đồ địa lý)      │
│  • Three.js + React Three Fiber (3D effects)    │
└─────────────────────────────────────────────────┘
```

**Lý do:**
- D3.js: Powerful, flexible cho custom viz
- Recharts: Easy to use, React-friendly
- React Flow: Perfect cho sơ đồ interactive
- Three.js: 3D effects cho sci-fi aesthetic

#### Realtime & Networking
```
┌─────────────────────────────────────────────────┐
│  REALTIME COMMUNICATION                         │
├─────────────────────────────────────────────────┤
│  • Socket.io Client (WebSocket)                 │
│  • React Query/TanStack Query (data fetching)   │
│  • Axios (HTTP client)                          │
│  • SWR (alternative to React Query)             │
└─────────────────────────────────────────────────┘
```

#### Backend (Đề xuất)
```
┌─────────────────────────────────────────────────┐
│  BACKEND SERVICES                               │
├─────────────────────────────────────────────────┤
│  • Node.js + Express/Fastify                    │
│  • Socket.io Server (WebSocket)                 │
│  • PostgreSQL (main database)                   │
│  • Redis (caching, realtime data)               │
│  • TimescaleDB (time-series metrics)            │
└─────────────────────────────────────────────────┘
```

---

## 🎨 DESIGN SYSTEM - SCI-FI AESTHETIC

### Color Palette (từ hình mẫu)
```css
/* Primary Colors */
--cyber-blue: #00D9FF;      /* Main accent, glowing elements */
--electric-cyan: #00FFF7;   /* Highlights, active states */
--neon-green: #00FF9D;      /* Success, safe status */

/* Background */
--deep-navy: #0A1628;       /* Primary background */
--dark-slate: #1A2332;      /* Secondary background, cards */
--darker-blue: #0D1B2A;     /* Deeper sections */

/* Status Colors */
--warning-amber: #FFB800;   /* Caution states */
--critical-red: #FF004D;    /* Alerts, danger */
--neutral-gray: #6B7A8F;    /* Text, borders */

/* Glow Effects */
--glow-cyan: rgba(0, 217, 255, 0.6);
--glow-green: rgba(0, 255, 157, 0.5);
--glow-red: rgba(255, 0, 77, 0.5);
```

### Typography
```css
/* Font Families */
--font-header: 'Orbitron', 'Rajdhani', sans-serif;  /* Futuristic headers */
--font-body: 'Inter', 'Roboto', sans-serif;         /* Clean body text */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace; /* Technical data */

/* Font Sizes */
--text-xs: 12px;    /* Labels */
--text-sm: 14px;    /* Small text */
--text-base: 16px;  /* Body */
--text-lg: 18px;    /* Large body */
--text-xl: 24px;    /* H3 */
--text-2xl: 32px;   /* H2 */
--text-3xl: 48px;   /* H1 */
```

### Visual Effects
```css
/* Glow Effects */
.glow-cyan {
  box-shadow: 0 0 20px var(--glow-cyan),
              0 0 40px var(--glow-cyan);
  filter: drop-shadow(0 0 10px var(--cyber-blue));
}

/* Glass Morphism */
.glass-panel {
  background: rgba(26, 35, 50, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 217, 255, 0.3);
}

/* Scanning Animation */
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Grid Background */
.grid-background {
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

---

## 📐 COMPONENT ARCHITECTURE

### Component Hierarchy

```
App
├── Layout
│   ├── Header (Logo, User, Settings)
│   ├── Sidebar (Navigation)
│   └── MainContent
│       ├── AlertBanner (Mục 1: Thông báo khẩn cấp)
│       ├── DashboardGrid
│       │   ├── PrisonMapSection (Mục 2: Bản đồ số)
│       │   │   ├── InteractivePrisonMap
│       │   │   │   ├── ZoneCard (cho mỗi khu vực)
│       │   │   │   ├── MetricsOverlay
│       │   │   │   └── ZoomControls
│       │   │   └── MapLegend
│       │   │
│       │   ├── PopulationChart (Mục 3: Biểu đồ quân số)
│       │   │   ├── GroupedBarChart
│       │   │   └── ChartTooltip
│       │   │
│       │   ├── CameraStatusChart (Mục 4: Camera)
│       │   │   ├── StackedBarChart
│       │   │   └── CameraAlerts
│       │   │
│       │   └── SideWidgets
│       │       ├── ServerStatusWidget (Mục 5)
│       │       │   ├── ServerCard (x5 servers)
│       │       │   └── SystemOverview
│       │       │
│       │       └── CanteenWidget (Mục 6)
│       │           ├── MealStatus
│       │           ├── InventoryStatus
│       │           └── StaffStatus
│       │
│       └── Footer
└── Providers
    ├── ThemeProvider
    ├── WebSocketProvider
    └── AuthProvider
```

### Core Components Detail

#### 1. AlertBanner Component
```typescript
// components/AlertBanner/AlertBanner.tsx
interface Alert {
  id: string;
  timestamp: Date;
  type: 'critical' | 'high' | 'medium';
  category: 'fight' | 'escape' | 'medical' | 'equipment' | 'violation';
  zone: string;
  room?: string;
  inmates?: string[];
  status: 'processing' | 'controlled' | 'resolved';
  officer: string;
  description: string;
}

interface AlertBannerProps {
  alerts: Alert[];
  onAlertClick: (alert: Alert) => void;
  maxVisible?: number;
}
```

**Features:**
- Realtime updates via WebSocket
- Auto-scroll for multiple alerts
- Sound notification for new alerts
- Color-coded by severity
- Click to expand details
- Filter by severity/category

#### 2. InteractivePrisonMap Component
```typescript
// components/PrisonMap/InteractivePrisonMap.tsx
interface Zone {
  id: string;
  name: string;
  type: 'male' | 'female' | 'isolation' | 'work' | 'medical' | 'canteen' | 'office';
  capacity: number;
  current: number;
  officers: number;
  rooms: {
    total: number;
    occupied: number;
    vacant: number;
    maintenance: number;
  };
  cameras: {
    total: number;
    active: number;
    offline: number;
  };
  position: { x: number; y: number };
  size: { width: number; height: number };
  status: 'normal' | 'warning' | 'critical';
  temperature?: number;
  alerts?: Alert[];
}

interface PrisonMapProps {
  zones: Zone[];
  onZoneClick: (zone: Zone) => void;
  highlightedZone?: string;
  showMetrics?: boolean;
}
```

**Features:**
- SVG-based interactive map
- Color-coded zones by occupancy
- Hover tooltips with quick stats
- Click to drill down into zone details
- Zoom and pan controls
- Search functionality
- Real-time status updates
- Pulsing animation for alerts

**Visual Design:**
```
┌─────────────────────────────────────────────────┐
│  🏛️ CỔNG CHÍNH                                  │
├────────────┬────────────┬────────────┬──────────┤
│ KHU NAM A  │ KHU NAM B  │ KHU NỮ     │ Y TẾ     │
│ 450/500 👤 │ 380/400 👤 │ 120/150 👤 │ 15 🛏️   │
│ 📹 45/50   │ 📹 38/40   │ 📹 28/30   │ 📹 8/10  │
│ [90% 🟡]   │ [95% 🔴]   │ [80% 🟢]   │ [75% 🟢] │
├────────────┼────────────┼────────────┼──────────┤
│ KHU LAO ĐỘNG│ KHU CÁCH LY│ CANTEEN   │ VĂN PHÒNG│
│ 200 👤     │ 25/50 👤   │ 🍽️        │ 👮 120   │
│ 📹 25/30   │ 📹 12/15   │ 📹 15/15   │ 📹 20/20 │
│ [80% 🟢]   │ [50% 🟢]   │ [100% 🟢]  │ [100% 🟢]│
└────────────┴────────────┴────────────┴──────────┘
```

#### 3. PopulationChart Component
```typescript
// components/Charts/PopulationChart.tsx
interface ZonePopulation {
  zone: string;
  inmates: number;
  capacity: number;
  officers: number;
  rooms: number;
  roomsTotal: number;
}

interface PopulationChartProps {
  data: ZonePopulation[];
  showComparison?: boolean; // So sánh với tháng trước
  interactive?: boolean;
}
```

**Chart Type:** Grouped Bar Chart
- 3 bars per zone: Inmates, Capacity, Officers
- Color-coded by occupancy rate
- Hover for detailed metrics
- Export to PNG/PDF

#### 4. CameraStatusChart Component
```typescript
// components/Charts/CameraStatusChart.tsx
interface CameraStatus {
  zone: string;
  total: number;
  active: number;
  offline: number;
  maintenance: number;
  needsRepair: number;
}

interface CameraStatusChartProps {
  data: CameraStatus[];
  onZoneClick?: (zone: string) => void;
}
```

**Chart Type:** Stacked Bar Chart
- Active (green) + Offline (red) stacked
- Alert badges for critical zones
- Click to view camera details

#### 5. ServerStatusWidget Component
```typescript
// components/Widgets/ServerStatusWidget.tsx
interface ServerMetrics {
  id: string;
  name: string;
  type: 'main' | 'camera' | 'database' | 'backup' | 'web';
  cpu: number;
  ram: number;
  disk: number;
  network?: { download: number; upload: number };
  uptime: number;
  status: 'healthy' | 'warning' | 'critical';
  alerts?: string[];
}

interface ServerStatusWidgetProps {
  servers: ServerMetrics[];
  autoRefresh?: boolean;
  refreshInterval?: number; // seconds
}
```

**Features:**
- Real-time metrics (30s refresh)
- Progress bars with glow effects
- Status indicators
- Click for detailed view
- Alert notifications
- System overview summary

#### 6. CanteenWidget Component
```typescript
// components/Widgets/CanteenWidget.tsx
interface MealService {
  type: 'breakfast' | 'lunch' | 'dinner';
  status: 'completed' | 'serving' | 'preparing' | 'scheduled';
  served: number;
  total: number;
  startTime: string;
  endTime: string;
  rating?: number;
}

interface Inventory {
  item: string;
  quantity: number;
  unit: string;
  daysRemaining: number;
  status: 'good' | 'low' | 'critical';
}

interface CanteenWidgetProps {
  meals: MealService[];
  inventory: Inventory[];
  staff: {
    shift: string;
    present: number;
    total: number;
  }[];
  budget: {
    today: number;
    month: number;
    remaining: number;
  };
}
```

**Features:**
- Live meal service progress
- Inventory alerts
- Staff management
- Budget tracking
- Menu display

---

## 🔄 DATA FLOW & STATE MANAGEMENT

### State Management Strategy

```typescript
// Using Zustand for global state
import create from 'zustand';

interface DashboardStore {
  // Alerts
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  removeAlert: (id: string) => void;
  
  // Prison Map
  zones: Zone[];
  selectedZone: Zone | null;
  setSelectedZone: (zone: Zone | null) => void;
  updateZone: (id: string, updates: Partial<Zone>) => void;
  
  // Metrics
  metrics: {
    population: ZonePopulation[];
    cameras: CameraStatus[];
    servers: ServerMetrics[];
    canteen: CanteenData;
  };
  updateMetrics: (type: string, data: any) => void;
  
  // WebSocket
  wsConnected: boolean;
  setWsConnected: (connected: boolean) => void;
  
  // UI State
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  // Implementation...
}));
```

### WebSocket Integration

```typescript
// hooks/useWebSocket.ts
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebSocketEvents {
  'alert:new': (alert: Alert) => void;
  'zone:update': (zone: Partial<Zone>) => void;
  'metrics:update': (data: any) => void;
  'camera:status': (status: CameraStatus) => void;
  'server:metrics': (metrics: ServerMetrics) => void;
  'canteen:update': (data: CanteenData) => void;
}

export const useWebSocket = () => {
  const store = useDashboardStore();
  
  useEffect(() => {
    const socket: Socket = io(process.env.VITE_WS_URL || 'ws://localhost:3001');
    
    socket.on('connect', () => {
      store.setWsConnected(true);
      console.log('WebSocket connected');
    });
    
    socket.on('disconnect', () => {
      store.setWsConnected(false);
      console.log('WebSocket disconnected');
    });
    
    // Event listeners
    socket.on('alert:new', (alert) => {
      store.addAlert(alert);
      // Play sound notification
      playAlertSound(alert.type);
    });
    
    socket.on('zone:update', (update) => {
      store.updateZone(update.id, update);
    });
    
    // ... more event listeners
    
    return () => {
      socket.disconnect();
    };
  }, []);
};
```

### API Layer

```typescript
// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for auth
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const dashboardAPI = {
  // Alerts
  getAlerts: (params?: { limit?: number; severity?: string }) =>
    api.get('/alerts', { params }),
  
  // Zones
  getZones: () => api.get('/zones'),
  getZoneDetails: (id: string) => api.get(`/zones/${id}`),
  
  // Metrics
  getPopulationMetrics: () => api.get('/metrics/population'),
  getCameraStatus: () => api.get('/metrics/cameras'),
  getServerMetrics: () => api.get('/metrics/servers'),
  getCanteenData: () => api.get('/metrics/canteen'),
  
  // Reports
  exportReport: (type: string, format: 'pdf' | 'excel') =>
    api.get(`/reports/${type}`, { 
      params: { format },
      responseType: 'blob'
    }),
};
```

---

## 🎯 API ENDPOINTS SPECIFICATION

### REST API Endpoints

```
BASE_URL: http://localhost:3000/api/v1
```

#### Authentication
```
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
GET    /auth/me
```

#### Alerts
```
GET    /alerts                    # List all alerts
GET    /alerts/:id                # Get alert details
POST   /alerts                    # Create new alert
PATCH  /alerts/:id                # Update alert status
DELETE /alerts/:id                # Delete alert

Query params:
  - limit: number (default: 50)
  - offset: number (default: 0)
  - severity: 'critical' | 'high' | 'medium'
  - status: 'processing' | 'controlled' | 'resolved'
  - zone: string
  - from: ISO date
  - to: ISO date
```

#### Zones
```
GET    /zones                     # List all zones
GET    /zones/:id                 # Get zone details
PATCH  /zones/:id                 # Update zone info
GET    /zones/:id/inmates         # Get inmates in zone
GET    /zones/:id/cameras         # Get cameras in zone
GET    /zones/:id/history         # Get zone history
```

#### Metrics
```
GET    /metrics/population        # Population by zone
GET    /metrics/cameras           # Camera status by zone
GET    /metrics/servers           # Server metrics
GET    /metrics/canteen           # Canteen data
GET    /metrics/summary           # Overall summary

Query params:
  - period: 'realtime' | 'hour' | 'day' | 'week' | 'month'
  - zone: string (optional filter)
```

#### Reports
```
GET    /reports/daily             # Daily report
GET    /reports/weekly            # Weekly report
GET    /reports/monthly           # Monthly report
POST   /reports/custom            # Custom report

Query params:
  - format: 'json' | 'pdf' | 'excel'
  - from: ISO date
  - to: ISO date
```

### WebSocket Events

```
Server -> Client Events:
  - alert:new              # New alert created
  - alert:update           # Alert status changed
  - zone:update            # Zone data updated
  - metrics:population     # Population metrics update
  - metrics:cameras        # Camera status update
  - metrics:servers        # Server metrics update
  - metrics:canteen        # Canteen data update
  - system:notification    # System notification

Client -> Server Events:
  - subscribe:zone         # Subscribe to zone updates
  - unsubscribe:zone       # Unsubscribe from zone
  - subscribe:metrics      # Subscribe to metrics
  - ping                   # Heartbeat
```

---

## 📊 DATABASE SCHEMA

### PostgreSQL Tables

```sql
-- Zones (Khu vực)
CREATE TABLE zones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  capacity INTEGER NOT NULL,
  current_inmates INTEGER DEFAULT 0,
  officers_assigned INTEGER DEFAULT 0,
  total_rooms INTEGER NOT NULL,
  occupied_rooms INTEGER DEFAULT 0,
  vacant_rooms INTEGER DEFAULT 0,
  maintenance_rooms INTEGER DEFAULT 0,
  position_x DECIMAL(10,2),
  position_y DECIMAL(10,2),
  size_width DECIMAL(10,2),
  size_height DECIMAL(10,2),
  temperature DECIMAL(5,2),
  status VARCHAR(20) DEFAULT 'normal',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Cameras
CREATE TABLE cameras (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  zone_id UUID REFERENCES zones(id),
  camera_number VARCHAR(20) NOT NULL,
  type VARCHAR(50),
  status VARCHAR(20) DEFAULT 'active',
  quality VARCHAR(20),
  has_night_vision BOOLEAN DEFAULT false,
  has_ai_detection BOOLEAN DEFAULT false,
  last_maintenance DATE,
  next_maintenance DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Alerts
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp TIMESTAMP DEFAULT NOW(),
  type VARCHAR(20) NOT NULL,
  category VARCHAR(50) NOT NULL,
  zone_id UUID REFERENCES zones(id),
  room_number VARCHAR(20),
  severity VARCHAR(20) NOT NULL,
  status VARCHAR(20) DEFAULT 'processing',
  description TEXT,
  officer_id UUID,
  actions_taken TEXT,
  resolved_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Inmates (Phạm nhân)
CREATE TABLE inmates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inmate_number VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  zone_id UUID REFERENCES zones(id),
  room_number VARCHAR(20),
  entry_date DATE NOT NULL,
  release_date DATE,
  status VARCHAR(20) DEFAULT 'active',
  risk_level VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Officers (Cán bộ)
CREATE TABLE officers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  officer_number VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  zone_id UUID REFERENCES zones(id),
  shift VARCHAR(20),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Servers
CREATE TABLE servers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'healthy',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Server Metrics (TimescaleDB hypertable)
CREATE TABLE server_metrics (
  time TIMESTAMPTZ NOT NULL,
  server_id UUID REFERENCES servers(id),
  cpu_usage DECIMAL(5,2),
  ram_usage DECIMAL(5,2),
  disk_usage DECIMAL(5,2),
  network_download DECIMAL(10,2),
  network_upload DECIMAL(10,2),
  PRIMARY KEY (time, server_id)
);

SELECT create_hypertable('server_metrics', 'time');

-- Canteen
CREATE TABLE canteen_meals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  meal_type VARCHAR(20) NOT NULL,
  status VARCHAR(20) DEFAULT 'scheduled',
  total_servings INTEGER NOT NULL,
  served_count INTEGER DEFAULT 0,
  start_time TIME,
  end_time TIME,
  menu TEXT,
  cost DECIMAL(12,2),
  rating DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE canteen_inventory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_name VARCHAR(100) NOT NULL,
  quantity DECIMAL(10,2) NOT NULL,
  unit VARCHAR(20) NOT NULL,
  days_remaining INTEGER,
  status VARCHAR(20) DEFAULT 'good',
  last_restocked DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Redis Cache Structure

```
# Realtime metrics (TTL: 60 seconds)
metrics:population:latest
metrics:cameras:latest
metrics:servers:latest
metrics:canteen:latest

# Zone status (TTL: 30 seconds)
zone:{zone_id}:status

# Active alerts (TTL: 24 hours)
alerts:active

# WebSocket sessions
ws:sessions:{user_id}
```

---

## 🎬 ANIMATION & EFFECTS

### Framer Motion Animations

```typescript
// components/PrisonMap/ZoneCard.tsx
import { motion } from 'framer-motion';

const ZoneCard = ({ zone, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return '#00FF9D';
      case 'warning': return '#FFB800';
      case 'critical': return '#FF004D';
      default: return '#6B7A8F';
    }
  };
  
  return (
    <motion.div
      className="zone-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(zone)}
      style={{
        borderColor: getStatusColor(zone.status),
        boxShadow: `0 0 20px ${getStatusColor(zone.status)}40`,
      }}
    >
      {/* Zone content */}
      
      {zone.alerts && zone.alerts.length > 0 && (
        <motion.div
          className="alert-indicator"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🚨
        </motion.div>
      )}
    </motion.div>
  );
};
```

### CSS Animations

```css
/* Scanning line effect */
.scanning-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--cyber-blue),
    transparent
  );
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
}

/* Glow pulse for alerts */
.alert-glow {
  animation: glow-pulse 1.5s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 10px var(--critical-red),
                0 0 20px var(--critical-red);
  }
  50% {
    box-shadow: 0 0 20px var(--critical-red),
                0 0 40px var(--critical-red),
                0 0 60px var(--critical-red);
  }
}

/* Data loading shimmer */
.shimmer {
  background: linear-gradient(
    90deg,
    rgba(26, 35, 50, 0.8) 0%,
    rgba(0, 217, 255, 0.2) 50%,
    rgba(26, 35, 50, 0.8) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Hexagonal grid pattern */
.hex-pattern {
  background-image: 
    radial-gradient(circle at 50% 50%, 
      rgba(0, 217, 255, 0.1) 1px, 
      transparent 1px);
  background-size: 30px 30px;
}
```

---

## 📱 RESPONSIVE DESIGN BREAKPOINTS

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '375px',   // Mobile small
      'sm': '640px',   // Mobile large
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop small
      'xl': '1280px',  // Desktop
      '2xl': '1920px', // Desktop large
    },
  },
};
```

### Layout Adaptations

```typescript
// Desktop (1920x1080) - Full layout
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-8">
    {/* Main content: Map + Charts */}
  </div>
  <div className="col-span-4">
    {/* Sidebar: Widgets */}
  </div>
</div>

// Tablet (1024x768) - Stacked with collapsible sidebar
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
  <div className="lg:col-span-9">
    {/* Main content */}
  </div>
  <div className="lg:col-span-3">
    {/* Collapsible sidebar */}
  </div>
</div>

// Mobile (375x667) - Vertical stack
<div className="flex flex-col gap-4">
  {/* Priority order: Alerts -> Map -> Key Metrics */}
</div>
```

---

## 🔐 SECURITY & AUTHENTICATION

### Role-Based Access Control (RBAC)

```typescript
// types/auth.ts
enum UserRole {
  ADMIN = 'admin',
  DIRECTOR = 'director',
  OFFICER = 'officer',
  MEDICAL = 'medical',
  CANTEEN = 'canteen',
}

interface Permission {
  resource: string;
  actions: ('read' | 'write' | 'delete')[];
}

const rolePermissions: Record<UserRole, Permission[]> = {
  [UserRole.ADMIN]: [
    { resource: '*', actions: ['read', 'write', 'delete'] },
  ],
  [UserRole.DIRECTOR]: [
    { resource: 'dashboard', actions: ['read'] },
    { resource: 'reports', actions: ['read', 'write'] },
    { resource: 'alerts', actions: ['read'] },
  ],
  [UserRole.OFFICER]: [
    { resource: 'dashboard', actions: ['read'] },
    { resource: 'alerts', actions: ['read', 'write'] },
    { resource: 'zones', actions: ['read'] },
  ],
  [UserRole.MEDICAL]: [
    { resource: 'medical', actions: ['read', 'write'] },
    { resource: 'inmates', actions: ['read'] },
  ],
  [UserRole.CANTEEN]: [
    { resource: 'canteen', actions: ['read', 'write'] },
  ],
};
```

### Protected Routes

```typescript
// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole[];
  requiredPermission?: { resource: string; action: string };
}

export const ProtectedRoute = ({ 
  children, 
  requiredRole,
  requiredPermission 
}: ProtectedRouteProps) => {
  const { user, hasPermission } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && !requiredRole.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <>{children}</>;
};
```

---

## 🚀 DEPLOYMENT & INFRASTRUCTURE

### Development Environment

```bash
# Frontend
npm create vite@latest prison-dashboard -- --template react-ts
cd prison-dashboard
npm install

# Install dependencies
npm install \
  react-router-dom \
  zustand \
  @tanstack/react-query \
  socket.io-client \
  axios \
  framer-motion \
  d3 \
  recharts \
  react-flow-renderer \
  tailwindcss \
  @radix-ui/react-* \
  lucide-react

# Dev tools
npm install -D \
  @types/node \
  @types/d3 \
  eslint \
  prettier \
  vite-plugin-svgr
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Docker build
docker build -t prison-dashboard:latest .
docker run -p 80:80 prison-dashboard:latest
```

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment Variables

```bash
# .env.production
VITE_API_URL=https://api.prison-system.com
VITE_WS_URL=wss://ws.prison-system.com
VITE_APP_NAME=Prison Management Dashboard
VITE_ENABLE_ANALYTICS=true
```

---

## 📋 IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1-2)
- [x] Project setup (Vite + React + TypeScript)
- [ ] Install and configure dependencies
- [ ] Setup Tailwind CSS + design tokens
- [ ] Create base layout components
- [ ] Implement routing structure
- [ ] Setup state management (Zustand)
- [ ] Configure API client (Axios)

### Phase 2: Core Components (Week 3-4)
- [ ] Build AlertBanner component
- [ ] Create InteractivePrisonMap component
- [ ] Implement PopulationChart
- [ ] Build CameraStatusChart
- [ ] Create ServerStatusWidget
- [ ] Build CanteenWidget

### Phase 3: Data Integration (Week 5)
- [ ] Setup WebSocket connection
- [ ] Implement API endpoints integration
- [ ] Add real-time data updates
- [ ] Create data transformation utilities
- [ ] Add error handling and retry logic

### Phase 4: Animations & Polish (Week 6)
- [ ] Add Framer Motion animations
- [ ] Implement glow effects and sci-fi styling
- [ ] Add loading states and skeletons
- [ ] Implement transitions between views
- [ ] Add sound notifications

### Phase 5: Features & Optimization (Week 7)
- [ ] Implement search functionality
- [ ] Add filtering and sorting
- [ ] Create export/report features
- [ ] Add user preferences
- [ ] Optimize performance (memoization, lazy loading)

### Phase 6: Testing & Deployment (Week 8)
- [ ] Write unit tests
- [ ] Integration testing
- [ ] E2E testing with Playwright
- [ ] Performance testing
- [ ] Security audit
- [ ] Production deployment

---

## 🧪 TESTING STRATEGY

### Unit Tests (Vitest + React Testing Library)

```typescript
// __tests__/components/AlertBanner.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { AlertBanner } from '@/components/AlertBanner';

describe('AlertBanner', () => {
  it('renders alerts correctly', () => {
    const alerts = [
      {
        id: '1',
        type: 'critical',
        description: 'Test alert',
        timestamp: new Date(),
      },
    ];
    
    render(<AlertBanner alerts={alerts} />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });
  
  it('calls onAlertClick when alert is clicked', () => {
    const handleClick = vi.fn();
    const alerts = [{ id: '1', type: 'critical', description: 'Test' }];
    
    render(<AlertBanner alerts={alerts} onAlertClick={handleClick} />);
    fireEvent.click(screen.getByText('Test'));
    expect(handleClick).toHaveBeenCalledWith(alerts[0]);
  });
});
```

### E2E Tests (Playwright)

```typescript
// e2e/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test('dashboard loads and displays data', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  // Check if main components are visible
  await expect(page.locator('.alert-banner')).toBeVisible();
  await expect(page.locator('.prison-map')).toBeVisible();
  await expect(page.locator('.population-chart')).toBeVisible();
  
  // Test zone interaction
  await page.click('.zone-card:first-child');
  await expect(page.locator('.zone-details-modal')).toBeVisible();
});
```

---

## 📚 DOCUMENTATION REQUIREMENTS

### Code Documentation
- JSDoc comments for all components
- README.md for each major module
- API documentation (OpenAPI/Swagger)
- Component Storybook

### User Documentation
- User manual (PDF)
- Video tutorials
- FAQ section
- Troubleshooting guide

### Developer Documentation
- Architecture overview
- Setup guide
- Contributing guidelines
- API reference

---

## 🎯 SUCCESS METRICS

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **Bundle Size**: < 500KB (gzipped)

### Functionality Targets
- **Real-time Update Latency**: < 500ms
- **WebSocket Reconnection**: < 2s
- **API Response Time**: < 200ms (p95)
- **Uptime**: 99.9%

### User Experience
- **Mobile Responsive**: 100% features accessible
- **Accessibility**: WCAG 2.1 AA compliant
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest 2 versions)

---

## 🔧 TROUBLESHOOTING & MAINTENANCE

### Common Issues

1. **WebSocket Connection Fails**
   - Check firewall settings
   - Verify WS_URL environment variable
   - Check server logs

2. **Slow Chart Rendering**
   - Reduce data points
   - Implement virtualization
   - Use React.memo for optimization

3. **Memory Leaks**
   - Clean up WebSocket listeners
   - Unsubscribe from observables
   - Clear intervals/timeouts

### Monitoring

```typescript
// Setup error tracking (Sentry)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Performance monitoring
import { onCLS, onFID, onLCP } from 'web-vitals';

onCLS(console.log);
onFID(console.log);
onLCP(console.log);
```

---

## 📞 SUPPORT & RESOURCES

### External Libraries Documentation
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [D3.js](https://d3js.org)
- [Recharts](https://recharts.org)
- [Socket.io](https://socket.io)
- [Zustand](https://github.com/pmndrs/zustand)

### Design Resources
- [Orbitron Font](https://fonts.google.com/specimen/Orbitron)
- [Lucide Icons](https://lucide.dev)
- [Coolors Palette Generator](https://coolors.co)

---

**Document Version**: 1.0  
**Last Updated**: 2026-03-09  
**Author**: AI Architect  
**Status**: ✅ Ready for Implementation
