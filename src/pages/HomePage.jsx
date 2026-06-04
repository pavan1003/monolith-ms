
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cog, Satellite, Brain, HeartPulse, BatteryCharging, Layers, Factory, Network, UserCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '500+', label: 'AGVs Deployed' },
    { value: '1000+', label: 'Industrial Devices Running' },
    { value: 'ISRO', label: 'Verified Experience' }
  ];

  const solutions = [
    {
      icon: Bot,
      title: 'Autonomous Systems',
      description: 'Mobile robots and guided vehicles with onboard perception, navigation and fleet coordination.',
      tags: ['AGV', 'AMR', 'Computer Vision', 'LiDAR']
    },
    {
      icon: Cog,
      title: 'Industrial Automation',
      description: 'Control systems, lighting protocols and machine networks built for the factory floor.',
      tags: ['PLC', 'Control Systems', 'DMX', 'DALI', 'CAN']
    },
    {
      icon: Satellite,
      title: 'Satellite Communication',
      description: 'Remote monitoring and connectivity for assets far beyond conventional networks.',
      tags: ['Remote Monitoring', 'Satellite IoT', 'Gateways']
    },
    {
      icon: Brain,
      title: 'Edge AI',
      description: 'Vision and inference running on device, close to where the data is generated.',
      tags: ['OpenCV', 'AI Processing', 'Voice Interfaces']
    },
    {
      icon: HeartPulse,
      title: 'Medical Infrastructure',
      description: 'Operation theatre and environmental monitoring engineered for clinical reliability.',
      tags: ['Operation Theatre', 'Environmental Monitoring']
    },
    {
      icon: BatteryCharging,
      title: 'Electric Mobility',
      description: 'Battery management and motor control for the next generation of electric vehicles.',
      tags: ['Battery Management', 'Motor Controllers']
    }
  ];

  const highlights = [
    {
      title: 'AGV Platform',
      metric: '500+ Units Deployed',
      description: 'Autonomous guided vehicle platform shipped at scale across live industrial floors.'
    },
    {
      title: 'Industrial Control Room',
      metric: '1000+ Devices Running',
      description: 'Centralized monitoring and control for thousands of connected industrial devices.'
    },
    {
      title: 'Satellite IoT',
      metric: 'ISRO Related Development',
      description: 'Remote connectivity and telemetry built with satellite communication discipline.'
    },
    {
      title: 'Smart Medical Infrastructure',
      metric: 'Modular OT Platform',
      description: 'Operation theatre monitoring and control engineered as a modular, deployable platform.'
    }
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
        <title>Monolith Microsystems | Embedded Systems Engineering</title>
        <meta name="description" content="Monolith Microsystems engineers complex embedded products from concept to production across industrial automation, autonomous systems, satellite IoT, edge AI, medical infrastructure and electric mobility." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0C10]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
              alt="Embedded electronics and circuit hardware"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-[#0A0C10]/80 to-[#0A0C10]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-6"
              >
                Embedded Systems Engineering
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Engineering complex embedded products from concept to production
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-[#C8D0DC] leading-relaxed mb-8 max-w-2xl"
              >
                Leveraging 14+ years of experience in Industrial Automation, Autonomous Systems, Satellite Communication, Electric Mobility, Medical Infrastructure and IIoT.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                    Start your project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6 rounded transition-smooth">
                    Book technical consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#1C2030] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="px-4 py-8 text-center"
                >
                  <div className="heading-font text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="mono-font text-[10px] uppercase tracking-[0.1em] text-[#8A96A8] mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-4">Engineering Beyond Prototypes</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-6">
                Most embedded projects fail in the transition from prototype to production
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Monolith Microsystems bridges that gap by combining architecture, firmware, hardware integration, industrial networking, manufacturing awareness and project execution. We focus on delivering reliable systems designed for deployment, scalability and long term support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Solutions</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                End to end embedded engineering
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six domains where we take hardware concepts all the way to deployed systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-card border border-border rounded p-6 transition-smooth hover-glow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="mono-font text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Project Highlights</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Systems that shipped and stayed running
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real deployments across robotics, industry, space and healthcare
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className="bg-card border border-border rounded p-8 transition-smooth hover:shadow-lg hover:shadow-primary/20"
                >
                  <span className="mono-font text-xs uppercase tracking-[0.1em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded">
                    {project.metric}
                  </span>
                  <h3 className="heading-font text-2xl font-semibold text-foreground mt-4 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View all projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Monolith */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Why Monolith</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A senior technical partner, not a vendor
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <FeatureCard key={index} {...reason} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                Let's build something that ships
              </h2>
              <p className="text-lg text-[#C8D0DC] mb-8 max-w-2xl mx-auto">
                From concept through production, Monolith delivers.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                  Start your project
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

export default HomePage;
