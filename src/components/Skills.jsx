import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "/icons/react.ico", level: 80 },
  { name: "Node.js", icon: "/icons/node.png", level: 40 },
  { name: "MongoDB", icon: "/icons/mongoDB.png", level: 50 },
  { name: "Express.js", icon: "/icons/express.png", level: 70 },
  { name: "Python", icon: "/icons/python.png", level: 50 },
  { name: "HTML", icon: "/icons/html.png", level: 90 },
  { name: "CSS", icon: "/icons/css.png", level: 88 },
  { name: "JavaScript", icon: "/icons/javascript.png", level: 80 },
  { name: "GitHub", icon: "/icons/git.png", level: 85 },
  { name: "Figma", icon: "/icons/figma.png", level: 60 },
  { name: "Photoshop", icon: "/icons/photoshop.png", level: 50 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-bg text-text transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-accent mb-10 text-center font-mono">
          SKILLS AND TOOLS
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
