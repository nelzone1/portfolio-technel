import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Inventory Management System',
    description: 'Full-stack inventory management system built with React and Node.js',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/nelzone1/inventory-manager',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Task Management App',
    description: 'React-based task management application with real-time updates',
    tags: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/nelzone1/task-manager',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Weather Dashboard',
    description: 'Dynamic weather dashboard using OpenWeather API and React',
    tags: ['React', 'API Integration', 'Charts.js'],
    github: 'https://github.com/nelzone1/weather-app',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}