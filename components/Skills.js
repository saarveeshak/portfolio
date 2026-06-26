'use client';

import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Flutter Framework', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['PHP', 'Laravel', 'Node.js', 'Python', 'Java', 'Database Management', 'RESTful APIs', 'Moodle'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Power BI', 'Microsoft Tools', 'Server Management', 'IT Support'],
  },
  {
    category: 'Other Skills',
    skills: ['C++', 'C#', 'Graphic Design', 'Video Editing', 'Project Management'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-dark/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3"
        >
          <FiCode /> Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold text-secondary mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary/20 text-secondary rounded-full text-sm font-medium cursor-pointer transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 glass-effect p-6 rounded-lg"
        >
          <h3 className="text-lg font-bold text-secondary mb-4">Languages</h3>
          <div className="space-y-4">
            {[
              { lang: 'English', level: 90 },
              { lang: 'Malay', level: 85 },
              { lang: 'Tamil', level: 75 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span>{item.lang}</span>
                  <span className="text-secondary">{item.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-secondary to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
