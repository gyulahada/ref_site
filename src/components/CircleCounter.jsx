import React, { useState, useEffect } from 'react';

const CircleCounter = ({startCount, marginClass}) => {
    const [counter, setCounter] = useState(startCount);
    const maxCount = 1000;
    const strokeWidth = 8;
    const radius = 64 - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const progress = counter * circumference / maxCount;

    useEffect(() => {
        const timer = setInterval(() => {
            if (counter < maxCount) {
                setCounter(prevCounter => prevCounter + 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [counter]);

    return (
        <div className={`${marginClass} w-64 h-64 relative`}>
            <svg className="w-full h-full absolute" viewBox="0 0 128 128">
                <circle 
                    stroke="white" 
                    strokeWidth={strokeWidth} 
                    fill="transparent" 
                    r={radius} 
                    cx="64" 
                    cy="64" 
                />
                <circle 
                    stroke="green" 
                    strokeWidth={strokeWidth} 
                    strokeDasharray={circumference} 
                    strokeDashoffset={circumference - progress} 
                    fill="transparent" 
                    r={radius} 
                    cx="64" 
                    cy="64" 
                />
            </svg>
            <div className="w-full h-full flex justify-center items-center z-10 absolute">
                <p className="text-6xl text-white font-bold">{counter}</p>
            </div>
        </div>
    );
};

const CircleCounters = () => {
    return (
        <div className="h-300 w-300 mt-16 flex justify-center items-center">
            <div className="grid grid-cols-1">
                <CircleCounter startCount={0} marginClass="m-8 md:m-8 lg:m-8" />
            </div>
        </div>
    );
};

export default CircleCounters;