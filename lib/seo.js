// lib/seo.js
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all SEO metadata across the site.
// Consumed by layout.js (global), page.js files (per-route), and
// collab/[brand]/page.js (dynamic per-brand).
//
// Strategy:
//   - Title template: "Page Name | NYTHERA" — brand in every tab title
//   - Descriptions: conversion-first, keyword-natural, under 155 chars
//   - OG: unique per major route + per brand collab page
//   - JSON-LD: Organization + CreativeAgency schema on all pages
//   - Canonical: absolute URLs for all shareable pages
// ─────────────────────────────────────────────────────────────────────────────

export const BASE_URL = 'https://nythera.com'  // update with real domain before launch

// ─── Global defaults (layout.js) ────────────────────────────────────────────
export const globalMetadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  'NYTHERA — Conceptual Studio',
    template: '%s | NYTHERA',
  },

  description:
    'NYTHERA is a conceptual studio exploring motion, identity, and visual direction for fashion brands. Independent studies in editorial language, brand systems, and dark luxury aesthetics.',

  keywords: [
    'dark fashion creative agency',
    'alternative fashion branding',
    'editorial direction agency',
    'gothic fashion campaign',
    'dark luxury brand identity',
    'fashion creative direction',
    'brand experience design',
  ],

  authors: [{ name: 'NYTHERA Studio', url: BASE_URL }],
  creator: 'NYTHERA',
  publisher: 'NYTHERA',

  openGraph: {
    type:        'website',
    locale:      'en_US',
    siteName:    'NYTHERA',
    title:       'NYTHERA — Conceptual Studio',
    description: 'Exploring motion, identity, and visual direction for fashion brands. Independent conceptual studies in editorial language and dark luxury aesthetics.',
    url:         BASE_URL,
    images: [
      {
        url:    '/og/default.png',
        width:  1200,
        height: 630,
        alt:    'NYTHERA — Dark Fashion Creative Agency',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'NYTHERA — Conceptual Studio',
    description: 'Motion, identity, and visual direction — explored through the lens of fashion. Independent conceptual studies.',
    images:      ['/og/default.png'],
    creator:     '@nythera',
  },

  robots: {
    index:           true,
    follow:          true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
}

// ─── Per-route metadata ──────────────────────────────────────────────────────
export const routeMetadata = {
  home: {
    title:       'NYTHERA — Dark Fashion Creative Agency',
    description: 'NYTHERA designs editorial campaigns, brand identities, and collection concepts for alternative fashion brands. Based everywhere. Working globally.',
    canonical:   `${BASE_URL}/`,
  },
  work: {
    title:       'Work & Portfolio',
    description: 'Selected editorial projects, brand identity work, and campaign direction by NYTHERA. Dark luxury fashion creative agency.',
    canonical:   `${BASE_URL}/work`,
  },
  studio: {
    title:       'Start a Project',
    description: 'Collaborate with NYTHERA. We take on a limited number of brand partnerships per season. Editorial direction, identity design, campaign architecture.',
    canonical:   `${BASE_URL}/studio`,
  },
  collab: {
    title:       'Concepts',
    description: 'Selected conceptual explorations for fashion brands. Visual direction studies in motion, identity, and editorial language — independent work by NYTHERA studio.',
    canonical:   `${BASE_URL}/collab`,
  },
  approach: {
    title:       'Our Approach',
    description: 'How NYTHERA works: immersion, concept architecture, production, refinement. A methodology built around craft and the refusal to rush.',
    canonical:   `${BASE_URL}/approach`,
  },
}

// ─── Brand collab page metadata factory ─────────────────────────────────────
export function buildBrandMetadata(brand, theme) {
  const brandDescriptions = {
    killstar:  `NYTHERA × Killstar — editorial direction and campaign architecture for the leading dark fashion label. Gothic brand identity and occult creative concept development.`,
    demonia:   `NYTHERA × Demonia — product editorial and brand identity for the definitive alternative footwear brand. Architectural photography and dark campaign direction.`,
    newrock:   `NYTHERA × New Rock — editorial series and art direction for heritage gothic footwear. Industrial craft meets dark luxury creative agency expertise.`,
    drmartens: `NYTHERA × Dr. Martens — subculture editorial direction and campaign strategy. Counter-culture brand experience design by NYTHERA creative agency.`,
    vans:      `NYTHERA × Vans — alternative fashion editorial repositioning. Dark creative direction that moves beyond streetwear into considered brand experience design.`,
  }

  return {
    title:       `${theme.name} — Dark Fashion Collaboration`,
    description: brandDescriptions[brand] ?? `NYTHERA × ${theme.name} — dark fashion editorial direction and brand identity collaboration.`,
    alternates:  { canonical: `${BASE_URL}/collab/${brand}` },
    openGraph: {
      title:       `NYTHERA × ${theme.name} — Creative Collaboration`,
      description: brandDescriptions[brand],
      url:         `${BASE_URL}/collab/${brand}`,
      images: [
        {
          url:    `/og/collab-${brand}.png`,
          width:  1200,
          height: 630,
          alt:    `NYTHERA × ${theme.name} collaboration`,
          // Falls back to default.png if brand-specific OG not uploaded
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title:       `NYTHERA × ${theme.name}`,
      description: theme.tagline,
      images:      [`/og/collab-${brand}.png`],
    },
  }
}

// ─── JSON-LD Schema generators ───────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context':   'https://schema.org',
    '@type':      ['Organization', 'CreativeAgency'],
    name:         'NYTHERA',
    url:          BASE_URL,
    logo:         `${BASE_URL}/logo.png`,
    description:  'Dark fashion creative agency specialising in editorial direction, brand identity, and campaign architecture for alternative fashion brands.',
    foundingDate: '2021',
    sameAs: [
      'https://instagram.com/nythera',
      'https://behance.net/nythera',
    ],
    contactPoint: {
      '@type':       'ContactPoint',
      email:         'studio@nythera.com',
      contactType:   'new business',
      availableLanguage: 'English',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Editorial photography direction',
      'Alternative fashion brand identity',
      'Dark luxury campaign architecture',
      'Collection creative direction',
      'Gothic fashion editorial',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    name:       'NYTHERA',
    url:        BASE_URL,
    description:'Dark fashion creative agency. Editorial direction, brand identity, campaign architecture.',
    potentialAction: {
      '@type':       'SearchAction',
      target:        `${BASE_URL}/work?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function brandCollabSchema(brand, theme) {
  return {
    '@context':   'https://schema.org',
    '@type':      'CreativeWork',
    name:         `NYTHERA × ${theme.name}`,
    creator:      { '@type': 'Organization', name: 'NYTHERA', url: BASE_URL },
    about:        theme.category,
    dateCreated:  theme.year,
    description:  theme.description,
    url:          `${BASE_URL}/collab/${brand}`,
    keywords:     `${theme.name}, dark fashion, creative agency, editorial direction, brand identity, ${theme.category}`,
  }
}
