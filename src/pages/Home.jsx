import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl text-gray-800 font-bold">
          Nathan Hoang
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          Full-Stack Developer | Software Engineer
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
  );
};

export default Homepage;
