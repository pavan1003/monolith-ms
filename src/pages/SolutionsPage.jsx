
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight, BatteryCharging, Satellite,
  Cog, Bot, Building2, HeartPulse,
  Cpu, CircuitBoard, Network, Brain, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function SolutionsPage() {
  // Specialist depth, surfaced as a compact strip in the hero
  const specialisms = ['EV Firmware', 'Satellite IoT', 'Industry 4.0 and IIoT', 'End to end Project Management'];

  // Customer outcomes, the six solution domains
  const domains = [
    {
      icon: Cog,
      title: 'Industrial Automation',
      description: 'Monitoring, control and safety systems engineered for demanding factory environments.',
      tags: ['Monitoring', 'Control', 'Safety'],
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80'
    },
    {
      icon: Bot,
      title: 'Autonomous Systems',
      description: 'Guided and mobile robots with onboard perception and navigation for live operations.',
      tags: ['AGV', 'AMR', 'Vision Systems'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80'
    },
    {
      icon: Satellite,
      title: 'Satellite and Remote Connectivity',
      description: 'Connectivity for assets in remote locations where conventional networks do not reach.',
      tags: ['Remote Assets', 'Mining', 'Defense', 'Utilities'],
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80'
    },
    {
      icon: Building2,
      title: 'Smart Infrastructure',
      description: 'Intelligent monitoring and control for buildings, control rooms and smart facilities.',
      tags: ['Buildings', 'Control Rooms', 'Facilities'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      icon: HeartPulse,
      title: 'Medical Automation',
      description: 'Clinical grade monitoring and control built for operation theatres and care environments.',
      tags: ['Operation Theatre', 'Gas Monitoring', 'Control Systems'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80'
    },
    {
      icon: BatteryCharging,
      title: 'Electric Mobility',
      description: 'Battery and motor control systems for electric vehicles and managed fleets.',
      tags: ['E-bike', 'EV Controller', 'Fleet Systems'],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80'
    }
  ];

  // The full embedded stack
  const stack = [
    { icon: Cpu, title: 'Embedded Software', skills: ['Architecture', 'RTOS', 'Firmware', 'Device Management', 'OTA'] },
    { icon: CircuitBoard, title: 'Hardware Design', skills: ['PCB Design', 'Design for Manufacturing', 'Validation', 'Board Bring-up'] },
    { icon: Network, title: 'Industrial Networking', skills: ['BLE', 'LoRa', 'CAN', 'DMX', 'DALI', 'LinBus', 'Modbus'] },
    { icon: Brain, title: 'Edge AI', skills: ['OpenCV', 'Computer Vision', 'LiDAR', 'Voice', 'Inference'] },
    { icon: Cloud, title: 'IoT Systems', skills: ['Node', 'Gateway', 'Cloud', 'Dashboards'] }
  ];

  const dataFlow = ['Sensors', 'Edge Controller', 'Gateway', 'Cloud', 'Dashboard'];

  // The strongest credibility assets, real deployments
  const featured = [
    {
      name: 'Autonomous Guided Vehicle Platform',
      headline: '500+ AGVs Deployed Across US and European Markets',
      highlights: ['OpenCV', 'LiDAR', 'Safety PLC', 'NVIDIA', 'Real-time Navigation', 'Diagnostics']
    },
    {
      name: 'Industrial Control Room Ecosystem',
      headline: 'Industrial Lighting and Control Systems with 1000+ Devices Deployed',
      highlights: ['Zigbee', 'DALI', 'DMX', 'CAN', 'Mobile App', 'Cloud Integration']
    },
    {
      name: 'Satellite IoT Platform',
      headline: 'Satellite Connected Remote Monitoring Device',
      highlights: ['BLE', 'Satellite Communication', 'Health Monitoring', 'Gateway Infrastructure']
    },
    {
      name: 'Modular Operation Theater Controller',
      headline: 'Medical Infrastructure Automation Platform',
      highlights: ['Gas Sensors', 'Environmental Monitoring', 'IP Control', 'Touch Interface']
    },
    {
      name: 'Electric Vehicle Firmware Platform',
      headline: 'End to End Embedded Firmware for Electric Mobility',
      highlights: ['Motor Control', 'Battery Management', 'Embedded Architecture']
    }
  ];

  // Sectors served
  const industries = [
    { title: 'Manufacturing', note: 'Industry 4.0, machine monitoring, predictive maintenance' },
    { title: 'Logistics', note: 'AGV fleets, coordination, asset tracking' },
    { title: 'Healthcare', note: 'Operation theatre, monitoring, medical infrastructure' },
    { title: 'Energy', note: 'Power monitoring, smart metering, telemetry' },
    { title: 'Agriculture', note: 'Remote monitoring, field automation' },
    { title: 'Aerospace', note: 'Satellite communication, telemetry' }
  ];

  const lifecycle = ['Idea', 'Architecture', 'Prototype', 'Validation', 'Production', 'Support'];

  return (
    <>
      <Helmet>
        <title>Solutions | Monolith Microsystems</title>
        <meta name="description" content="One team across the full embedded stack. EV firmware, satellite IoT, Industry 4.0, autonomous systems and medical automation, from concept to production with real deployments at scale." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-[#0A0C10] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
              alt="Embedded electronics and circuit hardware"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-[#0A0C10]/85 to-[#0A0C10]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-5">Solutions</p>
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                From concept to production, across every layer of the system
              </h1>
              <p className="text-xl text-[#C8D0DC] leading-relaxed max-w-2xl mb-8">
                Fourteen years turning complex embedded ideas into deployed hardware. Capabilities, solution domains, real projects and the industries we serve, brought together in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                    Start your project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="#projects">
                  <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6 rounded transition-smooth">
                    See real deployments
                  </Button>
                </a>
              </div>

              {/* Specialist depth, the former "What Sets Us Apart" folded into the hero */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="mono-font text-xs uppercase tracking-[0.14em] text-primary">Specialist depth</span>
                {specialisms.map((item, index) => (
                  <span key={index} className="mono-font text-xs text-[#C8D0DC] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution domains */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Solution Domains</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                The outcomes we deliver
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six domains where we take hardware concepts all the way to deployed systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="flex flex-col bg-card border border-border rounded overflow-hidden transition-smooth hover:border-primary/40 hover-glow group"
                >
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded bg-primary flex items-center justify-center shadow-lg shadow-black/20">
                      <domain.icon className="w-6 h-6 text-[#0A0C10]" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="heading-font text-xl font-semibold text-foreground mb-2">{domain.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{domain.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {domain.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="mono-font text-xs text-muted-foreground bg-muted border border-border px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The full embedded stack */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">The Full Embedded Stack</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                Every layer, delivered by one team
              </h2>
              <p className="text-lg text-[#C8D0DC] max-w-2xl mx-auto">
                From bare metal firmware to cloud dashboards, the whole signal path is ours to own
              </p>
            </motion.div>

            {/* Data flow strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-12"
            >
              {dataFlow.map((node, index) => (
                <React.Fragment key={index}>
                  <span className="mono-font text-xs sm:text-sm text-[#C8D0DC] bg-[#1C2030] border border-white/10 rounded px-3 py-2">
                    {node}
                  </span>
                  {index < dataFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stack.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-[#1C2030] border border-white/10 rounded p-6 transition-smooth hover:border-primary/40 hover-glow group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-smooth">
                      <layer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="heading-font text-xl font-semibold text-white">{layer.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="mono-font text-xs text-[#C8D0DC] bg-white/5 border border-white/10 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Industries we serve, a thin sector strip rather than a second titled section */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-3">
              <span className="mono-font text-xs uppercase tracking-[0.14em] text-primary whitespace-nowrap">Industries we serve</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span key={index} className="mono-font text-xs text-[#C8D0DC] bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    {industry.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section id="projects" className="py-20 bg-muted/40 border-y border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Featured Projects</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Systems that shipped and stayed running
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real deployments across robotics, industry, space, healthcare and mobility
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className={`relative bg-card border border-border rounded p-8 overflow-hidden transition-smooth hover:shadow-lg hover:shadow-primary/20 group ${
                    index === featured.length - 1 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <span className="absolute top-4 right-6 heading-font text-8xl font-bold text-primary/5 select-none leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <span className="mono-font text-[11px] uppercase tracking-[0.14em] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded">
                      {project.name}
                    </span>
                    <h3 className="heading-font text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-5 leading-snug max-w-2xl">
                      {project.headline}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product lifecycle */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Product Development Lifecycle</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                One path from idea to long term support
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {lifecycle.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-card border border-border rounded p-6 text-center transition-smooth hover-glow"
                >
                  <div className="mono-font text-xs text-primary mb-2">{String(index + 1).padStart(2, '0')}</div>
                  <div className="heading-font text-lg font-semibold text-foreground">{stage}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                Need a partner across the full stack?
              </h2>
              <p className="text-lg text-[#C8D0DC] mb-8 max-w-2xl mx-auto">
                Tell us where your product is today and we will map the path to production.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                  Book a technical consultation
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

export default SolutionsPage;
