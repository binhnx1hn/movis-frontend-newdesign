# Prison Digital Map Dashboard

A modern, real-time prison management dashboard with cyber/sci-fi aesthetic, built with React, TypeScript, and Vite.

## 🚀 Features

- **Real-time Monitoring**: Live alerts, statistics, and zone status updates
- **Cyber/Sci-Fi UI**: Holographic effects, neon glow, glass morphism
- **Responsive Design**: Mobile, tablet, and desktop support
- **Interactive Dashboard**: Stats cards, alert management, quick actions
- **Type-Safe**: Full TypeScript implementation
- **State Management**: Zustand for efficient state handling
- **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom cyber theme
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Visualization**: D3.js (planned), Recharts
- **Real-time**: Socket.io (planned)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
prison-dashboard/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Sidebar, MainLayout
│   │   ├── common/          # AlertBanner, StatsGrid
│   │   ├── map/             # Interactive map (planned)
│   │   ├── charts/          # Chart components (planned)
│   │   └── widgets/         # Dashboard widgets (planned)
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services and mock data
│   ├── stores/              # Zustand stores
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Helper functions
│   └── styles/              # Additional styles
├── public/                  # Static assets
└── dist/                    # Production build (generated)
```

## 🎨 Design System

### Colors
- **Primary**: `#00D9FF` (Cyan)
- **Secondary**: `#0099FF` (Blue)
- **Danger**: `#FF3366` (Red)
- **Success**: `#00FF88` (Green)
- **Warning**: `#FFD700` (Gold)
- **Background**: `#0A0E27` (Dark Blue)

### Typography
- **Display**: Orbitron (headings)
- **Body**: Inter (text)
- **Mono**: Fira Code (code/data)

### Effects
- Glass morphism panels
- Neon glow effects
- Holographic grid background
- Scan line animations
- Smooth transitions

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

### Tailwind Configuration

Custom theme is defined in `tailwind.config.js` with cyber-themed colors, animations, and utilities.

### TypeScript Configuration

Path aliases are configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/utils/*` → `./src/utils/*`
- etc.

## 📊 Mock Data

The application currently uses mock data from `src/services/mockApi.ts` for development. Replace with real API calls when backend is ready.

## 🚧 Roadmap

- [x] Project setup and configuration
- [x] Layout components (Header, Sidebar)
- [x] Dashboard with stats and alerts
- [x] State management with Zustand
- [x] Mock API services
- [ ] Interactive 2D/3D prison map with D3.js
- [ ] Real-time WebSocket integration
- [ ] Charts and analytics
- [ ] Advanced filtering and search
- [ ] User authentication
- [ ] Backend API integration

## 📝 License

MIT License - see LICENSE file for details

## 👥 Contributors

Built with ❤️ for modern prison management systems
