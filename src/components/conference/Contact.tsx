
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-conference-lightgray">
      <div className="conference-container">
        <h2 className="section-title text-center">Contact Us</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-conference-darkgray mb-6">Get In Touch</h3>
              
              <p className="text-gray-700 mb-8">
                Have questions about ICEES-2025? We're here to help! Send us a message and 
                our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={20} className="text-conference-yellow mr-4 mt-1.5" />
                  <div>
                    <h4 className="font-bold text-conference-darkgray">Email</h4>
                    <p className="text-gray-700">info@icees2025.org</p>
                    <p className="text-gray-700">support@icees2025.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="text-conference-yellow mr-4 mt-1.5" />
                  <div>
                    <h4 className="font-bold text-conference-darkgray">Phone</h4>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                    <p className="text-gray-700">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-conference-yellow mr-4 mt-1.5" />
                  <div>
                    <h4 className="font-bold text-conference-darkgray">Address</h4>
                    <p className="text-gray-700">
                      Conference Secretariat<br />
                      Department of Electrical Engineering<br />
                      University Campus, City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-conference-darkgray mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-conference-yellow hover:bg-amber-500 text-conference-darkgray"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-conference-darkgray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={16} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
