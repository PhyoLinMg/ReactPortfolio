
import styled from '@emotion/styled';
// import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const TimelineSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const Experiences = () => {
  return (
    <TimelineSection id="timeline" aria-label="Timeline">
        <p>Experience testing</p>
        <br/>
        <p>Testing</p>
        <br />
        <p>Another Testing</p>
    </TimelineSection>
  );

};

export default Experiences;