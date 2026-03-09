// Vietnamese locale utilities
export const vi = {
  // Common
  loading: 'Đang tải...',
  error: 'Lỗi',
  success: 'Thành công',
  confirm: 'Xác nhận',
  cancel: 'Hủy',
  save: 'Lưu',
  delete: 'Xóa',
  edit: 'Sửa',
  view: 'Xem',
  close: 'Đóng',
  search: 'Tìm kiếm',
  filter: 'Lọc',
  all: 'Tất cả',
  
  // Navigation
  dashboard: 'Tổng quan',
  prisonMap: 'Bản đồ trại giam',
  inmates: 'Phạm nhân',
  alerts: 'Cảnh báo',
  staff: 'Nhân viên',
  equipment: 'Thiết bị',
  reports: 'Báo cáo',
  settings: 'Cài đặt',
  
  // Header
  prisonCommandCenter: 'TRUNG TÂM ĐIỀU KHIỂN TRẠI GIAM',
  digitalManagementSystem: 'Hệ thống quản lý số hóa v2.0',
  systemOnline: 'Hệ thống hoạt động',
  allSystemsSecure: 'Tất cả hệ thống an toàn',
  admin: 'Quản trị viên',
  systemAdministrator: 'Quản trị hệ thống',
  
  // Stats
  totalInmates: 'Tổng số phạm nhân',
  activeAlerts: 'Cảnh báo đang hoạt động',
  staffOnDuty: 'Nhân viên trực',
  occupancyRate: 'Tỷ lệ lấp đầy',
  capacity: 'Sức chứa',
  allPositionsCovered: 'Đã đầy đủ vị trí',
  incidents24h: 'sự cố trong 24h',
  totalStaff: 'Tổng nhân viên',
  
  // Alerts
  activeAlertsTitle: 'Cảnh báo đang hoạt động',
  alertsRequiringAttention: 'cảnh báo cần xử lý',
  viewAllAlerts: 'Xem tất cả cảnh báo',
  critical: 'Nghiêm trọng',
  high: 'Cao',
  medium: 'Trung bình',
  low: 'Thấp',
  allSystemsNominal: 'Tất cả hệ thống bình thường',
  noActiveAlerts: 'Không có cảnh báo đang hoạt động',
  
  // Alert Types
  'security-breach': 'Vi phạm an ninh',
  'medical-emergency': 'Cấp cứu y tế',
  'fire': 'Hỏa hoạn',
  'riot': 'Bạo loạn',
  'escape-attempt': 'Cố gắng trốn thoát',
  'equipment-failure': 'Hỏng thiết bị',
  'overcrowding': 'Quá tải',
  'maintenance-required': 'Cần bảo trì',
  
  // Time
  justNow: 'Vừa xong',
  minutesAgo: 'phút trước',
  hoursAgo: 'giờ trước',
  daysAgo: 'ngày trước',
  
  // Quick Actions
  quickActions: 'Thao tác nhanh',
  newAlert: 'Cảnh báo mới',
  generateReport: 'Tạo báo cáo',
  viewMap: 'Xem bản đồ',
  
  // Zones
  cellBlock: 'Khu giam',
  commonArea: 'Khu vực chung',
  medical: 'Y tế',
  cafeteria: 'Nhà ăn',
  recreation: 'Giải trí',
  administration: 'Hành chính',
  workshop: 'Xưởng',
  visitation: 'Thăm nuôi',
  
  // Zone Status
  normal: 'Bình thường',
  alert: 'Cảnh báo',
  lockdown: 'Phong tỏa',
  maintenance: 'Bảo trì',
  
  // Security Levels
  minimum: 'Tối thiểu',
  mediumSecurity: 'Trung bình',
  maximum: 'Tối đa',
  supermax: 'Tối đa đặc biệt',
  
  // Map
  interactivePrisonMap: 'Bản Đồ Số Trại Giam',
  mapDescription: 'Giám sát và quản lý các khu vực trại giam theo thời gian thực',
  selectZone: 'Chọn khu vực để xem chi tiết',
  zoneDetails: 'Chi tiết khu vực',
  occupancy: 'Lấp đầy',
  securityLevel: 'Mức độ an ninh',
  status: 'Trạng thái',
  location: 'Vị trí',
  building: 'Tòa nhà',
  floor: 'Tầng',
  inmatesInZone: 'Phạm nhân',
  
  // System
  systemUptime: 'Thời gian hoạt động',
  allSystemsNormalShort: 'Hệ thống bình thường',
};

export type TranslationKey = keyof typeof vi;

export const t = (key: TranslationKey): string => {
  return vi[key] || key;
};

export default vi;
