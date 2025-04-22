import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React.js",
    icon: "/icons/react.ico",
    level: 85,
  },
  {
    name: "Node.js",
    icon: "/icons/node.png",
    level: 80,
  },
  {
    name: "MongoDB",
    icon: "/icons/mongoDB.png",
    level: 75,
  },
  {
    name: "Express.js",
    icon: "/icons/express.png",
    level: 72,
  },
  {
    name: "Python",
    icon: "/icons/python.png",
    level: 80,
  },
  {
    name: "HTML",
    icon: "/icons/html.png",
    level: 90,
  },
  {
    name: "CSS",
    icon: "/icons/css.png",
    level: 88,
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
    level: 87,
  },
  {
    name: "GitHub",
    icon: "/icons/git.png",
    level: 83,
  },
  {
    name: "Figma",
    icon: "/icons/figma.png",
    level: 70,
  },
  {
    name: "Photoshop",
    icon: "/icons/photoshop.png",
    level: 50,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0d1117] px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-mono text-green-400 text-center mb-12">
          ➜ ~ Skills & Tools
        </h3>

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
