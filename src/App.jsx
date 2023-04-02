import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import StarsCanvas from './components/Stars'
// import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <StarsCanvas />
      <div className='relative z-0'>
      </div>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
