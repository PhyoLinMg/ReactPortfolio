import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Certificate } from '../../network/model/Certificate';
import { getCertificates } from '../../network/client/getCertificates';

const CertificatesSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const CertificateCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const CertificateTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const CertificateDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  opacity: 0.9;
`;

const CertificateActions = styled.div`
  margin-top: auto;
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[] | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const data = await getCertificates();
        setCertificates(data);
      } catch (error) {
        console.error('Failed to fetch certificates:', error);
      }
    }

    fetchCertificates();
  }, []);

  if (!certificates) return <div>Loading...</div>;

  return (
    <CertificatesSection id="certificates" role="region" aria-label="Certificates">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Certificates
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CertificateGrid role="list">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} variants={itemVariants} role="listitem">
                <CertificateTitle>{cert.title}</CertificateTitle>
                <CertificateDescription>{cert.description}</CertificateDescription>
                <CertificateActions>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open certificate: ${cert.title}`}
                    title="Open certificate"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span className="sr-only">Open certificate</span>
                  </a>
                </CertificateActions>
              </CertificateCard>
            ))}
          </CertificateGrid>
        </motion.div>
      </div>
    </CertificatesSection>
  );
};

export default Certificates;
