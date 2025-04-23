import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
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
    <footer className="bg-[#0d1117] text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
          {/* Left Section - Resume Download */}
          <div className="text-center md:text-left space-y-3">
            <h4 className="text-xl font-bold text-green-400">Binaya Raj Thapa</h4>
            <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              React developer passionate about solving real-world problems
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`flex items-center justify-center px-4 py-2 rounded-md transition-all ${
                  isDownloading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/20"
                } text-white text-sm font-medium min-w-[160px]`}
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Preparing...
                  </>
                ) : (
                  <>
                    <FaDownload className="mr-2" />
                    Download CV
                  </>
                )}
              </button>

              <a
                href="/documents/Binaya_Thapa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-[#161b22] hover:bg-[#21262d] text-gray-300 text-sm font-medium rounded-md transition-all border border-[#30363d] hover:border-green-500 min-w-[160px]"
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
            <h5 className="text-green-400 font-semibold text-sm uppercase tracking-widest">
              Follow Me On
            </h5>
            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/BinayRajThapa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_6px_#22c55e]"
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
