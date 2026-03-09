import { create } from 'zustand';
import type { Alert, Zone, Statistics } from '@/types';

interface DashboardState {
  // Data
  alerts: Alert[];
  zones: Zone[];
  statistics: Statistics | null;
  
  // UI State
  selectedZone: string | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setAlerts: (alerts: Alert[]) => void;
  addAlert: (alert: Alert) => void;
  dismissAlert: (alertId: string) => void;
  setZones: (zones: Zone[]) => void;
  setStatistics: (stats: Statistics) => void;
  setSelectedZone: (zoneId: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial State
  alerts: [],
  zones: [],
  statistics: null,
  selectedZone: null,
  isLoading: false,
  error: null,
  
  // Actions
  setAlerts: (alerts) => set({ alerts }),
  
  addAlert: (alert) => set((state) => ({
    alerts: [alert, ...state.alerts],
  })),
  
  dismissAlert: (alertId) => set((state) => ({
    alerts: state.alerts.filter((a) => a.id !== alertId),
  })),
  
  setZones: (zones) => set({ zones }),
  
  setStatistics: (statistics) => set({ statistics }),
  
  setSelectedZone: (selectedZone) => set({ selectedZone }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error }),
}));
