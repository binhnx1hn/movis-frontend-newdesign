# 🏛️ Dashboard Thống Kê Trại Giam - Sci-Fi Design Specifications

## 🎨 DESIGN SYSTEM - MODERN SCI-FI AESTHETIC

### Visual Theme
**Style Reference**: Futuristic command center with holographic elements, inspired by high-tech surveillance systems
- **Primary Color Palette**:
  - Cyber Blue: `#00D9FF` (main accent, glowing elements)
  - Electric Cyan: `#00FFF7` (highlights, active states)
  - Deep Navy: `#0A1628` (primary background)
  - Dark Slate: `#1A2332` (secondary background, cards)
  - Neon Green: `#00FF9D` (success, safe status)
  - Warning Amber: `#FFB800` (caution states)
  - Critical Red: `#FF004D` (alerts, danger)
  - Neutral Gray: `#6B7A8F` (text, borders)

- **Typography**:
  - Headers: `Orbitron` or `Rajdhani` (geometric, futuristic)
  - Body: `Inter` or `Roboto` (clean, readable)
  - Monospace Data: `JetBrains Mono` or `Fira Code` (technical displays)
  - Font Sizes: 48px (h1), 32px (h2), 24px (h3), 16px (body), 14px (small), 12px (labels)

- **Effects & Animations**:
  - Glow effects: `0 0 20px rgba(0, 217, 255, 0.6)` on active elements
  - Pulsing animations for real-time data (1.5s ease-in-out infinite)
  - Scanning lines overlay: subtle horizontal lines moving upward
  - Glass morphism: `backdrop-filter: blur(10px)` with `rgba(26, 35, 50, 0.8)`
  - Hexagonal patterns as subtle background texture
  - Grid overlays with 1px `rgba(0, 217, 255, 0.1)` lines
  - Smooth transitions: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

- **Layout Principles**:
  - Dark theme with high contrast
  - Floating panels with glowing borders
  - Geometric shapes (hexagons, angular corners)
  - Hierarchical information display
  - Abundant use of negative space
  - Technical grid system (12-column responsive)

### Component Styling Guidelines
- **Cards**: Dark background with cyan border glow, rounded corners (8px) with beveled edges
- **Buttons**: Glass effect with neon outline, hover state intensifies glow
- **Progress Bars**: Neon gradient fill with animated scanning effect
- **Charts**: Glowing data points, gradient fills, animated entry
- **Icons**: Line-style with glow effect, 24px standard size
- **Data Tables**: Alternating row opacity, hover highlights entire row
- **Alerts**: Full-width banner with animated border, icon pulses
- **Tooltips**: Glass morphism with arrow pointer, cyan accent border

## 🎯 CÁC THÀNH PHẦN DASHBOARD CHÍNH (Ưu Tiên Cao)

### 1. 🚨 Thông Báo Khẩn Cấp (Realtime Alert Panel)
**Vị trí**: Đầu trang, banner nổi bật màu đỏ/cam
**Mục đích**: Hiển thị các diễn biến HIGH RISK gần nhất

#### Dữ liệu hiển thị:
- **Thời gian xảy ra** (timestamp realtime)
- **Loại sự cố**:
  - 🔴 Đánh nhau/xô xát
  - 🔴 Cố gắng trốn trại
  - 🔴 Tự tử/tự gây thương tích
  - 🔴 Phát hiện vật cấm
  - 🔴 Phạm nhân bị bệnh nặng
  - 🔴 Sự cố thiết bị an ninh (camera hỏng, mất điện)
  - 🟠 Vi phạm nội quy nghiêm trọng
  - 🟠 Căng thẳng giữa các nhóm phạm nhân

#### Thông tin chi tiết:
- Khu vực xảy ra (tên khu + số buồng)
- Phạm nhân liên quan (mã số, họ tên)
- Mức độ nghiêm trọng (Critical/High/Medium)
- Tình trạng xử lý (Đang xử lý/Đã kiểm soát/Đã giải quyết)
- Cán bộ phụ trách
- Hành động đã/đang thực hiện
- Nút "Xem chi tiết" / "Báo cáo sự cố"

#### Tính năng:
- Tự động cập nhật realtime (WebSocket/SSE)
- Âm thanh cảnh báo khi có sự cố mới
- Lọc theo mức độ nghiêm trọng
- Lịch sử 24h gần nhất
- Xuất báo cáo sự cố

---

### 2. 🗺️ Bản Đồ Số Mini - Tổng Quan Sơ Đồ Trại + Metrics
**Vị trí**: Trung tâm dashboard, chiếm 40-50% màn hình
**Mục đích**: Visualize toàn bộ trại giam với các chỉ số quan trọng

#### Layout bản đồ:
```
┌─────────────────────────────────────────────────┐
│  🏛️ CỔng CHÍNH                                  │
├────────────┬────────────┬────────────┬──────────┤
│ KHU NAM A  │ KHU NAM B  │ KHU NỮ     │ Y TẾ     │
│ 450/500 👤 │ 380/400 👤 │ 120/150 👤 │ 15 🛏️   │
│ 📹 45/50   │ 📹 38/40   │ 📹 28/30   │ 📹 8/10  │
├────────────┼────────────┼────────────┼──────────┤
│ KHU LAO ĐỘNG│ KHU CÁCH LY│ CANTEEN   │ VĂN PHÒNG│
│ 200 👤     │ 25/50 👤   │ 🍽️        │ 👮 120   │
│ 📹 25/30   │ 📹 12/15   │ 📹 15/15   │ 📹 20/20 │
└────────────┴────────────┴────────────┴──────────┘
```

#### Metrics tổng quan (hiển thị quanh bản đồ):

**📊 Thống kê tổng thể:**
- **Tổng diện tích**: 50,000 m² (5 hecta)
- **Số khu vực**: 6 khu chính + 2 khu phụ
- **Tổng số phạm nhân**: 1,175 / 1,500 (78% công suất)
  - Nam: 830
  - Nữ: 120
  - Cách ly: 25
  - Lao động: 200
- **Tổng cán bộ quản giáo**: 120 người (tỷ lệ 1:9.8)
- **Tổng số buồng giam**: 85 buồng
  - Đang sử dụng: 78
  - Trống: 5
  - Bảo trì: 2
- **Camera giám sát**: 198/210 hoạt động (94.3%)

#### Tính năng tương tác:
- **Click vào khu vực**: Hiển thị chi tiết khu đó
- **Color coding**:
  - 🟢 Xanh: Bình thường (< 80% công suất)
  - 🟡 Vàng: Cần chú ý (80-95%)
  - 🔴 Đỏ: Quá tải (> 95%)
- **Icon realtime**: Nhấp nháy khi có sự cố
- **Nhiệt độ khu vực**: Hiển thị nhiệt độ realtime
- **Zoom in/out**: Phóng to/thu nhỏ bản đồ
- **Search**: Tìm kiếm buồng giam, phạm nhân

---

### 3. 📊 Biểu Đồ Quân Số Theo Khu Vực
**Vị trí**: Ngay dưới bản đồ số
**Loại biểu đồ**: Grouped Bar Chart (3 thanh/khu vực)

#### Dữ liệu hiển thị:

| Khu vực | Phạm nhân | Cán bộ | Phòng giam |
|---------|-----------|--------|------------|
| **Khu Nam A** | 450/500 👤 | 35 👮 | 25/28 🚪 |
| **Khu Nam B** | 380/400 👤 | 30 👮 | 22/24 🚪 |
| **Khu Nữ** | 120/150 👤 | 18 👮 | 12/15 🚪 |
| **Khu Cách Ly** | 25/50 👤 | 8 👮 | 5/10 🚪 |
| **Khu Lao Động** | 200/250 👤 | 15 👮 | - |
| **Khu Y Tế** | 15/20 🛏️ | 14 👨‍⚕️ | 4/5 🚪 |

#### Biểu đồ cột (Visual):
```
     500│    ■■■■■■■■■      ■■■■■■■■
        │    ■■■■■■■■■      ■■■■■■■■
     400│    ■■■■■■■■■      ■■■■■■■■      
        │    ■■■■■■■■■      ■■■■■■■■      ■■■
     300│    ■■■■■■■■■      ■■■■■■■■      ■■■
        │    ■■■■■■■■■      ■■■■■■■■      ■■■
     200│    ■■■■■■■■■      ■■■■■■■■      ■■■                ■■■
        │ █1 ■■■■■■■■■   █2 ■■■■■■■■   █3 ■■■             █5 ■■■
     100│ █1 ■■■■■■■■■   █2 ■■■■■■■■   █3 ■■■          █4 ■   ■■■    █6 ■
      ─┼────────────────────────────────────────────────────────────
        │ Nam A      Nam B      Nữ     Cách Ly  Lao Động   Y Tế

█1 = Phạm nhân   █2 = Công suất   █3 = Cán bộ   █4 = Cán bộ y tế   █5 = Lao động
```

#### Chi tiết metrics:
- **Tỷ lệ lấp đầy** (%):
  - Khu Nam A: 90% 🟡
  - Khu Nam B: 95% 🔴
  - Khu Nữ: 80% 🟢
  - Khu Cách Ly: 50% 🟢
  - Khu Lao Động: 80% 🟢
  - Khu Y Tế: 75% 🟢

- **Tỷ lệ cán bộ/phạm nhân**:
  - Khu Nam A: 1:12.9 🔴
  - Khu Nam B: 1:12.7 🔴
  - Khu Nữ: 1:6.7 🟢
  - Khu Cách Ly: 1:3.1 🟢
  - Khu Lao Động: 1:13.3 🔴

#### Tính năng:
- Hover để xem chi tiết số liệu
- So sánh với tháng trước
- Xuất báo cáo Excel/PDF
- Lọc theo loại dữ liệu (chỉ phạm nhân, chỉ cán bộ, etc.)

---

### 4. 📹 Biểu Đồ Số Lượng & Tình Trạng Camera Theo Khu Vực
**Vị trí**: Bên phải hoặc dưới biểu đồ quân số
**Loại biểu đồ**: Stacked Bar Chart (2 lớp: hoạt động/hỏng)

#### Dữ liệu 6 khu vực:

```
Camera  │
  50 ┤   ▓▓▓▓▓
     │   ▓▓▓▓▓  
  40 ┤   ▓▓▓▓▓   ░░░░
     │   ▓▓▓▓▓   ░░░░
  30 ┤   ▓▓▓▓▓   ░░░░   ▓▓▓
     │   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓
  20 ┤   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓         ▓▓       ▓▓       ▓▓
     │   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓   ░     ▓▓   ░   ▓▓   ░   ▓▓
  10 ┤   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓   ░     ▓▓   ░   ▓▓   ░   ▓▓
     │   ▓▓▓▓▓   ▓▓▓▓   ▓▓▓   ░     ▓▓   ░   ▓▓   ░   ▓▓
   ──┴────────────────────────────────────────────────────
       Nam A   Nam B    Nữ   Cách Ly Lao Động Canteen

▓ = Camera hoạt động    ░ = Camera hỏng/offline
```

#### Chi tiết theo khu vực:

| Khu vực | Tổng camera | Hoạt động | Hỏng/Offline | Tỷ lệ hoạt động | Trạng thái |
|---------|-------------|-----------|--------------|-----------------|------------|
| **Khu Nam A** | 50 | 45 | 5 | 90% 🟡 | 3 cần sửa, 2 đang sửa |
| **Khu Nam B** | 40 | 38 | 2 | 95% 🟢 | 2 cần sửa |
| **Khu Nữ** | 30 | 28 | 2 | 93% 🟢 | 1 cần sửa, 1 đang sửa |
| **Khu Cách Ly** | 15 | 12 | 3 | 80% 🟡 | 3 cần sửa khẩn cấp |
| **Khu Lao Động** | 30 | 25 | 5 | 83% 🟡 | 4 cần sửa, 1 đang sửa |
| **Canteen** | 15 | 15 | 0 | 100% 🟢 | Tốt |
| **Văn phòng** | 20 | 20 | 0 | 100% 🟢 | Tốt |
| **Cổng/Hành lang** | 10 | 10 | 0 | 100% 🟢 | Tốt |

#### Thống kê tổng:
- **Tổng số camera**: 210
- **Đang hoạt động**: 193 (91.9%)
- **Hỏng/Offline**: 17 (8.1%)
- **Đang bảo trì**: 7
- **Chờ sửa chữa**: 10
- **Vị trí mù (blind spots)**: 3 điểm ⚠️

#### Thông tin bổ sung:
- **Loại camera**:
  - Camera cố định: 150
  - Camera xoay (PTZ): 40
  - Camera nhận diện khuôn mặt: 20

- **Chất lượng hình ảnh**:
  - 4K: 50 camera
  - Full HD: 120 camera
  - HD: 40 camera

- **Tính năng**:
  - Ghi hình 24/7: 100%
  - Hồng ngoại ban đêm: 180/210
  - AI phát hiện bất thường: 20/210

#### Alert:
- 🔴 **Khẩn cấp**: 3 camera khu cách ly cần thay thế ngay
- 🟡 **Cảnh báo**: 7 camera có chất lượng hình ảnh giảm
- 📅 **Bảo trì định kỳ**: 15 camera cần kiểm tra tuần tới

---

### 5. 💻 Widget Quản Lý Tài Nguyên Servers
**Vị trí**: Sidebar phải hoặc góc dưới
**Loại**: Compact widget với metrics realtime

#### Thông tin hiển thị:

```
┌─────────────────────────────────────┐
│ 🖥️  HỆ THỐNG SERVERS                │
├─────────────────────────────────────┤
│                                     │
│ 🎯 Server Chính (Main)              │
│   CPU:  [████████░░] 78% 🟡        │
│   RAM:  [██████████] 92% 🔴        │
│   Disk: [█████░░░░░] 45% 🟢        │
│   Net:  ↓ 450 Mbps ↑ 120 Mbps      │
│   Uptime: 45 ngày 12 giờ           │
│                                     │
│ 📹 Server Camera & Video            │
│   CPU:  [██████░░░░] 65% 🟢        │
│   RAM:  [████████░░] 81% 🟡        │
│   Disk: [█████████░] 87% 🟡        │
│   Storage: 18.5 TB / 24 TB         │
│   Recording: ✅ Tất cả camera       │
│                                     │
│ 🗄️  Server Database                │
│   CPU:  [█████░░░░░] 52% 🟢        │
│   RAM:  [███████░░░] 73% 🟢        │
│   Disk: [████░░░░░░] 38% 🟢        │
│   DB Size: 2.8 TB                  │
│   Backup: ✅ Hôm nay 02:00         │
│                                     │
│ 🔐 Server Backup                    │
│   CPU:  [███░░░░░░░] 28% 🟢        │
│   RAM:  [█████░░░░░] 45% 🟢        │
│   Disk: [████████░░] 76% 🟡        │
│   Last backup: 2 giờ trước         │
│                                     │
│ 🌐 Server Web Application           │
│   CPU:  [█████░░░░░] 48% 🟢        │
│   RAM:  [██████░░░░] 58% 🟢        │
│   Response: 120ms (Tốt)            │
│   Users online: 45                 │
│                                     │
├─────────────────────────────────────┤
│ 📊 TỔNG QUAN HỆ THỐNG               │
│   ⚡ Nguồn điện: Lưới chính ✅      │
│   🔋 UPS: 100% (4 giờ dự phòng)    │
│   🌡️  Nhiệt độ phòng máy: 22°C 🟢  │
│   💨 Hệ thống làm mát: Hoạt động   │
│   🔥 Hệ thống PCCC: Sẵn sàng       │
│                                     │
│ ⚠️  CẢNH BÁO                        │
│   • RAM server chính gần đầy       │
│   • Cần dọn dẹp video cũ           │
│   • Kiểm tra fan server DB         │
│                                     │
│ [📈 Chi tiết] [🔄 Refresh]          │
└─────────────────────────────────────┘
```

#### Metrics chi tiết:

**🖥️ Server Chính (Main Server):**
- Model: Dell PowerEdge R750
- CPU: Intel Xeon Gold 6338 (32 cores)
- RAM: 256 GB DDR4 (sử dụng 235 GB)
- Storage: 4 TB NVMe SSD
- OS: Ubuntu Server 22.04 LTS
- Services: Core application, API, Authentication

**📹 Server Camera & Video:**
- Model: HPE ProLiant DL380 Gen10
- CPU: Intel Xeon Silver 4214 (24 cores)
- RAM: 192 GB DDR4
- Storage: 24 TB HDD RAID 6
- Retention: 60 ngày footage
- Streams: 210 camera concurrent

**🗄️ Server Database:**
- Model: Dell PowerEdge R740
- CPU: Intel Xeon Gold 6230 (40 cores)
- RAM: 384 GB DDR4
- Storage: 8 TB SSD RAID 10
- DB: PostgreSQL 15.2
- Records: 15M+ entries

**🔐 Server Backup:**
- Model: Synology RS4021xs+
- Storage: 96 TB (RAID 6)
- Backup schedule: 3x daily
- Retention: 90 ngày
- Off-site replica: ✅ Enabled

**🌐 Server Web Application:**
- Model: Virtual Machine (VMware)
- CPU: 16 vCPU
- RAM: 64 GB
- Framework: React + Node.js
- Load balancer: Nginx

#### Tính năng widget:
- ✅ Tự động refresh mỗi 30 giây
- ✅ Click để xem chi tiết từng server
- ✅ Graph lịch sử 24h
- ✅ Alert khi có vấn đề
- ✅ Remote restart (có xác nhận)
- ✅ Download system logs

---

### 6. 🍽️ Widget Quản Lý Tình Trạng Canteen
**Vị trí**: Sidebar phải hoặc bên widget servers
**Loại**: Compact status widget

#### Thông tin hiển thị:

```
┌─────────────────────────────────────┐
│ 🍽️  TÌNH TRẠNG CANTEEN              │
├─────────────────────────────────────┤
│                                     │
│ 📅 HÔM NAY - Thứ Sáu 06/03/2026     │
│                                     │
│ ☀️  BỮA SÁNG (06:00 - 07:30)        │
│   Trạng thái: ✅ Hoàn thành         │
│   • Phục vụ: 1,175 / 1,175 suất    │
│   • Thời gian: 1h 25 phút           │
│   • Đánh giá: ⭐⭐⭐⭐☆ (4.2/5)    │
│                                     │
│ 🌞 BỮA TRƯA (11:00 - 13:00) 🔴 LIVE │
│   Trạng thái: 🔄 Đang phục vụ       │
│   • Đã phục vụ: 856 / 1,175 suất   │
│   • Tiến độ: [████████░░] 73%      │
│   • Thời gian còn lại: 35 phút     │
│   • Khu đang phục vụ: Nam B, Nữ    │
│                                     │
│ 🌙 BỮA TỐI (17:00 - 18:30)          │
│   Trạng thái: ⏳ Đang chuẩn bị      │
│   • Thực đơn: Đã duyệt ✅           │
│   • Nguyên liệu: Đủ ✅              │
│   • Nhân sự: 12/12 người ✅         │
│                                     │
├─────────────────────────────────────┤
│ 📋 THỰC ĐƠN HÔM NAY                 │
│                                     │
│ Sáng: Phở gà + trứng + sữa đậu nành │
│ Trưa: Cơm + Thịt kho + Canh + Rau  │
│ Tối: Cơm + Cá kho + Canh + Rau     │
│                                     │
├─────────────────────────────────────┤
│ 🏪 KHO NGUYÊN LIỆU                  │
│                                     │
│ 🍚 Gạo: 850 kg (đủ 7 ngày) 🟢      │
│ 🥩 Thịt: 120 kg (đủ 2 ngày) 🟡     │
│ 🐟 Cá: 80 kg (đủ 2 ngày) 🟡        │
│ 🥬 Rau: 200 kg (đủ 1 ngày) 🔴      │
│ 🥚 Trứng: 1,500 quả (đủ 3 ngày) 🟢 │
│ 🧂 Gia vị: Đầy đủ ✅                │
│                                     │
│ ⚠️  Cần đặt hàng:                   │
│   • Rau tươi: 300 kg (giao mai)    │
│   • Thịt heo: 200 kg (giao T.2)    │
│                                     │
├─────────────────────────────────────┤
│ 👨‍🍳 NHÂN SỰ BẾP                     │
│                                     │
│ Ca sáng (04:00-10:00): 8/8 người   │
│ Ca trưa (09:00-15:00): 12/12 người │
│ Ca tối (14:00-20:00): 10/10 người  │
│                                     │
│ 📊 Hiệu suất tuần này: 96% 🟢      │
│ 😷 Nghỉ ốm: 0 người                │
│ 🏖️  Nghỉ phép: 2 người            │
│                                     │
├─────────────────────────────────────┤
│ 🧼 VỆ SINH AN TOÀN THỰC PHẨM        │
│                                     │
│ ✅ Kiểm tra vệ sinh hôm nay: Pass   │
│ ✅ Nhiệt độ kho lạnh: 2-4°C         │
│ ✅ Nhiệt độ kho đông: -18°C         │
│ ✅ Nguồn nước: Đạt chuẩn            │
│ ✅ Dụng cụ: Đã khử trùng            │
│                                     │
│ 📅 Kiểm tra y tế tiếp: 12/03/2026   │
│                                     │
├─────────────────────────────────────┤
│ 💰 CHI PHÍ ĂN UỐNG                  │
│                                     │
│ Hôm nay: 35,250,000 VND             │
│ • Sáng: 11,750,000 VNĐ              │
│ • Trưa: 14,100,000 VNĐ (dự kiến)   │
│ • Tối: 9,400,000 VNĐ (dự kiến)     │
│                                     │
│ Chi phí/người/bữa: ~10,000 VNĐ      │
│ Chi phí/người/ngày: ~30,000 VNĐ     │
│                                     │
│ Tháng này: 987,000,000 VNĐ          │
│ Ngân sách còn: 113,000,000 VNĐ 🟢   │
│                                     │
├─────────────────────────────────────┤
│ 📈 THỐNG KÊ THÁNG NÀY               │
│                                     │
│ Tổng bữa ăn phục vụ: 103,775       │
│ Đánh giá TB: ⭐⭐⭐⭐☆ (4.1/5)     │
│ Khiếu nại: 8 (đã xử lý 6)          │
│ Sự cố: 0 🟢                         │
│ Vi phạm VSATTP: 0 ✅                │
│                                     │
├─────────────────────────────────────┤
│ ⚠️  CẢNH BÁO & NHẮC NHỞ             │
│                                     │
│ • Rau tươi sắp hết, đặt hàng ngay  │
│ • Kiểm tra hệ thống lạnh khu B     │
│ • Thực đơn tuần sau cần duyệt      │
│                                     │
│ [📊 Báo cáo] [📋 Thực đơn tuần]     │
│ [🛒 Đặt hàng] [💬 Phản hồi]         │
└─────────────────────────────────────┘
```

#### Chi tiết bổ sung:

**🍽️ Năng lực Canteen:**
- Diện tích: 800 m²
- Số chỗ ngồi: 250 (phục vụ theo ca)
- Số ca ăn/bữa: 5 ca
- Thời gian/ca: 25-30 phút
- Bếp công nghiệp: 6 bếp gas, 2 nồi điện lớn
- Tủ lạnh: 4 tủ (tổng 3,000 lít)
- Kho đông: 2 phòng (20 m³)

**👨‍🍳 Quy trình phục vụ:**
1. Chuẩn bị (04:00)
2. Nấu ăn (05:00-06:00)
3. Phục vụ theo khu (06:00-07:30)
4. Dọn dẹp & khử trùng (07:30-08:30)
5. Chuẩn bị bữa tiếp theo

**🥗 Khẩu phần dinh dưỡng/người/ngày:**
- Calo: 2,400 kcal
- Protein: 70g
- Rau củ: 400g
- Gạo: 600g
- Thịt/cá: 150g
- Dầu ăn: 25g
- Gia vị: Theo định mức

**📱 Tính năng widget:**
- Realtime update trạng thái phục vụ
- Đánh giá chất lượng từ phạm nhân
- Quản lý kho tự động cảnh báo
- Lập kế hoạch thực đơn tuần/tháng
- Tính toán chi phí tự động
- Theo dõi nhân sự
- Xuất báo cáo chi tiết

---

## 📊 BỐ CỤC DASHBOARD TỔNG THỂ

```
┌────────────────────────────────────────────────────────────────────┐
│ 🏛️ TRẠI GIAM - DASHBOARD                   👤 Admin    ⚙️ │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ 🚨 [THÔNG BÁO KHẨN CẤP - Mục 1] ─────────────────────────────────┐│
│ │ 🔴 10:05 - Khu Nam B, Buồng 12: Xô xát giữa phạm nhân         ││
│ │ 🟠 09:45 - Khu Cách Ly: Camera số 7 mất tín hiệu              ││
│ │ 🟡 09:30 - Canteen: Chậm tiến độ phục vụ ca trưa              ││
│ └────────────────────────────────────────────────────────────────┘│
│                                                                     │
│ ┌─────────────────────────────────────┐  ┌────────────────────┐   │
│ │                                     │  │ 💻 [SERVERS]       │   │
│ │   🗺️ BẢN ĐỒ SỐ TRẠI GIAM          │  │ Widget Mục 5       │   │
│ │        (Mục 2)                      │  │                    │   │
│ │                                     │  │ Main: 78% CPU 🟡   │   │
│ │  [Interactive Map với metrics]     │  │ RAM: 92% 🔴        │   │
│ │                                     │  │                    │   │
│ │  Tổng diện tích: 50,000 m²         │  │ Camera: 65% 🟢     │   │
│ │  Phạm nhân: 1,175/1,500 (78%)      │  │ Disk: 87% 🟡       │   │
│ │  Cán bộ: 120                        │  │                    │   │
│ │  Camera: 193/210 hoạt động          │  │ DB: 52% CPU 🟢     │   │
│ │                                     │  │ Backup: ✅         │   │
│ └─────────────────────────────────────┘  │                    │   │
│                                           │ Web: 48% 🟢        │   │
│ ┌─────────────────────────────────────┐  │ 45 users online    │   │
│ │ 📊 BIỂU ĐỒ QUÂN SỐ THEO KHU VỰC    │  │                    │   │
│ │          (Mục 3)                    │  │ [Chi tiết]         │   │
│ │                                     │  └────────────────────┘   │
│ │  [Grouped Bar Chart]                │                           │
│ │  Nam A | Nam B | Nữ | Cách Ly...   │  ┌────────────────────┐   │
│ │                                     │  │ 🍽️ [CANTEEN]      │   │
│ │  👤 Phạm nhân | 👮 Cán bộ | 🚪 Phòng│  │ Widget Mục 6       │   │
│ └─────────────────────────────────────┘  │                    │   │
│                                           │ 🔴 LIVE - Trưa     │   │
│ ┌─────────────────────────────────────┐  │ 856/1,175 suất     │   │
│ │ 📹 CAMERA THEO KHU VỰC (Mục 4)     │  │ Tiến độ: 73%       │   │
│ │                                     │  │                    │   │
│ │  [Stacked Bar Chart]                │  │ Kho:               │   │
│ │  Nam A: 45/50 (90%) 🟡             │  │ 🍚 Gạo: 🟢        │   │
│ │  Nam B: 38/40 (95%) 🟢             │  │ 🥩 Thịt: 🟡       │   │
│ │  Nữ: 28/30 (93%) 🟢                │  │ 🥬 Rau: 🔴        │   │
│ │  Cách Ly: 12/15 (80%) 🟡           │  │                    │   │
│ │  Lao Động: 25/30 (83%) 🟡          │  │ Chi phí hôm nay:   │   │
│ │  Canteen: 15/15 (100%) 🟢          │  │ 35.2M VNĐ          │   │
│ │                                     │  │                    │   │
│ │  ⚠️ 17 camera cần sửa               │  │ Đánh giá: ⭐⭐⭐⭐ │   │
│ └─────────────────────────────────────┘  │                    │   │
│                                           │ [Chi tiết]         │   │
│                                           └────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 MÀU SẮC & THIẾT KẾ

### Color Coding:
- 🟢 **Xanh lá**: Tốt, bình thường (0-79%)
- 🟡 **Vàng**: Cần chú ý (80-94%)
- 🔴 **Đỏ**: Cảnh báo, quá tải (95-100%)
- ⚫ **Xám**: Offline, không hoạt động
- 🔵 **Xanh dương**: Thông tin, trung lập

### Icons:
- 👤 Phạm nhân
- 👮 Cán bộ quản giáo
- 👨‍⚕️ Nhân viên y tế
- 👨‍🍳 Nhân viên bếp
- 🚪 Phòng giam
- 🛏️ Giường bệnh
- 📹 Camera
- 🖥️ Server
- 🍽️ Canteen
- 🚨 Khẩn cấp

---

## 🔄 CẬP NHẬT DỮ LIỆU

### Tần suất refresh:
- **Thông báo khẩn cấp**: Realtime (WebSocket)
- **Bản đồ số**: 10 giây
- **Biểu đồ quân số**: 5 phút
- **Camera status**: 30 giây
- **Servers**: 30 giây
- **Canteen**: 60 giây (realtime khi đang phục vụ)

---

## 📱 RESPONSIVE DESIGN

### Desktop (1920x1080):
- Layout 2 cột: Nội dung chính (70%) + Widgets (30%)
- Hiển thị đầy đủ tất cả thông tin

### Tablet (1024x768):
- Layout 1 cột có sidebar thu gọn
- Widgets có thể đóng/mở

### Mobile (375x667):
- Layout vertical
- Ưu tiên: Cảnh báo khẩn cấp → Bản đồ → Metrics quan trọng
- Widgets dạng accordion

---

## 🔐 PHÂN QUYỀN

### Quản trị viên:
- Xem tất cả
- Chỉnh sửa cấu hình
- Quản lý users

### Lãnh đạo trại:
- Xem tất cả dashboard
- Xuất báo cáo
- Không chỉnh sửa

### Cán bộ trực:
- Xem dashboard realtime
- Cập nhật sự cố
- Không xem tài chính

### Y tế:
- Chỉ xem widget y tế
- Cập nhật tình trạng sức khỏe

### Canteen:
- Chỉ xem widget canteen
- Cập nhật trạng thái phục vụ

---

## 🚀 TÍNH NĂNG BỔ SUNG

### Export & Report:
- PDF: Báo cáo đầy đủ với charts
- Excel: Dữ liệu raw để phân tích
- Image: Snapshot dashboard
- Email: Tự động gửi báo cáo định kỳ

### Notifications:
- Browser push notifications
- Email alerts
- SMS cho sự cố nghiêm trọng
- Telegram/Zalo bot

### Integration:
- API để kết nối hệ thống khác
- Webhook cho sự kiện realtime
- Export data sang BI tools (Tableau, PowerBI)

---

**Phiên bản**: 2.0  
**Cập nhật**: 06/03/2026 - 17:00  
**Người tạo**: AI Assistant  
**Trạng thái**: ✅ Đã hoàn thiện theo yêu cầu
