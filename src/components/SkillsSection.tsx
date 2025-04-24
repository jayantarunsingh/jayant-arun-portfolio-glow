
import React from 'react';
import { Progress } from './ui/progress';

interface SkillItemProps {
  name: string;
  proficiency: number;
  color: string;
  delay: number;
}

const SkillItem = ({ name, proficiency, color, delay }: SkillItemProps) => (
  <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-400">{proficiency}%</span>
    </div>
    <Progress value={proficiency} className="h-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
      <div 
        className={`h-full rounded-full`} 
        style={{ width: `${proficiency}%`, backgroundColor: color }}
      />
    </Progress>
  </div>
);

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "Python", proficiency: 90, color: "#00c6ff", delay: 0.1 },
    { name: "C/C++", proficiency: 85, color: "#00c6ff", delay: 0.2 },
    { name: "Java", proficiency: 75, color: "#00c6ff", delay: 0.3 },
  ];

  const aiMlSkills = [
    { name: "TensorFlow", proficiency: 85, color: "#8e44ad", delay: 0.1 },
    { name: "Scikit-Learn", proficiency: 80, color: "#8e44ad", delay: 0.2 },
    { name: "Hugging Face", proficiency: 75, color: "#8e44ad", delay: 0.3 },
    { name: "NLP", proficiency: 85, color: "#8e44ad", delay: 0.4 },
  ];

  const tools = [
    { name: "Git", proficiency: 80, color: "#39ff14", delay: 0.1 },
    { name: "Google Colab", proficiency: 90, color: "#39ff14", delay: 0.2 },
    { name: "Jupyter", proficiency: 85, color: "#39ff14", delay: 0.3 },
  ];

  const techBadges = [
    "BiLSTM", "CRF", "CNN", "Deep Learning", "Data Visualization", 
    "REST APIs", "PyTorch", "Linux", "VSCode", "Docker"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Tech Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-5 text-electric-blue">Programming Languages</h3>
            <div className="space-y-4">
              {programmingLanguages.map((skill) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  color={skill.color}
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>

          {/* AI/ML Skills */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-5 text-vibrant-purple">AI & ML</h3>
            <div className="space-y-4">
              {aiMlSkills.map((skill) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  color={skill.color}
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-5 text-neon-green">Tools & Platforms</h3>
            <div className="space-y-4">
              {tools.map((skill) => (
                <SkillItem 
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  color={skill.color}
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Tech Badges */}
        <div className="mt-12 card p-6 animate-fade-in">
          <h3 className="text-xl font-bold mb-5 gradient-text">Additional Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-sm hover:border-electric-blue transition-colors"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
