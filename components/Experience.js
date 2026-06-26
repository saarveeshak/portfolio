'use client';

import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';

const experiences = [
  {
    title: 'Developer',
    company: 'ModernLMS SDN BHD',
    period: 'Jan 2026 - Present',
    description: 'Developed and manage systems for Learning Management System with Moodle integration, plugins development, custom setup for big entities.',
  },
  {
    title: 'Senior HRIT Executive',
    company: 'KK Supermart & Superstore SDN. BHD.',
    period: 'Apr 2025 - Dec 2025',
    description: 'Developed and manage systems for Human Resources. Also manage HR related task and duties, document control. With a successful proven record.',
  },
  {
    title: 'Admin of KMS Services',
    company: 'KMS Services',
    period: '2019 - 2025',
    description: 'Managed club administrative work and multimedia. Also conducted web based projects for the company.',
  },
  {
    title: 'Football Coaching and Admin',
    company: 'Mithraa FC',
    period: '2020 - 2021',
    description: 'Conducted football coaching for kids from 6 years old till 14 years old. Managed club administrative work and multimedia. Also conducted web based projects for the club.',
  },
  {
    title: 'Graphic Designer & Video Editor',
    company: 'SJCYFL',
    period: '2020 - 2024',
    description: 'Managed digital ads for the club via Facebook and Instagram. Also created video advertisement for the club.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-dark/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3"
        >
          <MdWork /> Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-secondary">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
