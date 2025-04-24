
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 gradient-text">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or via my social links.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-electric-blue flex items-center justify-center">
                  <Mail className="w-5 h-5 text-electric-blue" />
                </div>
                <a href="mailto:singhjayant308@gmail.com" className="text-gray-300 hover:text-electric-blue">
                  singhjayant308@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-electric-blue flex items-center justify-center">
                  <Github className="w-5 h-5 text-electric-blue" />
                </div>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue">
                  github.com/jayantsingh
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-card border border-electric-blue flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-electric-blue" />
                </div>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric-blue">
                  linkedin.com/in/jayantsingh
                </a>
              </div>
            </div>
          </div>
          
          <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-5 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg border-dark-border focus:border-electric-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg border-dark-border focus:border-electric-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-dark-bg border-dark-border focus:border-electric-blue"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:opacity-90"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
