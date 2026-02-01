import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex items-center">
        <a href="/">
          <img
            src='/gslogo.png'
            alt="logo"
            className="w-14 h-14 cursor-pointer z-10"
          />
        </a>
      </div>
      
      <div className="flex gap-4 text-4xl items-center justify-center">
        <a
          href="https://www.linkedin.com/in/suneel-gokada-99a6a925a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Suneelgokada"
          target="_blank"
          rel="noopener noreferrer"
          className= "cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 cursor-pointer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
