import React from "react";

const Navbar = ()=>{
    return(
        <nav className="flex justify-around bg-slate-800 text-white py-4">
            <div className="logo font-bold">
                FACEBOOOOK
            </div>
            <ul className="flex gap-6">
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/login"><li>Login</li></a>
                <a href="/signup"><li>Signup</li></a>
            </ul>
        </nav>
    )
}
export default Navbar