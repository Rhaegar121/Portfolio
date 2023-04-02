import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import StarsCanvas from './components/Stars'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='relative z-0'>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App
