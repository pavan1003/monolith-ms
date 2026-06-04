
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import { Button } from '@/components/ui/button';

function IndustriesPage() {
  const industries = [
    {
      title: 'Manufacturing',
      description: 'Connected factory systems that bring visibility, control and predictive insight to the production line.',
      useCases: [
        'Industry 4.0 integration',
        'Machine monitoring',
        'Predictive maintenance'
      ],
      metrics: '1000+ industrial devices running in production',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
    },
    {
      title: 'Logistics',
      description: 'Autonomous movement and tracking for warehouses, yards and distribution operations.',
      useCases: [
        'Autonomous guided vehicles (AGV)',
        'Fleet coordination',
        'Asset tracking'
      ],
      metrics: '500+ autonomous guided vehicles deployed',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80'
    },
    {
      title: 'Healthcare',
      description: 'Clinical grade monitoring and control built for operation theatres and medical infrastructure.',
      useCases: [
        'Operation theatre platforms',
        'Environmental and gas monitoring',
        'Medical infrastructure control'
      ],
      metrics: 'Modular operation theatre platform',
      image: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?w=800&q=80'
    },
    {
      title: 'Energy',
      description: 'Measurement and monitoring systems for power networks and metering at the edge.',
      useCases: [
        'Power monitoring',
        'Smart metering',
        'Remote telemetry'
      ],
      metrics: 'Edge monitoring for power and metering',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    },
    {
      title: 'Agriculture',
      description: 'Remote monitoring and automation for assets spread across wide, low connectivity areas.',
      useCases: [
        'Remote monitoring',
        'Field automation',
        'Long range connectivity'
      ],
      metrics: 'Built for remote, low connectivity sites',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'
    },
    {
      title: 'Aerospace',
      description: 'Satellite communication and telemetry engineered with space grade reliability discipline.',
      useCases: [
        'Satellite communication',
        'Telemetry and data acquisition',
        'Fault tolerant design'
      ],
      metrics: 'ISRO related satellite communication experience',
      image: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&q=80'
    }
  ];

  const expertise = [
    {
      title: 'Architecture first',
      body: 'Every project starts with system architecture, designed for scale and reliability before a line of code is written.'
    },
    {
      title: 'Safety and reliability',
      body: 'A track record in medical, aerospace and industrial domains where reliability is not negotiable and validation is rigorous.'
    },
    {
      title: 'Remote and harsh environments',
      body: 'Systems that survive outside the lab, from busy factory floors to satellite linked assets in remote locations.'
    },
    {
      title: 'Production and support',
      body: 'Design for manufacturing, validation and long term support so deployments keep running well after launch.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries | Monolith Microsystems</title>
        <meta name="description" content="Embedded systems for manufacturing, logistics, healthcare, energy, agriculture and aerospace, from machine monitoring to satellite telemetry." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#0A0C10] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
              alt="Industrial automation"
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
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-4">Industries</p>
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Where our engineering goes to work
              </h1>
              <p className="text-xl text-[#C8D0DC] max-w-3xl mx-auto leading-relaxed">
                Deep embedded expertise applied across six sectors with very different demands and one shared need for reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Cross-industry Expertise */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Cross-industry Expertise</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                The same discipline, every sector
              </h2>
              <p className="text-lg text-[#C8D0DC] max-w-2xl mx-auto">
                What we learn in one industry strengthens the work we do in the next
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className="bg-[#1C2030] border border-white/10 rounded p-6"
                >
                  <h3 className="heading-font text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#C8D0DC] leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Working in one of these sectors?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us about your environment and constraints. We will bring the engineering.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                  Start a conversation
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

export default IndustriesPage;
