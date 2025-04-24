import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-bg text-text px-6 py-16 transition-colors md:gap-x-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left: Image */}
      <div className="flex-1 flex justify-center md:mt-[-150px]">
        <div className="w-90 h-90 md:w-81 md:h-81 rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/binaya.png"
            alt="Binaya Raj Thapa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Text content */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-60">
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

        <p className="text-text/70 text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Passionate React Developer crafting sleek, modern UIs.
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:brightness-110 transition duration-300"
        >
          See My Work
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
