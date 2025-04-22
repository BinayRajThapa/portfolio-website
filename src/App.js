import React, { useState } from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {showConfetti && <Confetti />}
      <Toaster position="top-right" />
      <Home setShowConfetti={setShowConfetti} />
    </div>
  );
}

export default App;
