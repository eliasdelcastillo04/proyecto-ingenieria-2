---
name: Clinical Clarity
colors:
  surface: '#faf9f8'
  surface-dim: '#dadad9'
  surface-bright: '#faf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f2'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45474c'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f0f0'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#555f71'
  primary: '#182232'
  on-primary: '#ffffff'
  primary-container: '#2d3748'
  on-primary-container: '#96a0b5'
  inverse-primary: '#bdc7dc'
  secondary: '#006c48'
  on-secondary: '#ffffff'
  secondary-container: '#7dfabf'
  on-secondary-container: '#00734d'
  tertiary: '#2c1f07'
  on-tertiary: '#ffffff'
  tertiary-container: '#43341a'
  on-tertiary-container: '#b29c7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e3f9'
  primary-fixed-dim: '#bdc7dc'
  on-primary-fixed: '#121c2c'
  on-primary-fixed-variant: '#3d4759'
  secondary-fixed: '#7dfabf'
  secondary-fixed-dim: '#5fdda4'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005235'
  tertiary-fixed: '#f8dfba'
  tertiary-fixed-dim: '#dbc39f'
  on-tertiary-fixed: '#261903'
  on-tertiary-fixed-variant: '#554429'
  background: '#faf9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e1'
  status-available: '#C6F6D5'
  status-reserved: '#FEEBC8'
  status-confirmed: '#BEE3F8'
  slate-muted: '#898989'
  border-subtle: '#E2E8F0'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style

The design system is centered on the philosophy of **Cognitive Hygiene**. It serves a premium clinical environment where information density must be high, but cognitive load must remain low. The aesthetic is inspired by high-utility scheduling platforms like Cal.com, prioritizing "Zero-Friction" interactions.

The chosen style is **Minimalist-Modern**. It leverages heavy whitespace, a sophisticated oatmeal-based neutral palette to prevent the sterile coldness of pure white, and functional accents that provide immediate semantic meaning without overwhelming the user. The goal is to evoke a sense of calm, precision, and elite professional service. Every element exists only to serve a clinical or administrative purpose, removing any "visual noise" that could lead to diagnostic or operational fatigue.

## Colors

The palette is anchored by an off-white/oatmeal background (`#FDFCFB`) designed to reduce the harsh glare of traditional medical software. **Slate Blue** serves as the primary ink for text, ensuring high legibility while appearing softer than pure black.

Functional color is used sparingly for status indicators:
- **Mint Green:** Indicates availability and positive progression.
- **Amber/Terracotta:** Signals temporary holds or reserved states, demanding attention without signaling "error."
- **Corporate Blue:** Used for confirmed clinical appointments, providing a stable and professional anchor.
- **Muted Slate:** Employed for secondary metadata and disabled states to maintain visual hierarchy.

## Typography

This design system utilizes **Inter** exclusively for its utilitarian excellence and superior legibility in data-heavy environments. The typographic scale is tight, focusing on clarity over expression.

Tight letter spacing is applied to larger headlines to maintain a modern, "Cal.com" aesthetic, while smaller labels use increased tracking and semi-bold weights to ensure they are legible at a glance when scanning patient records or schedules.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1280px to prevent excessive line lengths on ultra-wide monitors common in clinical workstations. 

The spacing rhythm is built on a 4px baseline grid. 
- **Desktop:** A 12-column grid with 24px gutters.
- **Tablet:** An 8-column grid with 16px gutters.
- **Mobile:** A 4-column grid with 16px margins.

Airy padding within components (cards and modals) is essential to the "Zero-Friction" philosophy, ensuring that elements have room to breathe, which helps users isolate and process specific data points quickly.

## Elevation & Depth

To maintain "Cognitive Hygiene," depth is conveyed through **low-contrast outlines** and **subtle ambient shadows** rather than heavy skeuomorphism.

- **Level 0 (Base):** The oatmeal background.
- **Level 1 (Cards/Surface):** White surfaces with a 1px border of `border-subtle` (`#E2E8F0`).
- **Level 2 (Hover/Active):** A soft, diffused shadow (0px 4px 12px rgba(0,0,0,0.03)) to indicate interactivity.
- **Level 3 (Modals/Overlays):** A more pronounced shadow (0px 20px 48px rgba(0,0,0,0.08)) with a backdrop blur on the underlying layer to maintain focus.

## Shapes

The design system uses a **Rounded** shape language (0.5rem base radius). This strikes a balance between the precision of clinical software and the modern warmth of high-end SaaS. 

Buttons and input fields should utilize the standard `rounded` (8px) setting, while larger containers like cards or scheduling blocks may use `rounded-lg` (16px) to emphasize their modularity and "squish" when interacted with.

## Components

### Buttons
Primary buttons use `primary-color` (Slate Blue) with white text. Secondary buttons use a transparent background with a `border-subtle`. Action-specific buttons (e.g., 'Confirm Appointment') may use `status-confirmed` backgrounds with darkened text for high-consequence clarity.

### Cards
Cards are the primary organizational unit. They must feature a white background against the oatmeal page surface, a subtle 1px border, and 24px of internal padding. Group related patient data within these cards to create distinct mental clusters.

### Chips & Badges
Chips represent appointment statuses. They should use the `named_colors` palette for backgrounds with slightly darkened text of the same hue to ensure AA accessibility. They feature a `rounded-pill` shape for distinctness from buttons.

### Input Fields
Inputs are minimal: a 1px neutral border that thickens and changes to `status-confirmed` (Blue) on focus. Labels must always be visible (no floating labels that disappear) to assist users with cognitive load.

### Lists
Lists should utilize "zebra-striping" using a very faint oatmeal tint or simple 1px dividers. High vertical density is permitted for clinical data, provided the typography remains at `body-md` (14px).