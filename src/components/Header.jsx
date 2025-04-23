import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background text-foreground shadow-md dark:bg-black dark:text-white transition-colors">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-green-400 font-mono">Binaya</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#skills" className="hover:text-green-400">Skills</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 text-xl hover:text-green-400 transition-all"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
          </nav>

          {/* Hamburger */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#161b22] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 p-6`}
      >
        <h2 className="text-green-400 text-xl font-mono mb-6">➜ ~ Menu</h2>
        <ul className="space-y-4">
          <li><a href="#about" onClick={toggleMenu} className="hover:text-green-400">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-green-400">Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="hover:text-green-400">Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-green-400">Contact</a></li>
          <li>
            <button
              onClick={() => {
                toggleTheme();
                toggleMenu();
              }}
              className="mt-4 flex items-center gap-2 hover:text-green-400"
            >
              {theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />} Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
