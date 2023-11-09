import React from 'react';
import { FaGithub, FaLinkedinIn, FaConnectdevelop } from 'react-icons/fa';
import {CgMail} from 'react-icons/cg'
const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Links to social media profiles with icons */}
          <a href="https://github.com/n8hoang" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nathan-hoang-560b1229a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedinIn size={20} />
          </a>
          <a href="mailto:natehoang911@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <CgMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
