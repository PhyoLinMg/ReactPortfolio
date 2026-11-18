import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../../styles/theme';

const breathe = keyframes`
  from { opacity: 0.35; }
  to { opacity: 0.75; }
`;

const Box = styled.div`
  display: grid;
  gap: ${theme.space.md};
  padding: ${theme.space.lg} 0;
`;

const Line = styled.div<{ w: string }>`
  height: 0.9rem;
  width: ${({ w }) => w};
  background: ${theme.colors.mat};
  border-radius: 2px;
  animation: ${breathe} 1.1s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
  }
`;

const Label = styled.p`
  font-family: ${theme.fonts.caps};
  letter-spacing: 0.14em;
  font-size: 0.85rem;
  color: ${theme.colors.taupe};
`;

export const Loading = ({ label }: { label: string }) => (
  <Box role="status" aria-live="polite">
    <Label>{label}</Label>
    <Line w="72%" />
    <Line w="58%" />
    <Line w="64%" />
  </Box>
);

const ErrorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.space.md};
  padding: ${theme.space.lg};
  border: 1px dashed ${theme.colors.thread};
  border-radius: 4px;

  p {
    font-style: italic;
    color: ${theme.colors.taupe};
  }

  button {
    font-family: ${theme.fonts.caps};
    letter-spacing: 0.12em;
    color: ${theme.colors.ribbon};
    border-bottom: 1px solid currentColor;
    padding: 0.25rem 0;
  }
`;

export const LoadError = ({ what, retry }: { what: string; retry: () => void }) => (
  <ErrorBox role="alert">
    <p>The {what} could not be retrieved from the archive just now.</p>
    <button type="button" onClick={retry}>Try again</button>
  </ErrorBox>
);
