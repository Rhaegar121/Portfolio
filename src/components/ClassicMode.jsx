import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Journey from './Journey';
import FocusAreas from './FocusAreas';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import StarsCanvas from './Stars';

export default function ClassicMode() {
  return (
    <>
      <div className="relative w-screen h-screen z-10">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 body">
        <Navbar />
        <About />
        <Journey />
        <FocusAreas />
        <div className="relative mt-24 pb-28"><Testimonial /></div>
        <div className="contact mb-80"><Contact /></div>
      </div>
      <Footer />
    </>
  );
}
