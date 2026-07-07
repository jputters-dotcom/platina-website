// Contenu du site (version anglaise).
// Centralise tous les textes pour faciliter l'edition et l'ajout d'une version FR
// (dupliquer ce fichier en fr.ts et traduire, puis brancher une route [lang]).
//
// NB : les elements marques "// A VALIDER" reprennent des informations publiques
// (site actuel, annuaires) et doivent etre confirmes par Platina.

export const content = {
  meta: {
    lang: 'en',
    title: 'Platina — Independent European Investment Firm',
    description:
      'Platina is an independent European investment firm. We provide equity and equity-like solutions in atypical situations, backing ambitious management teams across the lower middle market.',
  },

  brand: {
    name: 'Platina',
    tagline: 'A catalyst for investment',
  },

  nav: [
    { label: 'Firm', href: '#dna' },
    { label: 'Strategies', href: '#strategies' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Approach', href: '#approach' },
    { label: 'Offices', href: '#offices' },
  ],
  cta: { label: 'Contact', href: '#contact' },
  languages: [
    { code: 'en', label: 'EN', href: '#', active: true },
    { code: 'fr', label: 'FR', href: '#', active: false }, // FR a construire
  ],

  hero: {
    eyebrow: 'Independent European investment firm',
    headlineLead: 'A catalyst for',
    headlineAccent: 'investment.',
    lead:
      'We provide equity and equity-like solutions in atypical situations, backing ambitious management teams across Europe’s lower middle market.',
    primary: { label: 'Invest with us', href: '#contact' },
    secondary: { label: 'Partner with us', href: '#contact' },
    meta: ['London · Paris · Luxembourg', 'Established 2002'],
  },

  dna: {
    eyebrow: 'Our DNA',
    statement:
      'Platina is an independent European investment firm with an entrepreneurial DNA. We act as a strategic, long-term partner to the companies we back — combining agility and hands-on management with conviction in lasting societal and demographic trends.',
    body:
      'Beyond capital, we bring judgement, discipline and a genuine alignment of interests. Our size and responsiveness let us move where larger institutions cannot, structuring bespoke solutions for entrepreneurs and delivering the returns our investors expect.',
  },

  stats: {
    // A VALIDER : chiffres issus d'informations publiques.
    eyebrow: 'At a glance',
    items: [
      { value: '2002', label: 'Founded' },
      { value: '3', label: 'Offices in Europe' },
      { value: '€10–30m', label: 'Equity per transaction' },
      { value: '≤ €50m', label: 'Enterprise value' },
    ],
  },

  strategies: {
    eyebrow: 'Strategies',
    title: 'Two disciplines, one philosophy',
    intro:
      'We deploy patient, aligned capital across two complementary strategies, each grounded in the same conviction: back the right people and support them for the long run.',
    items: [
      {
        no: '01',
        name: 'Private Equity',
        text:
          'Equity and equity-like solutions in atypical situations — beyond traditional buyout and growth — for controlling and minority stakes in the European lower middle market.',
      },
      {
        no: '02',
        name: 'Renewable Energy Infrastructure',
        text:
          'Long-term investment in renewable energy assets across Europe, supporting the transition to a cleaner and more resilient energy system.',
      },
    ],
  },

  sectors: {
    eyebrow: 'Sectors',
    title: 'Where we focus',
    intro:
      'We concentrate on sectors driven by durable societal and demographic trends, where an engaged shareholder can make a decisive difference.',
    items: [
      { no: '01', name: 'Education', text: 'Training, skills and lifelong learning platforms.' },
      { no: '02', name: 'Care Services', text: 'Human healthcare and care delivery aligned with demographic needs.' },
      { no: '03', name: 'Silver Economy', text: 'Products and services designed for an ageing population.' },
      { no: '04', name: 'Sustainability', text: 'Business models supporting the transition to a sustainable economy.' },
    ],
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Selected investments',
    intro:
      'A partner to management teams building category leaders. The selection below is illustrative.', // A VALIDER : liste a completer
    items: [
      { name: 'Perseus', sector: 'Care Services' },
      { name: 'UNIVET', sector: 'Animal Health' },
      { name: 'Groupe EDH', sector: 'Education' },
    ],
    quote: {
      text:
        'Platina’s agility, sector knowledge and flexibility on investment horizon were decisive in building our platform.',
      author: 'Portfolio company CEO', // A VALIDER : citations exactes a confirmer
    },
  },

  approach: {
    eyebrow: 'Approach',
    title: 'How we partner',
    items: [
      {
        no: '01',
        name: 'Alignment',
        text: 'We invest alongside management and align every interest around a shared long-term plan.',
      },
      {
        no: '02',
        name: 'Hands-on',
        text: 'Agile, responsive and involved, we bring operational support and governance discipline.',
      },
      {
        no: '03',
        name: 'Long-term',
        text: 'Patient capital with flexibility on horizon, focused on durable value creation.',
      },
    ],
  },

  offices: {
    eyebrow: 'Offices',
    title: 'Close to entrepreneurs, across Europe',
    items: [
      {
        city: 'London',
        lines: ['5th Floor, 20 Old Bailey', 'London', 'United Kingdom'], // A VALIDER
      },
      {
        city: 'Paris',
        lines: ['France'], // A COMPLETER : adresse Paris
      },
      {
        city: 'Luxembourg',
        lines: ['Luxembourg'], // A COMPLETER : adresse Luxembourg
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s start a conversation',
    text:
      'Whether you are an entrepreneur looking for a partner or an investor seeking access, we would be glad to talk.',
    email: 'contact@platinapartners.com', // A VALIDER
    emailLabel: 'Email us',
  },

  footer: {
    about:
      'Independent European investment firm. A long-term partner to entrepreneurs and a trusted access point for investors.',
    columns: [
      {
        title: 'Firm',
        links: [
          { label: 'Our DNA', href: '#dna' },
          { label: 'Approach', href: '#approach' },
          { label: 'Offices', href: '#offices' },
        ],
      },
      {
        title: 'Invest',
        links: [
          { label: 'Strategies', href: '#strategies' },
          { label: 'Sectors', href: '#sectors' },
          { label: 'Portfolio', href: '#portfolio' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Disclosure', href: '#' },
          { label: 'SFDR', href: '#' },
          { label: 'ESG', href: '#' },
          { label: 'Legal Disclaimer', href: '#' },
          { label: 'Privacy Policy', href: '#' },
        ],
      },
    ],
    regulatory:
      'Platina Partners is authorised and regulated by the Financial Conduct Authority (FCA).', // A VALIDER
    copyright: '© 2026 Platina Partners. All rights reserved.',
  },
} as const;

export type Content = typeof content;
