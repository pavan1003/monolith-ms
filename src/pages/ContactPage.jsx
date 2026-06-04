
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Monolith Microsystems</title>
        <meta name="description" content="Get in touch with Monolith Microsystems to discuss your embedded systems project. We respond within 24 hours." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Let's build something together
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                        <a href="mailto:info@monolithmicro.com" className="text-muted-foreground hover:text-primary transition-smooth">
                          info@monolithmicro.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Phone</p>
                        <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-smooth">
                          +1 (555) 123-4567
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
                          2847 Innovation Drive<br />
                          San Jose, CA 95134<br />
                          United States
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
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted/30 rounded h-64 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Map view</p>
                    <p className="text-sm text-muted-foreground">San Jose, California</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary/10 border border-primary/20 rounded p-6">
                  <h3 className="heading-font text-lg font-semibold text-foreground mb-2">
                    Quick response guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
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
                  What is your typical project timeline?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on complexity. Simple PCB designs can be completed in 2-4 weeks, while full product development may take 3-6 months. We provide detailed timelines during initial consultation.
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
                  Do you offer NDA protection?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we sign non-disclosure agreements before any technical discussions. Your intellectual property and project details are kept strictly confidential.
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
                  What is your minimum order quantity?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We work with projects of all sizes, from single prototypes to high-volume production runs. There is no minimum order quantity for design services.
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
                  Do you provide ongoing support?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer maintenance contracts and ongoing support for all projects. This includes firmware updates, design modifications, and technical assistance.
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
