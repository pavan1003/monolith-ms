
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Package, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function ServicesPage() {
  const services = [
    {
      icon: Cpu,
      title: 'Embedded Systems Design',
      description: 'Custom firmware and software solutions for microcontrollers and embedded processors.',
      process: [
        'Requirements analysis and architecture design',
        'Firmware development with RTOS or bare-metal',
        'Driver development and hardware abstraction',
        'Testing, debugging, and optimization'
      ],
      benefits: [
        'Real-time performance optimization',
        'Low-power design expertise',
        'Support for ARM, AVR, PIC, RISC-V',
        'Safety-critical system experience'
      ]
    },
    {
      icon: CircuitBoard,
      title: 'PCB Design',
      description: 'Schematic capture, layout design, and prototyping for high-performance circuit boards.',
      process: [
        'Schematic design and component selection',
        'Multi-layer PCB layout and routing',
        'Signal integrity and EMI analysis',
        'Design for manufacturing (DFM) review'
      ],
      benefits: [
        'High-speed digital design capability',
        'RF and mixed-signal expertise',
        'Thermal management optimization',
        'Cost-effective component sourcing'
      ]
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'Full lifecycle support from concept through production and beyond.',
      process: [
        'Concept development and feasibility study',
        'Prototype design and validation',
        'Design for manufacturing and testing',
        'Production ramp and ongoing support'
      ],
      benefits: [
        'Faster time to market',
        'Risk mitigation through validation',
        'Scalable design architecture',
        'Comprehensive documentation'
      ]
    },
    {
      icon: Factory,
      title: 'Manufacturing Services',
      description: 'Assembly, testing, and quality assurance with rigorous standards.',
      process: [
        'PCB assembly (SMT and through-hole)',
        'Automated optical inspection (AOI)',
        'Functional testing and validation',
        'Quality control and traceability'
      ],
      benefits: [
        'ISO 9001 certified processes',
        'Flexible volume capabilities',
        'Comprehensive test coverage',
        'Supply chain management'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Monolith Microsystems</title>
        <meta name="description" content="Embedded systems design, PCB development, product engineering, and manufacturing services for hardware innovation." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1662528593017-bf296dbdea9c?w=1920&q=80"
              alt="Detailed PCB design with electronic components"
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
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Comprehensive hardware services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From initial concept to volume production, we provide end-to-end solutions for your embedded systems needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-primary/10 mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
                        Request consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-card border border-border rounded p-6">
                      <h3 className="heading-font text-xl font-semibold text-foreground mb-4">
                        Our process
                      </h3>
                      <ul className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-card border border-border rounded p-6">
                      <h3 className="heading-font text-xl font-semibold text-foreground mb-4">
                        Key benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to start your project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us to discuss how we can help bring your hardware vision to life
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                  Get in touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
