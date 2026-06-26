'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-secondary/20 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-2">
            © {currentYear} Saarveeshak Kailash. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            <span className="gradient-text font-semibold">"Never trust your own shadow"</span> - 
            Built with Next.js, React, and Tailwind CSS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex justify-center gap-8"
        >
          <a href="#home" className="text-gray-400 hover:text-secondary transition">
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-secondary transition">
            About
          </a>
          <a href="#projects" className="text-gray-400 hover:text-secondary transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-secondary transition">
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
