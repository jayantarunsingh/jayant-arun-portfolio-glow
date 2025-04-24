
import React from 'react';
import { FileBadge, GraduationCap } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  link?: string;
  delay: number;
}

const CertificateCard = ({
  title,
  issuer,
  date,
  imageSrc,
  link,
  delay
}: CertificateCardProps) => {
  return (
    <div 
      className="card p-4 hover:scale-[1.01] transition-all animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-purple flex items-center justify-center flex-shrink-0">
          <FileBadge className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-white">{title}</h3>
          <p className="text-gray-400">{issuer} • {date}</p>
          <a 
            href={link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-electric-blue text-sm hover:underline inline-block mt-1"
          >
            Show credential
          </a>
        </div>
      </div>
    </div>
  );
};

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "Jan 2023",
      imageSrc: "/path-to-image.jpg",
      link: "https://coursera.com",
      delay: 0.1
    },
    {
      title: "Machine Learning",
      issuer: "NPTEL",
      date: "Mar 2023",
      imageSrc: "/path-to-image.jpg",
      link: "https://nptel.ac.in",
      delay: 0.2
    },
    {
      title: "Natural Language Processing with Transformers",
      issuer: "Coursera",
      date: "May 2023",
      imageSrc: "/path-to-image.jpg",
      link: "https://coursera.com",
      delay: 0.3
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "GeeksforGeeks",
      date: "Jul 2023",
      imageSrc: "/path-to-image.jpg",
      link: "https://geeksforgeeks.org",
      delay: 0.4
    }
  ];

  const achievements = [
    {
      title: "Research Paper Publication",
      description: "Published a paper on 'NLP Applications in Regional Languages' in GIJET",
      delay: 0.1
    },
    {
      title: "National Football Player",
      description: "Represented at national level in football championship",
      delay: 0.2
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certificates & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Certificates */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-electric-blue">Certificates & Training</h3>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.title}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  imageSrc={cert.imageSrc}
                  link={cert.link}
                  delay={cert.delay}
                />
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-vibrant-purple">Achievements</h3>
            <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title} 
                  className={`flex gap-4 ${index !== achievements.length - 1 ? 'mb-6 pb-6 border-b border-dark-border' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-purple to-electric-blue flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
