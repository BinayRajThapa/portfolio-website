import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TerminalFooter = () => {
  return (
    <div className="bg-bg text-text py-1 px-4 border-t border-border font-mono">
      <div className="max-w-4xl mx-auto text-sm sm:text-base">
        <span className="text-accent">binaya@portfolio:</span>
        <span className="text-primary">~$</span>{' '}
        <TypeAnimation
          sequence={[
            "I'm currently open to work and collaborations!",
            2000,
            '',
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={70}
          deletionSpeed={40}
        />
      </div>
    </div>
  );
};

export default TerminalFooter;
