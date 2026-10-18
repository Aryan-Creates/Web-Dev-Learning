import React from "react";

const Footer = ()=>{
    return(
        <footer className="flex justify-around bg-slate-800 text-white py-4">
            <div className="text-center"> Copyright and FACEBOOOOK </div>
            <ul className="flex gap-2 text-sm">
                <a href='/'><li className="text-xs">About</li></a>
                <a href='/'><li className="text-xs">Contact</li></a>
                <a href='/'><li className="text-xs">Terms and Condtions</li></a>
                <a href='/'><li className="text-xs">Privacy Policy</li></a>
            </ul>
        </footer>
    )
}
export default Footer