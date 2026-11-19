import { Component, ReactNode } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const Notice = styled.p`
  margin: ${theme.space.xl} clamp(1rem, 4vw, 4.5rem);
  padding: ${theme.space.lg};
  border: 1px dashed ${theme.colors.thread};
  border-radius: 4px;
  font-style: italic;
  color: ${theme.colors.taupe};
`;

interface Props {
  name: string;
  children: ReactNode;
}

// One malformed CMS record should cost its own section, never the whole page.
export class SectionBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(`[${this.props.name}] failed to render`, error);
  }

  render() {
    if (this.state.failed) {
      return <Notice role="alert">The {this.props.name} section could not be displayed right now.</Notice>;
    }
    return this.props.children;
  }
}
