import styled from '@emotion/styled';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaRegCopy, FaCheck } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { Bookmark } from '../ornament/Bookmark';
import { OutlineTag } from '../ornament/Tag';
import { EMAIL, PROFILES } from '../../lib/contact';

const { colors, fonts, space, breakpoints, ease } = theme;

const Section = styled.section`
  margin: ${space.xxl} clamp(1rem, 4vw, 4.5rem) ${space.xxl};
  padding: clamp(2rem, 5vw, 4rem);
  position: relative;
  border: 1px solid ${colors.ribbon};
  border-radius: 6px;
  background: rgba(235, 203, 196, 0.22);
`;

const Tab = styled(Bookmark)`
  position: absolute;
  top: -4px;
  left: clamp(2rem, 5vw, 4rem);
`;

const Title = styled.h2`
  margin-top: 1.25rem;
  font-size: clamp(3rem, 7vw, 5rem);
  color: ${colors.ribbon};
`;

const Text = styled.p`
  margin-top: ${space.md};
  font-size: 1.2rem;
  font-style: italic;
  max-width: 48ch;
`;

const Address = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${space.sm} ${space.md};
  margin-top: ${space.lg};
`;

const Mail = styled.a`
  font-family: ${fonts.display};
  font-size: clamp(1.2rem, 5.6vw, 3rem);
  line-height: 1.15;
  color: ${colors.ink};
  text-decoration: underline;
  text-decoration-color: ${colors.ribbon};
  text-decoration-thickness: 2px;
  text-underline-offset: 0.18em;
  overflow-wrap: normal;
  transition: color 0.3s ${ease};

  &:hover {
    color: ${colors.ribbon};
  }
`;

const Copy = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 0.2rem;
  font-family: ${fonts.caps};
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  color: ${colors.taupe};

  &:hover {
    color: ${colors.ribbon};
  }
`;

const Profiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space.sm};
  margin-top: ${space.xl};
  padding-top: ${space.lg};
  border-top: 1px solid ${colors.rule};

  @media (max-width: ${breakpoints.sm}) {
    a {
      flex: 1 1 8rem;
      justify-content: center;
    }
  }
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Tab size={46} />
      <Title id="contact-title">Get in touch</Title>
      <Text>
        Hiring for Android, SDK or mobile work? Email is the quickest way to reach me.
      </Text>
      <Address>
        <Mail href={`mailto:${EMAIL}`}>
          {EMAIL.split('@')[0]}@<wbr />{EMAIL.split('@')[1]}
        </Mail>
        <Copy type="button" onClick={copy} aria-live="polite">
          {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy address'}
        </Copy>
      </Address>
      <Profiles>
        <OutlineTag href={PROFILES.github} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" /> GitHub
        </OutlineTag>
        <OutlineTag href={PROFILES.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </OutlineTag>
        <OutlineTag href={PROFILES.medium} target="_blank" rel="noopener noreferrer">
          <FaMedium aria-hidden="true" /> Medium
        </OutlineTag>
      </Profiles>
    </Section>
  );
};

export default Contact;
