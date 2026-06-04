
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { Button } from '@/components/ui/button';

function ProjectsPage() {
  const projects = [
    {
      title: 'AGV Platform',
      description: 'Autonomous guided vehicle platform with onboard navigation, obstacle handling and fleet coordination, built for continuous operation on live industrial floors.',
      techStack: ['RTOS', 'CAN', 'LiDAR', 'Computer Vision', 'Motor Control'],
      results: '500+ units deployed in production environments'
    },
    {
      title: 'Industrial Control Room',
      description: 'Centralized monitoring and control platform that aggregates thousands of field devices into a single operations view with real time telemetry.',
      techStack: ['Modbus', 'MQTT', 'Gateways', 'Cloud', 'Dashboards'],
      results: '1000+ industrial devices running in production'
    },
    {
      title: 'Satellite IoT',
      description: 'Remote monitoring and telemetry over satellite links for assets located far outside conventional network coverage, engineered with space grade communication discipline.',
      techStack: ['Satellite IoT', 'Remote Monitoring', 'Embedded Firmware', 'Telemetry'],
      results: 'Built on ISRO related development experience'
    },
    {
      title: 'Smart Medical Infrastructure',
      description: 'Modular operation theatre platform that integrates environmental and gas monitoring with clinical control systems for reliable in theatre operation.',
      techStack: ['Operation Theatre', 'Environmental Monitoring', 'Gas Monitoring', 'Control Systems'],
      results: 'Modular OT platform for clinical environments'
    },
    {
      title: 'Electric Mobility Control',
      description: 'Battery management and motor control firmware for electric mobility, balancing safety, range and responsiveness across the drivetrain.',
      techStack: ['BMS', 'Motor Control', 'CAN', 'Embedded Firmware'],
      results: 'Production grade battery and motor control'
    },
    {
      title: 'Edge AI Vision',
      description: 'On device computer vision and inference for industrial perception, running close to the sensor for low latency decisions without cloud dependency.',
      techStack: ['OpenCV', 'Computer Vision', 'Inference', 'Edge Compute'],
      results: 'Real time perception running at the edge'
    }
  ];

  const stats = [
    { value: '14+', label: 'Years of experience' },
    { value: '25+', label: 'Projects delivered' },
    { value: '500+', label: 'AGVs deployed' },
    { value: '1000+', label: 'Devices running' }
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Monolith Microsystems</title>
        <meta name="description" content="Real embedded deployments across autonomous systems, industrial control, satellite IoT, medical infrastructure, electric mobility and edge AI." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#0A0C10] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1591453089816-e89fb59fb56a?w=1920&q=80"
              alt="Project development"
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
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-4">Project Highlights</p>
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                Systems that shipped and stayed running
              </h1>
              <p className="text-xl text-[#C8D0DC] max-w-3xl mx-auto leading-relaxed">
                Real deployments across robotics, industry, space, healthcare and mobility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="py-20 bg-[#0A0C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="mono-font text-sm uppercase tracking-[0.14em] text-primary mb-3">Track Record</p>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
                Proven across the field
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="heading-font text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="mono-font text-xs uppercase tracking-[0.1em] text-[#8A96A8]">{stat.label}</p>
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
                Have a system that needs to ship?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Bring us the hard part. We take ambitious hardware from concept to production.
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

export default ProjectsPage;
