import { useEffect, useRef } from 'react';

/**
 * Building/Area data structure based on floor_plan.pdf
 */
interface BuildingArea {
  id: string;
  name: string;
  type: 'detention' | 'facility' | 'admin' | 'tower';
  x: number;
  y: number;
  width: number;
  height: number;
  floors?: number;
  color: string;
}

/**
 * DigitalMap Component
 * Renders accurate prison floor plan based on floor_plan.pdf
 * Layout includes: Dãy A-F, Nhà K (multiple), NC01-02, and support facilities
 */
export const DigitalMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Building data from floor_plan.pdf
    const buildings: BuildingArea[] = [
      // Main Detention Areas (Dãy A-F) - Each has 3 buildings
      { id: 'day-a-1', name: 'DÃY A', type: 'detention', x: 100, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-a-2', name: 'DÃY A', type: 'detention', x: 160, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-a-3', name: 'DÃY A', type: 'detention', x: 220, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      { id: 'day-b-1', name: 'DÃY B', type: 'detention', x: 100, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-b-2', name: 'DÃY B', type: 'detention', x: 160, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-b-3', name: 'DÃY B', type: 'detention', x: 220, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      { id: 'day-c-1', name: 'DÃY C', type: 'detention', x: 500, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-c-2', name: 'DÃY C', type: 'detention', x: 560, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-c-3', name: 'DÃY C', type: 'detention', x: 620, y: 200, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      { id: 'day-d-1', name: 'DÃY D', type: 'detention', x: 500, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-d-2', name: 'DÃY D', type: 'detention', x: 560, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-d-3', name: 'DÃY D', type: 'detention', x: 620, y: 250, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      { id: 'day-e-1', name: 'DÃY E', type: 'detention', x: 500, y: 300, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-e-2', name: 'DÃY E', type: 'detention', x: 560, y: 300, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-e-3', name: 'DÃY E', type: 'detention', x: 620, y: 300, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      { id: 'day-f-1', name: 'DÃY F', type: 'detention', x: 500, y: 350, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-f-2', name: 'DÃY F', type: 'detention', x: 560, y: 350, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      { id: 'day-f-3', name: 'DÃY F', type: 'detention', x: 620, y: 350, width: 50, height: 40, floors: 2, color: '#22d3ee' },
      
      // Nhà K buildings (Special detention - 6 buildings)
      { id: 'nha-k-1', name: 'NHÀ K', type: 'detention', x: 550, y: 150, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      { id: 'nha-k-2', name: 'NHÀ K', type: 'detention', x: 650, y: 150, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      { id: 'nha-k-3', name: 'NHÀ K', type: 'detention', x: 550, y: 230, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      { id: 'nha-k-4', name: 'NHÀ K', type: 'detention', x: 650, y: 230, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      { id: 'nha-k-5', name: 'NHÀ K', type: 'detention', x: 550, y: 310, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      { id: 'nha-k-6', name: 'NHÀ K', type: 'detention', x: 650, y: 310, width: 80, height: 60, floors: 2, color: '#f59e0b' },
      
      // NC01 and NC02 (New Construction areas)
      { id: 'nc01', name: 'NHÀ NC01', type: 'detention', x: 150, y: 100, width: 70, height: 50, floors: 2, color: '#06b6d4' },
      { id: 'nc02', name: 'NHÀ NC02', type: 'detention', x: 240, y: 100, width: 70, height: 50, floors: 2, color: '#06b6d4' },
      
      // Bệnh Xá - Located near Dãy B (left side, between B and M)
      { id: 'benh-xa', name: 'BỆNH XÁ', type: 'facility', x: 290, y: 250, width: 50, height: 40, color: '#10b981' },
      
      // Support facilities
      { id: 'nha-m', name: 'NHÀ M', type: 'facility', x: 360, y: 200, width: 50, height: 40, floors: 2, color: '#8b5cf6' },
      { id: 'nha-p', name: 'NHÀ P', type: 'facility', x: 300, y: 100, width: 50, height: 40, floors: 2, color: '#8b5cf6' },
      { id: 'nha-s', name: 'NHÀ S', type: 'facility', x: 360, y: 250, width: 40, height: 30, color: '#8b5cf6' },
      { id: 'nha-t', name: 'NHÀ T', type: 'facility', x: 360, y: 290, width: 40, height: 30, color: '#8b5cf6' },
      { id: 'nha-h', name: 'NHÀ H', type: 'facility', x: 750, y: 150, width: 40, height: 50, color: '#8b5cf6' },
      { id: 'nha-n', name: 'NHÀ N', type: 'facility', x: 750, y: 210, width: 40, height: 50, color: '#8b5cf6' },
      { id: 'nha-v', name: 'NHÀ V', type: 'facility', x: 750, y: 270, width: 40, height: 50, color: '#8b5cf6' },
      { id: 'nha-u', name: 'NHÀ U', type: 'facility', x: 750, y: 330, width: 40, height: 50, color: '#8b5cf6' },
      
      // Administrative and service areas
      { id: 'cong-trai', name: 'CỔNG TRẠI', type: 'admin', x: 80, y: 50, width: 30, height: 20, color: '#ef4444' },
      { id: 'phong-ksan', name: 'PHÒNG KSAN', type: 'admin', x: 120, y: 50, width: 50, height: 20, color: '#10b981' },
      { id: 'nha-bep', name: 'NHÀ BẾP', type: 'facility', x: 200, y: 50, width: 50, height: 30, color: '#10b981' },
      { id: 'nha-an', name: 'NHÀ ĂN', type: 'facility', x: 260, y: 50, width: 50, height: 30, floors: 2, color: '#10b981' },
      { id: 'hoi-truong', name: 'HỘI TRƯỜNG', type: 'facility', x: 320, y: 50, width: 60, height: 30, color: '#10b981' },
      { id: 'khu-tham-gap', name: 'KHU THĂM GẶP', type: 'admin', x: 370, y: 100, width: 50, height: 30, color: '#10b981' },
      
      // Guard towers (Network Rack positions indicate monitoring points)
      { id: 'tower-1', name: 'TRẠM 1', type: 'tower', x: 80, y: 170, width: 15, height: 15, color: '#f59e0b' },
      { id: 'tower-2', name: 'TRẠM 2', type: 'tower', x: 280, y: 170, width: 15, height: 15, color: '#f59e0b' },
      { id: 'tower-3', name: 'TRẠM 3', type: 'tower', x: 430, y: 170, width: 15, height: 15, color: '#f59e0b' },
      { id: 'tower-4', name: 'TRẠM 4', type: 'tower', x: 690, y: 170, width: 15, height: 15, color: '#f59e0b' },
      { id: 'tower-5', name: 'TRẠM 5', type: 'tower', x: 80, y: 400, width: 15, height: 15, color: '#f59e0b' },
      { id: 'tower-6', name: 'TRẠM 6', type: 'tower', x: 480, y: 400, width: 15, height: 15, color: '#f59e0b' },
    ];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      drawMap();
    };

    const drawMap = () => {
      const w = canvas.width;
      const h = canvas.height;
      const centerX = w / 2;
      const centerY = h / 2;

      // Clear canvas
      ctx.clearRect(0, 0, w, h);

      // Calculate scale to fit all buildings
      const scale = Math.min(w / 900, h / 500);
      const offsetX = centerX - (450 * scale);
      const offsetY = centerY - (225 * scale);

      // Draw perspective grid background
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(offsetX + i * 50 * scale, offsetY);
        ctx.lineTo(offsetX + i * 50 * scale, offsetY + 500 * scale);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY + i * 25 * scale);
        ctx.lineTo(offsetX + 900 * scale, offsetY + i * 25 * scale);
        ctx.stroke();
      }

      // Draw perimeter wall
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10 * scale, 5 * scale]);
      ctx.strokeRect(
        offsetX + 50 * scale,
        offsetY + 30 * scale,
        800 * scale,
        400 * scale
      );
      ctx.setLineDash([]);

      // Draw all buildings
      buildings.forEach(building => {
        const x = offsetX + building.x * scale;
        const y = offsetY + building.y * scale;
        const bw = building.width * scale;
        const bh = building.height * scale;

        // Building fill
        ctx.fillStyle = building.color + '20';
        ctx.fillRect(x, y, bw, bh);

        // Building outline
        ctx.strokeStyle = building.color;
        ctx.lineWidth = building.type === 'tower' ? 1.5 : 2;
        ctx.strokeRect(x, y, bw, bh);

        // Add 3D effect for 2-floor buildings
        if (building.floors === 2) {
          const offset = 5 * scale;
          ctx.strokeStyle = building.color + '80';
          ctx.strokeRect(x + offset, y - offset, bw, bh);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + offset, y - offset);
          ctx.moveTo(x + bw, y);
          ctx.lineTo(x + bw + offset, y - offset);
          ctx.moveTo(x + bw, y + bh);
          ctx.lineTo(x + bw + offset, y + bh - offset);
          ctx.stroke();
        }

        // Building label
        ctx.fillStyle = building.color;
        ctx.font = `bold ${Math.max(8, 10 * scale)}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const lines = building.name.split(' ');
        lines.forEach((line, i) => {
          ctx.fillText(
            line,
            x + bw / 2,
            y + bh / 2 + (i - lines.length / 2 + 0.5) * 12 * scale
          );
        });

        // Floor indicator for multi-floor buildings
        if (building.floors) {
          ctx.font = `${Math.max(6, 8 * scale)}px monospace`;
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(
            `${building.floors}F`,
            x + bw - 10 * scale,
            y + 8 * scale
          );
        }
      });

      // Draw dimensions (from PDF: 45M, 88M, 86M, 104M, 110M, 60M, 33M)
      ctx.fillStyle = '#64748b';
      ctx.font = `${Math.max(8, 10 * scale)}px monospace`;
      ctx.textAlign = 'center';
      
      // Horizontal dimensions
      ctx.fillText('45M', offsetX + 150 * scale, offsetY + 460 * scale);
      ctx.fillText('88M', offsetX + 350 * scale, offsetY + 460 * scale);
      ctx.fillText('86M', offsetX + 550 * scale, offsetY + 460 * scale);
      ctx.fillText('104M', offsetX + 750 * scale, offsetY + 460 * scale);

      // Vertical dimensions
      ctx.save();
      ctx.translate(offsetX + 870 * scale, offsetY + 150 * scale);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('110M', 0, 0);
      ctx.restore();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      className="col-span-6 row-span-4 neon-border bg-slate-900/40 rounded-lg relative overflow-hidden"
      data-purpose="digital-map-container"
    >
      <div className="scan-line" />
      
      {/* Map Header Info */}
      <div className="absolute top-4 left-4 z-10 bg-slate-900/80 p-3 rounded border border-cyan-500/30 backdrop-blur-sm">
        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">
          BẢN ĐỒ TỔNG QUAN TRẠI GIAM
        </h2>
        <div className="grid grid-cols-2 gap-4 text-[10px]">
          <div>
            <p className="text-slate-500">Diện tích:</p>
            <p className="text-cyan-300 font-mono">~50,000 m²</p>
          </div>
          <div>
            <p className="text-slate-500">Tổng khu vực:</p>
            <p className="text-amber-400 font-mono">35+ toà nhà</p>
          </div>
        </div>
        <div className="mt-2 text-[9px] text-slate-400">
          <p>Dãy A-F: 6 khu giam chính (2 tầng)</p>
          <p>Nhà K: 6 toà đặc biệt (2 tầng)</p>
        </div>
      </div>

      {/* Map Canvas Area */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <canvas 
          ref={canvasRef}
          className="w-full h-full opacity-90"
          data-purpose="map-render-target"
        />
      </div>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-4 right-4 z-10 space-y-2">
        <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
          <span className="w-3 h-3 bg-cyan-500 rounded-sm border border-cyan-300" />
          <span>KHU GIAM CHÍNH (Dãy A-F)</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
          <span className="w-3 h-3 bg-amber-500 rounded-sm border border-amber-300" />
          <span>KHU ĐẶC BIỆT (Nhà K, Trạm)</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
          <span className="w-3 h-3 bg-purple-500 rounded-sm border border-purple-300" />
          <span>KHU HỖ TRỢ (M, P, S, T...)</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
          <span className="w-3 h-3 bg-green-500 rounded-sm border border-green-300" />
          <span>HÀNH CHÍNH & DỊCH VỤ</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-slate-900/60 p-1 px-2 rounded">
          <span className="w-3 h-3 bg-red-500 rounded-sm border border-red-300" />
          <span>TƯỜNG BAO (Perimeter)</span>
        </div>
      </div>
    </section>
  );
};
