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
      <div className='relative w-screen h-screen'>
        <Home />
        <StarsCanvas />
      </div>
      <div className='relative z-0 bg-navy'>
        <Navbar />
        <About />
        <Work />
        <div className='bg-light_grey mt-24'><Testimonial /></div>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
