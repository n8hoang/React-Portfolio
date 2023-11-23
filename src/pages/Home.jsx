import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profilepic.png'
const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400 ">
      <div className="text-center overflow-x-hidden">
      <img
            className="min-h-max max-w-md overflow-x-hidden border-8 opacity-80 border-slate-700 rounded-full -z-8 "
            src={profilePic}
            alt="Profile"
          />
      <div className='relative mt-20 top-2/4'>
        <h1 className="text-6xl text-gray-800 font-bold top-2/4">
          Nathan Hoang's
        </h1>
        <h1 className='text-gray-800 text-6xl font-bold'> Portfolio</h1>
        <p className="mt-3 text-xl text-gray-600">
          Full-Stack Web Developer
        </p>
        <div className="mt-6 flex space-x-4 justify-center">
          <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About Me
          </Link>
          <Link to="/portfolio" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Portfolio
          </Link>
          <Link to="/contact" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Contact
          </Link>
          <Link to="/resume" className=" bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
