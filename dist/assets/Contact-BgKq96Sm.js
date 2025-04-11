import{j as e,m as t,n as a,t as i}from"./index-CYyVHxTn.js";import{s,i as l,t as c,u as d}from"./index-w4-OAhOZ.js";const m=a.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${i.colors.textLight};
  padding: ${i.spacing.lg} 0;

  @media (min-width: ${i.breakpoints.md}) {
    padding: ${i.spacing.xl} 0;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${i.breakpoints.sm}) {
      width: 90%;
    }
  }
`,p=a(t.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${i.spacing.lg};
  color: ${i.colors.light};
  position: relative;

  @media (min-width: ${i.breakpoints.md}) {
    margin-bottom: ${i.spacing.xl};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -${i.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${i.colors.accent};
    border-radius: 2px;
  }
`,g=a.div`
  max-width: 600px;
  margin: ${i.spacing.lg} auto;
  text-align: center;
  background: ${i.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${i.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(246, 177, 122, 0.15);

  @media (min-width: ${i.breakpoints.md}) {
    margin: ${i.spacing.xl} auto;
    padding: ${i.spacing.xl};
  }
`,h=a(t.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: ${i.spacing.lg};
  color: ${i.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;

  @media (min-width: ${i.breakpoints.md}) {
    margin-bottom: ${i.spacing.xl};
  }
`,x=a(t.a)`
  display: inline-flex;
  align-items: center;
  gap: ${i.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  color: ${i.colors.accent};
  margin-bottom: ${i.spacing.lg};
  padding: ${i.spacing.sm} ${i.spacing.lg};
  border-radius: 30px;
  transition: all ${i.transitions.default};
  font-weight: 500;
  background: ${i.colors.glass.card};
  border: 1px solid ${i.colors.accent};
  word-break: break-all;

  @media (min-width: ${i.breakpoints.sm}) {
    word-break: normal;
    padding: ${i.spacing.md} ${i.spacing.lg};
  }

  svg {
    font-size: 1.2em;
    flex-shrink: 0;

    @media (min-width: ${i.breakpoints.md}) {
      font-size: 1.4em;
    }
  }

  &:hover {
    background: ${i.colors.gradient.accent};
    color: ${i.colors.textDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${i.colors.overlay.dark};
  }
`,b=a(t.div)`
  display: flex;
  justify-content: center;
  gap: ${i.spacing.md};
  margin-top: ${i.spacing.lg};

  @media (min-width: ${i.breakpoints.md}) {
    gap: ${i.spacing.lg};
    margin-top: ${i.spacing.xl};
  }
`,r=a(t.a)`
  color: ${i.colors.accent};
  font-size: 1.6rem;
  transition: all ${i.transitions.default};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${i.colors.glass.card};
  box-shadow: 0 4px 12px rgba(246, 177, 122, 0.1);

  @media (min-width: ${i.breakpoints.md}) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  &:hover {
    color: ${i.colors.light};
    transform: translateY(-3px) rotate(8deg);
    box-shadow: 0 6px 16px rgba(246, 177, 122, 0.2);
    background: ${i.colors.gradient.glass};
  }
`,w=()=>{const o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return e.jsx(m,{id:"contact",role:"region","aria-label":"Contact Information",children:e.jsx("div",{className:"container",children:e.jsxs(t.div,{variants:o,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[e.jsx(p,{variants:n,role:"heading","aria-level":2,children:"Get In Touch"}),e.jsxs(g,{role:"article",children:[e.jsx(h,{variants:n,role:"paragraph",children:"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}),e.jsxs(x,{href:"mailto:your.email@example.com",variants:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Send me an email at your.email@example.com",children:[e.jsx(s,{"aria-hidden":"true"}),e.jsx("span",{children:"your.email@example.com"})]}),e.jsxs(b,{variants:n,role:"list","aria-label":"Social media links",children:[e.jsxs(r,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Visit my GitHub profile",children:[e.jsx(l,{"aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"GitHub"})]}),e.jsxs(r,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Connect with me on LinkedIn",children:[e.jsx(c,{"aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),e.jsxs(r,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Follow me on Twitter",children:[e.jsx(d,{"aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Twitter"})]})]})]})]})})})};export{w as default};
