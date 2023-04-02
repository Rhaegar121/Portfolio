import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import StarsCanvas from './components/Stars';

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <StarsCanvas />
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
