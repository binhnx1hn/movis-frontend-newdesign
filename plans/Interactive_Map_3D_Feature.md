# 🗺️ Interactive 2D/3D Prison Map Feature
## Bản Đồ Tương Tác Theo Phong Cách Sci-Fi

---

## 🎯 Concept Overview

Dựa trên hình mẫu [`6150092258628275799.jpg`](../6150092258628275799.jpg), chúng ta sẽ tạo một **bản đồ 2D/3D tương tác** của trại giam với phong cách holographic tương tự bản đồ thế giới trong hình mẫu.

### Điểm Nổi Bật
- 🌍 **Bản đồ holographic** với hiệu ứng phát sáng cyan/blue
- 🎨 **Interactive zones** có thể click và hover
- 📊 **Real-time data overlay** hiển thị metrics trên bản đồ
- ✨ **Animation effects** như scanning lines, pulsing points
- 🔄 **3D rotation** (optional) để xem từ nhiều góc độ

---

## 🎨 Visual Design

### Layout Position
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                      │
├─────────────────────────────────────────────────────────────┤
│ ALERTS                                                      │
├──────────────────────────────┬──────────────────────────────┤
│                              │ WIDGETS                      │
│  🗺️ INTERACTIVE 3D MAP       │ - Servers                    │
│  (Center Focus)              │ - Canteen                    │
│                              │ - Stats                      │
│  Holographic prison layout   │                              │
│  with glowing zones          │                              │
│                              │                              │
├──────────────────────────────┴──────────────────────────────┤
│ CHARTS & METRICS                                            │
└─────────────────────────────────────────────────────────────┘
```

### Map Visual Elements

#### 1. Base Map Layer
```
Bản đồ 2D top-down view của trại giam:

        ╔═══════════════════╗
        ║   CỔNG CHÍNH      ║
        ╚═══════════════════╝
                 ║
    ┌────────────┼────────────┐
    │            │            │
┌───┴───┐    ┌──┴───┐    ┌──┴───┐
│ KHU   │    │ KHU  │    │ KHU  │
│ NAM A │    │ NAM B│    │ NỮ   │
│ [450] │    │[380] │    │[120] │
└───┬───┘    └──┬───┘    └──┬───┘
    │           │            │
    └───────────┼────────────┘
                │
    ┌───────────┼────────────┐
    │           │            │
┌───┴───┐   ┌──┴───┐    ┌──┴───┐
│ LAO   │   │CÁCH  │    │CANT- │
│ ĐỘNG  │   │ LY   │    │ EEN  │
│ [200] │   │ [25] │    │ [✓]  │
└───────┘   └──────┘    └──────┘
```

#### 2. Holographic Glow Effect
- **Neon cyan outline** cho các building/zones
- **Pulsing glow** trên các zone có alert
- **Connecting lines** giữa các khu vực với animated dots
- **Grid pattern** overlay như trong hình mẫu

#### 3. Data Points Overlay
```
Trên mỗi zone hiển thị:
┌──────────────────┐
│ KHU NAM A        │ ← Zone name
│ ████████░░ 90%   │ ← Occupancy bar
│ 👤 450/500       │ ← Inmate count
│ 📹 45/50 ✓       │ ← Camera status
│ 🌡️ 24°C          │ ← Temperature
└──────────────────┘
```

---

## 🛠️ Technical Implementation

### Option 1: Using D3.js (2D Interactive)

```typescript
// components/PrisonMap/InteractiveMap2D.tsx
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface MapZone {
  id: string;
  name: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  occupancy: number;
  status: 'normal' | 'warning' | 'critical';
  connections: string[]; // IDs of connected zones
}

export const InteractiveMap2D = ({ zones }: { zones: MapZone[] }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    const width = 1200;
    const height = 800;
    
    // Create holographic background
    const defs = svg.append('defs');
    
    // Glow filter
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'coloredBlur');
    
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
    
    // Grid pattern background
    const grid = svg.append('g').attr('class', 'grid-pattern');
    
    for (let x = 0; x < width; x += 50) {
      grid.append('line')
        .attr('x1', x).attr('y1', 0)
        .attr('x2', x).attr('y2', height)
        .attr('stroke', '#00D9FF')
        .attr('stroke-opacity', 0.1)
        .attr('stroke-width', 1);
    }
    
    for (let y = 0; y < height; y += 50) {
      grid.append('line')
        .attr('x1', 0).attr('y1', y)
        .attr('x2', width).attr('y2', y)
        .attr('stroke', '#00D9FF')
        .attr('stroke-opacity', 0.1)
        .attr('stroke-width', 1);
    }
    
    // Draw connection lines between zones
    const connections = svg.append('g').attr('class', 'connections');
    
    zones.forEach(zone => {
      zone.connections.forEach(targetId => {
        const target = zones.find(z => z.id === targetId);
        if (!target) return;
        
        const line = connections.append('line')
          .attr('x1', zone.position.x + zone.size.width / 2)
          .attr('y1', zone.position.y + zone.size.height / 2)
          .attr('x2', target.position.x + target.size.width / 2)
          .attr('y2', target.position.y + target.size.height / 2)
          .attr('stroke', '#00D9FF')
          .attr('stroke-opacity', 0.3)
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5,5')
          .attr('filter', 'url(#glow)');
        
        // Animated dot along the line
        const circle = connections.append('circle')
          .attr('r', 3)
          .attr('fill', '#00FFF7');
        
        // Animate dot movement
        function animateDot() {
          circle
            .attr('cx', zone.position.x + zone.size.width / 2)
            .attr('cy', zone.position.y + zone.size.height / 2)
            .transition()
            .duration(3000)
            .ease(d3.easeLinear)
            .attr('cx', target.position.x + target.size.width / 2)
            .attr('cy', target.position.y + target.size.height / 2)
            .on('end', animateDot);
        }
        animateDot();
      });
    });
    
    // Draw zones
    const zonesGroup = svg.append('g').attr('class', 'zones');
    
    zones.forEach((zone, index) => {
      const zoneGroup = zonesGroup.append('g')
        .attr('class', 'zone')
        .attr('transform', `translate(${zone.position.x}, ${zone.position.y})`);
      
      const statusColor = 
        zone.status === 'critical' ? '#FF004D' :
        zone.status === 'warning' ? '#FFB800' : '#00FF9D';
      
      // Zone rectangle with glow
      zoneGroup.append('rect')
        .attr('width', zone.size.width)
        .attr('height', zone.size.height)
        .attr('fill', 'rgba(26, 35, 50, 0.8)')
        .attr('stroke', statusColor)
        .attr('stroke-width', 3)
        .attr('rx', 8)
        .attr('filter', 'url(#glow)')
        .style('cursor', 'pointer')
        .on('mouseenter', function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('stroke-width', 5)
            .attr('fill', 'rgba(26, 35, 50, 0.95)');
        })
        .on('mouseleave', function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('stroke-width', 3)
            .attr('fill', 'rgba(26, 35, 50, 0.8)');
        })
        .on('click', () => handleZoneClick(zone));
      
      // Zone name
      zoneGroup.append('text')
        .attr('x', zone.size.width / 2)
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .attr('fill', '#00D9FF')
        .attr('font-family', 'Orbitron')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .text(zone.name);
      
      // Occupancy bar
      const barWidth = zone.size.width - 40;
      const barHeight = 8;
      const barY = zone.size.height - 40;
      
      zoneGroup.append('rect')
        .attr('x', 20)
        .attr('y', barY)
        .attr('width', barWidth)
        .attr('height', barHeight)
        .attr('fill', 'rgba(107, 122, 143, 0.3)')
        .attr('rx', 4);
      
      zoneGroup.append('rect')
        .attr('x', 20)
        .attr('y', barY)
        .attr('width', 0)
        .attr('height', barHeight)
        .attr('fill', statusColor)
        .attr('rx', 4)
        .attr('filter', 'url(#glow)')
        .transition()
        .duration(1000)
        .delay(index * 100)
        .attr('width', (zone.occupancy / 100) * barWidth);
      
      // Percentage text
      zoneGroup.append('text')
        .attr('x', zone.size.width / 2)
        .attr('y', barY - 10)
        .attr('text-anchor', 'middle')
        .attr('fill', statusColor)
        .attr('font-family', 'JetBrains Mono')
        .attr('font-size', '14px')
        .text(`${zone.occupancy}%`);
      
      // Pulsing effect for critical zones
      if (zone.status === 'critical') {
        zoneGroup.select('rect:first-child')
          .transition()
          .duration(1000)
          .attr('stroke-opacity', 0.5)
          .transition()
          .duration(1000)
          .attr('stroke-opacity', 1)
          .on('end', function repeat() {
            d3.select(this)
              .transition()
              .duration(1000)
              .attr('stroke-opacity', 0.5)
              .transition()
              .duration(1000)
              .attr('stroke-opacity', 1)
              .on('end', repeat);
          });
      }
    });
    
    // Scanning line effect
    const scanLine = svg.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', width)
      .attr('y2', 0)
      .attr('stroke', '#00D9FF')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.5)
      .attr('filter', 'url(#glow)');
    
    function animateScanLine() {
      scanLine
        .attr('y1', 0)
        .attr('y2', 0)
        .transition()
        .duration(3000)
        .ease(d3.easeLinear)
        .attr('y1', height)
        .attr('y2', height)
        .on('end', animateScanLine);
    }
    animateScanLine();
    
  }, [zones]);
  
  const handleZoneClick = (zone: MapZone) => {
    console.log('Zone clicked:', zone);
    // Open detail modal
  };
  
  return (
    <div className="relative w-full h-full bg-deep-navy rounded-xl overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
        className="border border-cyber-blue/30"
      />
    </div>
  );
};
```

### Option 2: Using Three.js + React Three Fiber (3D)

```typescript
// components/PrisonMap/InteractiveMap3D.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Line } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ZoneProps {
  position: [number, number, number];
  size: [number, number, number];
  name: string;
  occupancy: number;
  status: 'normal' | 'warning' | 'critical';
  onClick: () => void;
}

const Zone3D = ({ position, size, name, occupancy, status, onClick }: ZoneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  const color = 
    status === 'critical' ? '#FF004D' :
    status === 'warning' ? '#FFB800' : '#00FF9D';
  
  // Pulsing animation for critical zones
  useFrame((state) => {
    if (meshRef.current && status === 'critical') {
      meshRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      );
    }
  });
  
  return (
    <group position={position}>
      {/* Main building box */}
      <Box
        ref={meshRef}
        args={size}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? color : '#1A2332'}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </Box>
      
      {/* Glowing edges */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(...size)]} />
        <lineBasicMaterial 
          attach="material" 
          color={color}
          linewidth={2}
        />
      </lineSegments>
      
      {/* Zone label */}
      <Text
        position={[0, size[1] / 2 + 0.5, 0]}
        fontSize={0.5}
        color="#00D9FF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Orbitron-Bold.ttf"
      >
        {name}
      </Text>
      
      {/* Occupancy text */}
      <Text
        position={[0, size[1] / 2 + 0.2, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {occupancy}%
      </Text>
    </group>
  );
};

const GridFloor = () => {
  return (
    <gridHelper 
      args={[50, 50, '#00D9FF', '#00D9FF']} 
      position={[0, -5, 0]}
      material-opacity={0.2}
      material-transparent
    />
  );
};

export const InteractiveMap3D = () => {
  const zones = [
    { id: 1, name: 'KHU NAM A', position: [-8, 0, -5] as [number, number, number], size: [4, 3, 4] as [number, number, number], occupancy: 90, status: 'warning' as const },
    { id: 2, name: 'KHU NAM B', position: [0, 0, -5] as [number, number, number], size: [4, 3, 4] as [number, number, number], occupancy: 95, status: 'critical' as const },
    { id: 3, name: 'KHU NỮ', position: [8, 0, -5] as [number, number, number], size: [4, 3, 4] as [number, number, number], occupancy: 80, status: 'normal' as const },
    { id: 4, name: 'LAO ĐỘNG', position: [-8, 0, 3] as [number, number, number], size: [4, 2, 4] as [number, number, number], occupancy: 80, status: 'normal' as const },
    { id: 5, name: 'CÁCH LY', position: [0, 0, 3] as [number, number, number], size: [4, 2, 4] as [number, number, number], occupancy: 50, status: 'normal' as const },
    { id: 6, name: 'CANTEEN', position: [8, 0, 3] as [number, number, number], size: [4, 2, 4] as [number, number, number], occupancy: 100, status: 'normal' as const },
  ];
  
  const handleZoneClick = (zone: any) => {
    console.log('Zone clicked:', zone);
  };
  
  return (
    <div className="w-full h-[600px] bg-deep-navy rounded-xl border border-cyber-blue/30 relative">
      <Canvas
        camera={{ position: [0, 15, 20], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00D9FF" />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#00FFF7" />
        
        {/* Grid floor */}
        <GridFloor />
        
        {/* Zones */}
        {zones.map(zone => (
          <Zone3D
            key={zone.id}
            position={zone.position}
            size={zone.size}
            name={zone.name}
            occupancy={zone.occupancy}
            status={zone.status}
            onClick={() => handleZoneClick(zone)}
          />
        ))}
        
        {/* Camera controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
      
      {/* Controls overlay */}
      <div className="absolute top-4 right-4 space-y-2">
        <div className="glass-panel px-3 py-2 text-sm text-cyan-blue">
          <p>🖱️ Click: Xem chi tiết</p>
          <p>🔄 Drag: Xoay</p>
          <p>🔍 Scroll: Zoom</p>
        </div>
      </div>
    </div>
  );
};
```

---

## 🎬 Animation Effects

### 1. Scanning Line Effect
```typescript
const ScanningLine = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-blue to-transparent"
      animate={{
        top: ['0%', '100%']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)'
      }}
    />
  );
};
```

### 2. Pulsing Glow for Alerts
```typescript
const PulsingGlow = ({ status }: { status: string }) => {
  const color = status === 'critical' ? '#FF004D' : '#FFB800';
  
  return (
    <motion.div
      className="absolute inset-0 rounded-lg pointer-events-none"
      animate={{
        boxShadow: [
          `0 0 10px ${color}40`,
          `0 0 30px ${color}80`,
          `0 0 10px ${color}40`,
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};
```

### 3. Data Point Particles
```typescript
const DataParticle = ({ from, to }: { from: Position, to: Position }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-cyan-blue"
      style={{
        boxShadow: '0 0 4px #00D9FF',
        left: from.x,
        top: from.y
      }}
      animate={{
        x: [0, to.x - from.x],
        y: [0, to.y - from.y],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
};
```

---

## 📊 Integration with Dashboard

### Component Usage

```typescript
// pages/Dashboard.tsx
import { InteractiveMap2D } from '@/components/PrisonMap/InteractiveMap2D';
// OR
import { InteractiveMap3D } from '@/components/PrisonMap/InteractiveMap3D';

export const Dashboard = () => {
  const [mapMode, setMapMode] = useState<'2d' | '3d'>('2d');
  
  return (
    <div className="dashboard-grid">
      {/* Alert Banner */}
      <AlertBanner alerts={alerts} />
      
      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Map Section - Takes center stage */}
        <div className="col-span-8">
          <div className="glass-panel p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-orbitron text-cyber-blue">
                🗺️ BẢN ĐỒ SỐ TRẠI GIAM
              </h2>
              
              {/* Toggle 2D/3D */}
              <div className="flex gap-2">
                <button
                  onClick={() => setMapMode('2d')}
                  className={`px-4 py-2 rounded ${
                    mapMode === '2d' 
                      ? 'bg-cyber-blue text-deep-navy' 
                      : 'bg-dark-slate text-cyber-blue'
                  }`}
                >
                  2D
                </button>
                <button
                  onClick={() => setMapMode('3d')}
                  className={`px-4 py-2 rounded ${
                    mapMode === '3d' 
                      ? 'bg-cyber-blue text-deep-navy' 
                      : 'bg-dark-slate text-cyber-blue'
                  }`}
                >
                  3D
                </button>
              </div>
            </div>
            
            {/* Map */}
            {mapMode === '2d' ? (
              <InteractiveMap2D zones={zones} />
            ) : (
              <InteractiveMap3D />
            )}
          </div>
          
          {/* Charts below map */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <PopulationChart data={populationData} />
            <CameraStatusChart data={cameraData} />
          </div>
        </div>
        
        {/* Sidebar Widgets */}
        <div className="col-span-4 space-y-4">
          <ServerStatusWidget servers={servers} />
          <CanteenWidget data={canteenData} />
        </div>
      </div>
    </div>
  );
};
```

---

## 🎯 User Interactions

### Click Actions
```typescript
const handleZoneClick = (zone: Zone) => {
  // Open detailed modal
  setSelectedZone(zone);
  setShowDetailModal(true);
};

const handleZoneHover = (zone: Zone) => {
  // Show tooltip with quick stats
  setHoveredZone(zone);
};
```

### Tooltip Content
```typescript
const ZoneTooltip = ({ zone }: { zone: Zone }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-panel p-4 text-sm"
  >
    <h4 className="font-orbitron text-cyber-blue mb-2">{zone.name}</h4>
    <div className="space-y-1 text-neutral-gray">
      <p>👤 Phạm nhân: {zone.current}/{zone.capacity}</p>
      <p>📹 Camera: {zone.cameras.active}/{zone.cameras.total}</p>
      <p>🚪 Phòng: {zone.rooms.occupied}/{zone.rooms.total}</p>
      <p>🌡️ Nhiệt độ: {zone.temperature}°C</p>
    </div>
  </motion.div>
);
```

---

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "d3": "^7.8.5",
    "three": "^0.159.0",
    "@react-three/fiber": "^8.15.12",
    "@react-three/drei": "^9.92.7",
    "framer-motion": "^10.16.16"
  },
  "devDependencies": {
    "@types/d3": "^7.4.3",
    "@types/three": "^0.159.0"
  }
}
```

---

## 🎨 Styling

```css
/* Map container styles */
.map-container {
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #0A1628 0%, #0D1B2A 100%);
  border-radius: 12px;
  overflow: hidden;
}

/* Holographic grid overlay */
.holographic-grid {
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

/* Scanning effect */
.scanning-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00D9FF, transparent);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.8);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(600px); }
}
```

---

## ✅ Implementation Checklist

- [ ] Choose between 2D (D3.js) or 3D (Three.js) approach
- [ ] Install required dependencies
- [ ] Create base map layout with zones
- [ ] Add holographic glow effects
- [ ] Implement connection lines between zones
- [ ] Add interactive hover/click handlers
- [ ] Create zone detail tooltips
- [ ] Add scanning line animation
- [ ] Implement pulsing effects for alerts
- [ ] Add data overlay points
- [ ] Create toggle between 2D/3D views (optional)
- [ ] Add zoom and pan controls
- [ ] Optimize performance for smooth 60fps
- [ ] Add loading states
- [ ] Test on different screen sizes

---

**Document Version**: 1.0  
**Last Updated**: 2026-03-09  
**Status**: ✅ Ready for Implementation  
**Recommended Approach**: Start with 2D (D3.js) for faster implementation, add 3D later as enhancement
