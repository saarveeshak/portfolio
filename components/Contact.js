'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 gradient-text text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-secondary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <FiPhone className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:0142272103" className="text-gray-400 hover:text-secondary">
                    014-2272103
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FiMail className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:saarveesha03@gmail.com" className="text-gray-400 hover:text-secondary">
                    saarveesha03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FiMapPin className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-400">USJ16, Subang Jaya</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="font-semibold">References</p>
              <div className="text-sm text-gray-400 space-y-2">
                <p><span className="font-semibold">MR. SATHIVEL</span> - Assistant HR Manager KK<br/>016-8683397</p>
                <p><span className="font-semibold">MADAM PAKEYA</span> - Senior HR Manager KK<br/>010-2982308</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-secondary hover:text-blue-500"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-secondary hover:text-blue-500"
              >
                <FiLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-dark border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full px-8 py-3 bg-secondary text-dark font-bold rounded-lg hover:bg-blue-500 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
