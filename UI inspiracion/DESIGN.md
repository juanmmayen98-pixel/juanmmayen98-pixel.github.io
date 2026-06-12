---
name: Executive Tech Minimalist
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#ccbeff'
  on-tertiary: '#332664'
  tertiary-container: '#0c0032'
  on-tertiary-container: '#7e70b3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e7deff'
  tertiary-fixed-dim: '#ccbeff'
  on-tertiary-fixed: '#1e0e4e'
  on-tertiary-fixed-variant: '#4a3d7c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1100px
  gutter: 2rem
  section-padding: 4rem
  element-gap: 1rem
---

## Brand & Style

This design system is built for high-level executive presentation, balancing technical authority with understated luxury. The aesthetic follows a refined **Technological Minimalism**—a evolution of the developer aesthetic into the boardroom. It prioritizes clarity, precision, and a "quiet" interface that allows the content (experience and achievements) to take center stage.

The emotional response should be one of absolute reliability and sophisticated technical literacy. By stripping away "neon" vibrance and leaning into deep, ink-like tones, the UI evokes the feeling of a premium physical portfolio translated into a high-end digital terminal.

## Colors

The palette is strictly dark-mode first, utilizing a "Midnight Ink" foundation. 

- **Primary Background**: Use `#0a0a0a` for the deepest surfaces to maintain high contrast with text.
- **Secondary Surfaces**: Use `#0f172a` (Midnight Blue) for structural elements like sidebars, headers, or section containers to provide subtle depth without breaking the monochromatic feel.
- **Accents**: Soft Lilac (`#c4b5fd`) and Lavender (`#e9d5ff`) are reserved exclusively for interactive cues, progress indicators, and subtle highlights. They should never dominate the screen.
- **Typography**: Primary text should be near-white (#f8fafc), while secondary descriptions use a muted slate (#94a3b8) to establish clear hierarchy.

## Typography

The system uses a pairing of **Manrope** for headlines and **Geist** for body and labels. 

- **Manrope** provides a modern, balanced, and professional tone for names and section titles.
- **Geist** introduces a technical, precise character for the bulk of the CV content, reflecting technological fluency.
- **Scale**: Use generous line-heights (1.6) for body text to ensure readability of dense professional histories. 
- **Hierarchy**: Use the uppercase `label-sm` style with increased letter spacing for category headers (e.g., "EXPERIENCE", "EDUCATION") to create an organized, scanned-at-a-glance structure.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to mirror the structured nature of a formal CV. 

- **Grid**: A 12-column system is used on desktop, with content typically spanning the central 8 or 10 columns to preserve white space on the edges.
- **Sectioning**: Use wide vertical padding (`4rem`) between major experience blocks to prevent the document from feeling cluttered.
- **Responsive Behavior**: On mobile, the grid collapses to a single column with `1.5rem` horizontal margins. 
- **Consistency**: Use an 8px base unit for all margins and paddings to ensure mathematical harmony.

## Elevation & Depth

To maintain a sober profile, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

- **Planes**: The base layer is `#0a0a0a`. Elevated cards or sections use `#0f172a` with a very thin (1px) border of `#1e293b`.
- **Active State**: Hovering over interactive elements (like project links) should trigger a subtle increase in border-brightness or a very soft Lilac outer glow (5% opacity).
- **Glassmorphism**: Use a subtle backdrop blur (12px) with 80% opacity on navigation bars to maintain context while scrolling.

## Shapes

The shape language is **Soft**. 

Edges are slightly rounded (`0.25rem` for standard elements) to feel modern and accessible, but they stop short of being "friendly" or "playful." This choice maintains the professional "executive" feel. Large containers (like the main CV paper-proxy) may use `rounded-lg` (`0.5rem`) for a more finished, object-like appearance.

## Components

- **Buttons**: Primary buttons are solid Midnight Blue (`#0f172a`) with white text and a 1px border. Ghost buttons use a 1px Slate border and transition to a Soft Lilac text color on hover.
- **Chips / Tags**: Use a dark background (`#1e293b`) with muted Slate text for skills. Active or "Expert" skills can use a subtle Lilac border.
- **Lists**: Experience timelines use a 1px vertical Slate line with small, Lilac-filled circles as bullets to denote milestones.
- **Input Fields**: Minimalist design—only a bottom border in Slate, which turns Lilac upon focus.
- **Cards**: Project or testimonial cards should have no background color (transparent) and a subtle 1px border, ensuring they feel integrated into the layout rather than heavy "blocks."
- **Progress Bars**: Used for technical proficiencies; background is `#1e293b` with a thin Lilac fill line.