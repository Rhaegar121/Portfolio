import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
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
        <Work />
        <div className="relative mt-24 pb-28"><Testimonial /></div>
        <div className="contact mb-80"><Contact /></div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
