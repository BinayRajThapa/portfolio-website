import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#161b22] p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-between"
    >
      <div className="flex items-center gap-4 mb-4">
        {/* Icon on the left */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0d1117] shadow-md">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Circular Progress */}
        <div className="relative">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#4CAF50", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#FF9800", stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Background Circle */}
            <circle
              stroke="#30363d"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Animated Foreground Circle */}
            <motion.circle
              stroke="url(#grad1)"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset: circumference - (skill.level / 100) * circumference }}
              transition={{ duration: 2 }}
            />
          </svg>

          {/* Percentage inside circle */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
            {skill.level}%
          </div>
        </div>
      </div>

      {/* Skill Name in the middle */}
      <h4 className="text-center mt-4 text-lg font-semibold tracking-wide">
        {skill.name}
      </h4>
    </motion.div>
  );
};

export default SkillCard;
