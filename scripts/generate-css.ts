/**
 * Token → CSS Generator
 * 
 * Generate globals.css dari src/theme/ tokens.
 * Source of truth: src/theme/tokens.ts, src/theme/components.ts
 * 
 * Usage:
 *   npx tsx scripts/generate-css.ts
 * 
 * Flow:
 *   1. Import tokens dari src/theme/
 *   2. Generate CSS variables
 *   3. Write ke src/app/globals.css
 */

import * as fs from 'fs'
import * as path from 'path'

// Import tokens (gunakan dynamic import dengan file:// URL untuk Windows)
async function loadTokens() {
  const tokensPath = path.resolve(process.cwd(), 'src/theme/index.ts')
  const fileUrl = new URL('file:///' + tokensPath.replace(/\\/g, '/')).href
  const tokens = await import(fileUrl)
  return tokens
}

// Convert hex ke oklch (simplified — untuk sekarang pakai hex langsung)
// TODO: Implement oklch conversion kalau perlu exact match
function hexToOklch(hex: string): string {
  // Sementara return hex, bisa di-enhance nanti
  return hex
}

// Generate CSS content
function generateCSS(tokens: any): string {
  const { colors, radius } = tokens

  const css = `/**
 * Global CSS — AUTO-GENERATED from src/theme/
 * DO NOT EDIT MANUALLY
 * 
 * Source: src/theme/tokens.ts, src/theme/components.ts
 * Generator: scripts/generate-css.ts
 * 
 * To update: Edit tokens → run \`npm run generate-css\`
 */

@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-sans);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  /* === BACKGROUND / FOREGROUND === */
  --background: ${colors.background};
  --foreground: ${colors.foreground};

  /* === CARD === */
  --card: ${colors.card.DEFAULT};
  --card-foreground: ${colors.card.foreground};

  /* === POPOVER === */
  --popover: ${colors.popover.DEFAULT};
  --popover-foreground: ${colors.popover.foreground};

  /* === PRIMARY === */
  --primary: ${colors.primary.DEFAULT};
  --primary-foreground: ${colors.primary.foreground};

  /* === SECONDARY === */
  --secondary: ${colors.secondary.DEFAULT};
  --secondary-foreground: ${colors.secondary.foreground};

  /* === MUTED === */
  --muted: ${colors.muted.DEFAULT};
  --muted-foreground: ${colors.muted.foreground};

  /* === ACCENT === */
  --accent: ${colors.accent.DEFAULT};
  --accent-foreground: ${colors.accent.foreground};

  /* === DESTRUCTIVE === */
  --destructive: ${colors.destructive.DEFAULT};

  /* === BORDER / INPUT / RING === */
  --border: ${colors.border};
  --input: ${colors.input};
  --ring: ${colors.ring};

  /* === RADIUS === */
  --radius: ${radius.lg / 16}rem; /* ${radius.lg}px */

  /* === CHART === */
  --chart-1: ${colors.chart[1]};
  --chart-2: ${colors.chart[2]};
  --chart-3: ${colors.chart[3]};
  --chart-4: ${colors.chart[4]};
  --chart-5: ${colors.chart[5]};

  /* === SIDEBAR === */
  --sidebar: ${colors.sidebar.DEFAULT};
  --sidebar-foreground: ${colors.sidebar.foreground};
  --sidebar-primary: ${colors.sidebar.primary.DEFAULT};
  --sidebar-primary-foreground: ${colors.sidebar.primary.foreground};
  --sidebar-accent: ${colors.sidebar.accent.DEFAULT};
  --sidebar-accent-foreground: ${colors.sidebar.accent.foreground};
  --sidebar-border: ${colors.sidebar.border};
  --sidebar-ring: ${colors.sidebar.ring};
}

.dark {
  /* === DARK MODE === */
  --background: ${colors.neutral[950]};
  --foreground: ${colors.neutral[50]};

  --card: ${colors.neutral[900]};
  --card-foreground: ${colors.neutral[50]};

  --popover: ${colors.neutral[900]};
  --popover-foreground: ${colors.neutral[50]};

  --primary: ${colors.neutral[50]};
  --primary-foreground: ${colors.neutral[900]};

  --secondary: ${colors.neutral[800]};
  --secondary-foreground: ${colors.neutral[50]};

  --muted: ${colors.neutral[800]};
  --muted-foreground: ${colors.neutral[400]};

  --accent: ${colors.neutral[800]};
  --accent-foreground: ${colors.neutral[50]};

  --destructive: ${colors.destructive.DEFAULT};

  --border: ${colors.neutral[800]};
  --input: ${colors.neutral[800]};
  --ring: ${colors.neutral[600]};

  --sidebar: ${colors.neutral[900]};
  --sidebar-foreground: ${colors.neutral[50]};
  --sidebar-primary: ${colors.primary.DEFAULT};
  --sidebar-primary-foreground: ${colors.primary.foreground};
  --sidebar-accent: ${colors.neutral[800]};
  --sidebar-accent-foreground: ${colors.neutral[50]};
  --sidebar-border: ${colors.neutral[800]};
  --sidebar-ring: ${colors.neutral[600]};
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
`

  return css
}

// Main
async function main() {
  try {
    console.log('🎨 Generating CSS from tokens...')
    
    const tokens = await loadTokens()
    const css = generateCSS(tokens)
    
    const outputPath = path.resolve(process.cwd(), 'src/app/globals.css')
    fs.writeFileSync(outputPath, css, 'utf-8')
    
    console.log('✅ CSS generated:', outputPath)
    console.log('📋 Tokens used:')
    console.log('   - colors:', Object.keys(tokens.colors).join(', '))
    console.log('   - radius:', tokens.radius.lg, 'px')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()
