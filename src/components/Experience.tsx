import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior DevOps Engineer',
    period: '2021 - Present',
    responsibilities: [
      'Led migration of 200+ microservices to Kubernetes, reducing deployment time by 80%',
      'Architected multi-region AWS infrastructure serving 1M+ daily users',
      'Implemented GitOps workflow with ArgoCD, achieving 99.99% deployment success rate',
      'Designed zero-downtime deployment strategies for critical production services',
      'Built comprehensive monitoring solutions using Prometheus and Grafana'
    ]
  },
  {
    role: 'DevOps Engineer',
    period: '2019 - 2021',
    responsibilities: [
      'Containerized legacy applications using Docker and orchestrated with Kubernetes',
      'Automated CI/CD pipelines reducing release cycle from weeks to hours',
      'Implemented Infrastructure as Code using Terraform and AWS CloudFormation',
      'Managed large-scale PostgreSQL and MongoDB clusters with automated failover',
      'Enhanced security posture through implementation of HashiCorp Vault'
    ]
  },
  {
    role: 'Systems Engineer',
    period: '2018 - 2019',
    responsibilities: [
      'Managed hybrid cloud infrastructure across AWS and on-premise systems',
      'Automated routine tasks using Python and Bash, saving 20+ hours weekly',
      'Implemented ELK stack for centralized logging and monitoring',
      'Maintained high-availability for critical production services',
      'Collaborated with development teams to optimize application performance'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg border border-purple-600/20 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">{exp.role}</h3>
                  <div className="flex items-center mt-2 text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}