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
        <h1 className="text-3xl font-bold text-accent mb-10 text-center font-mono">
          ABOUT ME
        </h1>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {/* Card Template */}
        {[
          {
            icon: <FaUserAlt />,
            title: 'Personal Information',
            items: [
              'Name: Binaya Raj Thapa',
              'Location: Banepa, Nepal',
              'Languages: Nepali, English, Hindi, Basic German',
            ],
          },
          {
            icon: <FaGraduationCap />,
            title: 'Education',
            items: [
              'SSC: GyanSarovar English Secondary School',
              'HSC: Banepa NIST',
              'BSc. Computer Science, Kathmandu University',
            ],
          },
          {
            icon: <FaLaptopCode />,
            title: 'Intrest',
            items: [
              'Building full-stack MERN & Python apps',
              'Exploring AI & Machine Learning concepts',
            ],
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card shadow-lg transition-all duration-300 
              hover:shadow-[0_0_20px_2px_rgba(0,123,255,0.4)] 
              hover:border-blue-400 
              dark:hover:shadow-[0_0_20px_2px_rgba(16,255,110,0.6)] 
              dark:hover:border-green-400"
          >
            <div className="p-4 rounded-full text-white text-3xl group-hover:rotate-[6deg] transition-transform duration-300 bg-accent">
              {card.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-accent/80">{card.title}</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-text/70">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
