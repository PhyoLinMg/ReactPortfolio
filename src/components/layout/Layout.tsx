import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { FloatingNav } from '../navigation/FloatingNav';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;
    
    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${theme.colors.glass.background}, transparent);
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

const Logo = styled(motion.div)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    color: ${theme.colors.textLight};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    background: ${theme.colors.glass.background};
    backdrop-filter: blur(8px);
    padding: ${theme.spacing.xl};
    gap: ${theme.spacing.md};
    z-index: 1000;
    transform: translateX(100%);
    touch-action: pan-y;
    
    a {
      color: ${theme.colors.textLight};
      font-size: 1.2rem;
      padding: ${theme.spacing.sm};
      border-radius: 4px;
      
      &:hover {
        color: ${theme.colors.light};
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  
  @media (max-width: ${theme.breakpoints.sm}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, ${theme.colors.glass.background}, transparent);
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      'Keyboard Navigation:\n',
      '- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n',
      '- Home: Go to top\n',
      '- End: Go to bottom'
    );
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) { // If dragged more than 50px to the right
      closeMobileMenu();
    }
  };

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              Lin Maung
            </Logo>
            <NavLinks role="list">
              <a href="#about" role="listitem" aria-label="About section">About</a>
              <a href="#projects" role="listitem" aria-label="Projects section">Projects</a>
              <a href="#timeline" role="listitem" aria-label="Timeline">Timeline</a>
              <a href="#skills" role="listitem" aria-label="Skills section">Skills</a>
              <a href="#contact" role="listitem" aria-label="Contact section">Contact</a>
            </NavLinks>
            <MobileMenuButton 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </div>
        </Nav>
      </Header>

      <Overlay
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        onClick={closeMobileMenu}
      />

      <MobileNav
        initial={false}
        animate={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: 'grabbing' }}
      >
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#timeline" onClick={closeMobileMenu}>Timeline</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </MobileNav>

      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Phyo Lin Mg. All rights reserved.</p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
