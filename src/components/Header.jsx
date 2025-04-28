import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  const sidebarRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg text-text shadow-md transition-colors">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2 md:mr-auto"> {/* Push mobile buttons to the right */}
            <img src="/images/logo.png" alt="Binaya Logo" className="h-10 w-auto" />
          </a>

          <div className="flex items-center space-x-4 md:hidden"> {/* Container for theme toggle and hamburger */}
            <button
              onClick={toggleTheme}
              className="text-xl hover:text-accent transition-all"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
            <button className="text-2xl text-accent" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 text-xl hover:text-accent transition-all"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-card text-text shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 p-6`}
      >
        <h2 className="text-3xl font-bold text-accent mb-10 text-center font-mono">MENU</h2>
        <ul className="space-y-4">
          <li><a href="#about" onClick={toggleMenu} className="hover:text-accent">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-accent">Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="hover:text-accent">Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-accent">Contact</a></li>
          <li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;