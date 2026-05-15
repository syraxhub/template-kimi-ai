/**
 * Design Tokens - Shared between Web (shadcn/ui) and React Native
 * 
 * Generated from shadcn/ui preset: bbVKFP6 (radix-maia, neutral base)
 * 
 * Usage:
 * Web:    import { colors } from '@/theme/tokens'
 * Native: import { colors } from './theme/tokens'
 */

// ============================================
// COLORS (from CSS variables, converted to hex)
// ============================================
export const colors = {
  // Base
  white: '#FFFFFF',
  black: '#000000',
  
  // Neutral palette (matching oklch neutral scale)
  neutral: {
    50: '#fafafa',    // --sidebar
    100: '#f5f5f5',   // --secondary, --muted, --accent
    200: '#e5e5e5',   // --border, --input
    300: '#d4d4d4',
    400: '#a3a3a3',   // --ring
    500: '#737373',   // --muted-foreground
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',   // --primary, --foreground
    950: '#0a0a0a',
  },
  
  // Semantic (mapped from CSS variables)
  primary: {
    DEFAULT: '#171717',    // --primary (neutral-900)
    foreground: '#fafafa', // --primary-foreground
    hover: '#262626',      // neutral-800
  },
  secondary: {
    DEFAULT: '#f5f5f5',    // --secondary
    foreground: '#171717', // --secondary-foreground
    hover: '#e5e5e5',      // neutral-200
  },
  muted: {
    DEFAULT: '#f5f5f5',    // --muted
    foreground: '#737373', // --muted-foreground
  },
  accent: {
    DEFAULT: '#f5f5f5',    // --accent
    foreground: '#171717', // --accent-foreground
  },
  destructive: {
    DEFAULT: '#dc2626',    // --destructive
    foreground: '#fafafa',
    hover: '#b91c1c',
  },
  
  // Background / Foreground
  background: '#FFFFFF',     // --background
  foreground: '#171717',     // --foreground
  card: {
    DEFAULT: '#FFFFFF',      // --card
    foreground: '#171717',   // --card-foreground
  },
  popover: {
    DEFAULT: '#FFFFFF',      // --popover
    foreground: '#171717',   // --popover-foreground
  },
  
  // Sidebar specific
  sidebar: {
    DEFAULT: '#fafafa',      // --sidebar
    foreground: '#171717',   // --sidebar-foreground
    primary: {
      DEFAULT: '#171717',    // --sidebar-primary
      foreground: '#fafafa', // --sidebar-primary-foreground
    },
    accent: {
      DEFAULT: '#f5f5f5',    // --sidebar-accent
      foreground: '#171717', // --sidebar-accent-foreground
    },
    border: '#e5e5e5',       // --sidebar-border
    ring: '#a3a3a3',         // --sidebar-ring
  },
  
  // Border / Input / Ring
  border: '#e5e5e5',         // --border
  input: '#e5e5e5',          // --input
  ring: '#a3a3a3',           // --ring
  
  // Status (for badges, etc)
  status: {
    active: '#22c55e',
    pending: '#eab308',
    archived: '#a3a3a3',
    draft: '#f59e0b',
    done: '#22c55e',
    cancelled: '#dc2626',
    todo: '#a3a3a3',
    inProgress: '#3b82f6',
  },
  
  // Chart colors (from CSS variables)
  chart: {
    1: '#e5e5e5',
    2: '#737373',
    3: '#525252',
    4: '#404040',
    5: '#262626',
  },
} as const

// ============================================
// SPACING (Tailwind scale in pixels)
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
// BORDER RADIUS (from --radius: 0.625rem)
// ============================================
export const radius = {
  none: 0,
  sm: 6,      // calc(0.625rem * 0.6) ≈ 6px
  DEFAULT: 8, // calc(0.625rem * 0.8) ≈ 8px
  md: 8,      // alias for DEFAULT
  lg: 10,     // 0.625rem = 10px
  xl: 14,     // calc(0.625rem * 1.4) ≈ 14px
  '2xl': 18,  // calc(0.625rem * 1.8) ≈ 18px
  '3xl': 22,  // calc(0.625rem * 2.2) ≈ 22px
  '4xl': 26,  // calc(0.625rem * 2.6) ≈ 26px
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
