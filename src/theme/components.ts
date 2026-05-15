/**
 * Component Specs - Shared design specs between Web and React Native
 * 
 * Ini adalah "blueprint" untuk komponen UI.
 * Web: Implementasi pakai shadcn/ui + Tailwind
 * Native: Implementasi pakai React Native Paper / custom
 */

import { colors, spacing, radius, shadows } from './tokens'
import { fontSize, fontWeight } from './typography'

// ============================================
// BUTTON
// ============================================
export const button = {
  // Sizes
  sizes: {
    sm: {
      height: 32,
      paddingHorizontal: spacing[3],
      fontSize: fontSize.xs,
      borderRadius: radius.md,
    },
    DEFAULT: {
      height: 40,
      paddingHorizontal: spacing[4],
      fontSize: fontSize.sm,
      borderRadius: radius.md,
    },
    lg: {
      height: 44,
      paddingHorizontal: spacing[6],
      fontSize: fontSize.base,
      borderRadius: radius.lg,
    },
    icon: {
      height: 40,
      width: 40,
      borderRadius: radius.md,
    },
  },
  
  // Variants
  variants: {
    default: {
      background: colors.neutral[900],
      foreground: colors.neutral[50],
      hover: colors.neutral[800],
    },
    destructive: {
      background: colors.error.DEFAULT,
      foreground: colors.white,
      hover: colors.error.dark,
    },
    outline: {
      background: 'transparent',
      foreground: colors.neutral[900],
      border: colors.neutral[200],
      hover: colors.neutral[100],
    },
    secondary: {
      background: colors.neutral[100],
      foreground: colors.neutral[900],
      hover: colors.neutral[200],
    },
    ghost: {
      background: 'transparent',
      foreground: colors.neutral[900],
      hover: colors.neutral[100],
    },
    link: {
      background: 'transparent',
      foreground: colors.primary[600],
      hover: colors.primary[700],
      underline: true,
    },
  },
} as const

// ============================================
// CARD
// ============================================
export const card = {
  borderRadius: radius.xl,
  padding: spacing[6],
  background: colors.white,
  border: colors.neutral[200],
  shadow: shadows.DEFAULT,
  
  // Variants
  variants: {
    default: {
      background: colors.white,
      border: colors.neutral[200],
    },
    muted: {
      background: colors.neutral[50],
      border: colors.neutral[200],
    },
    primary: {
      background: colors.primary[50],
      border: colors.primary[200],
    },
  },
} as const

// ============================================
// INPUT
// ============================================
export const input = {
  height: 40,
  paddingHorizontal: spacing[3],
  borderRadius: radius.md,
  borderWidth: 1,
  
  // States
  states: {
    default: {
      border: colors.neutral[200],
      background: colors.white,
    },
    focus: {
      border: colors.primary[500],
      ring: colors.primary[200],
    },
    error: {
      border: colors.error.DEFAULT,
      ring: colors.error.light,
    },
    disabled: {
      border: colors.neutral[200],
      background: colors.neutral[100],
      foreground: colors.neutral[400],
    },
  },
  
  // Sizes
  sizes: {
    sm: { height: 32, fontSize: fontSize.xs },
    DEFAULT: { height: 40, fontSize: fontSize.sm },
    lg: { height: 44, fontSize: fontSize.base },
  },
} as const

// ============================================
// BADGE
// ============================================
export const badge = {
  borderRadius: radius.full,
  paddingVertical: spacing[0.5],
  paddingHorizontal: spacing[2.5],
  fontSize: fontSize.xs,
  fontWeight: fontWeight.semibold,
  
  // Variants
  variants: {
    default: {
      background: colors.neutral[100],
      foreground: colors.neutral[900],
      border: colors.neutral[200],
    },
    primary: {
      background: colors.primary[100],
      foreground: colors.primary[800],
      border: colors.primary[200],
    },
    success: {
      background: colors.success.light,
      foreground: colors.success.dark,
      border: colors.success.DEFAULT,
    },
    warning: {
      background: colors.warning.light,
      foreground: colors.warning.dark,
      border: colors.warning.DEFAULT,
    },
    error: {
      background: colors.error.light,
      foreground: colors.error.dark,
      border: colors.error.DEFAULT,
    },
  },
} as const

// ============================================
// TABLE
// ============================================
export const table = {
  borderRadius: radius.md,
  borderWidth: 1,
  borderColor: colors.neutral[200],
  
  header: {
    background: colors.neutral[50],
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    color: colors.neutral[500],
    padding: spacing[3],
  },
  
  cell: {
    fontSize: fontSize.sm,
    color: colors.neutral[900],
    padding: spacing[3],
  },
  
  row: {
    borderBottom: colors.neutral[100],
    hover: colors.neutral[50],
  },
} as const

// ============================================
// SIDEBAR (Desktop)
// ============================================
export const sidebar = {
  width: {
    expanded: 256,  // 16rem
    collapsed: 64,  // 4rem
  },
  background: colors.white,
  border: colors.neutral[200],
  
  item: {
    height: 40,
    paddingHorizontal: spacing[3],
    borderRadius: radius.md,
    fontSize: fontSize.sm,
    
    states: {
      default: {
        foreground: colors.neutral[600],
      },
      active: {
        background: colors.neutral[100],
        foreground: colors.neutral[900],
      },
      hover: {
        background: colors.neutral[50],
        foreground: colors.neutral[900],
      },
    },
  },
} as const

// ============================================
// BOTTOM NAV (Mobile)
// ============================================
export const bottomNav = {
  height: 64,
  background: colors.white,
  borderTop: colors.neutral[200],
  
  item: {
    iconSize: 20,
    labelSize: 10,
    
    states: {
      default: {
        foreground: colors.neutral[400],
      },
      active: {
        foreground: colors.primary[600],
      },
    },
  },
} as const

// ============================================
// MODAL / SHEET
// ============================================
export const modal = {
  borderRadius: {
    default: radius.lg,
    bottom: radius['2xl'],
  },
  padding: spacing[6],
  background: colors.white,
  shadow: shadows.lg,
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const

// ============================================
// TOAST / NOTIFICATION
// ============================================
export const toast = {
  borderRadius: radius.lg,
  padding: spacing[4],
  shadow: shadows.md,
  
  variants: {
    success: {
      background: colors.success.light,
      border: colors.success.DEFAULT,
      foreground: colors.success.dark,
    },
    error: {
      background: colors.error.light,
      border: colors.error.DEFAULT,
      foreground: colors.error.dark,
    },
    warning: {
      background: colors.warning.light,
      border: colors.warning.DEFAULT,
      foreground: colors.warning.dark,
    },
    info: {
      background: colors.info.light,
      border: colors.info.DEFAULT,
      foreground: colors.info.dark,
    },
  },
} as const
