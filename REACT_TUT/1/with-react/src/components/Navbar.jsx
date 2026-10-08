import React from "react"
import Footer from "./footer"

const Navbar = (props) => {
  return (
    <div>
      <div className="logo"><h1>{props.logoText}</h1></div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar