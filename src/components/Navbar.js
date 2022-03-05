import React from 'react';
import {Link} from "react-router-dom";
import {MenuIcon} from "@heroicons/react/solid";
import Logo from "../images/egglogo.ico"
const Navbar = ({toggle}) => {
    return (
        <nav className="navbar" role="navigation">
           <Link to="/" className="pl-8 flex items-center">
               <img src={Logo} alt="egg" className="h-10"/>
               EGG
           </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <MenuIcon className="h-7" onClick={toggle}/>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/about" className="p-4">About</Link>
                <Link to="/contact" className="p-4">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;