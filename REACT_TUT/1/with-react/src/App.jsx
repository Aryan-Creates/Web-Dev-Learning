import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText = "This is Elon Musk"/>
      <div className="value">
        {value}
      </div>
      <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App
