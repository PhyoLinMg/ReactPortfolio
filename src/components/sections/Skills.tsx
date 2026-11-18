import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { SectionHeading } from '../ornament/SectionHeading';
import { Loading, LoadError } from '../ornament/Pending';
import { useCms } from '../../lib/useCms';
import { getSkills } from '../../network/client/getSkills';

const { colors, fonts, space, breakpoints } = theme;

const Section = styled.section`
  padding: ${space.xxl} clamp(1rem, 4vw, 4.5rem) ${space.xl};
`;

const Columns = styled.div`
  display: grid;
  gap: ${space.xl} ${space.lg};

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Category = styled.div`
  h3 {
    font-family: ${fonts.caps};
    font-weight: 600;
    font-size: 1.05rem;
    letter-spacing: 0.16em;
    color: ${colors.ribbon};
    padding-bottom: ${space.sm};
    border-bottom: 1.5px solid ${colors.ribbon};
  }
`;

const Items = styled.ul`
  li {
    padding: 0.6rem 0;
    border-bottom: 1px dotted ${colors.rule};
    font-size: 1.12rem;
  }
`;

const hasAndroid = (names: string[]) => names.some((name) => /android/i.test(name));

const Skills = () => {
  const skills = useCms('skills', getSkills);

  return (
    <Section id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title">Skills</SectionHeading>

      {skills.status === 'loading' && <Loading label="Retrieving skills" />}
      {skills.status === 'error' && <LoadError what="skills" retry={skills.retry} />}
      {skills.status === 'ready' && (
        <Columns>
          {[...skills.data]
            .sort((a, b) =>
              Number(hasAndroid(b.skills.map((s) => s.name))) - Number(hasAndroid(a.skills.map((s) => s.name))))
            .map((category) => (
              <Category key={category.id}>
                <h3 id={`skills-${category.id}`}>{category.title}</h3>
                <Items aria-labelledby={`skills-${category.id}`}>
                  {category.skills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                  ))}
                </Items>
              </Category>
            ))}
        </Columns>
      )}
    </Section>
  );
};

export default Skills;
