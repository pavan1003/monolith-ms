
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0A0C10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <span className="heading-font text-xl font-bold text-white">
              Monolith Microsystems
            </span>
            <p className="mt-4 text-sm text-[#8A96A8] leading-relaxed">
              Precision embedded systems and hardware solutions for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-white">Quick Links</span>
            <nav className="mt-4 flex flex-col gap-2">
              <Link to="/about" className="text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/services" className="text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                Capabilities
              </Link>
              <Link to="/industries" className="text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                Industries
              </Link>
              <Link to="/projects" className="text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-white">Contact</span>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:milan@monolithms.com" className="flex items-center gap-2 text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                <span>milan@monolithms.com</span>
              </a>
              <a href="https://www.linkedin.com/in/milan-panchal-a47b01119/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                <Linkedin className="w-4 h-4" />
                <span>Milan Panchal</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-[#8A96A8]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ahmedabad, India · Available Globally</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="text-sm text-[#8A96A8]">
            © {new Date().getFullYear()} Monolith Microsystems Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
