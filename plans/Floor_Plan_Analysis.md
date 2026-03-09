# Phân Tích Mặt Bằng Trại Tạm Giam Số 02 BNI - Tầng 1

## Nguồn Dữ Liệu
- **File gốc**: `2026_03_07_Trại_tạm_giam_số_02_BNI_Tầng_1_Nguyên_Trạng_non.pdf`
- **Đã đổi tên thành**: `floor_plan.pdf` (để dễ xử lý encoding)
- **Ngày phân tích**: 2026-03-09

## Tổng Quan Cấu Trúc

### 1. Khu Hành Chính & Tiện Ích
- **Phòng KSAN** (Phòng Kiểm soát An ninh)
  - Trung tâm giám sát
  - Server và Network Rack
  - Thiết bị liên lạc
  
- **Cổng Trại** (17 m²)
  - Khu vực cổng chính
  - Kiểm soát ra vào
  
- **Nhà Bếp & Nhà Ăn** (2 tầng)
  - Bếp công nghiệp
  - Kho lương thực
  - Nhà ăn tập thể
  
- **Hội Trường Phạm Nhân**
  - Tổ chức các hoạt động tập thể
  - Sân khấu
  - Hệ thống âm thanh

- **Khu Thăm Gặp**
  - Phòng thăm nuôi
  - Khu vực kiểm tra
  - Camera giám sát

- **Bệnh Xá**
  - Phòng khám
  - Giường bệnh
  - Thiết bị y tế
  - Network Rack

- **Khu vệ sinh ngoài trời** (42 m²)
  - Nhà vệ sinh
  - Bồn rửa
  - Hệ thống nước

### 2. Các Dãy Nhà Giam Chính (2 Tầng)

#### Dãy A (3 khu)
- Sức chứa: 360 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

#### Dãy B (3 khu)
- Sức chứa: 360 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

#### Dãy C (6 khu) - Lớn nhất
- Sức chứa: 720 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

#### Dãy D (3 khu)
- Sức chứa: 360 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

#### Dãy E (3 khu)
- Sức chứa: 360 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

#### Dãy F (3 khu)
- Sức chứa: 360 phạm nhân
- Cầu thang: 11 m²
- Network Rack
- Hệ thống giám sát

### 3. Nhà Chức Năng Khác

#### Nhà K (2 tầng, 6 khu)
- Sức chứa: 480 phạm nhân
- Sảnh: 15-16 m²
- Cầu thang: 12-13 m²
- Network Rack

#### Nhà NC01 (2 tầng, 2 khu)
- Sức chứa: 240 phạm nhân
- Cầu thang: 7 m²
- Hệ thống giám sát

#### Nhà NC02 (2 tầng, 2 khu)
- Sức chứa: 240 phạm nhân
- Cầu thang: 7 m²
- Hệ thống giám sát

#### Nhà P (2 tầng)
- Network Rack
- Chức năng đặc biệt

#### Các Nhà Khác
- Nhà M (2 tầng) - Network Rack
- Nhà S
- Nhà T
- Nhà H - Network Rack
- Nhà N
- Nhà V - Network Rack
- Nhà U - Network Rack

## Hạ Tầng Kỹ Thuật

### Network Infrastructure
- **Network Rack**: Phân bố rộng khắp toàn bộ khu vực
  - Mỗi dãy nhà giam có Network Rack
  - Các nhà chức năng đều có Network Rack
  - Phòng KSAN có Server trung tâm

### Các Số Đo Quan Trọng
- Kích thước khu vực: 45M, 88M, 86M, 104M, 110M, 60M, 33M
- Cầu thang tiêu chuẩn: 11 m² (dãy A-F)
- Cầu thang Nhà K: 12-13 m²
- Cầu thang Nhà NC: 7 m²
- Sảnh Nhà K: 15-16 m²
- Khu vệ sinh: 42 m²
- Cổng Trại: 17 m²

## Tổng Kết Sức Chứa

| Khu vực | Số khu | Sức chứa |
|---------|--------|----------|
| Dãy A | 3 | 360 |
| Dãy B | 3 | 360 |
| Dãy C | 6 | 720 |
| Dãy D | 3 | 360 |
| Dãy E | 3 | 360 |
| Dãy F | 3 | 360 |
| Nhà K | 6 | 480 |
| Nhà NC01 | 2 | 240 |
| Nhà NC02 | 2 | 240 |
| **Tổng** | **31** | **3,480** |

## Ánh Xạ Vào Hệ Thống Dashboard

Dữ liệu từ PDF đã được tích hợp vào [`prison-dashboard/src/services/mockApi.ts`](../prison-dashboard/src/services/mockApi.ts):

### 16 Zones Chính Đã Implement:
1. Cổng Trại (Entrance)
2. Dãy A (Cell Block)
3. Dãy B (Cell Block)
4. Dãy C (Cell Block)
5. Dãy D (Cell Block)
6. Dãy E (Cell Block)
7. Dãy F (Cell Block)
8. Nhà K (Cell Block)
9. Bệnh Xá (Medical)
10. Nhà Bếp & Nhà Ăn (Cafeteria)
11. Hội Trường Phạm Nhân (Common Area)
12. Khu Thăm Gặp (Visitation)
13. Nhà NC01 (Cell Block)
14. Nhà NC02 (Cell Block)
15. Phòng KSAN (Administration)
16. Khu vệ sinh ngoài trời (Common Area)

### Thông Tin Mỗi Zone Bao Gồm:
- ID duy nhất
- Tên tiếng Việt
- Loại zone (cell-block, medical, cafeteria, etc.)
- Sức chứa (capacity)
- Số người hiện tại (occupancy)
- Trạng thái (normal, alert, lockdown, maintenance)
- Mức độ an ninh (minimum, medium, maximum)
- Vị trí (building, floor, coordinates)

## Hiển Thị Trên Bản Đồ Interactive

Bản đồ số interactive ([`InteractivePrisonMap.tsx`](../prison-dashboard/src/components/map/InteractivePrisonMap.tsx)) hiển thị:
- 16 zones với vị trí theo tọa độ
- Màu sắc theo trạng thái (xanh=normal, vàng=alert, đỏ=lockdown)
- Icon phù hợp với loại zone
- Tooltip hiển thị thông tin chi tiết khi hover
- Click để chọn và xem chi tiết
- Hiệu ứng holographic theo phong cách cyber

## Đặc Điểm Kỹ Thuật

### Hệ Thống Giám Sát
- Camera an ninh toàn bộ khu vực
- Network Rack phân tán
- Server trung tâm tại Phòng KSAN
- Hệ thống cảnh báo tự động

### An Ninh
- Mức độ an ninh tối đa cho các dãy nhà giam
- Kiểm soát ra vào tại cổng trại
- Khu vực thăm gặp có giám sát nghiêm ngặt

### Tiện Ích
- Nhà bếp công nghiệp phục vụ 2847 phạm nhân
- Bệnh xá với thiết bị y tế đầy đủ
- Hội trường cho hoạt động tập thể
- Khu vệ sinh đầy đủ

## Ghi Chú Triển Khai

1. **Dữ liệu thực tế**: Mock data hiện tại dựa trên PDF, có thể thay thế bằng API backend
2. **Scalability**: Kiến trúc cho phép thêm zones mới dễ dàng
3. **Real-time**: Sẵn sàng tích hợp WebSocket để cập nhật theo thời gian thực
4. **Responsive**: Bản đồ tự động scale theo kích thước màn hình
5. **Accessibility**: Hỗ trợ tiếng Việt hoàn toàn

## Tài Liệu Tham Khảo
- [Technical Plan](./Prison_Digital_Map_Technical_Plan.md)
- [Component Implementation Guide](./Component_Implementation_Guide.md)
- [Interactive Map Feature](./Interactive_Map_3D_Feature.md)
- [Deployment Guide](../prison-dashboard/DEPLOYMENT.md)
