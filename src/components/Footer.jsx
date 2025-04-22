import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white py-10 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-green-400 mb-2">Binaya Raj Thapa</h4>
          <p className="text-gray-400 text-sm">
            Full-stack developer with a passion for building modern web apps that solve real-world problems.
          </p>
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
