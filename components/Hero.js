'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Saarveeshak Kailash</span>
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-4 font-semibold">
            Fullstack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 italic">
            "Never trust your own shadow"
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Skilled in developing websites, creating graphic designs & video editing. 
            Strong project management skills with a proven track record of delivering 
            projects on time and within budget.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-secondary text-dark font-bold rounded-lg hover:bg-blue-500 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center text-3xl text-secondary"
        >
          <FiArrowDown />
        </motion.div>
      </div>
    </section>
  );
}
