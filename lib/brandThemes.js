// lib/brandThemes.js
// ─────────────────────────────────────────────────────────────────────────────
// Brand configuration for all /collab/[brand] pages.
// POSITIONING: Each brand is a conceptual study — not a client, not a pitch.
// Language: exploratory, observational, design-thinking. Never sales.
// ─────────────────────────────────────────────────────────────────────────────

export const brandThemes = {

  killstar: {
    accent:      '#6E00FF',
    accentMuted: 'rgba(110,0,255,0.1)',
    name:        'Killstar',
    category:    'Alternative Fashion',
    year:        '2024',
    status:      'Ongoing study',

    // Hero
    tagline:     'A visual system built at the boundary of the occult and the commercial.',

    // Context — why this brand is culturally interesting
    context: {
      heading: 'On Killstar',
      body: [
        'Killstar occupies a peculiar position in fashion: a brand fluent in occult visual language that has achieved genuine mass distribution. That tension — between the esoteric and the accessible — is the most interesting thing about it.',
        'The question worth exploring is not how to sell more garments. It is whether a brand can move deeper into darkness and still hold an audience. Or whether the darkness is the audience.',
      ],
    },

    // Exploration — the visual thinking
    exploration: {
      heading: 'The Exploration',
      body: [
        'We studied Killstar through the frame of ritual — the structured repetition, the symbolic object, the garment as ceremonial marker rather than fashion item. What happens when you remove the model entirely and photograph the garment as artifact?',
        'Motion became central: slow drift, heavy shadow, the suggestion of candlelight without the literal flame. An editorial language that implies rather than demonstrates.',
      ],
      direction: {
        motion: 'Slow drift. Weighted transitions. Nothing rushes.',
        tone:   'Ritual without pageantry. Occult without performance.',
        space:  'Deep shadow. Objects half-revealed. Negative space as content.',
      },
    },

    // Three concept ideas
    concepts: [
      {
        num:   '01',
        title: 'Artifact Series',
        body:  'Garments photographed as museum objects. No model. No context. The piece as the subject.',
      },
      {
        num:   '02',
        title: 'Ceremony',
        body:  'A motion editorial exploring ritual dressing. Process over product. Before the garment is worn.',
      },
      {
        num:   '03',
        title: 'Deep Catalogue',
        body:  'An archive visual system. Black, type, object. Every piece documented as if it might not exist tomorrow.',
      },
    ],

    // Visual language
    visualLanguage: {
      palette:    ['#0B0B0C', '#1A001A', '#6E00FF', '#C0C0C0'],
      colorNotes: 'Deep violet against absolute black. Silver as the only relief.',
      motion:     'Weighted. Slow. Objects arrive — they do not appear.',
      mood:       'Pre-ritual. The moment before the ceremony begins.',
    },

    scope: ['Editorial Direction', 'Motion Study', 'Visual System'],
  },

  demonia: {
    accent:      '#8B0000',
    accentMuted: 'rgba(139,0,0,0.1)',
    name:        'Demonia',
    category:    'Alternative Footwear',
    year:        '2024',
    status:      'Complete',

    tagline:     'Footwear as structural proposition. Form studied before function.',

    context: {
      heading: 'On Demonia',
      body: [
        'Demonia makes objects. Not accessories — objects. The platform boot as built form, the heel as structural element, the silhouette as something closer to sculpture than fashion.',
        'Most footwear photography makes this invisible. The shoe exists in context — on a foot, in an outfit, in a lifestyle. We were interested in what happens when you remove all of that.',
      ],
    },

    exploration: {
      heading: 'The Exploration',
      body: [
        'We approached each piece as an architect might approach a model — isolating it from environment, studying it in relation to negative space, rotating it to understand structure rather than style.',
        'The tension we kept returning to: these are wearable objects. But in the photograph, that function disappears. What remains is pure form.',
      ],
      direction: {
        motion: 'Precise rotation. Deliberate stillness. No drift.',
        tone:   'Architectural. Clinical without coldness.',
        space:  'White negative space. Hard light. Shadows that define edge.',
      },
    },

    concepts: [
      {
        num:   '01',
        title: 'Structure Study',
        body:  'Still-life photography. Each boot treated as architectural model. White ground, single source light.',
      },
      {
        num:   '02',
        title: 'Object in Space',
        body:  'A motion sequence exploring the shoe as spatial object. Slow rotation. No environment. Pure form study.',
      },
      {
        num:   '03',
        title: 'Material Index',
        body:  'A catalogue of surfaces — patent, matte, buckle, platform. Material as the subject. Macro, editorial, repeated.',
      },
    ],

    visualLanguage: {
      palette:    ['#0F0F0F', '#1A1A1A', '#8B0000', '#EAEAEA'],
      colorNotes: 'Near-black ground. White for isolation. Red as the only accent — used once, deliberately.',
      motion:     'Controlled rotation. Stillness interrupted by precise movement.',
      mood:       'The studio before the shoot. The object before the wearer arrives.',
    },

    scope: ['Product Editorial', 'Motion Study', 'Identity Research'],
  },

  newrock: {
    accent:      '#7A7A7A',
    accentMuted: 'rgba(90,90,90,0.14)',
    name:        'New Rock',
    category:    'Gothic Footwear',
    year:        '2023',
    status:      'Complete',

    tagline:     'Industrial heritage examined as visual language. The mark of making.',

    context: {
      heading: 'On New Rock',
      body: [
        'New Rock boots are constructed. That word matters. Not assembled, not produced — constructed. The rivets, the buckles, the layered leather: every element is a decision about structure and weight.',
        'The heritage here is industrial Spain — craft traditions that predate fashion as a concept. We found that more interesting than any editorial positioning the brand had attempted before.',
      ],
    },

    exploration: {
      heading: 'The Exploration',
      body: [
        'We wanted to make the making visible. Close images of construction detail — the edge of a rivet, the seam where materials meet, the mark a tool leaves on leather. The boot as evidence of process.',
        'The editorial language borrowed from industrial photography: high contrast, direct light, no artifice. The object earns its complexity — the image doesn\'t need to add any.',
      ],
      direction: {
        motion: 'Heavy. Resistant. Movement as effort, not ease.',
        tone:   'Industrial without nostalgia. The factory floor, not the museum.',
        space:  'Concrete. Steel. Surfaces that have been used.',
      },
    },

    concepts: [
      {
        num:   '01',
        title: 'Forge',
        body:  'A macro editorial series exploring construction detail. Rivets, seams, buckles. The material evidence of craft.',
      },
      {
        num:   '02',
        title: 'Weight',
        body:  'A motion study about heaviness. The boot placed. The sound implied. Industrial material in slow time.',
      },
      {
        num:   '03',
        title: 'Heritage Catalogue',
        body:  'An archival visual system for the full range. Consistent lighting, raw surface, no lifestyle context.',
      },
    ],

    visualLanguage: {
      palette:    ['#0D0D0E', '#1C1C1E', '#5A5A5A', '#C8C8C8'],
      colorNotes: 'Gunmetal grey as the dominant tone. Near-black ground. No warmth anywhere.',
      motion:     'Mechanical. Deliberate. Resistance before release.',
      mood:       'The workshop at the end of the day. Work completed, tools set down.',
    },

    scope: ['Editorial Series', 'Art Direction', 'Motion Study'],
  },

  drmartens: {
    accent:      '#C8A800',
    accentMuted: 'rgba(200,168,0,0.1)',
    name:        'Dr. Martens',
    category:    'Heritage Footwear',
    year:        '2023',
    status:      'Complete',

    tagline:     'Objects that accumulate meaning. A study in cultural archaeology.',

    context: {
      heading: 'On Dr. Martens',
      body: [
        'The Dr. Martens boot is not a fashion object. It is a cultural artifact — something that has absorbed meaning from multiple subcultures across decades, often simultaneously contradictory.',
        'Skinheads wore it. Punks wore it. Goths wore it. The boot predates and outlasts every movement that claimed it. That longevity is the most interesting thing about it — not the product itself, but its capacity to survive interpretation.',
      ],
    },

    exploration: {
      heading: 'The Exploration',
      body: [
        'We approached the boot as an archaeologist might approach a found object: what can the surface tell us about its history? The scratches, the creases, the worn sole — these are not damage, they are data.',
        'The editorial direction followed from that: old boots, not new ones. Used pairs. Objects that had already accumulated their meaning. We photographed evidence, not product.',
      ],
      direction: {
        motion: 'Unhurried. Cinematic. Long takes, slow reveals.',
        tone:   'Archival. Observational. The researcher, not the advocate.',
        space:  'Found locations. Surfaces with history. Nothing purpose-built.',
      },
    },

    concepts: [
      {
        num:   '01',
        title: 'Archaeology',
        body:  'Used boots. Worn surfaces. An editorial study of what objects look like after they have been lived in.',
      },
      {
        num:   '02',
        title: 'Archive',
        body:  'A visual documentation system for historical pairs. Reference photography. The boot as primary source.',
      },
      {
        num:   '03',
        title: 'Subculture Index',
        body:  'A motion work exploring the visual languages of each subculture that adopted the boot. Sequence, not narrative.',
      },
    ],

    visualLanguage: {
      palette:    ['#111110', '#1C1B18', '#C8A800', '#DCDCDC'],
      colorNotes: 'Warm near-black. The yellow as signal — used sparingly, deliberately, with restraint.',
      motion:     'Slow documentary. Long exposure. Time as material.',
      mood:       'The archive room. Objects waiting to be understood.',
    },

    scope: ['Editorial Direction', 'Archive Research', 'Motion Study'],
  },

  vans: {
    accent:      '#CC0000',
    accentMuted: 'rgba(204,0,0,0.1)',
    name:        'Vans',
    category:    'Skate / Streetwear',
    year:        '2022',
    status:      'Complete',

    tagline:     'The familiar object re-examined. Constraint as creative method.',

    context: {
      heading: 'On Vans',
      body: [
        'Vans is one of the most visually ubiquitous objects in contemporary life. The silhouette is so familiar that it has become almost invisible — seen without being looked at.',
        'That invisibility is the creative question. What happens when you force attention onto an object that everyone assumes they already understand? Familiarity, it turns out, is not the same as knowledge.',
      ],
    },

    exploration: {
      heading: 'The Exploration',
      body: [
        'We imposed a constraint: photograph the shoe as if the viewer had never seen one. Remove every assumption about what it is, who wears it, what it means. Start from the object.',
        'The results were unexpected. Without its cultural context, the Vans silhouette is genuinely strange — an extremely flat sole, a canvas surface, a shape that makes no concessions to ergonomics. It is an honest object. We tried to photograph it honestly.',
      ],
      direction: {
        motion: 'Abrupt. Quick cuts against long stillness. Energy in contrast.',
        tone:   'Deadpan. The object presented without explanation or enthusiasm.',
        space:  'Empty. The shoe alone. Nowhere to look but at the thing itself.',
      },
    },

    concepts: [
      {
        num:   '01',
        title: 'First Look',
        body:  'A photography series that photographs the shoe as if for the first time. Clinical, direct, without context or lifestyle.',
      },
      {
        num:   '02',
        title: 'Constraint',
        body:  'A motion study built on a single rule: the shoe never moves. Everything else in the frame does.',
      },
      {
        num:   '03',
        title: 'Alternative',
        body:  'An editorial repositioning study — the Vans silhouette within dark fashion contexts. Not for Vans. For the question.',
      },
    ],

    visualLanguage: {
      palette:    ['#0E0E0E', '#1A1A1A', '#CC0000', '#F0F0F0'],
      colorNotes: 'High contrast. Black and white with red as the only intrusion. Graphic, not atmospheric.',
      motion:     'Quick. Decisive. Energy in bursts between long quiet.',
      mood:       'The studio exercise. Rigorous, curious, without agenda.',
    },

    scope: ['Concept Development', 'Editorial Study', 'Repositioning Research'],
  },
}

export function getBrandSlugs() {
  return Object.keys(brandThemes)
}
