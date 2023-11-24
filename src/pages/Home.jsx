import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profilepic.png'
const Homepage = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-slate-400 ">
      <div className="text-center ">
        <div className='relative mt-24 top-2/4'>
          <img
            className=" max-w-[90%] border-[2px] left-[5%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] relative opacity-[73%] border-slate-700 rounded-full -z-[0] sm:absolute sm:bottom-[5%] sm:-left-[50px] sm:max-w-lg  "
            src={profilePic}
            alt="Profile"
          />
          <div className='relative top-10 z-10 sm:top-24'>
          <h1 className="text-6xl text-slate-50 font-bold top-2/4 z-[1]">
            Nathan Hoang's
          </h1>
          <h1 className='text-slate-50 text-6xl font-bold'> Portfolio</h1>
          <p className="mt-3 text-xl text-slate-50">
            Full-Stack Web Developer || Software Engineer
          </p>
          <div className="mt-6 mb-14 grid grid-row-2 grid-cols-2 space-x-2 justify-center place-items-center relative z-0 sm:flex sm:space-x-5 sm:mb-4">
            <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 relative left-1 rounded w-[145px] sm:w-auto sm:static">
              About
            </Link>
            <Link to="/portfolio" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 my-2 px-4 rounded w-[145px] sm:w-auto">
              Portfolio
            </Link>
            <Link to="/contact" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded w-[145px] sm:w-auto">
              Contact
            </Link>
            <Link to="/resume" className=" bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 my-2 rounded w-[145px] sm:w-auto">
              Resume
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
