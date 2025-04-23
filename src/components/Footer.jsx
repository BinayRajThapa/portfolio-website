import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white py-10 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-green-400 mb-2">Binaya Raj Thapa</h4>
          <p className="text-gray-400 text-sm mb-3">
            React developer passionate about solving real-world problems
          </p>
          <a
            href="/documents/Binaya_Thapa_Resume.pdf"
            download="Binaya_Thapa_Resume.pdf"
            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Center Section - Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/BinayRajThapa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/binaya-raj-thapa-79a440226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/binayarajthapa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Built with 💻 by Binaya</p>
          <p className="text-xs text-gray-600">Powered by React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
