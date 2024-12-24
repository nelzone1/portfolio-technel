import React from 'react';
import { Cloud, Container, GitBranch, Database, Server, Shield, Monitor, Network, Lock, Terminal } from 'lucide-react';

const skills = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud & Infrastructure',
    description: 'AWS, Azure, GCP, Terraform, CloudFormation',
  },
  {
    icon: <Container className="w-8 h-8" />,
    title: 'Containerization',
    description: 'Docker, Kubernetes, EKS, AKS, OpenShift',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'CI/CD & DevOps',
    description: 'Jenkins, GitLab CI, GitHub Actions, ArgoCD',
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Monitoring & Observability',
    description: 'Prometheus, Grafana, ELK Stack, Datadog',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Infrastructure Automation',
    description: 'Ansible, Puppet, Chef, Terraform',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Security & Compliance',
    description: 'HashiCorp Vault, AWS SecurityHub, SAST/DAST',
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Networking',
    description: 'VPC, Load Balancers, Service Mesh, Istio',
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'Scripting & Development',
    description: 'Python, Bash, Go, JavaScript',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Databases & Storage',
    description: 'PostgreSQL, MongoDB, Redis, S3',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-600/20 hover:border-purple-600 transition-colors">
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}