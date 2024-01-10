import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Education />
      
    </div>
  );
}

export default App;
