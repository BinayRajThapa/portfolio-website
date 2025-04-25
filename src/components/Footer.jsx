import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      window.open("/documents/Binaya_Thapa_Resume.pdf", "_blank");
      setIsDownloading(false);
    }, 800);
  };

  return (
    <footer className="bg-bg text-text py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
          {/* Left Section - Resume Preview */}
          <div className="text-center md:text-left space-y-3">
            <h4 className="text-xl font-bold text-accent">Binaya Raj Thapa</h4>
            <p className="text-text-light dark:text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              React developer by skill, problem solver by mindset, innovator by heart.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="/documents/Binaya_Thapa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-card hover:bg-card-dark text-text text-sm font-medium rounded-md transition-all border border-border hover:border-accent min-w-[160px] dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-500 light:bg-blue-600 light:hover:bg-blue-700 light:border-blue-500"
              >
                <FaExternalLinkAlt className="mr-2" />
                Preview CV
              </a>
            </div>

            <p className="text-gray-500 text-xs mt-1">
              PDF • Updated {new Date().getFullYear()}
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex flex-col items-center space-y-3">
            <h5 className="text-accent font-semibold text-sm uppercase tracking-widest">
              Follow Me On
            </h5>
            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/BinayRajThapa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_6px_#22c55e]"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/binaya-raj-thapa-79a440226/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_6px_#60a5fa]"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/binayarajthapa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_6px_#f472b6]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Built with{" "}
              <span className="text-red-400">💻</span> by Binaya
            </p>
            <p className="text-xs text-gray-600">
              Powered by <span className="text-blue-400">React</span> &{" "}
              <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
