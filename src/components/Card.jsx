import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, description, description2 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative flex flex-col justify-center items-center rounded-md overflow-hidden shadow-lg p-4 sm:p-6 bg-white w-64 h-64 transition-all duration-200 ease-in-out transform hover:scale-105 mb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon icon={icon} size="3x" />
            <div className={`absolute top-0 left-0 bg-white w-full h-full p-4 flex flex-col justify-center items-center ${isHovered ? 'block' : 'hidden'}`}>
                <p className="font-black text-base text-center mb-4">
                    {description}
                </p>
                <p className="text-black text-center">
                    {description2} 
                </p>
            </div>
        </div>
    );
}

export default Card;