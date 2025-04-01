
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    affiliation: '',
    position: '',
    country: '',
    category: '',
    attendanceType: ''
  });
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for ICEES-2025. You will receive a confirmation email shortly.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        affiliation: '',
        position: '',
        country: '',
        category: '',
        attendanceType: ''
      });
      setProofFile(null);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16">
      <div className="conference-container">
        <h2 className="section-title text-center">Registration Form</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
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
                  <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">
                    Affiliation*
                  </label>
                  <Input
                    id="affiliation"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="University or Organization"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position*
                    </label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Professor, Student, Researcher, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country*
                    </label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Category*
                  </label>
                  <Select 
                    onValueChange={(value) => handleSelectChange('category', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Delegate</SelectItem>
                      <SelectItem value="industry">Industry Professional</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Attendance Type*
                  </label>
                  <RadioGroup 
                    onValueChange={(value) => handleSelectChange('attendanceType', value)}
                    className="flex flex-col space-y-2"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <Label htmlFor="in-person">In-person</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="virtual" id="virtual" />
                      <Label htmlFor="virtual">Virtual</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Proof*
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="w-full flex items-center justify-center px-6 py-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span className="relative rounded-md font-medium text-conference-darkgray hover:text-amber-500">
                            Upload payment proof
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF or JPG up to 5MB
                        </p>
                      </div>
                      <Input
                        id="paymentProof"
                        name="paymentProof"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        required
                        className="sr-only"
                      />
                    </label>
                  </div>
                  {proofFile && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected file: {proofFile.name}
                    </p>
                  )}
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-conference-yellow hover:bg-amber-500 text-conference-darkgray"
                  >
                    {isSubmitting ? "Processing..." : "Complete Registration"}
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

export default RegistrationForm;
