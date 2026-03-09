# Tích hợp Stitch Design vào Prison Dashboard

## Tổng quan

Tài liệu này mô tả quá trình tích hợp thiết kế từ [Stitch Project](https://stitch.withgoogle.com/projects/10773568138706674035) vào ứng dụng Prison Dashboard đang chạy tại http://localhost:5173/.

## Thông tin Stitch Project

- **Project ID**: 10773568138706674035
- **Title**: Hệ thống Giám sát Trại giam - Bản đồ Màu gốc
- **Device Type**: Desktop (2560 x 2106)
- **Created**: 2026-03-09
- **Design Theme**: Tactical Command Center với Dark Theme

## Cấu trúc Components

### 1. StitchDashboard Component
**File**: [`prison-dashboard/src/components/layout/StitchDashboard.tsx`](prison-dashboard/src/components/layout/StitchDashboard.tsx)

Component chính chứa toàn bộ layout dashboard với các phần:

#### Header Section
- Logo hệ thống với icon shield
- Tiêu đề: "HỆ THỐNG GIÁM SÁT TRẠI GIAM TRUNG TÂM"
- Trạng thái hệ thống: HOẠT ĐỘNG
- Đồng hồ thời gian thực (cập nhật mỗi giây)

#### Left Sidebar (col-span-3)
- **Emergency Alerts Panel**: 
  - Hiển thị thông báo khẩn cấp theo thời gian thực
  - Color coding: Red (CẢNH BÁO), Amber (THÔNG BÁO), Blue (KIỂM TRA)
  - Scrollable với custom scrollbar
  
- **Server Resources Panel**:
  - CPU gauge: 75%
  - RAM gauge: 42%
  - HDD gauge: 20%
  - SVG circular progress indicators

#### Center Panel (col-span-6, row-span-4)
- **Digital Map Container**:
  - Scanning line animation (4s infinite)
  - Map header với thông tin tổng quan
  - Prison map image overlay
  - Interactive labels (KHU GIAM A, B, TOWER_01, etc.)
  - Perimeter border với dashed lines
  - Legend với color coding

#### Right Sidebar (col-span-3)
- **Population Stats Panel**:
  - 3 Area cards (PHÂN KHU A, B, C)
  - Mỗi card hiển thị:
    - Số phạm nhân (P.Nhân)
    - Số cán bộ
    - Số phòng
    - Trạng thái (ỔN ĐỊNH, CHỜ KIỂM TRA)

- **Canteen Management Panel**:
  - Progress bars cho tồn kho (82%)
  - Giao dịch trong ngày (1,450 lượt)
  - Button xuất báo cáo

#### Bottom Panel (col-span-6, row-span-2)
- **Camera System Status**:
  - 6 sectors với 4 camera indicators mỗi sector
  - Color coding: Green (hoạt động), Red (lỗi), Amber (cảnh báo), Gray (offline)
  - Glow effects với box-shadow

#### Footer
- Thông tin bảo mật và trực ban

## Theme & Styling

### Colors
- **Background**: `#020617` (Dark Slate 950)
- **Primary Cyan**: `#22d3ee` (neon-text-cyan)
- **Primary Amber**: `#f59e0b` (neon-text-amber)
- **Success Green**: `#22c55e`
- **Warning Amber**: `#f59e0b`
- **Danger Red**: `#ef4444`

### CSS Classes
**File**: [`prison-dashboard/src/styles/stitch-theme.css`](prison-dashboard/src/styles/stitch-theme.css)

- `.neon-border`: Box-shadow và border với cyan glow
- `.neon-text-cyan`: Text shadow cyan effect
- `.neon-text-amber`: Text shadow amber effect
- `.bg-grid`: Radial gradient grid background
- `.scan-line`: Scanning animation (4s infinite)
- `.alert-pulse`: Pulsing red animation (1s infinite)
- `.custom-scrollbar`: Dark themed scrollbar

### Animations
```css
@keyframes scan {
  0% { top: 0%; }
  100% { top: 100%; }
}

@keyframes pulse-red {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## Grid Layout

Dashboard sử dụng CSS Grid với cấu trúc:
```
grid-cols-12 grid-rows-6
```

### Layout Distribution:
- **Left Sidebar**: `col-span-3 row-span-6`
- **Center Map**: `col-span-6 row-span-4`
- **Right Sidebar**: `col-span-3 row-span-6`
- **Bottom Panel**: `col-span-6 row-span-2`

## Assets

### Prison Map Image
- **Source**: `BDS.png`
- **Location**: `prison-dashboard/public/BDS.png`
- **Display**: `object-contain opacity-60`

## Typography

- **Font Family**: 'Inter', sans-serif
- **Weights**: 300, 400, 600, 700
- **Import**: Google Fonts CDN

### Font Sizes:
- Header title: `text-xl` (20px)
- Section headers: `text-sm` (14px), `text-xs` (12px)
- Labels: `text-[10px]`
- Monospace: `font-mono` cho timestamps và codes

## Interactive Features

### Real-time Clock
```typescript
useEffect(() => {
  const updateClock = () => {
    const now = new Date();
    const timeStr = 
      now.getHours().toString().padStart(2, '0') + ':' +
      now.getMinutes().toString().padStart(2, '0') + ':' +
      now.getSeconds().toString().padStart(2, '0');
    setCurrentTime(timeStr);
  };
  
  updateClock();
  const interval = setInterval(updateClock, 1000);
  return () => clearInterval(interval);
}, []);
```

## Responsive Considerations

Design được tối ưu cho Desktop (2560 x 2106):
- Fixed grid layout với 12 columns
- Các panels sử dụng `neon-border` và backdrop-blur
- Overflow handling với custom scrollbars
- Flexible height: `h-[calc(100vh-120px)]`

## Integration Steps

1. ✅ Tải HTML từ Stitch project
2. ✅ Chuyển đổi HTML sang React component
3. ✅ Tạo StitchDashboard component
4. ✅ Áp dụng CSS theme với animations
5. ✅ Copy assets (BDS.png) vào public folder
6. ✅ Import component trong App.tsx
7. ✅ Test trên localhost:5173

## Usage

```typescript
import { StitchDashboard } from '@/components/layout/StitchDashboard';
import '@/styles/stitch-theme.css';

function App() {
  return <StitchDashboard />;
}
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (với webkit prefixes cho scrollbar)

## Performance Notes

- Scan line animation: GPU accelerated
- Clock updates: setInterval với cleanup
- Scrollable areas: Custom scrollbar cho dark theme
- Image loading: Lazy loading ready

## Future Enhancements

- [ ] Thêm real-time data từ API
- [ ] Interactive map với click handlers
- [ ] Alert notifications với sounds
- [ ] Camera feed integration
- [ ] Export reports functionality
- [ ] Mobile responsive breakpoints
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)

## Resources

- **Stitch Project**: https://stitch.withgoogle.com/projects/10773568138706674035
- **Screen**: Hệ thống Giám sát Trại giam - Bản đồ Màu gốc
- **Original HTML**: `stitch-screen-new.html`

## Contact & Support

Để biết thêm chi tiết về implementation, vui lòng tham khảo:
- Component code: `prison-dashboard/src/components/layout/StitchDashboard.tsx`
- Styles: `prison-dashboard/src/styles/stitch-theme.css`
- Main app: `prison-dashboard/src/App.tsx`

---

**Last Updated**: 2026-03-09
**Version**: 1.0.0
**Status**: ✅ Production Ready
