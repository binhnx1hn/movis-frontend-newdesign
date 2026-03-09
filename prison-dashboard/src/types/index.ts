// Core Domain Types
export interface Prison {
  id: string;
  name: string;
  coordinates: [number, number];
  totalCapacity: number;
  currentOccupancy: number;
  zones: Zone[];
  status: PrisonStatus;
}

export interface Zone {
  id: string;
  name: string;
  type: ZoneType;
  capacity: number;
  occupancy: number;
  status: ZoneStatus;
  securityLevel: SecurityLevel;
  location: {
    building: string;
    floor: number;
    coordinates: [number, number];
  };
}

export type ZoneType = 
  | 'cell-block' 
  | 'common-area' 
  | 'medical' 
  | 'cafeteria' 
  | 'recreation' 
  | 'administration' 
  | 'workshop' 
  | 'visitation';

export type ZoneStatus = 'normal' | 'alert' | 'lockdown' | 'maintenance';

export type SecurityLevel = 'minimum' | 'medium' | 'maximum' | 'supermax';

export type PrisonStatus = 'operational' | 'partial-lockdown' | 'full-lockdown' | 'maintenance';

// Alert Types
export interface Alert {
  id: string;
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  message: string;
  zoneId?: string;
  zoneName?: string;
  timestamp: Date;
  acknowledged: boolean;
  resolvedAt?: Date;
}

export type AlertType = 
  | 'security-breach' 
  | 'medical-emergency' 
  | 'fire' 
  | 'riot' 
  | 'escape-attempt' 
  | 'equipment-failure' 
  | 'overcrowding'
  | 'maintenance-required';

export type AlertSeverity = 'critical' | 'high' | 'medium' | 'low';

// Inmate Types
export interface Inmate {
  id: string;
  name: string;
  inmateNumber: string;
  zoneId: string;
  cellNumber: string;
  securityLevel: SecurityLevel;
  status: InmateStatus;
  entryDate: Date;
  releaseDate?: Date;
  healthStatus: HealthStatus;
  behaviorScore: number;
}

export type InmateStatus = 'active' | 'released' | 'transferred' | 'medical-hold' | 'solitary';

export type HealthStatus = 'healthy' | 'sick' | 'injured' | 'critical' | 'quarantine';

// Staff Types
export interface Staff {
  id: string;
  name: string;
  role: StaffRole;
  department: string;
  shift: Shift;
  status: StaffStatus;
  assignedZones: string[];
}

export type StaffRole = 
  | 'correctional-officer' 
  | 'supervisor' 
  | 'medical-staff' 
  | 'administrator' 
  | 'maintenance' 
  | 'kitchen-staff';

export type Shift = 'morning' | 'afternoon' | 'night';

export type StaffStatus = 'on-duty' | 'off-duty' | 'on-break' | 'emergency-response';

// Equipment & Systems
export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  zoneId: string;
  status: EquipmentStatus;
  lastMaintenance: Date;
  nextMaintenance: Date;
}

export type EquipmentType = 
  | 'camera' 
  | 'door-lock' 
  | 'alarm-system' 
  | 'fire-suppression' 
  | 'ventilation' 
  | 'power-generator';

export type EquipmentStatus = 'operational' | 'degraded' | 'offline' | 'maintenance';

// Statistics & Metrics
export interface Statistics {
  totalInmates: number;
  totalCapacity: number;
  occupancyRate: number;
  activeAlerts: number;
  staffOnDuty: number;
  securityIncidents24h: number;
  medicalVisits24h: number;
  visitorCount24h: number;
}

export interface ZoneMetrics {
  zoneId: string;
  zoneName: string;
  occupancyRate: number;
  alertCount: number;
  lastIncident?: Date;
  averageBehaviorScore: number;
}

// Time Series Data
export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}

export interface OccupancyTrend {
  date: Date;
  total: number;
  bySecurityLevel: {
    minimum: number;
    medium: number;
    maximum: number;
    supermax: number;
  };
}

// WebSocket Events
export interface WebSocketMessage<T = any> {
  type: WebSocketEventType;
  payload: T;
  timestamp: Date;
}

export type WebSocketEventType = 
  | 'alert-created' 
  | 'alert-updated' 
  | 'zone-status-changed' 
  | 'occupancy-updated' 
  | 'equipment-status-changed' 
  | 'staff-status-changed';

// UI State Types
export interface FilterState {
  zones: string[];
  securityLevels: SecurityLevel[];
  alertSeverities: AlertSeverity[];
  dateRange: {
    start: Date;
    end: Date;
  };
}

export interface MapState {
  selectedZone: string | null;
  hoveredZone: string | null;
  zoom: number;
  center: [number, number];
  view: '2d' | '3d';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Form Types
export interface AlertForm {
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  message: string;
  zoneId?: string;
}

export interface ZoneUpdateForm {
  status?: ZoneStatus;
  occupancy?: number;
  notes?: string;
}
