import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Projects from './components/sections/Projects';
import Experiences from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

// Lazy load non-critical components




function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {/* Hero section is critical for LCP, so keep it eager loaded */}
        <Hero />
       
          <Projects />
        
          <Experiences />
          <Skills />
          <Contact />
       
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
