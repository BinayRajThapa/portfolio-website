import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0d1117] text-white">
      <div className="max-w-xl mx-auto">
        <motion.h3
          className="text-3xl font-mono text-green-400 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ➜ ~ Contact Me
        </motion.h3>

        <motion.div
          className="bg-[#161b22] p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#0d1117] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#0d1117] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full bg-[#0d1117] border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          ></textarea>

          <button
            className="w-full bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 transition duration-300 text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
