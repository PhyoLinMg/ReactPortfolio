import { ThemeProvider } from '@emotion/react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Experiences from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import { SectionBoundary } from './components/ornament/SectionBoundary';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <SectionBoundary name="introduction"><Hero /></SectionBoundary>
        <SectionBoundary name="work"><Projects /></SectionBoundary>
        <SectionBoundary name="record"><Experiences /></SectionBoundary>
        <SectionBoundary name="skills"><Skills /></SectionBoundary>
        <SectionBoundary name="certificates"><Certificates /></SectionBoundary>
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
