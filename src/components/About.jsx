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
      className="py-20 px-4 bg-bg text-text transition-colors"
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
        <h3 className="text-3xl md:text-4xl font-mono text-accent">
          ➜ About Me
        </h3>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Personal Info */}
        <motion.div
          variants={cardVariants}
          className="group flex items-start gap-4 p-6 rounded-xl border shadow-lg bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-accent/30"
        >
          <div className="p-4 rounded-full text-white text-3xl group-hover:rotate-[6deg] transition-transform duration-300 bg-accent">
            <FaUserAlt />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-accent/80">
              Personal Info
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-text/70">
              <li>Name: Binaya Raj Thapa</li>
              <li>Location: Banepa, Nepal</li>
              <li>Languages: Nepali, English, Hindi, Basic German</li>
            </ul>
          </div>
        </motion.div>

        {/* Academic Journey */}
        <motion.div
          variants={cardVariants}
          className="group flex items-start gap-4 p-6 rounded-xl border shadow-lg bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-accent/30"
        >
          <div className="p-4 rounded-full text-white text-3xl group-hover:rotate-[6deg] transition-transform duration-300 bg-accent">
            <FaGraduationCap />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-accent/80">
              Academic Journey
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-text/70">
              <li>Secondary: GyanSarovar English Secondary School</li>
              <li>High School: Banepa NIST</li>
              <li>BSc. Computer Science, Kathmandu University</li>
            </ul>
          </div>
        </motion.div>

        {/* Passion & Interests */}
        <motion.div
          variants={cardVariants}
          className="group flex items-start gap-4 p-6 rounded-xl border shadow-lg bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-accent/30"
        >
          <div className="p-4 rounded-full text-white text-3xl group-hover:rotate-[6deg] transition-transform duration-300 bg-accent">
            <FaLaptopCode />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-accent/80">
              What I Love
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-text/70">
              <li>Building full-stack MERN & Python apps</li>
              <li>Exploring AI & Machine Learning concepts</li>
              <li>Playing football with friends</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
