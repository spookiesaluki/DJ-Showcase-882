import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Music from './components/Music';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Music />
      <Events />
      <Contact />
    </div>
  );
}

export default App;