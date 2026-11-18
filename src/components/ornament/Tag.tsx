import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const notch = 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)';

// Primary: a red ribbon tag with a pointed tail. Secondary: the same tag drawn in outline.
export const RibbonTag = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3rem;
  padding: 0.7rem 2rem 0.7rem 1.2rem;
  background: ${theme.colors.ribbon};
  color: ${theme.colors.buff};
  font-family: ${theme.fonts.caps};
  font-weight: 600;
  font-size: 1.02rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  clip-path: ${notch};
  box-shadow: inset 0 1px 0 ${theme.colors.ribbonSheen};
  transition: background 0.35s ${theme.ease}, padding 0.35s ${theme.ease};

  svg {
    flex: none;
  }

  &:hover {
    background: ${theme.colors.ribbonDeep};
    padding-right: 2.5rem;
  }

  /* clip-path hides an outside outline, so the ring is drawn inside the tag */
  &:focus-visible {
    outline: 2px solid ${theme.colors.buff};
    outline-offset: -6px;
  }
`;

export const OutlineTag = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid ${theme.colors.taupe};
  border-radius: 3px;
  color: ${theme.colors.ink};
  font-family: ${theme.fonts.caps};
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  background: rgba(237, 229, 212, 0.6);
  transition: border-color 0.3s ${theme.ease}, color 0.3s ${theme.ease};

  svg {
    color: ${theme.colors.taupe};
    transition: color 0.3s ${theme.ease};
  }

  &:hover {
    border-color: ${theme.colors.ribbon};
    color: ${theme.colors.ribbon};

    svg {
      color: ${theme.colors.ribbon};
    }
  }
`;

export const Caps = styled.span`
  font-family: ${theme.fonts.caps};
  font-weight: 500;
  letter-spacing: 0.14em;
  font-size: 0.82rem;
  color: ${theme.colors.taupe};
`;
