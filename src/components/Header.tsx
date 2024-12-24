import React from 'react';
import { Github, Linkedin, Terminal, Server, Cloud, GitBranch } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-purple-400" />
            <span className="text-white font-bold">DevOps.Engineer</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}