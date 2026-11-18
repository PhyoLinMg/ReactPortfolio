import { Global, css } from '@emotion/react';
import { theme } from './theme';

const { colors, fonts } = theme;

// Laid-paper grain: fine turbulence plus faint horizontal laid lines.
const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.42 0 0 0 0 0.36 0 0 0 0 0.27 0 0 0 0.09 0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E")`;
const laid = `repeating-linear-gradient(0deg, rgba(107, 98, 84, 0.035) 0 1px, transparent 1px 7px)`;

const globalStyles = css`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  body {
    font-family: ${fonts.body};
    font-size: 1.0625rem;
    line-height: 1.6;
    color: ${colors.ink};
    background-color: ${colors.buff};
    background-image: ${grain}, ${laid};
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-numeric: oldstyle-nums proportional-nums;
    caret-color: ${colors.ribbon};
  }

  h1, h2, h3 {
    font-family: ${fonts.display};
    font-weight: 400;
    line-height: 1.05;
    text-wrap: balance;
  }

  p { text-wrap: pretty; }

  a {
    color: inherit;
    text-decoration-color: ${colors.rule};
    text-underline-offset: 0.22em;
    text-decoration-thickness: 1px;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, ol { list-style: none; }

  ::selection {
    background: ${colors.ruby};
    color: ${colors.ribbonDeep};
  }

  :focus-visible {
    outline: 2px solid ${colors.ribbon};
    outline-offset: 3px;
    border-radius: 2px;
  }

  html {
    scrollbar-color: ${colors.rule} ${colors.buffDeep};
  }

  ::-webkit-scrollbar { width: 12px; }
  ::-webkit-scrollbar-track { background: ${colors.buffDeep}; }
  ::-webkit-scrollbar-thumb {
    background: ${colors.rule};
    border: 3px solid ${colors.buffDeep};
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover { background: ${colors.ribbon}; }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media print {
    body { background: white; }
    nav, .no-print { display: none !important; }
    section { break-inside: avoid; }
    a[href^="http"]::after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
