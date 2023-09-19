import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HeaderText = () => {
    const el = useRef(null);
    const typedEl = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
          strings: ['new hobbie', 'balanced life', 'better mindset'], 
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-transparent h-fit text-center mt-60">
            <h1 className="text-5xl font-bold text-white leading-none lg:leading-snug home-name">
                Join to the community Today!
            </h1>
            <div className='flex justify-center items-center'>
                <p className="text-2xl text-white mt-6" >
                    Start your
                </p>
                <span ref={typedEl} className="text-2xl text-white mt-6 pl-2"></span>
                <p className="text-2xl text-white mt-6">here.</p>
            </div>
            <p className="text-xl text-gray-600 mt-6 mb-4">BJJ is more than just a sport!</p>
            <link to="/HeroesPage" className="my-1 text-black bg-white rounded p-1.5 px-2.5 hover:bg-black hover:text-white mt-4 md:mt-0 md:mx-4 md:my-0">Heroes</link>
        </div>
    );
}

export default HeaderText;