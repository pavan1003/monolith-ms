
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Clock, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Monolith Microsystems</title>
        <meta name="description" content="Get in touch with Monolith Microsystems to discuss your embedded systems project. We respond within 24 hours." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#0A0C10] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Let's build something together
              </h1>
              <p className="text-xl text-[#C8D0DC] max-w-3xl mx-auto leading-relaxed">
                Share your project details and we'll get back to you within 24 hours with next steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded p-8"
              >
                <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="heading-font text-2xl font-bold text-foreground mb-6">
                    Contact information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a href="mailto:milan@monolithms.com" className="text-muted-foreground hover:text-primary transition-smooth">
                          milan@monolithms.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/milan-panchal-a47b01119/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                          Milan Panchal
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">WhatsApp</p>
                        <a href="https://wa.me/919427332220" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                          (+91) 9427332220
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Office</p>
                        <p className="text-muted-foreground">
                          Ahmedabad<br />
                          Gujarat, India<br />
                          Available Globally
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Business hours</p>
                        <p className="text-muted-foreground">
                          Monday to Friday: 9:00 AM to 6:00 PM IST<br />
                          Saturday and Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary/10 border border-primary/20 rounded p-6">
                  <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                    Quick response guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days. For urgent matters, reach out on WhatsApp.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to help you get started
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                  Do you work end to end, or just one layer?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Both. We can own the full stack from architecture and firmware to hardware, industrial networking and cloud, or plug into your existing team for a specific layer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                  Will you sign an NDA?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. We sign a non disclosure agreement before any technical discussion. Your intellectual property and project details stay strictly confidential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                  Will I work directly with the founder?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. Milan Panchal is involved on every project. You talk to the engineer making the decisions, not a sales layer in between.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                  Do you support production and the long term?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. We design for manufacturing and provide validation, OTA updates and long term support, so deployments keep running well after launch.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
