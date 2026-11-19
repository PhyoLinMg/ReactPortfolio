import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '../../styles/theme';
import { TimelineItem } from '../../network/model/Timeline';
import { parseRange, startYear } from '../../lib/record';

const { colors, fonts, space, breakpoints, ease } = theme;

const DRAW = 1.8; // seconds for the ribbon to travel origin → present
const X0 = 30;
const X1 = 860;
const W = 1000;

const draw = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
`;

const inkIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const rise = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

const Panel = styled.div`
  position: relative;
  border: 1px solid ${colors.rule};
  border-radius: 6px;
  padding: ${space.lg} ${space.lg} ${space.md} calc(${space.lg} + 2.4rem);
  background: rgba(237, 229, 212, 0.55);

  @media (max-width: ${breakpoints.md}) {
    padding: ${space.lg} ${space.md} ${space.md} calc(${space.md} + 2.2rem);
  }
`;

const Tab = styled.p`
  position: absolute;
  left: -1px;
  top: ${space.lg};
  width: 2.1rem;
  padding: 1.1rem 0 1.6rem;
  background: ${colors.ribbon};
  color: ${colors.buff};
  font-family: ${fonts.caps};
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.22em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  /* rotated 180°, so this top notch reads as a cut tail at the foot */
  clip-path: polygon(0 0, 50% 0.7rem, 100% 0, 100% 100%, 0 100%);
`;

/* ---------- horizontal ribbon (tablet and up) ---------- */

const Wide = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const Track = styled.div`
  position: relative;
  height: 5.6rem;
`;

const RibbonSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  animation: ${draw} ${DRAW}s ${ease} 0.25s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Node = styled.span<{ now: boolean; study: boolean; delay: number }>`
  position: absolute;
  top: 1.3rem;
  width: ${({ now }) => (now ? '1.55rem' : '1.2rem')};
  height: ${({ now }) => (now ? '1.55rem' : '1.2rem')};
  border-radius: 50%;
  background: ${colors.buff};
  border: 2px solid ${({ study }) => (study ? colors.thread : colors.ribbon)};
  box-shadow: ${({ now }) => (now ? `inset 0 0 0 3px ${colors.buff}, inset 0 0 0 10px ${colors.ribbon}` : 'none')};
  transform: translate(-50%, -50%);
  animation: ${inkIn} 0.6s ${ease} ${({ delay }) => delay}s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Labels = styled.ol`
  position: relative;
  height: 10.5rem;
  margin-top: 0.4rem;
`;

const Label = styled.li<{ delay: number }>`
  position: absolute;
  top: 0;
  padding-right: 0.75rem;
  animation: ${rise} 0.7s ${ease} ${({ delay }) => delay}s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 0.2rem;
    margin: -0.2rem;
  }

  a:hover strong,
  a:focus-visible strong {
    color: ${colors.ribbon};
  }
`;

const Year = styled.span`
  display: block;
  font-family: ${fonts.caps};
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.1em;
  color: ${colors.ribbon};
  font-variant-numeric: lining-nums;
`;

const State = styled.span`
  display: block;
  font-family: ${fonts.caps};
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: ${colors.taupe};
  margin-bottom: 0.45rem;
`;

const Role = styled.strong`
  display: block;
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 1.25;
  transition: color 0.3s ${ease};
`;

const Org = styled.span`
  display: block;
  font-style: italic;
  color: ${colors.taupe};
  font-size: 0.95rem;
  line-height: 1.3;
  margin-top: 0.15rem;
`;

const Legend = styled.div`
  display: flex;
  gap: ${space.lg};
  padding-top: ${space.sm};
  border-top: 1px solid ${colors.rule};
  font-family: ${fonts.caps};
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: ${colors.taupe};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }

  i {
    display: inline-block;
    width: 2.2rem;
    border-top: 3px solid ${colors.ribbon};
  }

  i.study {
    border-top: 2px dashed ${colors.thread};
  }
`;

/* ---------- vertical ribbon (phones) ---------- */

const Narrow = styled.ol`
  display: none;

  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }
`;

const Stop = styled.li<{ study: boolean; now: boolean; last: boolean }>`
  position: relative;
  padding: 0 0 ${space.md} 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.45rem;
    top: 0.9rem;
    bottom: -0.4rem;
    border-left: ${({ study }) => (study ? `2px dashed ${colors.thread}` : `4px solid ${colors.ribbon}`)};
    display: ${({ last }) => (last ? 'none' : 'block')};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.3rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: ${colors.buff};
    border: 2px solid ${({ study }) => (study ? colors.thread : colors.ribbon)};
    box-shadow: ${({ now }) => (now ? `inset 0 0 0 2px ${colors.buff}, inset 0 0 0 9px ${colors.ribbon}` : 'none')};
  }

  a {
    text-decoration: none;
    display: grid;
    grid-template-columns: 4.2rem 1fr;
    column-gap: ${space.sm};
  }

  a > span:first-of-type {
    grid-row: span 2;
  }
`;

/* ---------- geometry ---------- */

function positions(count: number): number[] {
  if (count === 1) return [X0];
  return Array.from({ length: count }, (_, i) => X0 + (i * (X1 - X0)) / (count - 1));
}

function segment(xa: number, xb: number): string {
  const dx = xb - xa;
  return `M${xa} 24 C${xa + dx * 0.1} 98 ${xb - dx * 0.42} 66 ${xb} 24`;
}

interface JourneyProps {
  items: TimelineItem[]; // newest first, as the CMS orders them
}

export const Journey = ({ items }: JourneyProps) => {
  if (!items.length) return null;
  const ordered = [...items].reverse();
  const xs = positions(ordered.length);
  const last = ordered.length - 1;
  // Labels never wider than the gap to the next stop, so long records cannot overlap.
  const labelWidth = Math.min(14, ((X1 - X0) / W) * 100 / Math.max(ordered.length - 1, 1));
  const at = (i: number) => 0.25 + (DRAW * (xs[i] - X0)) / (X1 - X0) * 0.9;

  const meta = ordered.map((item) => {
    const span = parseRange(item.daterange);
    const study = item.timelinetype === 'education';
    return { item, study, now: span.present, year: startYear(item) };
  });

  return (
    <Panel>
      <Tab aria-hidden="true">Career</Tab>
      <h2 className="sr-only">Career at a glance</h2>

      <Wide>
        <Track>
          <RibbonSvg viewBox={`0 0 ${W} 104`} preserveAspectRatio="none" aria-hidden="true">
            {ordered.slice(0, -1).map((_, i) => {
              const d = segment(xs[i], xs[i + 1]);
              return meta[i].study ? (
                <path key={i} d={d} fill="none" stroke={colors.thread} strokeWidth="2.2" strokeDasharray="7 7" vectorEffect="non-scaling-stroke" />
              ) : (
                <g key={i}>
                  <path d={d} fill="none" stroke={colors.ribbon} strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d={d} fill="none" stroke={colors.ribbonSheen} strokeWidth="1.2" opacity="0.75" transform="translate(0 -1.6)" vectorEffect="non-scaling-stroke" />
                </g>
              );
            })}
            {/* the loose end trailing past the present */}
            <path
              d={`M${xs[last]} 24 C${xs[last] + 30} 70 ${xs[last] + 70} 86 ${W - 10} 62`}
              fill="none"
              stroke={colors.ribbon}
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </RibbonSvg>
          {meta.map(({ item, study, now }, i) => (
            <Node
              key={item.id}
              aria-hidden="true"
              now={now}
              study={study}
              delay={at(i)}
              style={{ left: `${(xs[i] / W) * 100}%` }}
            />
          ))}
        </Track>

        <Labels>
          {meta.map(({ item, study, now, year }, i) => (
            <Label
              key={item.id}
              delay={at(i) + 0.1}
              style={{ left: `calc(${(xs[i] / W) * 100}% - 0.6rem)`, width: `${labelWidth}%` }}
            >
              <a href={`#record-${item.id}`}>
                <Year>{year}</Year>
                <State>{now ? 'Present' : study ? 'Study' : 'Work'}</State>
                <Role>{item.title}</Role>
                <Org>{item.name.trim()}</Org>
              </a>
            </Label>
          ))}
        </Labels>

        <Legend aria-hidden="true">
          <span><i /> Work</span>
          <span><i className="study" /> Study</span>
        </Legend>
      </Wide>

      <Narrow>
        {[...meta].reverse().map(({ item, study, now, year }, i) => (
          <Stop key={item.id} study={study} now={now} last={i === last}>
            <a href={`#record-${item.id}`}>
              <Year>{year}</Year>
              <Role>{item.title}</Role>
              <Org>{now ? `${item.name.trim()} · present` : study ? `${item.name.trim()} · study` : item.name.trim()}</Org>
            </a>
          </Stop>
        ))}
      </Narrow>
    </Panel>
  );
};
