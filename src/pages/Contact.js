import React from 'react';
import {CodeIcon} from "@heroicons/react/solid";

const Contact = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-indigo-300">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">CONTACT PAGE</h1>
            <a href="https://github.com/lesharper?tab=repositories" className="text-2xl flex items-center">
                <CodeIcon className="h-7 mx-8"/>
                Github
            </a>
        </div>
    );
}

export default Contact;