
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Network, Brain, Cloud, Bot, Cog, Satellite, Building2, HeartPulse, BatteryCharging, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function ServicesPage() {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Embedded Software',
      skills: ['Architecture', 'RTOS', 'Firmware', 'Device Management', 'OTA Updates']
    },
    {
      icon: CircuitBoard,
      title: 'Hardware Design',
      skills: ['PCB Design', 'Design for Manufacturing', 'Validation', 'Board Bring-up']
    },
    {
      icon: Network,
      title: 'Industrial Networking',
      skills: ['BLE', 'LoRa', 'CAN', 'DMX', 'DALI', 'LinBus', 'Modbus']
    },
    {
      icon: Brain,
      title: 'Edge AI',
      skills: ['OpenCV', 'Computer Vision', 'LiDAR Processing', 'Voice', 'Inference']
    },
    {
      icon: Cloud,
      title: 'IoT Systems',
      skills: ['Node Architecture', 'Gateways', 'Cloud Integration', 'Dashboards']
    }
  ];

  const lifecycle = ['Idea', 'Architecture', 'Prototype', 'Validation', 'Production', 'Support'];

  const solutions = [
    {
      icon: Cog,
      title: 'Industrial Automation',
      description: 'Monitoring, control and safety systems engineered for demanding factory environments.',
      points: ['Monitoring', 'Control', 'Safety']
    },
    {
      icon: Bot,
      title: 'Autonomous Systems',
      description: 'Guided and mobile robots with perception and navigation for live operations.',
      points: ['AGV', 'AMR', 'Vision Systems']
    },
    {
      icon: Satellite,
      title: 'Satellite & Remote Connectivity',
      description: 'Connectivity for assets in remote locations where conventional networks do not reach.',
      points: ['Remote Assets', 'Mining', 'Defense', 'Utilities']
    },
    {
      icon: Building2,
      title: 'Smart Infrastructure',
      description: 'Intelligent monitoring and control for buildings, control rooms and facilities.',
      points: ['Buildings', 'Control Rooms', 'Smart Facilities']
    },
    {
      icon: HeartPulse,
      title: 'Medical Automation',
      description: 'Clinical grade monitoring and control built for operation theatres and care environments.',
      points: ['Operation Theatre Monitoring', 'Gas Monitoring', 'Control Systems']
    },
    {
      icon: BatteryCharging,
      title: 'Electric Mobility',
      description: 'Battery and motor control systems for electric vehicles and managed fleets.',
      points: ['E-bike', 'EV Controller', 'Fleet Systems']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Capabilities | Monolith Microsystems</title>
        <meta name="description" content="The complete embedded stack: embedded software, hardware design, industrial networking, edge AI and IoT systems, from idea to production and support." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#0A0C10] overflow-hidden">
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
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-4">Capabilities</p>
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                The complete embedded stack
              </h1>
              <p className="text-xl text-[#C8D0DC] max-w-3xl mx-auto leading-relaxed">
                From bare metal firmware to cloud dashboards. Every layer of the system, delivered by one team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="bg-card border border-border rounded p-6 transition-smooth hover-glow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth mb-4">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-4">
                    {capability.title}
                  </h3>
                  <ul className="space-y-2">
                    {capability.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Development Lifecycle */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Product Development Lifecycle</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
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
                  className="bg-[#1C2030] border border-white/10 rounded p-6 text-center"
                >
                  <div className="mono-font text-xs text-primary mb-2">{String(index + 1).padStart(2, '0')}</div>
                  <div className="heading-font text-lg font-semibold text-white">{stage}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions / Outcomes */}
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
                Outcomes we deliver
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The capabilities above turn into deployed systems across these domains
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
                    {solution.points.map((point, pointIndex) => (
                      <span key={pointIndex} className="mono-font text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

export default ServicesPage;
