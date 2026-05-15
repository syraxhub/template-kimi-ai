/**
 * Design Tokens - Shared between Web (shadcn/ui) and React Native
 * 
 * Usage:
 * Web:    import { colors } from '@/theme/tokens'
 * Native: import { colors } from './theme/tokens'
 */

// ============================================
// COLORS
// ============================================
export const colors = {
  // Base
  white: '#FFFFFF',
  black: '#000000',
  
  // Brand
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Neutral (slate)
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Semantic
  success: {
    light: '#dcfce7',
    DEFAULT: '#22c55e',
    dark: '#15803d',
  },
  warning: {
    light: '#fef9c3',
    DEFAULT: '#eab308',
    dark: '#a16207',
  },
  error: {
    light: '#fee2e2',
    DEFAULT: '#ef4444',
    dark: '#b91c1c',
  },
  info: {
    light: '#dbeafe',
    DEFAULT: '#3b82f6',
    dark: '#1d4ed8',
  },
  
  // Status (for badges, etc)
  status: {
    active: '#22c55e',
    pending: '#eab308',
    archived: '#94a3b8',
    draft: '#f59e0b',
    done: '#22c55e',
    cancelled: '#ef4444',
    todo: '#94a3b8',
    inProgress: '#3b82f6',
  },
} as const

// ============================================
// SPACING
// ============================================
export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const

// ============================================
// BORDER RADIUS
// ============================================
export const radius = {
  none: 0,
  sm: 2,
  DEFAULT: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
} as const

// ============================================
// SHADOWS
// ============================================
export const shadows = {
  sm: {
    web: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    native: { elevation: 1, shadowOpacity: 0.05, shadowRadius: 2 },
  },
  DEFAULT: {
    web: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    native: { elevation: 2, shadowOpacity: 0.1, shadowRadius: 3 },
  },
  md: {
    web: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    native: { elevation: 4, shadowOpacity: 0.1, shadowRadius: 6 },
  },
  lg: {
    web: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    native: { elevation: 8, shadowOpacity: 0.1, shadowRadius: 15 },
  },
  xl: {
    web: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    native: { elevation: 16, shadowOpacity: 0.1, shadowRadius: 25 },
  },
} as const

// ============================================
// Z-INDEX
// ============================================
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const

// ============================================
// BREAKPOINTS (for responsive design)
// ============================================
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// ============================================
// BOTTOM NAV (Mobile)
// ============================================
export const bottomNav = {
  height: 64, // h-16
  columns: 5,
  iconSize: 20,
  labelSize: 10,
} as const
