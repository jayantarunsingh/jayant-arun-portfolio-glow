
import React from 'react';
import { University } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
  delay: number;
}

const EducationCard = ({ institution, degree, duration, description, delay }: EducationCardProps) => {
  return (
    <div 
      className="card p-6 hover:border-electric-blue transition-all animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-dark-bg border border-electric-blue flex items-center justify-center flex-shrink-0">
          <University className="w-6 h-6 text-electric-blue" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white">{institution}</h3>
          <p className="text-electric-blue font-medium">{degree}</p>
          <p className="text-gray-400 mb-2">{duration}</p>
          {description && <p className="text-gray-300">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const educations = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science Engineering",
      duration: "2022 - Present",
      description: "Focusing on AI, machine learning, and data science. Currently maintaining a strong academic record.",
      delay: 0.1
    },
    {
      institution: "Kendriya Vidyalaya Chandrapur",
      degree: "Higher Secondary Education",
      duration: "2020 - 2022",
      delay: 0.3
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu) => (
            <EducationCard
              key={edu.institution}
              institution={edu.institution}
              degree={edu.degree}
              duration={edu.duration}
              description={edu.description}
              delay={edu.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
