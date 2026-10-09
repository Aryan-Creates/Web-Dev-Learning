import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Naam kya h")
  const [form, setform] = useState({email: " " , phone: " "})
  const handleClick = ()=>{
    alert("Yo Welcome to my YT channel Guyzzz")
  }
  const handleMouseOver = ()=>{
    alert("Yo Welcome to my INSTA channel Guyzzz")
  }

  const handleChange = (e)=>{
    // setname(e.target.value) 
    setform({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        this is a red div
      </div> */}
      <div className="type">
      <input type="text" name = 'email' value={form.email?form.email:" "} onChange={handleChange} />
      <input type="text" name = 'phone' value={form.phone?form.phone:" "} onChange={handleChange} />
      </div>

    </>
  )
}

export default App
