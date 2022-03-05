import React from 'react';
import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/outline";

const Promo = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                EGGCELLENT
            </h1>
            <Link to="/menu" className="py-6 px-10 bg-yellow-500 rounded-full text-3xl
            hover:bg-yellow-400 transition duration-300 ease-in-out flex items-center animate-bounce">
                Order Now
                <ShoppingCartIcon className="h-6 w-6 ml-6"/>
            </Link>
        </div>
    );
}

export default Promo;