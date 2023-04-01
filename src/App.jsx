import { BrowserRouter } from "react-router-dom";
import StarsCanvas from './components/Stars'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App
