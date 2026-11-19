import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { SectionHeading } from '../ornament/SectionHeading';
import { Loading, LoadError } from '../ornament/Pending';
import { useCms } from '../../lib/useCms';
import { getCertificates } from '../../network/client/getCertificates';

const { colors, fonts, space, breakpoints, ease } = theme;

const Section = styled.section`
  padding: ${space.xxl} clamp(1rem, 4vw, 4.5rem) ${space.xl};
`;

const List = styled.ul`
  display: grid;
  border-top: 1px solid ${colors.rule};

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: ${space.xl};
  }
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${space.md};
  padding: ${space.lg} 0;
  border-bottom: 1px solid ${colors.rule};

  /* small seal */
  &::before {
    content: '';
    grid-row: span 3;
    width: 1.1rem;
    height: 1.1rem;
    margin-top: 0.3rem;
    border-radius: 50%;
    border: 1.5px solid ${colors.ribbon};
    box-shadow: inset 0 0 0 2.5px ${colors.buff}, inset 0 0 0 8px ${colors.ruby};
  }

  h3 {
    font-family: ${fonts.body};
    font-weight: 600;
    font-size: 1.18rem;
    line-height: 1.3;
  }

  p {
    margin-top: 0.35rem;
    color: ${colors.taupe};
    line-height: 1.5;
    max-height: 4.5em;
    padding: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  a {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 2.75rem;
    font-family: ${fonts.caps};
    font-size: 0.88rem;
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

const Certificates = () => {
  const certificates = useCms('certificates', getCertificates);

  return (
    <Section id="certificates" aria-labelledby="certificates-title">
      <SectionHeading id="certificates-title">Certificates</SectionHeading>

      {certificates.status === 'loading' && <Loading label="Retrieving certificates" />}
      {certificates.status === 'error' && <LoadError what="certificates" retry={certificates.retry} />}
      {certificates.status === 'ready' && (
        <List>
          {certificates.data.map((cert) => (
            <Item key={cert.id}>
              <h3>{cert.title}</h3>
              {cert.description && <p>{cert.description}</p>}
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  View credential <FaArrowRight aria-hidden="true" />
                  <span className="sr-only">: {cert.title}</span>
                </a>
              )}
            </Item>
          ))}
        </List>
      )}
    </Section>
  );
};

export default Certificates;
