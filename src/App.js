import {Routes, Route} from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import React from "react";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
