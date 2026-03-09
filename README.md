# 🗺️ Prison Digital Map - Sci-Fi Dashboard

> Hệ thống bản đồ số và dashboard quản lý trại giam với giao diện futuristic

[![Status](https://img.shields.io/badge/Status-Architecture%20Complete-success)]()
[![Version](https://img.shields.io/badge/Version-1.0-blue)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

---

## 📖 Tổng Quan

Dự án xây dựng một dashboard hiện đại để quản lý và giám sát trại giam theo thời gian thực, với:

- 🗺️ **Bản đồ số tương tác** hiển thị toàn bộ khu vực trại giam
- 🚨 **Hệ thống cảnh báo** realtime với phân loại ưu tiên
- 📊 **Biểu đồ & metrics** trực quan hóa dữ liệu
- 💻 **Giám sát servers** và hệ thống infrastructure
- 🍽️ **Quản lý canteen** tích hợp

### Phong Cách Thiết Kế
Giao diện **sci-fi/futuristic** lấy cảm hứng từ command center với:
- Dark theme với neon cyan/blue accents
- Glass morphism effects
- Glow animations
- Smooth transitions

![Reference Design](./6150092258628275799.jpg)

---

## 📚 Tài Liệu

Dự án đã được thiết kế chi tiết với 5 tài liệu chính:

### 1. 📋 [Executive Summary](./plans/Executive_Summary.md)
Tóm tắt tổng quan dự án, timeline, tech stack, và next steps.

### 2. 🏗️ [Technical Plan](./plans/Prison_Digital_Map_Technical_Plan.md)
Kiến trúc hệ thống đầy đủ:
- Tech stack (React, Vite, TypeScript, Socket.io)
- Component architecture
- API endpoints
- Database schema
- Security & deployment

### 3. 🧩 [Component Implementation Guide](./plans/Component_Implementation_Guide.md)
Code chi tiết cho từng component:
- AlertBanner
- InteractivePrisonMap
- Charts (Population, Camera Status)
- Widgets (Server, Canteen)
- Animations & styles

### 4. 🎨 [Visual Mockup & Wireframe](./plans/Visual_Mockup_Wireframe.md)
Thiết kế UI/UX:
- Layout cho desktop/tablet/mobile
- Color schemes
- Component states
- Animation sequences
- Icon system

### 5. 🚀 [Implementation Roadmap](./plans/Implementation_Roadmap.md)
Lộ trình 8 tuần chi tiết:
- Week 1-2: Foundation
- Week 3-4: Core Components
- Week 5: Data Integration
- Week 6: Animations
- Week 7: Features
- Week 8: Testing & Deploy

---

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **D3.js + Recharts** - Data visualization
- **Socket.io Client** - Real-time updates

### Backend (Đề xuất)
- **Node.js + Express** - API server
- **PostgreSQL** - Main database
- **TimescaleDB** - Time-series metrics
- **Redis** - Caching
- **Socket.io Server** - WebSocket

---

## 🎯 Core Features

### 1. 🚨 Real-time Alert System
```
┌────────────────────────────────────────┐
│ 🔴 CRITICAL  [Đang xử lý]              │
│ 10:05 - Khu Nam B: Xô xát phạm nhân   │
│ 🟠 HIGH  [Đã kiểm soát]               │
│ 09:45 - Khu Cách Ly: Camera offline   │
└────────────────────────────────────────┘
```

### 2. 🗺️ Interactive Prison Map
```
┌──────────────────────────────────────┐
│  🏛️ CỔNG CHÍNH                        │
├──────┬──────┬──────┬─────────────────┤
│ NAM A│ NAM B│  NỮ  │   Y TẾ          │
│ 450  │ 380  │ 120  │   15            │
│ 90%🟡│ 95%🔴│ 80%🟢│  75%🟢          │
└──────┴──────┴──────┴─────────────────┘
```

### 3. 📊 Charts & Analytics
- Population by zone (Grouped Bar Chart)
- Camera status (Stacked Bar Chart)
- Trend analysis
- Export to PDF/Excel

### 4. 💻 System Monitoring
- 5 servers (Main, Camera, DB, Backup, Web)
- CPU, RAM, Disk metrics
- Real-time alerts

### 5. 🍽️ Canteen Management
- Live meal service tracking
- Inventory management
- Budget tracking

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 18
npm >= 9
Git
```

### Quick Start
```bash
# Clone repository
git clone <repository-url>
cd prison-dashboard

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start development server
npm run dev
```

### Project Structure
```
prison-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── AlertBanner/
│   │   ├── PrisonMap/
│   │   ├── Charts/
│   │   └── Widgets/
│   ├── hooks/               # Custom hooks
│   ├── services/            # API services
│   ├── stores/              # State management
│   ├── types/               # TypeScript types
│   ├── utils/               # Utilities
│   └── styles/              # Global styles
├── public/                  # Static assets
├── plans/                   # Documentation
└── package.json
```

---

## 📅 Timeline

**Total Duration:** 8 weeks

```
Week 1-2  │ ████████░░░░░░░░░░░░░░░░░░░░ │ Foundation
Week 3-4  │ ░░░░░░░░████████░░░░░░░░░░░░ │ Core Components
Week 5    │ ░░░░░░░░░░░░░░░░████░░░░░░░░ │ Data Integration
Week 6    │ ░░░░░░░░░░░░░░░░░░░░████░░░░ │ Animations
Week 7    │ ░░░░░░░░░░░░░░░░░░░░░░░░████ │ Features
Week 8    │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ Testing & Deploy
```

---

## 🎨 Design System

### Colors
```css
--cyber-blue:     #00D9FF  /* Main accent */
--electric-cyan:  #00FFF7  /* Highlights */
--neon-green:     #00FF9D  /* Success */
--warning-amber:  #FFB800  /* Warning */
--critical-red:   #FF004D  /* Critical */
--deep-navy:      #0A1628  /* Background */
--dark-slate:     #1A2332  /* Cards */
```

### Typography
- **Headers:** Orbitron (futuristic)
- **Body:** Inter (clean, readable)
- **Monospace:** JetBrains Mono (technical data)

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview build
npm run preview

# Docker
docker build -t prison-dashboard .
docker run -p 80:80 prison-dashboard
```

---

## 📊 Performance Targets

- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ Lighthouse Score > 90
- ✅ Bundle Size < 500KB (gzipped)

---

## 🤝 Contributing

1. Review [Technical Plan](./plans/Prison_Digital_Map_Technical_Plan.md)
2. Check [Implementation Roadmap](./plans/Implementation_Roadmap.md)
3. Follow coding standards
4. Write tests
5. Submit PR

---

## 📞 Support

- 📖 **Documentation:** [`/plans`](./plans/)
- 🐛 **Issues:** GitHub Issues
- 💬 **Discussions:** GitHub Discussions

---

## 📝 License

MIT License - see LICENSE file for details

---

## 🎯 Next Steps

### For Project Managers
1. Review [Executive Summary](./plans/Executive_Summary.md)
2. Approve timeline and resources
3. Setup team and tools

### For Developers
1. Read [Technical Plan](./plans/Prison_Digital_Map_Technical_Plan.md)
2. Review [Component Guide](./plans/Component_Implementation_Guide.md)
3. Setup development environment
4. Start with Phase 1

### For Designers
1. Review [Visual Mockups](./plans/Visual_Mockup_Wireframe.md)
2. Refine design assets
3. Create component variations

---

**Project Status:** 🏗️ Architecture Complete - Ready for Development  
**Version:** 1.0  
**Last Updated:** 2026-03-09
