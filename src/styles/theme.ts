export const theme = {
  colors: {
    buff: '#EDE5D4',
    buffDeep: '#E3D9C4',
    mat: '#D9CDB4',
    ribbon: '#A3141F',
    ribbonDeep: '#7E0E17',
    ribbonSheen: '#C8323C',
    ruby: '#EBCBC4',
    ink: '#2A2622',
    taupe: '#6B6254',
    rule: '#B9AC95',
    thread: '#7C786F',
    stamp: '#7C7468',
  },
  fonts: {
    display: "'Instrument Serif', 'Times New Roman', serif",
    body: "'Spectral', Georgia, serif",
    caps: "'Spectral SC', 'Spectral', Georgia, serif",
  },
  breakpoints: {
    sm: '640px',
    md: '900px',
    lg: '1180px',
  },
  space: {
    xs: '0.375rem',
    sm: '0.75rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3.5rem',
    xxl: '6rem',
  },
  rail: '17rem',
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
};

export type Theme = typeof theme;
