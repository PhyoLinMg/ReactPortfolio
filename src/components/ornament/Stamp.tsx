import styled from '@emotion/styled';
import { useId } from 'react';
import { theme } from '../../styles/theme';

const Mark = styled.svg<{ ink: string }>`
  color: ${({ ink }) => ink};
  opacity: 0.9;
  transform: rotate(-11deg);
  mix-blend-mode: multiply;
`;

interface StampProps {
  top: string;
  bottom: string;
  center: string;
  size?: number;
  ink?: string;
}

// Legends come from CMS text of any length; shrink each to fit its arc.
const fit = (text: string, room: number, max: number, perChar: number) =>
  Math.min(max, room / Math.max(text.length * perChar, 1));

// Rubber-stamp impression: double ring, curved legends, roughened ink via turbulence.
export const Stamp = ({ top, bottom, center, size = 132, ink = theme.colors.stamp }: StampProps) => {
  const id = useId().replace(/:/g, '');
  return (
    <Mark ink={ink} width={size} height={size} viewBox="0 0 132 132" aria-hidden="true" focusable="false">
      <defs>
        <filter id={`ink-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.4 1.55" />
          <feComposite in="SourceGraphic" operator="in" />
        </filter>
        <path id={`top-${id}`} d="M22 66a44 44 0 0 1 88 0" />
        <path id={`bot-${id}`} d="M16 66a50 50 0 0 0 100 0" />
      </defs>
      <g filter={`url(#ink-${id})`} fill="none" stroke="currentColor">
        <circle cx="66" cy="66" r="62" strokeWidth="2.4" />
        <circle cx="66" cy="66" r="56" strokeWidth="1" />
        <circle cx="66" cy="66" r="31" strokeWidth="1" />
        <g fill="currentColor" stroke="none" fontFamily={theme.fonts.caps} letterSpacing="2.4">
          <text fontSize={fit(top, 130, 11.5, 0.82)}>
            <textPath href={`#top-${id}`} startOffset="50%" textAnchor="middle">{top}</textPath>
          </text>
          <text fontSize={fit(bottom, 150, 11.5, 0.82)}>
            <textPath href={`#bot-${id}`} startOffset="50%" textAnchor="middle">{bottom}</textPath>
          </text>
          <text x="66" y="73" fontSize={fit(center, 50, 19, 0.55)} textAnchor="middle" fontFamily={theme.fonts.display} letterSpacing="0.5">
            {center}
          </text>
        </g>
      </g>
    </Mark>
  );
};
