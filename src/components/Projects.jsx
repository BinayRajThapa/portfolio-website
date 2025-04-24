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
    <section id="projects" className="py-20 px-4 bg-bg text-text transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-accent mb-10 text-center font-mono">PROJECTS</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent transition duration-300 shadow-md hover:shadow-accent/30"
            >
              <h4 className="text-2xl font-bold text-accent mb-2">{project.title}</h4>
              <p className="text-text/70 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm text-text/50 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-muted text-sm text-text/70 rounded-full border border-border/40"
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
                className="inline-flex items-center text-accent hover:underline"
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
