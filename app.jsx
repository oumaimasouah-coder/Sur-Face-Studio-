// Surface Studio — App
const App = () => {
  const [activeProject, setActiveProject] = React.useState(null);
  return (
    <div style={{ background: T.chaux, minHeight: '100vh' }}>
      <Nav/>
      <Hero/>
      <Marquee/>
      <Realisations onOpenProject={setActiveProject}/>
      <Services/>
      <Manifeste/>
      <Studio/>
      <Contact/>
      <Footer/>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)}/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
