import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { theme } from '../../styles/theme';
import { Bookmark } from './Bookmark';

const Head = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${theme.space.md};
  align-items: start;
  margin-bottom: ${theme.space.lg};

  svg {
    margin-top: -0.35rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 5vw, 3.75rem);
  color: ${theme.colors.ribbon};
  letter-spacing: -0.01em;
`;

const Note = styled.p`
  grid-column: 2;
  margin-top: ${theme.space.sm};
  font-style: italic;
  color: ${theme.colors.taupe};
  font-size: 1.125rem;
  max-width: 52ch;
`;

const Rule = styled.div`
  position: relative;
  grid-column: 1 / -1;
  height: 1px;
  margin-top: ${theme.space.md};
  background: rgba(163, 20, 31, 0.55);

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 7px;
    height: 7px;
    background: ${theme.colors.ribbon};
    transform: rotate(45deg);
  }
`;

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
  note?: ReactNode;
}

export const SectionHeading = ({ id, children, note }: SectionHeadingProps) => (
  <Head>
    <Bookmark size={44} />
    <Title id={id}>{children}</Title>
    {note && <Note>{note}</Note>}
    <Rule aria-hidden="true" />
  </Head>
);
