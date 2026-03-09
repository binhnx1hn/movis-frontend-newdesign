import type { Statistics } from '@/types';
import { formatNumber, formatPercent, cn } from '@/utils';
import { t } from '@/utils/i18n';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: 'primary' | 'danger' | 'success' | 'warning';
  subtitle?: string;
  footer?: React.ReactNode;
}

export const StatCard = ({ title, value, icon, trend, color, subtitle, footer }: StatCardProps) => {
  const colorClasses = {
    primary: 'bg-cyber-primary text-cyber-primary border-cyber-primary shadow-cyber-glow',
    danger: 'bg-cyber-danger text-cyber-danger border-cyber-danger shadow-cyber-glow-danger',
    success: 'bg-cyber-success text-cyber-success border-cyber-success shadow-cyber-glow-success',
    warning: 'bg-cyber-warning text-cyber-warning border-cyber-warning',
  };

  return (
    <div className="cyber-card group hover:scale-105 transition-transform">
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          'w-12 h-12 bg-opacity-20 rounded-cyber flex items-center justify-center',
          'group-hover:shadow-lg transition-shadow',
          colorClasses[color]
        )}>
          {icon}
        </div>
        {trend && (
          <span className={cn(
            'badge',
            trend.isPositive ? 'badge-success' : 'badge-danger'
          )}>
            {trend.isPositive ? '+' : ''}{formatPercent(trend.value, 1)}
          </span>
        )}
      </div>
      <div className="text-3xl font-display font-bold text-cyber-text-primary mb-1">
        {typeof value === 'number' ? formatNumber(value) : value}
      </div>
      <div className="text-sm text-cyber-text-muted">{title}</div>
      {subtitle && (
        <div className="mt-2 text-xs text-cyber-text-secondary">{subtitle}</div>
      )}
      {footer && (
        <div className="mt-3 pt-3 border-t border-cyber-border">
          {footer}
        </div>
      )}
    </div>
  );
};

interface StatsGridProps {
  stats: Statistics;
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Inmates */}
      <StatCard
        title={t('totalInmates')}
        value={stats.totalInmates}
        color="primary"
        trend={{ value: 2.5, isPositive: true }}
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        }
        footer={
          <div className="flex justify-between text-xs">
            <span className="text-cyber-text-muted">{t('capacity')}</span>
            <span className="text-cyber-primary font-medium">{formatNumber(stats.totalCapacity)}</span>
          </div>
        }
      />

      {/* Active Alerts */}
      <StatCard
        title={t('activeAlerts')}
        value={stats.activeAlerts}
        color="danger"
        subtitle={`${stats.securityIncidents24h} ${t('incidents24h')}`}
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        }
      />

      {/* Staff On Duty */}
      <StatCard
        title={t('staffOnDuty')}
        value={stats.staffOnDuty}
        color="success"
        subtitle={t('allPositionsCovered')}
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        }
        footer={
          <div className="flex justify-between text-xs">
            <span className="text-cyber-text-muted">{t('totalStaff')}</span>
            <span className="text-cyber-success font-medium">320</span>
          </div>
        }
      />

      {/* Occupancy Rate */}
      <StatCard
        title={t('occupancyRate')}
        value={formatPercent(stats.occupancyRate)}
        color="warning"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        }
        footer={
          <div className="w-full bg-cyber-surface-light rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyber-warning to-cyber-danger h-2 rounded-full transition-all"
              style={{ width: `${stats.occupancyRate}%` }}
            />
          </div>
        }
      />
    </div>
  );
};
