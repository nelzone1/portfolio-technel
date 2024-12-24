import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-purple-600/20">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-purple-400">B.Sc. in Computer Science</h4>
                <p className="text-gray-400">Ambrose Alli University, Edo State, Nigeria</p>
                <p className="text-gray-500">Graduated: September 2011</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-400">Computer Networking and Troubleshooting</h4>
                <p className="text-gray-400">St. Angelos Institute for Technology and Management</p>
                <p className="text-gray-500">Mumbai, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-purple-600/20">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-purple-400 mr-3"></div>
                <div>
                  <h4 className="text-lg font-medium text-purple-400">AWS Certified Solutions Architect Associate</h4>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-purple-400 mr-3"></div>
                <div>
                  <h4 className="text-lg font-medium text-purple-400">CompTIA Linux+</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}