import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { SectionHeading } from '../ornament/SectionHeading';
import { Loading, LoadError } from '../ornament/Pending';
import { useCms } from '../../lib/useCms';
import { getTimeline } from '../../network/client/getTimeline';
import { formatRange, parseRange, splitList, summaryLines } from '../../lib/record';

const { colors, fonts, space, breakpoints } = theme;

const Section = styled.section`
  padding: ${space.xxl} clamp(1rem, 4vw, 4.5rem) ${space.xl};
`;

const Ledger = styled.ol`
  list-style: none;
  max-width: 62rem;
`;

const Entry = styled.li<{ study: boolean; now: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 0 ${space.xl} 2.6rem;
  scroll-margin-top: 5rem;

  /* the ribbon passage from this entry down to the one before it */
  &::before {
    content: '';
    position: absolute;
    left: 0.62rem;
    top: 1.2rem;
    bottom: 0;
    border-left: ${({ study }) => (study ? `2px dashed ${colors.thread}` : `5px solid ${colors.ribbon}`)};
  }

  &:last-of-type::before {
    bottom: 60%;
    border-left-style: dashed;
  }

  /* station node */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45rem;
    width: 1.45rem;
    height: 1.45rem;
    border-radius: 50%;
    background: ${colors.buff};
    border: 2px solid ${({ study }) => (study ? colors.thread : colors.ribbon)};
    box-shadow: ${({ now }) => (now ? `inset 0 0 0 3px ${colors.buff}, inset 0 0 0 10px ${colors.ribbon}` : 'none')};
  }

  &:target h3 {
    color: ${colors.ribbon};
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 12rem 1fr;
    column-gap: ${space.lg};
    padding-left: 0;

    &::before { left: calc(12rem + 0.62rem); }
    &::after { left: 12rem; }
    > div { padding-left: 2.6rem; }
  }
`;

const When = styled.p`
  font-family: ${fonts.caps};
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${colors.ribbon};
  font-variant-numeric: lining-nums;
  padding-top: 0.25rem;

  span {
    white-space: nowrap;
  }

  span + span::before {
    content: ' ';
    white-space: normal;
  }

  @media (min-width: ${breakpoints.md}) {
    text-align: right;
  }
`;

const Role = styled.h3`
  font-size: clamp(1.6rem, 2.8vw, 2.1rem);
  transition: color 0.3s;
`;

const Org = styled.p`
  font-style: italic;
  font-size: 1.15rem;
  color: ${colors.taupe};
`;

const Points = styled.ul`
  margin-top: ${space.md};
  display: grid;
  gap: 0.35rem;
  max-width: 62ch;

  li {
    position: relative;
    padding-left: 1.3rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.75em;
    width: 0.65rem;
    border-top: 1.5px solid ${colors.ribbon};
  }
`;

const Stack = styled.p`
  margin-top: ${space.md};
  font-family: ${fonts.caps};
  font-size: 0.92rem;
  letter-spacing: 0.06em;

  b {
    font-weight: 500;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    color: ${colors.taupe};
    margin-right: 0.6rem;
  }
`;

const Experiences = () => {
  const timeline = useCms('timeline', getTimeline);

  return (
    <Section id="timeline" aria-labelledby="timeline-title">
      <SectionHeading id="timeline-title" note="Every role, newest first.">
        The record
      </SectionHeading>

      {timeline.status === 'loading' && <Loading label="Retrieving the record" />}
      {timeline.status === 'error' && <LoadError what="career record" retry={timeline.retry} />}
      {timeline.status === 'ready' && (
        <Ledger>
          {timeline.data.map((item) => {
            const study = item.timelinetype === 'education';
            const now = parseRange(item.daterange).present;
            const stack = splitList(item.techstack);
            return (
              <Entry key={item.id} id={`record-${item.id}`} study={study} now={now}>
                <When>
                  {formatRange(item.daterange).split(' – ').map((half, i, all) => (
                    <span key={half}>
                      {half}
                      {i < all.length - 1 ? ' –' : study ? ' · Study' : ''}
                    </span>
                  ))}
                </When>
                <div>
                  <Role>{item.title}</Role>
                  <Org>{item.name.trim()}</Org>
                  <Points>
                    {summaryLines(item.summarypoints).map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </Points>
                  {stack.length > 0 && (
                    <Stack>
                      <b>Stack</b>
                      {stack.join(' · ')}
                    </Stack>
                  )}
                </div>
              </Entry>
            );
          })}
        </Ledger>
      )}
    </Section>
  );
};

export default Experiences;
