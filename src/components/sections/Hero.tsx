import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium, FaArrowRight } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { RibbonTag, OutlineTag, Caps } from '../ornament/Tag';
import { Mount } from '../ornament/Mount';
import { Loading } from '../ornament/Pending';
import { Journey } from './Journey';
import { useCms } from '../../lib/useCms';
import { getTimeline } from '../../network/client/getTimeline';
import { getProjects } from '../../network/client/getProjects';
import { current, formatRange, liveLabel, roleFor } from '../../lib/record';
import { EMAIL, PROFILES } from '../../lib/contact';
import { Project } from '../../network/model/Project';
import { TimelineItem } from '../../network/model/Timeline';

const { colors, fonts, space, breakpoints, ease } = theme;

const settle = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
`;

const Section = styled.section`
  padding: clamp(2rem, 6vw, 4.5rem) clamp(1rem, 4vw, 4.5rem) ${space.xl};
`;

const Top = styled.div`
  display: grid;
  gap: ${space.xl};
  align-items: start;
  margin-bottom: ${space.xl};

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: clamp(2rem, 4vw, 4rem);
  }
`;

const Intro = styled.div`
  animation: ${settle} 0.9s ${ease} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Name = styled.h1`
  font-size: clamp(4rem, 9.5vw, 6rem);
  line-height: 0.92;
  letter-spacing: -0.01em;
  color: ${colors.ribbon};
`;

const Claim = styled.p`
  margin-top: ${space.md};
  max-width: 44ch;
  font-style: italic;
  font-size: clamp(1.25rem, 2.1vw, 1.55rem);
  line-height: 1.4;
`;

const Now = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.8rem;
  margin-top: ${space.lg};
  padding: ${space.sm} 0;
  border-top: 1px solid ${colors.rule};
  border-bottom: 1px solid ${colors.rule};
  font-size: 1.1rem;
  min-height: 3.2rem;

  &::before {
    content: '';
    align-self: center;
    flex: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1.5px solid ${colors.ribbon};
    box-shadow: inset 0 0 0 2.5px ${colors.buff}, inset 0 0 0 8px ${colors.ribbon};
  }

  strong {
    font-weight: 600;
  }

  em {
    color: ${colors.taupe};
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: ${space.lg};
`;

const Exhibit = styled.figure`
  animation: ${settle} 1s ${ease} 0.15s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Caption = styled.figcaption`
  margin-top: ${space.md};
  border: 1px solid ${colors.rule};
  border-radius: 4px;
  padding: ${space.md};
  display: grid;
  gap: 0.3rem;

  h2 {
    font-family: ${fonts.caps};
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.12em;
    color: ${colors.ribbon};
    line-height: 1.3;
  }

  p {
    font-style: italic;
    color: ${colors.taupe};
    line-height: 1.4;
  }

  a {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 0.35rem;
    font-family: ${fonts.caps};
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    color: ${colors.ribbon};
    text-decoration: none;
  }

  a svg {
    transition: transform 0.3s ${ease};
  }

  a:hover svg {
    transform: translateX(4px);
  }
`;

function featured(projects: Project[], timeline: TimelineItem[]) {
  // The shipped work tied to the most recent role it came from.
  for (const role of timeline) {
    // Only work with a picture can stand as the exhibit.
    const project = projects.find((p) => p.image && roleFor(p, timeline) === role);
    if (project) return { project, role };
  }
  const fallback = projects.find((p) => p.image);
  return fallback ? { project: fallback, role: undefined } : undefined;
}

const FeaturedExhibit = () => {
  const projects = useCms('projects', getProjects);
  const timeline = useCms('timeline', getTimeline);
  if (projects.status === 'loading' || timeline.status === 'loading') {
    return <Loading label="Retrieving exhibit" />;
  }
  if (projects.status !== 'ready') return null;
  const pick = featured(projects.data, timeline.status === 'ready' ? timeline.data : []);
  if (!pick) return null;
  const { project, role } = pick;

  return (
    <Exhibit>
      {project.image && <Mount src={project.image.url} alt={`Screenshot of ${project.title}`} eager />}
      <Caption>
        <h2>{project.title}</h2>
        {project.description && <p>{project.description}</p>}
        {role && (
          <Caps>
            {role.title} · {formatRange(role.daterange)}
          </Caps>
        )}
        {project.liveurl && (
          <a href={project.liveurl} target="_blank" rel="noopener noreferrer">
            {liveLabel(project.liveurl)} <FaArrowRight aria-hidden="true" />
          </a>
        )}
      </Caption>
    </Exhibit>
  );
};

const CurrentPost = () => {
  const timeline = useCms('timeline', getTimeline);
  if (timeline.status !== 'ready') return <Now aria-busy="true"><em>Retrieving current post…</em></Now>;
  const now = current(timeline.data);
  if (!now) return null;
  const since = now.daterange.split(/\s*[-–—]\s*/)[0].trim();
  return (
    <Now>
      <Caps>Now</Caps>
      <span>
        <strong>{now.title}</strong> at <strong>{now.name.trim()}</strong>
      </span>
      <em>since {since}</em>
    </Now>
  );
};

const CareerPanel = () => {
  const timeline = useCms('timeline', getTimeline);
  if (timeline.status === 'loading') return <Loading label="Retrieving the record" />;
  if (timeline.status === 'error') return null;
  return <Journey items={timeline.data} />;
};

export const Hero = () => (
  <Section id="about" aria-labelledby="name">
    <Top>
      <Intro>
        <Name id="name">Phyo Lin Mg</Name>
        <Claim>
          Android engineer building SDKs and apps in Kotlin, Compose and Flutter.
        </Claim>
        <CurrentPost />
        <Actions>
          <RibbonTag href={`mailto:${EMAIL}`}>
            <FaEnvelope aria-hidden="true" /> Email me
          </RibbonTag>
          <OutlineTag href={PROFILES.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
          </OutlineTag>
          <OutlineTag href={PROFILES.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </OutlineTag>
          <OutlineTag href={PROFILES.medium} target="_blank" rel="noopener noreferrer">
            <FaMedium aria-hidden="true" /> Medium
          </OutlineTag>
        </Actions>
      </Intro>
      <FeaturedExhibit />
    </Top>
    <CareerPanel />
  </Section>
);
