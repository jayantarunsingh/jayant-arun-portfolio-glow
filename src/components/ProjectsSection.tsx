
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  github?: string;
  demo?: string;
  delay: number;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  github,
  demo,
  delay
}: ProjectCardProps) => {
  return (
    <div className="card overflow-hidden animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-dark-bg text-electric-blue border border-electric-blue/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {github && (
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {demo && (
            <Button variant="default" size="sm" className="gap-1 bg-electric-blue hover:bg-electric-blue/80" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "POS Tagging & Spellchecking in Telugu",
      description: "An NLP system that provides part-of-speech tagging and spell checking capabilities for the Telugu language using BiLSTM and CRF models.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["NLP", "BiLSTM", "CRF", "Python", "TensorFlow"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      delay: 0.1
    },
    {
      title: "Yoga Pose Prediction",
      description: "A CNN-based image classification system that identifies and classifies yoga poses from images with high accuracy.",
      imageSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["CNN", "Image Classification", "Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/",
      delay: 0.3
    },
    {
      title: "Sentiment Analysis System",
      description: "A sentiment analysis tool that evaluates text data for emotional tone and provides detailed analysis of positive, negative and neutral sentiments.",
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["NLP", "Machine Learning", "Python", "BERT", "Web App"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      delay: 0.5
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
