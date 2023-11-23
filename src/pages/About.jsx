import Header from '../compenents/Header'
import React from 'react';
import profilePic from '../assets/profilepic.png';

function About() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400 pt-36 p-4">

        <div className="mb-4">
          {/* Profile Image */}
          <img
            className="w-100 h-100 rounded-full mx-auto"
            src={profilePic}
            alt="Profile"
          />
        </div>
        <div>
          {/* Your Name and Title */}
          <h2 className="text-xl font-bold text-center">Nathan Hoang</h2>
          <p className="text-center text-gray-600">Full Stack Developer</p>
        </div>
        <div className="mt-6 text-gray-700">
          {/* About Me Description */}
          <p>Hello! I'm a passionate Web Developer with experience in building applications in React, Node.js, and more. I love to learn and create, and I'm always looking for new challenges.</p>
        </div>
      </div>

    </>
  );
}

export default About;

  