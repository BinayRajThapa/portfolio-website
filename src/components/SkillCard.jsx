import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#161b22] p-6 rounded-xl text-white shadow-lg hover:shadow-green-500/20 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center justify-between"
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0d1117] shadow-md mb-4">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Name */}
      <h4 className="text-lg font-semibold mb-4">{skill.name}</h4>

      {/* Proficiency Bar */}
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.4 }}
          className="h-full bg-gradient-to-r from-green-400 to-orange-400 rounded-full"
        ></motion.div>
      </div>

      <span className="mt-2 text-sm text-gray-400">{skill.level}%</span>
    </motion.div>
  );
};

export default SkillCard;
