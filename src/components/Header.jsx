import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0d1117] text-[#c9d1d9] shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-green-400 font-mono cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ➜ binaya


        </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#skills" className="hover:text-green-400">Skills</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>

          {/* Hamburger */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#161b22] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 p-6`}
      >
        <h2 className="text-green-400 text-xl font-mono mb-6">➜ ~ Menu</h2>
        <ul className="space-y-4 text-base">
          <li><a href="#about" onClick={closeMenu} className="hover:text-green-400">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-green-400">Projects</a></li>
          <li><a href="#skills" onClick={closeMenu} className="hover:text-green-400">Skills</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-green-400">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
