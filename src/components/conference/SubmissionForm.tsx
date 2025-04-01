
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

const SubmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    email: '',
    keywords: '',
    abstract: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Paper Submitted Successfully!",
        description: "Thank you for your submission. You will receive a confirmation email shortly.",
      });
      setFormData({
        title: '',
        authors: '',
        email: '',
        keywords: '',
        abstract: ''
      });
      setFile(null);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16">
      <div className="conference-container">
        <h2 className="section-title text-center">Paper Submission</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Paper Title*
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="authors" className="block text-sm font-medium text-gray-700 mb-1">
                    Authors* (Format: First Author, Second Author, etc.)
                  </label>
                  <Input
                    id="authors"
                    name="authors"
                    value={formData.authors}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Corresponding Author Email*
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
                  <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords* (3-5 keywords, separated by commas)
                  </label>
                  <Input
                    id="keywords"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-1">
                    Abstract* (300 words maximum)
                  </label>
                  <Textarea
                    id="abstract"
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Paper* (PDF format, 6-8 pages)
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="w-full flex items-center justify-center px-6 py-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-conference-darkgray hover:text-amber-500">
                            Upload a file
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF up to 10MB
                        </p>
                      </div>
                      <Input
                        id="file"
                        name="file"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                        className="sr-only"
                      />
                    </label>
                  </div>
                  {file && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected file: {file.name}
                    </p>
                  )}
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-conference-yellow hover:bg-amber-500 text-conference-darkgray"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Paper"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
