/**
 * Component Specs - Shared design specs between Web and React Native
 * 
 * Generated from shadcn/ui preset: bbVKFP6 (radix-maia, neutral base)
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
  
  // Variants (match shadcn/ui neutral theme)
  variants: {
    default: {
      background: colors.primary.DEFAULT,      // neutral-900
      foreground: colors.primary.foreground,   // neutral-50
      hover: colors.neutral[800],
    },
    destructive: {
      background: colors.destructive.DEFAULT,  // red-600
      foreground: colors.destructive.foreground,
      hover: colors.destructive.hover,
    },
    outline: {
      background: 'transparent',
      foreground: colors.foreground,
      border: colors.border,
      hover: colors.secondary.DEFAULT,
    },
    secondary: {
      background: colors.secondary.DEFAULT,    // neutral-100
      foreground: colors.secondary.foreground, // neutral-900
      hover: colors.secondary.hover,
    },
    ghost: {
      background: 'transparent',
      foreground: colors.foreground,
      hover: colors.secondary.DEFAULT,
    },
    link: {
      background: 'transparent',
      foreground: colors.neutral[600],
      hover: colors.neutral[900],
      underline: true,
    },
  },
} as const

// ============================================
// CARD
// ============================================
export const card = {
  borderRadius: radius.lg,      // 10px (0.625rem)
  padding: spacing[6],
  background: colors.card.DEFAULT,
  border: colors.border,
  shadow: shadows.DEFAULT,
  
  // Variants
  variants: {
    default: {
      background: colors.card.DEFAULT,
      border: colors.border,
    },
    muted: {
      background: colors.muted.DEFAULT,
      border: colors.border,
    },
    primary: {
      background: colors.secondary.DEFAULT,
      border: colors.border,
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
      border: colors.border,
      background: colors.background,
    },
    focus: {
      border: colors.ring,
      ring: colors.ring,
    },
    error: {
      border: colors.destructive.DEFAULT,
      ring: colors.destructive.DEFAULT + '33', // 20% opacity
    },
    disabled: {
      border: colors.border,
      background: colors.muted.DEFAULT,
      foreground: colors.muted.foreground,
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
      background: colors.secondary.DEFAULT,
      foreground: colors.secondary.foreground,
      border: colors.border,
    },
    primary: {
      background: colors.primary.DEFAULT,
      foreground: colors.primary.foreground,
      border: colors.primary.DEFAULT,
    },
    secondary: {
      background: colors.secondary.DEFAULT,
      foreground: colors.secondary.foreground,
      border: colors.border,
    },
    success: {
      background: colors.status.active + '22', // 13% opacity
      foreground: colors.status.active,
      border: colors.status.active + '33',
    },
    warning: {
      background: colors.status.pending + '22',
      foreground: colors.status.pending,
      border: colors.status.pending + '33',
    },
    error: {
      background: colors.status.cancelled + '22',
      foreground: colors.status.cancelled,
      border: colors.status.cancelled + '33',
    },
    outline: {
      background: 'transparent',
      foreground: colors.foreground,
      border: colors.border,
    },
  },
} as const

// ============================================
// TABLE
// ============================================
export const table = {
  borderRadius: radius.lg,
  borderWidth: 1,
  borderColor: colors.border,
  
  header: {
    background: colors.muted.DEFAULT,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    padding: spacing[3],
  },
  
  cell: {
    fontSize: fontSize.sm,
    color: colors.foreground,
    padding: spacing[3],
  },
  
  row: {
    borderBottom: colors.border,
    hover: colors.muted.DEFAULT,
  },
} as const

// ============================================
// SIDEBAR (Desktop)
// ============================================
export const sidebar = {
  width: {
    expanded: 304,  // 19rem (matching --sidebar-width)
    collapsed: 64,  // 4rem
  },
  background: colors.sidebar.DEFAULT,
  border: colors.sidebar.border,
  
  item: {
    height: 40,
    paddingHorizontal: spacing[3],
    borderRadius: radius.md,
    fontSize: fontSize.sm,
    
    states: {
      default: {
        foreground: colors.muted.foreground,
      },
      active: {
        background: colors.sidebar.accent.DEFAULT,
        foreground: colors.sidebar.accent.foreground,
      },
      hover: {
        background: colors.sidebar.accent.DEFAULT,
        foreground: colors.sidebar.foreground,
      },
    },
  },
} as const

// ============================================
// BOTTOM NAV (Mobile)
// ============================================
export const bottomNav = {
  height: 64,
  background: colors.background,
  borderTop: colors.border,
  
  item: {
    iconSize: 20,
    labelSize: 10,
    
    states: {
      default: {
        foreground: colors.muted.foreground,
      },
      active: {
        foreground: colors.primary.DEFAULT,
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
  background: colors.background,
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
      background: colors.status.active + '15',
      border: colors.status.active,
      foreground: colors.status.active,
    },
    error: {
      background: colors.status.cancelled + '15',
      border: colors.status.cancelled,
      foreground: colors.status.cancelled,
    },
    warning: {
      background: colors.status.pending + '15',
      border: colors.status.pending,
      foreground: colors.status.pending,
    },
    info: {
      background: colors.neutral[200] + '50',
      border: colors.neutral[400],
      foreground: colors.neutral[700],
    },
  },
} as const

// ============================================
// DIALOG
// ============================================
export const dialog = {
  borderRadius: radius.lg,
  padding: spacing[6],
  background: colors.background,
  shadow: shadows.lg,
  overlay: 'rgba(0, 0, 0, 0.5)',
  
  header: {
    paddingBottom: spacing[4],
    borderBottom: colors.border,
  },
  
  footer: {
    paddingTop: spacing[4],
    borderTop: colors.border,
    gap: spacing[3],
  },
} as const

// ============================================
// TABS
// ============================================
export const tabs = {
  trigger: {
    height: 40,
    paddingHorizontal: spacing[4],
    borderRadius: radius.md,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    
    states: {
      default: {
        foreground: colors.muted.foreground,
      },
      active: {
        background: colors.background,
        foreground: colors.foreground,
        shadow: shadows.sm,
      },
      hover: {
        foreground: colors.foreground,
      },
    },
  },
  
  list: {
    background: colors.muted.DEFAULT,
    borderRadius: radius.md,
    padding: spacing[1],
  },
} as const

// ============================================
// TOOLTIP
// ============================================
export const tooltip = {
  borderRadius: radius.md,
  padding: spacing[2.5],
  background: colors.primary.DEFAULT,
  foreground: colors.primary.foreground,
  fontSize: fontSize.sm,
  shadow: shadows.md,
} as const

// ============================================
// SEPARATOR
// ============================================
export const separator = {
  color: colors.border,
  thickness: 1,
} as const
