import React from 'react';
import { Terminal, Server, Cloud, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-16 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated icon grid */}
          <div className="mb-12 relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg transform rotate-6 transition-transform"></div>
            <div className="relative bg-gray-800/90 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4">
                <Terminal className="w-16 h-16 text-purple-400 transform hover:scale-110 transition-transform" />
                <Server className="w-16 h-16 text-indigo-400 transform hover:scale-110 transition-transform" />
                <Cloud className="w-16 h-16 text-pink-400 transform hover:scale-110 transition-transform" />
                <GitBranch className="w-16 h-16 text-purple-400 transform hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Nelson Oboh
          </h1>
          
          <div className="max-w-2xl backdrop-blur-sm bg-gray-800/50 p-6 rounded-lg border border-purple-500/20 mb-8">
            <p className="text-xl text-gray-300">
              Innovative DevOps Engineer crafting efficient cloud solutions and automated workflows. Proven expertise in optimizing deployment pipelines, achieving 70% faster releases while maintaining enterprise-grade reliability. Passionate about transforming infrastructure through code and automation.
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600/10 transition-all transform hover:scale-105"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}