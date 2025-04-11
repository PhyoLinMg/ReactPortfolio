import{r as s,j as t,m as n,n as a,t as i}from"./index-CYyVHxTn.js";import{F as p}from"./index-w4-OAhOZ.js";import{d as g}from"./datoCMSClient-D0JH2zaw.js";const m=`
  query {
    allProjects(orderBy: title_ASC) {
      id
      title
      description
      techused
      liveurl
      image {
        url
      }
    }
  }
`;async function h(){return(await g.request(m)).allProjects}const x=a.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${i.spacing.lg} 0;

  @media (min-width: ${i.breakpoints.md}) {
    padding: ${i.spacing.xl} 0;
  }
`,u=a(n.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${i.spacing.xl} * 1.5);
  color: ${i.colors.textLight};
  position: relative;
  
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

  @media (min-width: ${i.breakpoints.md}) {
    margin-bottom: calc(${i.spacing.xl} * 2);
  }
`,$=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${i.spacing.lg};
  width: 100%;
  margin-top: ${i.spacing.lg};

  @media (min-width: ${i.breakpoints.md}) {
    gap: ${i.spacing.xl};
    margin-top: ${i.spacing.xl};
  }
`,b=a(n.div)`
  background: ${i.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${i.colors.textLight};
  transition: all ${i.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`,f=a.div`
  width: 100%;
  height: 180px;
  background-image: url(${o=>o.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${i.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${i.colors.glass.card}, transparent);
  }
`,v=a.div`
  padding: ${i.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${i.breakpoints.md}) {
    padding: ${i.spacing.lg};
  }
`,w=a.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${i.spacing.sm};
  color: ${i.colors.light};
  font-weight: 600;
`,j=a.p`
  color: ${i.colors.textLight};
  margin-bottom: ${i.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`,y=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${i.spacing.xs};
  margin-bottom: ${i.spacing.md};

  @media (min-width: ${i.breakpoints.md}) {
    gap: ${i.spacing.sm};
    margin-bottom: ${i.spacing.lg};
  }
`,k=a.span`
  background: ${i.colors.glass.card};
  color: ${i.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${i.transitions.default};

  @media (min-width: ${i.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${i.colors.gradient.accent};
    color: ${i.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`,P=a.div`
  display: flex;
  gap: ${i.spacing.md};
  margin-top: auto;
  padding-top: ${i.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${i.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${i.transitions.default};
    padding: ${i.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${i.colors.light};
      background: ${i.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`,z=()=>{const[o,l]=s.useState([]);s.useEffect(()=>{async function e(){const r=await h();l(r)}e()},[]);const c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return t.jsx(x,{id:"projects",role:"region","aria-label":"Featured Projects",children:t.jsxs("div",{className:"container",children:[t.jsx(u,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},role:"heading","aria-level":2,children:"Featured Projects"}),t.jsx(n.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:t.jsx($,{role:"list",children:o.map(e=>t.jsxs(b,{variants:d,role:"listitem","aria-labelledby":`project-title-${e.id}`,children:[t.jsx(f,{imageUrl:e.image.url,role:"img","aria-label":`Screenshot of ${e.title}`}),t.jsxs(v,{children:[t.jsx(w,{id:`project-title-${e.id}`,children:e.title}),t.jsx(j,{children:e.description}),t.jsx(y,{role:"list","aria-label":`Technologies used in ${e.title}`,children:e.techused.split(", ").map(r=>t.jsx(k,{role:"listitem",children:r},r))}),t.jsx(P,{children:t.jsxs("a",{href:e.liveurl,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${e.title} live site`,children:[t.jsx(p,{"aria-hidden":"true"}),t.jsx("span",{className:"sr-only",children:"Live site"})]})})]})]},e.id))})})]})})};export{z as default};
