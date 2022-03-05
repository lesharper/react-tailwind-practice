import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen)
                setIsOpen(false)
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })

    return (
        <>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;