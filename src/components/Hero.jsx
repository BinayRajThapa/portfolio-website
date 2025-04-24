import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-bg text-text px-6 py-16 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left: Text content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-accent font-mono leading-relaxed">
          <Typewriter
            words={[
              "const name = 'Binaya Raj Thapa';",
              "console.log('React Developer');",
              'return <AwesomeCode />;',
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>

        <p className="text-text/70 text-lg mb-6 max-w-xl">
          Passionate React Developer crafting sleek, modern UIs.
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:brightness-110 transition duration-300"
        >
          See My Work
        </a>
      </div>

      {/* Right: Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img
            src="/images/binaya.png"
            alt="Binaya Raj Thapa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
