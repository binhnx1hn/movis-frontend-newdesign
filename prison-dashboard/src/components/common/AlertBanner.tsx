import { useState, useEffect } from 'react';
import type { Alert, AlertSeverity } from '@/types';
import { formatRelativeTime, cn } from '@/utils';
import { t } from '@/utils/i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertBannerProps {
  alerts: Alert[];
  maxVisible?: number;
  onAlertClick?: (alert: Alert) => void;
  onDismiss?: (alertId: string) => void;
}

export const AlertBanner = ({
  alerts,
  maxVisible = 3,
  onAlertClick,
  onDismiss,
}: AlertBannerProps) => {
  const [filter, setFilter] = useState<'all' | AlertSeverity>('all');
  const [visibleAlerts, setVisibleAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    let filtered = alerts;
    if (filter !== 'all') {
      filtered = alerts.filter((alert) => alert.severity === filter);
    }
    
    // Sort by severity and timestamp
    const sorted = [...filtered].sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const severityDiff = severityOrder[a.severity] - severityOrder[b.severity];
      if (severityDiff !== 0) return severityDiff;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    setVisibleAlerts(sorted.slice(0, maxVisible));
  }, [alerts, filter, maxVisible]);

  const getSeverityStyles = (severity: AlertSeverity) => {
    const styles = {
      critical: 'border-cyber-danger bg-cyber-danger bg-opacity-10 shadow-cyber-glow-danger',
      high: 'border-cyber-warning bg-cyber-warning bg-opacity-10',
      medium: 'border-cyber-secondary bg-cyber-secondary bg-opacity-10',
      low: 'border-cyber-text-muted bg-cyber-text-muted bg-opacity-10',
    };
    return styles[severity];
  };

  const getSeverityIcon = (severity: AlertSeverity) => {
    switch (severity) {
      case 'critical':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'high':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'medium':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const alertCounts = {
    all: alerts.length,
    critical: alerts.filter((a) => a.severity === 'critical').length,
    high: alerts.filter((a) => a.severity === 'high').length,
    medium: alerts.filter((a) => a.severity === 'medium').length,
    low: alerts.filter((a) => a.severity === 'low').length,
  };

  if (alerts.length === 0) {
    return (
      <div className="cyber-panel p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-success bg-opacity-20 rounded-full mb-4">
          <svg className="w-8 h-8 text-cyber-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-display font-bold text-cyber-success mb-2">
          {t('allSystemsNominal')}
        </h3>
        <p className="text-cyber-text-muted">{t('noActiveAlerts')}</p>
      </div>
    );
  }

  return (
    <div className="cyber-panel p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyber-danger bg-opacity-20 rounded-cyber flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-cyber-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-cyber-primary">
              {t('activeAlertsTitle')}
            </h3>
            <p className="text-sm text-cyber-text-muted">
              {alerts.length} {t('alertsRequiringAttention')}
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              'px-3 py-1 rounded-cyber text-xs font-medium transition-all',
              filter === 'all'
                ? 'bg-cyber-primary text-cyber-bg-dark'
                : 'bg-cyber-surface-light text-cyber-text-secondary hover:bg-cyber-surface'
            )}
          >
            {t('all')} ({alertCounts.all})
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={cn(
              'px-3 py-1 rounded-cyber text-xs font-medium transition-all',
              filter === 'critical'
                ? 'bg-cyber-danger text-white'
                : 'bg-cyber-surface-light text-cyber-text-secondary hover:bg-cyber-surface'
            )}
          >
            {t('critical')} ({alertCounts.critical})
          </button>
          <button
            onClick={() => setFilter('high')}
            className={cn(
              'px-3 py-1 rounded-cyber text-xs font-medium transition-all',
              filter === 'high'
                ? 'bg-cyber-warning text-cyber-bg-dark'
                : 'bg-cyber-surface-light text-cyber-text-secondary hover:bg-cyber-surface'
            )}
          >
            {t('high')} ({alertCounts.high})
          </button>
        </div>
      </div>

      {/* Alert List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {visibleAlerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'border-l-4 rounded-cyber p-4 transition-all cursor-pointer',
                getSeverityStyles(alert.severity),
                'hover:shadow-lg hover:scale-[1.02]'
              )}
              onClick={() => onAlertClick?.(alert)}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={cn(
                  'flex-shrink-0 mt-0.5',
                  alert.severity === 'critical' && 'text-cyber-danger animate-pulse',
                  alert.severity === 'high' && 'text-cyber-warning',
                  alert.severity === 'medium' && 'text-cyber-secondary',
                  alert.severity === 'low' && 'text-cyber-text-muted'
                )}>
                  {getSeverityIcon(alert.severity)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-cyber-text-primary mb-1">
                        {alert.title}
                      </h4>
                      <p className="text-sm text-cyber-text-secondary mb-2">
                        {alert.message}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-cyber-text-muted">
                        {alert.zoneName && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {alert.zoneName}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatRelativeTime(alert.timestamp)}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        'badge text-xs uppercase',
                        alert.severity === 'critical' && 'badge-danger',
                        alert.severity === 'high' && 'badge-warning',
                        alert.severity === 'medium' && 'badge-primary',
                        alert.severity === 'low' && 'text-cyber-text-muted'
                      )}>
                        {t(alert.severity)}
                      </span>
                      {onDismiss && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(alert.id);
                          }}
                          className="p-1 hover:bg-cyber-surface-light rounded transition-colors"
                          aria-label="Đóng cảnh báo"
                        >
                          <svg className="w-4 h-4 text-cyber-text-muted hover:text-cyber-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View All Link */}
      {alerts.length > maxVisible && (
        <div className="pt-3 border-t border-cyber-border text-center">
          <button className="text-sm text-cyber-primary hover:text-cyber-secondary transition-colors font-medium">
            {t('viewAllAlerts')} {alerts.length} →
          </button>
        </div>
      )}
    </div>
  );
};
