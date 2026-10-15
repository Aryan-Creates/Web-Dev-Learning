import React from "react";
import { memo } from "react";

const Navbar = (adjective) =>{
    console.log("Navbar is rendered")
    return(
        <div>
            This is a {adjective} Navbarr
        </div>
    )
}

export default Navbar