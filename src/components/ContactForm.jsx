
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    serviceInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, serviceInterest: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.projectDescription) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Message sent successfully. We will respond within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectDescription: '',
        serviceInterest: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground">Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 bg-card text-foreground border-border"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 bg-card text-foreground border-border"
          placeholder="your.email@company.com"
        />
      </div>

      <div>
        <Label htmlFor="company" className="text-foreground">Company</Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 bg-card text-foreground border-border"
          placeholder="Your company name"
        />
      </div>

      <div>
        <Label htmlFor="serviceInterest" className="text-foreground">Service Interest</Label>
        <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
          <SelectTrigger className="mt-1 bg-card text-foreground border-border">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="embedded-systems">Embedded Systems Design</SelectItem>
            <SelectItem value="pcb-design">PCB Design</SelectItem>
            <SelectItem value="product-development">Product Development</SelectItem>
            <SelectItem value="manufacturing">Manufacturing Services</SelectItem>
            <SelectItem value="consultation">General Consultation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="projectDescription" className="text-foreground">Project Description *</Label>
        <Textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 bg-card text-foreground border-border"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
