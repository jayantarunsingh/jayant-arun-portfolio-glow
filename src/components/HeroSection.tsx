
import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-electric-blue font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              Jayant Arun Singh
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
              <span className="text-white">Aspiring AI Engineer</span> | NLP Enthusiast | Full-Stack Explorer
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              A passionate computer science student with a focus on AI, machine learning, and NLP. 
              Currently building solutions that leverage the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="button-primary">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-electric-blue">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-electric-blue">
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-electric-blue">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                    <FileText className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative mx-auto max-w-[320px] md:max-w-full">
              <div className="w-full aspect-square bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full opacity-20 absolute blur-3xl"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-electric-blue aspect-square w-full max-w-[320px] mx-auto animate-glow">
                {/* Replace with user's actual photo when available */}
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                  alt="Jayant Arun Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-effect px-6 py-3 rounded-full text-white font-medium">
                B.Tech CSE Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
