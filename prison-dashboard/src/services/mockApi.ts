import type { Alert, Zone, Statistics } from '../types';

// Mock alerts data dựa trên mặt bằng thực tế Trại tạm giam số 02 BNI
export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'security-breach',
    severity: 'high',
    title: 'Phát hiện bất thường tại Dãy A - Khu 2',
    message: 'Camera phát hiện hoạt động bất thường tại hành lang Dãy A',
    zoneName: 'Dãy A - Khu 2',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    acknowledged: false,
    zoneId: 'day-a'
  },
  {
    id: '2',
    type: 'medical-emergency',
    severity: 'critical',
    title: 'Yêu cầu hỗ trợ y tế khẩn cấp',
    message: 'Phạm nhân cần hỗ trợ y tế tại Nhà K - Khu 3',
    zoneName: 'Nhà K - Khu 3',
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    acknowledged: false,
    zoneId: 'nha-k'
  },
  {
    id: '3',
    type: 'equipment-failure',
    severity: 'medium',
    title: 'Hệ thống Network Rack cần bảo trì',
    message: 'Network Rack tại Dãy C có dấu hiệu quá nhiệt',
    zoneName: 'Dãy C - Khu 1',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    acknowledged: false,
    zoneId: 'day-c'
  },
  {
    id: '4',
    type: 'security-breach',
    severity: 'low',
    title: 'Kiểm tra an ninh định kỳ',
    message: 'Thực hiện kiểm tra an ninh tại Cổng Trại',
    zoneName: 'Cổng Trại',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    acknowledged: false,
    zoneId: 'cong-trai'
  },
  {
    id: '5',
    type: 'maintenance-required',
    severity: 'medium',
    title: 'Chuẩn bị bữa ăn cho phạm nhân',
    message: 'Nhà Bếp đang chuẩn bị bữa ăn tối cho 2847 phạm nhân',
    zoneName: 'Nhà Bếp',
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    acknowledged: false,
    zoneId: 'nha-bep'
  }
];

// Mock zones data - Dựa trên mặt bằng thực tế PDF
export const mockZones: Zone[] = [
  {
    id: 'cong-trai',
    name: 'Cổng Trại',
    type: 'administration',
    capacity: 50,
    occupancy: 12,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Cổng chính', floor: 1, coordinates: [100, 100] }
  },
  {
    id: 'day-a',
    name: 'Dãy A',
    type: 'cell-block',
    capacity: 360,
    occupancy: 342,
    status: 'alert',
    securityLevel: 'maximum',
    location: { building: 'Dãy A', floor: 1, coordinates: [200, 150] }
  },
  {
    id: 'day-b',
    name: 'Dãy B',
    type: 'cell-block',
    capacity: 360,
    occupancy: 355,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Dãy B', floor: 1, coordinates: [300, 150] }
  },
  {
    id: 'day-c',
    name: 'Dãy C',
    type: 'cell-block',
    capacity: 720,
    occupancy: 698,
    status: 'alert',
    securityLevel: 'maximum',
    location: { building: 'Dãy C', floor: 1, coordinates: [400, 200] }
  },
  {
    id: 'day-d',
    name: 'Dãy D',
    type: 'cell-block',
    capacity: 360,
    occupancy: 341,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Dãy D', floor: 1, coordinates: [500, 200] }
  },
  {
    id: 'day-e',
    name: 'Dãy E',
    type: 'cell-block',
    capacity: 360,
    occupancy: 348,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Dãy E', floor: 1, coordinates: [600, 200] }
  },
  {
    id: 'day-f',
    name: 'Dãy F',
    type: 'cell-block',
    capacity: 360,
    occupancy: 352,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Dãy F', floor: 1, coordinates: [700, 200] }
  },
  {
    id: 'nha-k',
    name: 'Nhà K',
    type: 'cell-block',
    capacity: 480,
    occupancy: 467,
    status: 'alert',
    securityLevel: 'maximum',
    location: { building: 'Nhà K', floor: 1, coordinates: [250, 350] }
  },
  {
    id: 'benh-xa',
    name: 'Bệnh Xá',
    type: 'medical',
    capacity: 40,
    occupancy: 8,
    status: 'normal',
    securityLevel: 'medium',
    location: { building: 'Bệnh Xá', floor: 1, coordinates: [150, 300] }
  },
  {
    id: 'nha-bep',
    name: 'Nhà Bếp & Nhà Ăn',
    type: 'cafeteria',
    capacity: 200,
    occupancy: 45,
    status: 'normal',
    securityLevel: 'minimum',
    location: { building: 'Nhà Bếp', floor: 1, coordinates: [120, 200] }
  },
  {
    id: 'hoi-truong',
    name: 'Hội Trường Phạm Nhân',
    type: 'common-area',
    capacity: 300,
    occupancy: 0,
    status: 'normal',
    securityLevel: 'medium',
    location: { building: 'Hội Trường', floor: 1, coordinates: [180, 250] }
  },
  {
    id: 'khu-tham-gap',
    name: 'Khu Thăm Gặp',
    type: 'visitation',
    capacity: 80,
    occupancy: 23,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Khu Thăm Gặp', floor: 1, coordinates: [220, 100] }
  },
  {
    id: 'nha-nc01',
    name: 'Nhà NC01',
    type: 'cell-block',
    capacity: 240,
    occupancy: 231,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Nhà NC01', floor: 1, coordinates: [280, 120] }
  },
  {
    id: 'nha-nc02',
    name: 'Nhà NC02',
    type: 'cell-block',
    capacity: 240,
    occupancy: 234,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Nhà NC02', floor: 1, coordinates: [350, 120] }
  },
  {
    id: 'phong-ksan',
    name: 'Phòng KSAN',
    type: 'administration',
    capacity: 30,
    occupancy: 18,
    status: 'normal',
    securityLevel: 'maximum',
    location: { building: 'Phòng KSAN', floor: 1, coordinates: [80, 80] }
  },
  {
    id: 've-sinh-ngoai-troi',
    name: 'Khu vệ sinh ngoài trời',
    type: 'common-area',
    capacity: 50,
    occupancy: 12,
    status: 'normal',
    securityLevel: 'minimum',
    location: { building: 'Khu vệ sinh', floor: 1, coordinates: [140, 150] }
  }
];

// Mock statistics
export const mockStatistics: Statistics = {
  totalInmates: 2847,
  totalCapacity: 3200,
  activeAlerts: 5,
  staffOnDuty: 156,
  occupancyRate: 88.9,
  securityIncidents24h: 12,
  medicalVisits24h: 8,
  visitorCount24h: 45
};

// API simulation functions
export const fetchAlerts = async (): Promise<Alert[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockAlerts;
};

export const fetchZones = async (): Promise<Zone[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockZones;
};

export const fetchStatistics = async (): Promise<Statistics> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStatistics;
};
