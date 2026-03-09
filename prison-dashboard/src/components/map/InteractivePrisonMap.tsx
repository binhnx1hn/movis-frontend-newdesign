import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { Zone } from '@/types';
import { t } from '@/utils/i18n';
import { getZoneStatusColor, getOccupancyColor, formatPercent } from '@/utils';

interface InteractivePrisonMapProps {
  zones: Zone[];
  onZoneClick?: (zone: Zone) => void;
  selectedZoneId?: string | null;
}

export const InteractivePrisonMap = ({ zones, onZoneClick, selectedZoneId }: InteractivePrisonMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredZone, setHoveredZone] = useState<Zone | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.max(600, container.clientHeight),
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || zones.length === 0) return;

    const svg = d3.select(svgRef.current);
    const { width, height } = dimensions;

    // Clear previous content
    svg.selectAll('*').remove();

    // Create main group
    const g = svg.append('g');

    // Add holographic grid pattern
    const defs = svg.append('defs');
    
    // Grid pattern
    const gridPattern = defs.append('pattern')
      .attr('id', 'grid')
      .attr('width', 50)
      .attr('height', 50)
      .attr('patternUnits', 'userSpaceOnUse');
    
    gridPattern.append('path')
      .attr('d', 'M 50 0 L 0 0 0 50')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(0, 217, 255, 0.1)')
      .attr('stroke-width', '1');

    // Glow filter
    const glowFilter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    
    glowFilter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');
    
    const feMerge = glowFilter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Add background grid
    g.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#grid)')
      .attr('opacity', 0.3);

    // Scan line animation
    const scanLine = g.append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke', 'rgba(0, 217, 255, 0.5)')
      .attr('stroke-width', 2);

    // Animate scan line
    function animateScanLine() {
      scanLine
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr('y1', height)
        .attr('y2', height)
        .transition()
        .duration(0)
        .attr('y1', 0)
        .attr('y2', 0)
        .on('end', animateScanLine);
    }
    animateScanLine();

    // Scale zones to fit the map
    const padding = 80;
    const xExtent = d3.extent(zones, d => d.location.coordinates[0]) as [number, number];
    const yExtent = d3.extent(zones, d => d.location.coordinates[1]) as [number, number];
    
    const xScale = d3.scaleLinear()
      .domain(xExtent)
      .range([padding, width - padding]);
    
    const yScale = d3.scaleLinear()
      .domain(yExtent)
      .range([padding, height - padding]);

    // Draw connections between zones
    const connections = g.append('g').attr('class', 'connections');
    
    for (let i = 0; i < zones.length - 1; i++) {
      for (let j = i + 1; j < zones.length; j++) {
        const zone1 = zones[i];
        const zone2 = zones[j];
        
        // Connect zones in same building or adjacent
        if (zone1.location.building === zone2.location.building || 
            Math.abs(zone1.location.floor - zone2.location.floor) <= 1) {
          
          const line = connections.append('line')
            .attr('x1', xScale(zone1.location.coordinates[0]))
            .attr('y1', yScale(zone1.location.coordinates[1]))
            .attr('x2', xScale(zone2.location.coordinates[0]))
            .attr('y2', yScale(zone2.location.coordinates[1]))
            .attr('stroke', 'rgba(0, 217, 255, 0.2)')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '5,5');

          // Animate connection
          const length = line.node()?.getTotalLength() || 0;
          line
            .attr('stroke-dashoffset', length)
            .transition()
            .duration(2000)
            .delay(i * 100)
            .attr('stroke-dashoffset', 0);
        }
      }
    }

    // Draw zones
    const zoneGroups = g.selectAll('.zone')
      .data(zones)
      .enter()
      .append('g')
      .attr('class', 'zone')
      .attr('transform', d => `translate(${xScale(d.location.coordinates[0])}, ${yScale(d.location.coordinates[1])})`)
      .style('cursor', 'pointer')
      .on('mouseenter', function(_event, d) {
        setHoveredZone(d);
        d3.select(this).select('circle').transition().duration(200).attr('r', 35);
        d3.select(this).select('.zone-ring').transition().duration(200).attr('r', 50);
      })
      .on('mouseleave', function() {
        setHoveredZone(null);
        d3.select(this).select('circle').transition().duration(200).attr('r', 30);
        d3.select(this).select('.zone-ring').transition().duration(200).attr('r', 45);
      })
      .on('click', (_event, d) => {
        onZoneClick?.(d);
      });

    // Outer ring animation
    zoneGroups.append('circle')
      .attr('class', 'zone-ring')
      .attr('r', 45)
      .attr('fill', 'none')
      .attr('stroke', d => getZoneStatusColor(d.status))
      .attr('stroke-width', 2)
      .attr('opacity', 0.3)
      .each(function() {
        d3.select(this)
          .transition()
          .duration(2000)
          .ease(d3.easeSinInOut)
          .attr('opacity', 0.6)
          .transition()
          .duration(2000)
          .attr('opacity', 0.3)
          .on('end', function repeat() {
            d3.select(this)
              .transition()
              .duration(2000)
              .attr('opacity', 0.6)
              .transition()
              .duration(2000)
              .attr('opacity', 0.3)
              .on('end', repeat);
          });
      });

    // Zone circle
    zoneGroups.append('circle')
      .attr('r', 30)
      .attr('fill', d => {
        const occupancyRate = (d.occupancy / d.capacity) * 100;
        return getOccupancyColor(occupancyRate);
      })
      .attr('fill-opacity', 0.3)
      .attr('stroke', d => getZoneStatusColor(d.status))
      .attr('stroke-width', 3)
      .attr('filter', d => selectedZoneId === d.id ? 'url(#glow)' : 'none');

    // Zone icon
    zoneGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', -5)
      .attr('fill', '#00D9FF')
      .attr('font-size', '20')
      .attr('font-weight', 'bold')
      .text(d => {
        const icons: Record<string, string> = {
          'cell-block': '🔒',
          'medical': '🏥',
          'cafeteria': '🍽️',
          'recreation': '⚽',
          'workshop': '🔧',
          'administration': '🏢',
          'common-area': '👥',
          'visitation': '👨‍👩‍👧',
        };
        return icons[d.type] || '📍';
      });

    // Zone name
    zoneGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 15)
      .attr('fill', '#B4C6E7')
      .attr('font-size', '10')
      .attr('font-weight', '500')
      .text(d => d.name);

    // Occupancy indicator
    zoneGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 28)
      .attr('fill', '#6B7B9E')
      .attr('font-size', '8')
      .text(d => `${d.occupancy}/${d.capacity}`);

    // Status indicators for alerts
    zoneGroups.filter(d => d.status === 'alert' || d.status === 'lockdown')
      .append('circle')
      .attr('cx', 20)
      .attr('cy', -20)
      .attr('r', 5)
      .attr('fill', '#FF3366')
      .attr('stroke', '#FF3366')
      .attr('stroke-width', 2)
      .each(function() {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r', 7)
          .transition()
          .duration(500)
          .attr('r', 5)
          .on('end', function repeat() {
            d3.select(this)
              .transition()
              .duration(500)
              .attr('r', 7)
              .transition()
              .duration(500)
              .attr('r', 5)
              .on('end', repeat);
          });
      });

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 180}, 20)`);

    const legendData = [
      { label: t('normal'), color: '#00FF88' },
      { label: t('alert'), color: '#FFD700' },
      { label: t('lockdown'), color: '#FF3366' },
      { label: t('maintenance'), color: '#6B7B9E' },
    ];

    legend.selectAll('.legend-item')
      .data(legendData)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (_d, i) => `translate(0, ${i * 25})`)
      .each(function(d) {
        const item = d3.select(this);
        
        item.append('circle')
          .attr('r', 6)
          .attr('fill', d.color)
          .attr('fill-opacity', 0.3)
          .attr('stroke', d.color)
          .attr('stroke-width', 2);
        
        item.append('text')
          .attr('x', 15)
          .attr('y', 4)
          .attr('fill', '#B4C6E7')
          .attr('font-size', '12')
          .text(d.label);
      });

  }, [zones, dimensions, selectedZoneId, onZoneClick]);

  return (
    <div className="cyber-panel p-6 relative">
      <div className="mb-4">
        <h3 className="text-2xl font-display font-bold text-cyber-primary glow-text mb-2">
          {t('interactivePrisonMap')}
        </h3>
        <p className="text-cyber-text-secondary text-sm">
          {t('mapDescription')}
        </p>
      </div>

      <div className="relative bg-cyber-bg-dark rounded-cyber overflow-hidden" style={{ height: dimensions.height }}>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          className="w-full"
        />

        {/* Hover tooltip */}
        {hoveredZone && (
          <div className="absolute top-4 left-4 cyber-card p-4 min-w-[250px] pointer-events-none z-10 animate-fade-in">
            <h4 className="font-display font-bold text-cyber-primary mb-2">{hoveredZone.name}</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-cyber-text-muted">{t('status')}:</span>
                <span className={`font-medium ${
                  hoveredZone.status === 'normal' ? 'text-cyber-success' :
                  hoveredZone.status === 'alert' ? 'text-cyber-warning' :
                  hoveredZone.status === 'lockdown' ? 'text-cyber-danger' :
                  'text-cyber-text-muted'
                }`}>
                  {t(hoveredZone.status)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyber-text-muted">{t('occupancy')}:</span>
                <span className="text-cyber-text-primary font-medium">
                  {hoveredZone.occupancy}/{hoveredZone.capacity} ({formatPercent((hoveredZone.occupancy / hoveredZone.capacity) * 100)})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyber-text-muted">{t('securityLevel')}:</span>
                <span className="text-cyber-text-primary">{t(hoveredZone.securityLevel)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyber-text-muted">{t('location')}:</span>
                <span className="text-cyber-text-primary">{hoveredZone.location.building} - {t('floor')} {hoveredZone.location.floor}</span>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!hoveredZone && !selectedZoneId && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce-subtle">🗺️</div>
              <p className="text-cyber-text-muted text-lg">
                {t('selectZone')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
