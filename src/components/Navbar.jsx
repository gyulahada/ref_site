import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-3 mt-2 md:flex md:justify-between md:items-center relative">
      <div className="flex justify-between items-center">
        <div>
          <a href="/" className="text-xl font-bold text-white">BJJ</a>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm1 6a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center justify-end absolute w-full bg-black md:relative md:bg-transparent`}>
        <div className="flex flex-col md:flex-row md:mx-6">
          <a href="/" className="my-1 text-white pt-1.5 md:mx-4 md:my-0">Home</a>
          <a href="#" className="my-1 text-white pt-1.5 md:mx-4 md:my-0">Contact</a>
          <div className='w-100 md:flex md:justify-between md:items-center mt-4 md:mt-0 md:ml-0 -ml-2.5'>
            <a href="./HeroesPage" className="my-1 text-black bg-white rounded p-1.5 px-2.5 hover:bg-black hover:text-white mt-4 md:mt-0 md:mx-4 md:my-0">Heroes</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;