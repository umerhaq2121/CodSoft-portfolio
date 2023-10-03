import './App.css';
import Followme from './components/Followme';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
   <>
   <Navbar/>
   <Intro/>
   <Skills/>
   <Projects/>
   <Followme/>
   <Footer/>
   </>
  );
}

export default App;
