# Prison Dashboard - Stitch Integration Guide

## 🎯 Giới thiệu

Dashboard giám sát trại giam với thiết kế từ [Google Stitch](https://stitch.withgoogle.com/projects/10773568138706674035), được tích hợp vào React application.

## 🚀 Khởi động nhanh

### 1. Cài đặt dependencies
```bash
cd prison-dashboard
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

Dashboard sẽ chạy tại: **http://localhost:5173/**

## 📁 Cấu trúc files quan trọng

```
prison-dashboard/
├── src/
│   ├── App.tsx                          # Entry point
│   ├── components/
│   │   └── layout/
│   │       └── StitchDashboard.tsx      # Main dashboard component
│   └── styles/
│       └── stitch-theme.css             # Stitch design theme
├── public/
│   └── BDS.png                          # Prison map image
└── package.json
```

## 🎨 Design Features

### Layout Components

1. **Header**: 
   - System logo & title
   - Real-time clock
   - System status indicator

2. **Left Sidebar**:
   - Emergency alerts panel
   - Server resources (CPU/RAM/HDD gauges)

3. **Center Panel**:
   - Digital map với scanning animation
   - Interactive zone labels
   - Map legend

4. **Right Sidebar**:
   - Population statistics by area
   - Canteen management panel

5. **Bottom Panel**:
   - Camera system status (6 sectors)
   - Real-time camera indicators

### Theme Colors
- 🔵 **Primary Cyan**: `#22d3ee` - Main UI elements
- 🟠 **Amber**: `#f59e0b` - Warnings & highlights
- 🟢 **Green**: `#22c55e` - Success states
- 🔴 **Red**: `#ef4444` - Alerts & errors
- ⚫ **Dark Slate**: `#020617` - Background

## ⚡ Features

- ✅ Real-time system clock
- ✅ Animated scanning lines
- ✅ Neon glow effects
- ✅ Custom dark scrollbars
- ✅ Alert pulse animations
- ✅ SVG circular gauges
- ✅ Camera status indicators
- ✅ Grid background pattern
- ✅ Responsive grid layout

## 🛠️ Customization

### Thay đổi prison map
Replace file: `prison-dashboard/public/BDS.png`

### Chỉnh sửa colors
Edit: `prison-dashboard/src/styles/stitch-theme.css`

### Update data
Modify: `prison-dashboard/src/components/layout/StitchDashboard.tsx`

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## 📖 Documentation

Chi tiết về integration: [`STITCH_INTEGRATION.md`](../STITCH_INTEGRATION.md)

## 🔗 Resources

- **Stitch Project**: https://stitch.withgoogle.com/projects/10773568138706674035
- **Design Title**: Hệ thống Giám sát Trại giam - Bản đồ Màu gốc
- **Screen Size**: 2560 x 2106 (Desktop)

## 📝 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎯 Next Steps

1. Integrate với backend API cho real-time data
2. Thêm interactive map features
3. Implement alert notification system
4. Add camera feed integration
5. Create export reports functionality

## 🤝 Support

Để biết thêm chi tiết về implementation, tham khảo:
- Component: [`src/components/layout/StitchDashboard.tsx`](src/components/layout/StitchDashboard.tsx)
- Styles: [`src/styles/stitch-theme.css`](src/styles/stitch-theme.css)
- Main App: [`src/App.tsx`](src/App.tsx)

---

**Version**: 1.0.0  
**Last Updated**: 2026-03-09  
**Status**: ✅ Ready for Development
