
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// Get a free access key at https://web3forms.com (tied to milan@monolithms.com, safe to expose in client code).
// Either paste it below, or set VITE_WEB3FORMS_ACCESS_KEY in a .env file at the project root.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

const PROJECT_TYPES = [
  { value: 'industrial-automation', label: 'Industrial Automation' },
  { value: 'autonomous-systems', label: 'Autonomous Systems' },
  { value: 'satellite-connectivity', label: 'Satellite & Remote Connectivity' },
  { value: 'smart-infrastructure', label: 'Smart Infrastructure' },
  { value: 'medical-automation', label: 'Medical Automation' },
  { value: 'electric-mobility', label: 'Electric Mobility' },
  { value: 'edge-ai-iot', label: 'Edge AI / IoT' },
  { value: 'other', label: 'Other' }
];

const BUDGET_RANGES = [
  { value: 'under-10k', label: 'Under $10k' },
  { value: '10k-50k', label: '$10k to $50k' },
  { value: '50k-150k', label: '$50k to $150k' },
  { value: '150k-plus', label: '$150k and above' },
  { value: 'not-sure', label: 'Not sure yet' }
];

const TIMELINES = [
  { value: 'immediate', label: 'Immediate' },
  { value: '1-3-months', label: '1 to 3 months' },
  { value: '3-6-months', label: '3 to 6 months' },
  { value: '6-months-plus', label: '6 months and beyond' },
  { value: 'exploring', label: 'Just exploring' }
];

const labelFor = (options, value) => options.find((option) => option.value === value)?.label || 'Not specified';

function ContactForm() {
  const emptyForm = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    message: ''
  };

  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in your name, email and message');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('PASTE_')) {
      toast.error('The contact form is not configured yet. Please email milan@monolithms.com directly.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Local backup in case delivery fails
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New project enquiry from ${formData.name}`,
          from_name: 'Monolith Microsystems Website',
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          project_type: labelFor(PROJECT_TYPES, formData.projectType),
          budget_range: labelFor(BUDGET_RANGES, formData.budgetRange),
          timeline: labelFor(TIMELINES, formData.timeline),
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully. We will respond within 24 hours.');
        setFormData(emptyForm);
      } else {
        toast.error('Failed to send message. Please email milan@monolithms.com directly.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please email milan@monolithms.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="projectType" className="text-foreground">Project Type</Label>
          <Select value={formData.projectType} onValueChange={handleSelectChange('projectType')}>
            <SelectTrigger className="mt-1 bg-card text-foreground border-border">
              <SelectValue placeholder="Select a domain" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budgetRange" className="text-foreground">Budget Range</Label>
          <Select value={formData.budgetRange} onValueChange={handleSelectChange('budgetRange')}>
            <SelectTrigger className="mt-1 bg-card text-foreground border-border">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_RANGES.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="timeline" className="text-foreground">Timeline</Label>
        <Select value={formData.timeline} onValueChange={handleSelectChange('timeline')}>
          <SelectTrigger className="mt-1 bg-card text-foreground border-border">
            <SelectValue placeholder="When do you want to start" />
          </SelectTrigger>
          <SelectContent>
            {TIMELINES.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 bg-card text-foreground border-border"
          placeholder="Tell us about your project, where it is today and what you need."
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
