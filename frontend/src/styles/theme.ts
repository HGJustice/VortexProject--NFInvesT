import { fontSize, montserratFont, systemFonts } from '@/styles/typography';

export const theme = {
  colors: {
    neutral: {
      subtle: '#ffffff',
      gentle: '#ececed',
      main: '#e8e7e8',
      strong: '#bebebe',
      intense: '#32323d',
    },
    primary: {
      subtle: '#5e5e78',
      gentle: '#2b2d3d',
      main: '#1f212f',
      strong: '#191927',
      intense: '#141423',
    },
    success: {
      main: '#7ba488',
      strong: '#6A9572',
    },
    error: '#ea968b',

    get background() {
      return this.primary.strong;
    },
  },
  fontFamily: {
    montserrat: `${montserratFont.style.fontFamily}, ${systemFonts}`,
  },
  fontSize: fontSize,
  headings: {
    h1: {
      fontSize: fontSize.xl,
      lineHeight: 1,
      fontWeight: 700,
    },
    h2: {
      fontSize: fontSize.lg,
      lineHeight: 1,
      fontWeight: 600,
    },
    h3: {
      fontSize: fontSize.md,
      lineHeight: 1.4,
      fontWeight: 500,
    },
  },
  spacing: {
    xxsm: '4px',
    xsm: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    page: '128px',
  },
  icon: {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '64px',
    get default() {
      return this.md;
    },
  },
} as const;

export type ThemeType = typeof theme;
