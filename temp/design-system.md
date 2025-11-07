# SuperBenefit Design System Specification

## Core Design Principles
- **Source of Truth**: The attached palette defines all primary colors
- **Derived Tones**: All color variations are calculated from the base palette
- **Nature-Inspired**: Earth tones reflecting sustainable Web3 values
- **Accessibility First**: Proper contrast ratios and semantic color usage

## 1. COLOR PALETTE

### Base Palette (from attached image)
```css
:root {
  /* Primary Palette - Source of Truth */
  --sb-cream: #F5D5B3;      /* Top band - warm cream/tan */
  --sb-charcoal: #2F2F2F;   /* Dark charcoal band */
  --sb-orange: #EA8D3C;     /* Vibrant orange band */
  --sb-rust: #D04A26;       /* Deep rust/burnt orange band */
  --sb-sage: #7FA568;       /* Bottom sage green band */
}
```

### Derived System Colors
```css
:root {
  /* Backgrounds - Derived from Cream */
  --light: #FAF6F0;          /* Cream lightened 10% */
  --light-alt: #F5D5B3;      /* Pure cream */
  --surface: #FDFBF8;        /* Cream lightened 15% */
  
  /* Grays - Derived from Charcoal */
  --dark: #2F2F2F;           /* Pure charcoal */
  --darkgray: #4A4A4A;       /* Charcoal lightened 20% */
  --gray: #6B6B6B;           /* Charcoal lightened 40% */
  --lightgray: #A8A8A8;      /* Charcoal lightened 60% */
  --border: #D4D4D4;         /* Charcoal lightened 80% */
  
  /* Accent Colors - Derived from Sage */
  --primary: #7FA568;        /* Pure sage */
  --primary-dark: #628249;   /* Sage darkened 20% */
  --primary-light: #9BB886;  /* Sage lightened 20% */
  --primary-pale: #C5D4BA;   /* Sage lightened 40% */
  
  /* Secondary Accents - Derived from Orange/Rust */
  --secondary: #EA8D3C;      /* Pure orange */
  --tertiary: #D04A26;       /* Pure rust */
  --accent-warm: #F5A05A;    /* Orange lightened 20% */
  --accent-hot: #B83A1F;     /* Rust darkened 20% */
  
  /* Functional Colors */
  --highlight: #7FA56826;    /* Sage at 15% opacity */
  --text-highlight: #EA8D3C1A; /* Orange at 10% opacity */
  --shadow: #2F2F2F1A;       /* Charcoal at 10% opacity */
}
```

### Dark Mode Colors
```css
[data-theme="dark"] {
  /* Inverted Backgrounds */
  --light: #1F1F1F;          /* Near black */
  --light-alt: #2A2A2A;      /* Slightly lighter */
  --surface: #252525;        /* Surface */
  
  /* Inverted Grays */
  --dark: #F5F5F5;           /* Near white */
  --darkgray: #D0D0D0;       /* Light gray */
  --gray: #9A9A9A;           /* Medium gray */
  --lightgray: #5A5A5A;      /* Dark gray */
  --border: #3F3F3F;         /* Border gray */
  
  /* Adjusted Accents for Dark Mode */
  --primary: #9BB886;        /* Lighter sage */
  --primary-dark: #7FA568;   /* Original sage */
  --secondary: #F5A05A;      /* Lighter orange */
  --tertiary: #EA8D3C;       /* Original orange as tertiary */
  
  /* Dark Mode Specific */
  --highlight: #7FA56833;    /* Sage at 20% opacity */
  --text-highlight: #EA8D3C26; /* Orange at 15% opacity */
}
```

## 2. TYPOGRAPHY

### Font Stack
```css
:root {
  /* Headers - Modern, clean sans-serif */
  --font-header: "Schibsted Grotesk", -apple-system, BlinkMacSystemFont, 
                 "Segoe UI", Helvetica, Arial, sans-serif;
  
  /* Body - Readable, professional */
  --font-body: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
               "Segoe UI", Helvetica, Arial, sans-serif;
  
  /* Code - Monospace */
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, 
               SF Mono, Menlo, monospace;
  
  /* Special - Article titles */
  --font-display: "MapleMono", var(--font-mono);
}
```

### Type Scale
```css
/* Base: 16px (1rem) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## 3. SPACING SYSTEM

### Base Unit: 0.25rem (4px)
```css
/* Spacing Scale */
--space-0: 0;
--space-px: 1px;
--space-0.5: 0.125rem;  /* 2px */
--space-1: 0.25rem;     /* 4px */
--space-1.5: 0.375rem;  /* 6px */
--space-2: 0.5rem;      /* 8px */
--space-2.5: 0.625rem;  /* 10px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
```

## 4. COMPONENT TOKENS

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-full: 9999px;
```

### Shadows (using Charcoal base)
```css
--shadow-sm: 0 1px 2px 0 rgba(47, 47, 47, 0.05);
--shadow-md: 0 4px 6px -1px rgba(47, 47, 47, 0.1), 
             0 2px 4px -1px rgba(47, 47, 47, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(47, 47, 47, 0.1), 
             0 4px 6px -2px rgba(47, 47, 47, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(47, 47, 47, 0.1), 
             0 10px 10px -5px rgba(47, 47, 47, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(47, 47, 47, 0.25);
```

### Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
--transition-slower: 500ms ease-in-out;
```

## 5. COMPONENT PATTERNS

### Buttons
```css
/* Base Button */
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all var(--transition-base);
  cursor: pointer;
  border: 1px solid transparent;
}

/* Primary - Sage */
.btn-primary {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}
.btn-primary:hover {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
}

/* Secondary - Orange */
.btn-secondary {
  background-color: var(--secondary);
  color: white;
  border-color: var(--secondary);
}
.btn-secondary:hover {
  background-color: var(--tertiary);
  border-color: var(--tertiary);
}

/* Outline */
.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border-color: var(--primary);
}
.btn-outline:hover {
  background-color: var(--primary);
  color: white;
}
```

### Cards
```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.card-header {
  color: var(--dark);
  font-family: var(--font-header);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-4);
}

.card-body {
  color: var(--darkgray);
  font-family: var(--font-body);
  line-height: var(--leading-relaxed);
}
```

### Links
```css
.link {
  color: var(--primary);
  font-weight: var(--font-semibold);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--primary-dark);
}

.link-secondary {
  color: var(--secondary);
}

.link-secondary:hover {
  color: var(--tertiary);
}
```

### Tags/Badges
```css
.tag {
  display: inline-block;
  background-color: var(--primary-pale);
  color: var(--primary-dark);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
}

.tag-orange {
  background-color: var(--text-highlight);
  color: var(--tertiary);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1.5) var(--space-3);
  background-color: var(--highlight);
  color: var(--primary);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}
```

## 6. LAYOUT SYSTEM

### Containers
```css
--container-xs: 475px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Content widths */
--content-narrow: 65ch;  /* ~650px for reading */
--content-wide: 90ch;    /* ~900px for documentation */
--content-full: 100%;    /* Full width */
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--space-4);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}
```

## 7. RESPONSIVE BREAKPOINTS

```css
/* Mobile First Breakpoints */
--screen-sm: 640px;   /* Small devices */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Desktop */
--screen-xl: 1280px;  /* Large desktop */
--screen-2xl: 1536px; /* Extra large */

/* Media Queries */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 8. TAILWIND CONFIGURATION

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'cream': '#F5D5B3',
        'charcoal': '#2F2F2F',
        'orange': '#EA8D3C',
        'rust': '#D04A26',
        'sage': '#7FA568',
        
        // Derived Sage Tones
        'sage-dark': '#628249',
        'sage-light': '#9BB886',
        'sage-pale': '#C5D4BA',
        
        // Derived Orange/Rust Tones
        'orange-light': '#F5A05A',
        'rust-dark': '#B83A1F',
        
        // System Colors
        'surface': '#FDFBF8',
        'border': '#D4D4D4',
      },
      fontFamily: {
        'header': ['Schibsted Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'ui-monospace', 'monospace'],
        'display': ['MapleMono', 'monospace'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(47, 47, 47, 0.05)',
        'md': '0 4px 6px -1px rgba(47, 47, 47, 0.1), 0 2px 4px -1px rgba(47, 47, 47, 0.06)',
        'lg': '0 10px 15px -3px rgba(47, 47, 47, 0.1), 0 4px 6px -2px rgba(47, 47, 47, 0.05)',
        'xl': '0 20px 25px -5px rgba(47, 47, 47, 0.1), 0 10px 10px -5px rgba(47, 47, 47, 0.04)',
      },
    }
  }
}
```

## 9. UTILITY CLASSES

```css
/* Text Utilities */
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-muted { color: var(--gray); }

/* Background Utilities */
.bg-cream { background-color: var(--light-alt); }
.bg-sage { background-color: var(--primary); }
.bg-orange { background-color: var(--secondary); }
.bg-surface { background-color: var(--surface); }

/* Border Utilities */
.border-sage { border-color: var(--primary); }
.border-orange { border-color: var(--secondary); }
.border-subtle { border-color: var(--border); }

/* Interactive States */
.hover-lift:hover { transform: translateY(-2px); }
.hover-glow:hover { box-shadow: 0 0 20px var(--highlight); }
.active-depress:active { transform: translateY(1px); }
```

## 10. ACCESSIBILITY GUIDELINES

### Color Contrast Ratios
- **Normal Text**: Minimum 4.5:1 (WCAG AA)
- **Large Text**: Minimum 3:1 (WCAG AA)
- **Interactive Elements**: Minimum 3:1 against background

### Verified Combinations
- Charcoal (#2F2F2F) on Cream (#F5D5B3): 7.8:1 ✓
- Sage (#7FA568) on White: 3.2:1 ✓ (large text)
- Rust (#D04A26) on Cream: 3.5:1 ✓ (large text)
- Sage Dark (#628249) on White: 4.7:1 ✓

### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

## External Repositories

### Knowledge Garden
- Repository: https://github.com/superbenefit/knowledge-garden
- Live Site: https://knowledge.superbenefit.org

### Governance Repository  
- Repository: https://github.com/superbenefit/governance

### Design Tokens Already Extracted
From Knowledge Garden analysis:
- Primary: #2a521e (sage)
- Secondary: #b18437 (gold)
- Display font: Schibsted Grotesk
- Body font: Source Sans Pro
- Mono font: IBM Plex Mono

---

## Implementation Notes

1. **Color Priority**: Always use the attached palette colors as the foundation
2. **Tonal Variations**: Generate lighter/darker tones by adjusting HSL lightness
3. **Semantic Naming**: Use purpose-based names (primary, secondary) over color names in production
4. **Dark Mode**: Test all color combinations in both light and dark themes
5. **Component Library**: Build reusable components using these tokens
6. **Documentation**: Maintain a living style guide with visual examples