
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <span className="heading-font text-xl font-bold text-foreground">
              Monolith Microsystems
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Precision embedded systems and hardware solutions for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-foreground">Quick Links</span>
            <nav className="mt-4 flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/industries" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Industries
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-foreground">Contact</span>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:info@monolithmicro.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                <span>info@monolithmicro.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>2847 Innovation Drive, San Jose, CA 95134</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-sm font-semibold text-foreground">Follow Us</span>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Monolith Microsystems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
