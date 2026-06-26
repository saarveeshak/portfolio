'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Work From Home Application',
    description: 'A comprehensive application for managing work-from-home operations with real-time tracking and productivity monitoring.',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    type: 'Fullstack',
  },
  {
    title: 'SaaS ERP System',
    description: 'Enterprise Resource Planning system designed for scalability and multi-tenant support with comprehensive business process automation.',
    tech: ['Laravel', 'React', 'MySQL', 'AWS', 'Docker'],
    type: 'Fullstack',
  },
  {
    title: 'Soccer Academy Management System',
    description: 'Complete management system for soccer academies including player registration, coaching schedules, and performance tracking.',
    tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    type: 'Fullstack',
  },
  {
    title: 'Learning Management System',
    description: 'LMS with Moodle integration, custom plugin development, and enterprise setup for educational institutions.',
    tech: ['Laravel', 'Moodle', 'PHP', 'MySQL', 'JavaScript'],
    type: 'Backend',
  },
  {
    title: 'Human Resources Management System',
    description: 'HR system with multiple modules for employee management, document control, and workflow automation.',
    tech: ['Laravel', 'MySQL', 'PHP', 'React', 'Tailwind CSS'],
    type: 'Fullstack',
  },
  {
    title: 'Football Academy Billing System',
    description: 'Specialized billing system for football academy with membership management and payment processing.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    type: 'Fullstack',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 gradient-text"
        >
          Systems I've Developed
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg card-hover flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-secondary flex-1">{project.title}</h3>
                <span className="text-xs bg-primary/20 text-secondary px-2 py-1 rounded whitespace-nowrap ml-2">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 text-lg">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-secondary hover:text-blue-500 transition"
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-secondary hover:text-blue-500 transition"
                >
                  <FiExternalLink />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
