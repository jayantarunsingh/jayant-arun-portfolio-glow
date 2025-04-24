
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hello! I'm Jayant, a <span className="highlight">B.Tech Computer Science Engineering</span> student at 
              <span className="font-semibold"> Lovely Professional University</span>, passionate about solving 
              complex problems through technology.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My interests lie at the intersection of <span className="highlight">Artificial Intelligence</span>, 
              <span className="highlight"> Machine Learning</span>, and <span className="highlight">Natural Language Processing</span>. 
              I enjoy building innovative solutions that leverage these technologies to create meaningful impact.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Beyond academics, I'm an avid <span className="accent">football player</span> who has represented at the national level. 
              I believe in the power of continuous learning and am constantly expanding my skillset through courses, 
              projects, and research.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">What Drives Me</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">AI Innovation</h4>
                    <p className="text-gray-400">Creating intelligent systems that can understand and generate human language</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-vibrant-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Research & Development</h4>
                    <p className="text-gray-400">Exploring cutting-edge technologies and contributing to academic research</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0 text-dark-bg">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Problem Solving</h4>
                    <p className="text-gray-400">Addressing real-world challenges with elegant technical solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
