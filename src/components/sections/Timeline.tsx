import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { getTimeline } from '../../network/client/getTimeline';
import { TimelineItem } from '../../network/model/Timeline';
import { FaStar } from 'react-icons/fa';


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
const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const parseSummary = (summary: string) => {
  if (!summary) return null;
  const items = summary.split(/[*|-]/).map(s => s.trim()).filter(s => s.length > 0);

  if (items.length > 1 || summary.includes('*') || summary.includes('-')) {
    return (
      <ul style={{ paddingLeft: '20px', marginTop: '8px', listStyleType: 'disc' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{summary}</p>;
};

const Experiences = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);
  if (!timeLineData) return <div>Loading...</div>;

  return (
    <TimelineSection id="timeline" role="region" aria-label="Timeline">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Timeline
      </SectionTitle>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelinetype}`}
            contentStyle={
              item.timelinetype === "work"
                ? index === 0
                  ? { background: '#14B473', color: '#fff' }
                  : { background: 'rgb(163, 184, 216)', color: '#fff' }
                : { background: 'rgb(163, 184, 216)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelinetype === "work"
                ? { borderRight: index === 0 ? '7px solid #14B473' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.daterange}
            iconStyle={
              item.timelinetype === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelinetype === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelinetype === "work" ? (
              <div style={{ color: theme.colors.text }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techstack}</p>
                {parseSummary(item.summarypoints)}
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                {parseSummary(item.summarypoints)}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </TimelineSection>
  );

};

export default Experiences;