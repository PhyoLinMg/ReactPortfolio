import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { Bookmark } from '../ornament/Bookmark';
import { Stamp } from '../ornament/Stamp';
import { useCms } from '../../lib/useCms';
import { getTimeline } from '../../network/client/getTimeline';
import { androidSince, current, parseRange, splitList } from '../../lib/record';
import { EMAIL } from '../../lib/contact';

const { colors, fonts, space, breakpoints, rail, ease } = theme;

const SECTIONS = [
  { id: 'about', label: 'Overview' },
  { id: 'projects', label: 'Work' },
  { id: 'timeline', label: 'Record' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const SkipLink = styled.a`
  position: absolute;
  left: ${space.md};
  top: -4rem;
  z-index: 100;
  padding: ${space.sm} ${space.md};
  background: ${colors.ribbon};
  color: ${colors.buff};
  font-family: ${fonts.caps};
  letter-spacing: 0.12em;
  text-decoration: none;

  &:focus {
    top: ${space.md};
  }
`;

const Rail = styled.aside`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    gap: ${space.lg};
    position: fixed;
    inset: 0 auto 0 0;
    width: ${rail};
    padding: ${space.xl} ${space.lg} ${space.lg};
    border-right: 1px solid ${colors.rule};
    overflow-y: auto;
    z-index: 10;
  }
`;

const Mark = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space.sm};
  align-items: start;
  text-decoration: none;
  color: ${colors.ribbon};
  font-family: ${fonts.caps};
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  line-height: 1.2;
`;

const Index = styled.ol`
  list-style: none;
  border-left: 1px solid ${colors.rule};
  margin-left: 0.45rem;
`;

const IndexLink = styled.a<{ active: boolean }>`
  position: relative;
  display: block;
  padding: 0.4rem 0 0.4rem 1.35rem;
  font-family: ${fonts.caps};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  color: ${({ active }) => (active ? colors.ribbon : colors.ink)};
  transition: color 0.3s ${ease};

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 50%;
    width: 0.95rem;
    height: 0.95rem;
    margin-top: -0.475rem;
    border-radius: 50%;
    border: 1.5px solid ${colors.ribbon};
    background: ${colors.buff};
    box-shadow: inset 0 0 0 2.5px ${colors.buff}, inset 0 0 0 8px ${colors.ribbon};
    transform: scale(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.4s ${ease};
  }

  &:hover {
    color: ${colors.ribbon};
  }
`;

const Card = styled.dl`
  border: 1px solid ${colors.rule};
  border-radius: 4px;
  padding: ${space.md};
  display: grid;
  gap: ${space.sm};

  dt {
    font-family: ${fonts.caps};
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    color: ${colors.taupe};
  }

  dd {
    font-size: 1rem;
    line-height: 1.35;
    margin-bottom: 0.2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.4rem;
    padding-top: ${space.sm};
    border-top: 1px solid ${colors.rule};
    width: 100%;
    font-family: ${fonts.caps};
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    color: ${colors.ribbon};
    text-decoration: none;
  }

  a:hover span {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }
`;

const RailFoot = styled.div`
  margin-top: auto;
  padding-left: ${space.sm};
`;

const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space.sm} ${space.md};
  background: rgba(237, 229, 212, 0.94);
  border-bottom: 1px solid ${colors.rule};

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  font-family: ${fonts.caps};
  font-weight: 500;
  letter-spacing: 0.14em;
  font-size: 0.95rem;
  padding: 0.6rem 0.2rem 0.6rem 0.9rem;
  min-height: 2.75rem;
  color: ${colors.ribbon};
`;

const Sheet = styled.nav<{ open: boolean }>`
  position: fixed;
  inset: 3.6rem 0 auto 0;
  z-index: 19;
  padding: ${space.md} ${space.md} ${space.lg};
  background: ${colors.buff};
  border-bottom: 1px solid ${colors.ribbon};
  box-shadow: 0 18px 30px -18px rgba(42, 38, 34, 0.35);
  transform: translateY(${({ open }) => (open ? '0' : '-120%')});
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: transform 0.45s ${ease}, visibility 0.45s;

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }

  li a {
    font-size: 1.15rem;
    padding-top: 0.65rem;
    padding-bottom: 0.65rem;
  }
`;

const Main = styled.main`
  @media (min-width: ${breakpoints.lg}) {
    margin-left: ${rail};
  }

  &:focus {
    outline: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${space.sm};
  margin: 0 clamp(1rem, 4vw, 4.5rem);
  padding: ${space.lg} 0 ${space.xl};
  border-top: 1px solid ${colors.rule};
  font-family: ${fonts.caps};
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  color: ${colors.taupe};

  a {
    color: ${colors.ribbon};
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-left: calc(${rail} + 4.5rem);
  }
`;

function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => seen.set(entry.target.id, entry.isIntersecting));
        const first = SECTIONS.find(({ id }) => seen.get(id));
        if (first) setActive(first.id);
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    // Sections mount as their data arrives, so keep looking for late ones.
    const attach = () => SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && !seen.has(id)) {
        seen.set(id, false);
        observer.observe(el);
      }
    });
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return active;
}

const IndexList = ({ active, onPick }: { active: string; onPick?: () => void }) => (
  <Index>
    {SECTIONS.map(({ id, label }) => (
      <li key={id}>
        <IndexLink
          href={`#${id}`}
          active={active === id}
          aria-current={active === id ? 'location' : undefined}
          onClick={onPick}
        >
          {label}
        </IndexLink>
      </li>
    ))}
  </Index>
);

const Accession = () => {
  const timeline = useCms('timeline', getTimeline);
  if (timeline.status !== 'ready') return null;
  const now = current(timeline.data);
  const since = androidSince(timeline.data);

  return (
    <Card>
      {now && (
        <>
          <dt>Current post</dt>
          <dd>{now.title}, {now.name.trim()}</dd>
        </>
      )}
      {now && splitList(now.techstack).length > 0 && (
        <>
          <dt>Current stack</dt>
          <dd>{splitList(now.techstack).join(' · ')}</dd>
        </>
      )}
      {since && (
        <>
          <dt>Android since</dt>
          <dd>{since}</dd>
        </>
      )}
      <a href={`mailto:${EMAIL}`}>
        <FaEnvelope aria-hidden="true" />
        <span>Write to me</span>
      </a>
    </Card>
  );
};

// Stamp for the most recent education entry in the CMS record.
const EducationStamp = () => {
  const timeline = useCms('timeline', getTimeline);
  if (timeline.status !== 'ready') return null;
  const study = timeline.data.find((item) => item.timelinetype === 'education');
  if (!study) return null;
  const span = parseRange(study.daterange);
  const end = span.present ? 'now' : span.end?.year;
  const years = [span.start?.year, end].filter(Boolean).join(' — ');
  return (
    <RailFoot>
      <Stamp
        top={study.name.trim().toUpperCase()}
        bottom={[study.title.trim().toUpperCase(), years].filter(Boolean).join(' · ')}
        center={String(end ?? span.start?.year ?? '')}
      />
    </RailFoot>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>

      <Rail aria-label="Site">
        <Mark href="#about">
          <Bookmark size={40} />
          <span>Phyo Lin Mg</span>
        </Mark>
        <nav aria-label="Sections">
          <IndexList active={active} />
        </nav>
        <Accession />
        <EducationStamp />
      </Rail>

      <TopBar>
        <Mark href="#about">
          <Bookmark size={30} />
          <span>Phyo Lin Mg</span>
        </Mark>
        <MenuButton
          type="button"
          aria-expanded={open}
          aria-controls="section-sheet"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Index'}
        </MenuButton>
      </TopBar>
      <Sheet id="section-sheet" open={open} aria-label="Sections">
        <IndexList active={active} onPick={() => setOpen(false)} />
      </Sheet>

      <Main id="main-content" tabIndex={-1}>
        {children}
      </Main>

      <Footer>
        <span>© {new Date().getFullYear()} Phyo Lin Mg</span>
        <a href="#about">Back to top</a>
      </Footer>
    </>
  );
};
