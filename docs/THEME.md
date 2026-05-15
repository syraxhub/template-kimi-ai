# THEME.md — Design System

## Overview
Design system yang bisa dipakai di **Web (shadcn/ui)** dan **React Native**.

## Philosophy
- **Token-based**: Semua value di-centralize
- **Platform-agnostic**: Bisa dipakai web & native
- **Type-safe**: TypeScript const assertion

## Struktur

```
src/theme/
├── tokens.ts       # Colors, spacing, radius, shadows
├── typography.ts   # Font, sizes, weights, line heights
├── components.ts   # Component specs (button, card, etc)
└── index.ts        # Export semua
```

## Usage

### Web (shadcn/ui)
```tsx
import { colors, spacing, button } from '@/theme'

// Tailwind class
className={`bg-[${colors.primary[500]}] px-[${spacing[4]}px]`}

// Atau pakai CSS variable
```

### React Native (nanti)
```tsx
import { colors, spacing, button } from './theme'

// StyleSheet
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: spacing[4],
    height: button.sizes.DEFAULT.height,
  }
})
```

## Colors

### Primary (Blue)
```
50: #f0f9ff  → background light
500: #0ea5e9 → primary brand
600: #0284c7 → hover
900: #0c4a6e → text
```

### Neutral (Slate)
```
50: #f8fafc  → background
100: #f1f5f9 → muted
200: #e2e8f0 → border
500: #64748b → muted text
900: #0f172a → text
```

### Semantic
```
success: #22c55e (green)
warning: #eab308 (yellow)
error: #ef4444 (red)
info: #3b82f6 (blue)
```

## Spacing Scale
Base: 4px
```
1: 4px    4: 16px   8: 32px
2: 8px    5: 20px   10: 40px
3: 12px   6: 24px   12: 48px
```

## Typography
Font: **Figtree**

### Scale
```
xs: 12px    lg: 18px   3xl: 30px
sm: 14px    xl: 20px   4xl: 36px
base: 16px  2xl: 24px  5xl: 48px
```

### Styles
```
h1: 48px bold	h2: 36px bold	h3: 30px semibold
body: 16px normal	button: 14px medium
label: 14px medium	caption: 12px normal
```

## Component Specs

### Button
Sizes: sm (32px), DEFAULT (40px), lg (44px)
Variants: default, destructive, outline, secondary, ghost, link

### Card
Border radius: 12px (xl)
Padding: 24px (6)
Shadow: default
Variants: default, muted, primary

### Input
Height: 40px
Border radius: 6px (md)
States: default, focus, error, disabled

### Badge
Border radius: full (pill)
Padding: 2px 10px
Variants: default, primary, success, warning, error

## Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

## Mobile Bottom Nav
Height: 64px
Columns: 5
Icon size: 20px
Label size: 10px

## Migration Guide (Web → Native)

### Step 1: Copy theme folder
```
cp -r src/theme/ apps/native/src/theme/
```

### Step 2: Adapt shadows
Web: `box-shadow` string
Native: `{ elevation, shadowOpacity, shadowRadius }`

### Step 3: Adapt spacing
Web: `px-${spacing[4]}` (Tailwind)
Native: `paddingHorizontal: spacing[4]`

### Step 4: Use same component API
```tsx
// Web
<Button variant="primary" size="lg">Click</Button>

// Native
<Button variant="primary" size="lg">Click</Button>
```

## Best Practices
1. Jangan hardcode value → pakai token
2. Konsisten pakai spacing scale
3. Semantic colors untuk status (success, error, etc)
4. Test di web & native sebelum finalize
