
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Layers, Factory, Network, UserCheck, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import { Button } from '@/components/ui/button';

function AboutPage() {
  // Founder-specific stats only, the portfolio numbers (projects, AGVs, devices) live on the Home trust bar
  const stats = [
    { value: '14+', label: 'Years Embedded' },
    { value: '30+', label: 'Engineers Led' },
    { value: 'ISRO', label: 'Experience' }
  ];

  const journey = [
    { stage: 'Network Engineer', note: 'A foundation in network infrastructure and low level data systems.' },
    { stage: 'Embedded Engineer', note: 'Moved into firmware and bare metal silicon execution.' },
    { stage: 'ISRO', note: 'Contributed to satellite communication and telemetry systems.' },
    { stage: 'Tech Lead', note: 'Owned architecture and delivery across complex programs.' },
    { stage: 'Project Manager', note: 'Led cross functional teams of 30+ engineers to production.' },
    { stage: 'Founder', note: 'Started Monolith to take ambitious hardware from concept to production.' }
  ];

  const reasons = [
    {
      icon: Layers,
      title: 'Architecture Thinking',
      description: 'Every engagement begins with system architecture, not just code. We design for scale, reliability and long term maintenance.'
    },
    {
      icon: Factory,
      title: 'Production Mindset',
      description: 'DFM awareness, validation and manufacturability are built into every design. Shipped products are the goal, not prototypes.'
    },
    {
      icon: Network,
      title: 'Cross-Domain Expertise',
      description: 'Firmware, hardware, industrial networking, edge AI and cloud. One team across the full embedded stack.'
    },
    {
      icon: UserCheck,
      title: 'Direct Founder Involvement',
      description: 'Milan Panchal is on every project. Not a sales team, but your technical partner with ISRO level engineering discipline.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | Monolith Microsystems</title>
        <meta name="description" content="Monolith Microsystems is the focused embedded practice of Milan Panchal, built on 14+ years from network engineering to ISRO satellite communication to leading 30+ engineers." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#0A0C10] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
              alt="Embedded engineering"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-4">About</p>
              <h1 className="heading-font text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Engineering should solve real problems. Technology must survive outside the lab.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2"
              >
                <img
                  src="/portfolio.jpeg"
                  alt="Milan Panchal, founder of Monolith Microsystems"
                  className="w-full rounded border border-border object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-3"
              >
                <h2 className="heading-font text-3xl font-bold text-foreground mb-2">Milan Panchal</h2>
                <p className="mono-font text-xs uppercase tracking-[0.1em] text-primary mb-6">
                  Embedded Systems Architect · Project Leader · Technology Strategist
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  14+ years of embedded engineering, from network infrastructure to ISRO satellite communication to leading 30+ engineers on complex IIoT deployments.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Monolith Microsystems is the culmination of that journey, a focused practice that turns ambitious hardware concepts into shipped products. Founders talk to founders, and every project ships.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="heading-font text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <p className="mono-font text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Journey */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Career Journey</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                From network engineer to founder
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded p-6 border ${
                    index === journey.length - 1
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-[#1C2030] border-white/10'
                  }`}
                >
                  <div className="mono-font text-xs text-primary mb-2">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="heading-font text-xl font-semibold text-white mb-2">{item.stage}</h3>
                  <p className="text-sm text-[#C8D0DC] leading-relaxed">{item.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Monolith */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">How We Work</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                A senior technical partner, not a vendor
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <FeatureCard key={index} {...reason} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to work with a team that ships?
              </h2>
              <p className="text-lg text-[#C8D0DC] mb-8">
                Direct access to Milan on every project. Reach out for a no obligation technical consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                    Book consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="mailto:milan@monolithms.com" className="flex items-center gap-2 mono-font text-sm text-[#C8D0DC] hover:text-primary transition-smooth">
                  <Mail className="w-4 h-4" />
                  milan@monolithms.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
