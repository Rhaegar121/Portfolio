import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './components/Stars';

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 bg-navy">
        <Navbar />
        <About />
        <TechStack />
        <Service />
        <Work />
        <div className="relative mt-24 pb-28"><Testimonial /></div>
        <div className="contact mb-80"><Contact /></div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
