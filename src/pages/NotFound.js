import React from 'react';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-red-300">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">NOT FOUND</h1>
            <p className="text-2xl">404</p>
        </div>
    );
}

export default NotFound;