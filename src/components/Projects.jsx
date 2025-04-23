import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'NylonWears',
    description: 'An e-commerce clothing platform built using the MERN stack.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/BinayRajThapa/NylonWears-all.git',
  },
  {
    title: 'Predictive Estates',
    description: 'A house price prediction web app powered by machine learning.',
    technologies: ['Python', 'Flask', 'Scikit-Learn', 'MERN'],
    github: 'https://github.com/BinayRajThapa/PredictiveEstates.git',
  },
  {
    title: 'BillX',
    description: 'An online utility bill management and payment system.',
    technologies: ['C++', 'C', 'Qt'],
    github: 'https://github.com/BinayRajThapa/BillX.git',
  },
  {
    title: 'Do it Later',
    description: 'A simple and elegant ToDo list app for task tracking.',
    technologies: ['React', 'SCSS/Sass', 'LocalStorage'],
    github: 'https://github.com/BinayRajThapa/Do-it-Later.git',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0d1117] text-[#c9d1d9]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-mono text-green-400 text-center mb-16">➜ Projects</h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-gray-700 rounded-xl p-6 hover:border-green-500 transition duration-300"
            >
              <h4 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-sm text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:underline"
              >
                <FaGithub className="mr-2" /> GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
