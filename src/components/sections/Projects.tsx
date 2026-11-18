import styled from '@emotion/styled';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { SectionHeading } from '../ornament/SectionHeading';
import { Mount, PendingMount } from '../ornament/Mount';
import { Loading, LoadError } from '../ornament/Pending';
import { useCms } from '../../lib/useCms';
import { getProjects } from '../../network/client/getProjects';
import { getTimeline } from '../../network/client/getTimeline';
import { formatRange, liveLabel, roleFor, splitList } from '../../lib/record';

const { colors, fonts, space, breakpoints, ease } = theme;

const Section = styled.section`
  padding: ${space.xxl} clamp(1rem, 4vw, 4.5rem) ${space.xl};
`;

const List = styled.ol`
  list-style: none;
`;

const Entry = styled.li`
  display: grid;
  gap: ${space.lg};
  padding: ${space.xl} 0;
  border-bottom: 1px solid ${colors.rule};

  &:first-of-type {
    padding-top: ${space.md};
  }


  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: clamp(2rem, 4vw, 4rem);
    align-items: start;
  }
`;

const Title = styled.h3`
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  color: ${colors.ink};
`;

const Description = styled.p`
  margin-top: ${space.sm};
  font-size: 1.15rem;
  font-style: italic;
  max-width: 46ch;
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: 0.5rem ${space.md};
  margin-top: ${space.lg};
  padding-top: ${space.md};
  border-top: 1px solid ${colors.rule};

  dt {
    font-family: ${fonts.caps};
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    color: ${colors.taupe};
    padding-top: 0.2rem;
  }

  dd {
    line-height: 1.45;
  }
`;

const Medium = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem 0;

  li {
    font-family: ${fonts.caps};
    font-size: 0.95rem;
    letter-spacing: 0.06em;
  }

  li:not(:last-of-type)::after {
    content: '·';
    margin: 0 0.5rem;
    color: ${colors.ribbon};
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space.lg};
  margin-top: ${space.lg};

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 2.75rem;
    font-family: ${fonts.caps};
    font-weight: 500;
    letter-spacing: 0.14em;
    color: ${colors.ribbon};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ${ease};
  }

  a:hover {
    border-bottom-color: currentColor;
  }

  .pending {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    font-family: ${fonts.caps};
    font-weight: 500;
    letter-spacing: 0.14em;
    color: ${colors.taupe};
  }
`;

const isAndroid = (techused: string) => /android/i.test(techused);

const Projects = () => {
  const projects = useCms('projects', getProjects);
  const timeline = useCms('timeline', getTimeline);
  const roles = timeline.status === 'ready' ? timeline.data : [];

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" note="Shipped apps and tools, each shown with the role it came from where there was one.">
        Selected work
      </SectionHeading>

      {projects.status === 'loading' && <Loading label="Retrieving work" />}
      {projects.status === 'error' && <LoadError what="projects" retry={projects.retry} />}
      {projects.status === 'ready' && (
        <List>
          {[...projects.data]
            .sort((a, b) => Number(isAndroid(b.techused)) - Number(isAndroid(a.techused)))
            .map((project) => {
              const role = roleFor(project, roles);
              const title = project.title.trim();
              return (
                <Entry key={project.id} aria-labelledby={`project-${project.id}`}>
                  {project.image
                    ? <Mount src={project.image.url} alt={`Screenshot of ${title}`} />
                    : <PendingMount title={title} />}
                  <div>
                    <Title id={`project-${project.id}`}>{title}</Title>
                    {project.description.trim() && <Description>{project.description.trim()}</Description>}
                    <Facts>
                      {role && (
                        <>
                          <dt>Made as</dt>
                          <dd>{role.title}, {formatRange(role.daterange)}</dd>
                        </>
                      )}
                      <dt>Stack</dt>
                      <dd>
                        <Medium aria-label="Technologies">
                          {splitList(project.techused).map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </Medium>
                      </dd>
                    </Facts>
                    <Links>
                      {project.liveurl && (
                        <a href={project.liveurl} target="_blank" rel="noopener noreferrer">
                          {liveLabel(project.liveurl)} <FaArrowRight aria-hidden="true" />
                          <span className="sr-only">: {title}</span>
                        </a>
                      )}
                      {!project.liveurl && !project.githuburl && (
                        <span className="pending">Release pending</span>
                      )}
                      {project.githuburl && (
                        <a href={project.githuburl} target="_blank" rel="noopener noreferrer">
                          <FaGithub aria-hidden="true" /> Source
                          <span className="sr-only"> code for {title}</span>
                        </a>
                      )}
                    </Links>
                  </div>
                </Entry>
              );
            })}
        </List>
      )}
    </Section>
  );
};

export default Projects;
