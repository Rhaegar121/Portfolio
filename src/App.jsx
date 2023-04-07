import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import StarsCanvas from './components/Stars';

function App() {

  return (
    <BrowserRouter>
      <div className='z-0'>
        <Navbar />
        <StarsCanvas />
      </div>
      <div className='relative z-1'>
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
