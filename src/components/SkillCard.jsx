import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card p-6 rounded-xl text-text shadow-md hover:shadow-accent/30 hover:scale-[1.03] transition-all duration-300 flex flex-col items-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-bg-muted shadow-inner mb-4">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Name */}
      <h4 className="text-lg font-semibold mb-4 text-accent">{skill.name}</h4>

      {/* Proficiency Bar */}
      <div className="w-full bg-border/30 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.4 }}
          className="h-full bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"
        ></motion.div>
      </div>

      <span className="mt-2 text-sm text-text/60">{skill.level}%</span>
    </motion.div>
  );
};

export default SkillCard;
