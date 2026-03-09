import { useState } from 'react';
import { t } from '@/utils/i18n';
import { formatDateTime } from '@/utils';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header = ({ onMenuToggle }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useState(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <header className="cyber-panel h-16 px-6 flex items-center justify-between sticky top-0 z-50 border-b border-cyber-border">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-cyber-surface-light rounded-cyber transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-cyber-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-cyber flex items-center justify-center">
            <svg
              className="w-6 h-6 text-cyber-bg-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-cyber-primary glow-text">
              {t('prisonCommandCenter').toUpperCase()}
            </h1>
            <p className="text-xs text-cyber-text-muted font-mono">
              {t('digitalManagementSystem')}
            </p>
          </div>
        </div>
      </div>

      {/* Center Section - System Status */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="status-online"></span>
          <span className="text-sm text-cyber-text-secondary">{t('systemOnline')}</span>
        </div>
        <div className="h-8 w-px bg-cyber-border"></div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-cyber-success"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-cyber-text-secondary">{t('allSystemsSecure')}</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Current Time */}
        <div className="hidden sm:block text-right">
          <div className="text-sm font-mono text-cyber-primary">
            {currentTime.toLocaleTimeString('vi-VN', { hour12: false })}
          </div>
          <div className="text-xs text-cyber-text-muted">
            {formatDateTime(currentTime).split(',')[0]}
          </div>
        </div>

        {/* Notifications */}
        <button
          className="relative p-2 hover:bg-cyber-surface-light rounded-cyber transition-colors group"
          aria-label="Thông báo"
        >
          <svg
            className="w-6 h-6 text-cyber-text-secondary group-hover:text-cyber-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-danger rounded-full animate-pulse"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-cyber-border">
          <div className="hidden lg:block text-right">
            <div className="text-sm font-medium text-cyber-text-primary">{t('admin')}</div>
            <div className="text-xs text-cyber-text-muted">{t('systemAdministrator')}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center font-display font-bold text-cyber-bg-dark">
            QT
          </div>
        </div>
      </div>
    </header>
  );
};
