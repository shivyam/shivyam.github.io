import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
      
    
    </div>
  );
}

export default App;
