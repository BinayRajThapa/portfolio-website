import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserAlt, FaLaptopCode } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-[#0d1117] text-[#c9d1d9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-mono text-green-400">➜ ~ About Me</h3>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Academic Journey */}
        <motion.div
          variants={cardVariants}
          className="flex items-start gap-4 bg-[#161b22] p-6 rounded-xl border border-[#30363d] shadow-lg hover:scale-[1.01] transition-transform"
        >
          <div className="bg-green-700 p-4 rounded-full text-white text-3xl">
            <FaGraduationCap />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-300 mb-2">Academic Journey</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Secondary: GyanSarovar English Secondary School</li>
              <li>High School: Banepa NIST</li>
              <li>BSc. Computer Science, Kathmandu University</li>
            </ul>
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          variants={cardVariants}
          className="flex items-start gap-4 bg-[#161b22] p-6 rounded-xl border border-[#30363d] shadow-lg hover:scale-[1.01] transition-transform"
        >
          <div className="bg-green-700 p-4 rounded-full text-white text-3xl">
            <FaUserAlt />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-300 mb-2">Personal Info</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Name: Binaya Raj Thapa</li>
              <li>Location: Banepa, Nepal</li>
              <li>Languages: Nepali, English, Hindi, Basic German</li>
            </ul>
          </div>
        </motion.div>

        {/* Passion & Interests */}
        <motion.div
          variants={cardVariants}
          className="flex items-start gap-4 bg-[#161b22] p-6 rounded-xl border border-[#30363d] shadow-lg hover:scale-[1.01] transition-transform"
        >
          <div className="bg-green-700 p-4 rounded-full text-white text-3xl">
            <FaLaptopCode />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-300 mb-2">What I Love</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Building full-stack MERN & Python apps</li>
              <li>Crafting hacker-style UIs with dark themes</li>
              <li>Diving into AI, ML & coding challenges</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
