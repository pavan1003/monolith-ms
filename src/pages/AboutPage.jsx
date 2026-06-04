
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Shield, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative problem-solving approaches.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every design, ensuring flawless execution.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Building systems you can trust with rigorous testing and quality assurance.'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Collaborative approach that treats your success as our own mission.'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Founded with a vision to democratize embedded systems design' },
    { year: '2019', event: 'Launched first automotive-grade control module' },
    { year: '2021', event: 'Expanded to IoT and industrial automation sectors' },
    { year: '2023', event: 'Achieved ISO 9001 and ISO 13485 certifications' },
    { year: '2025', event: 'Opened advanced manufacturing facility in San Jose' },
    { year: '2026', event: 'Serving 200+ clients across 6 industries' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Monolith Microsystems</title>
        <meta name="description" content="Learn about Monolith Microsystems' mission, values, and expertise in embedded systems and hardware design." />
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
                Building the future of hardware
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate engineers dedicated to creating precision embedded systems that power the next generation of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who we are
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monolith Microsystems specializes in embedded systems design, PCB development, and full-scale manufacturing services. Since 2018, we have partnered with companies across automotive, IoT, industrial automation, consumer electronics, aerospace, and medical device sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team brings together decades of combined experience in firmware development, hardware design, and manufacturing optimization. We handle projects from initial concept through production, ensuring every component meets the highest standards of quality and performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With state-of-the-art facilities and a commitment to continuous improvement, we deliver solutions that are not just functional, but exceptional.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-8"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <p className="text-sm text-muted-foreground">Active clients</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">2,847</div>
                    <p className="text-sm text-muted-foreground">Projects delivered</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">47</div>
                    <p className="text-sm text-muted-foreground">Team members</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <p className="text-sm text-muted-foreground">Industries served</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-8"
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="heading-font text-2xl font-bold text-foreground mb-4">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver precision-engineered embedded systems and hardware solutions that enable our clients to bring innovative products to market faster, with confidence in quality and reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-8"
              >
                <Eye className="w-12 h-12 text-primary mb-4" />
                <h3 className="heading-font text-2xl font-bold text-foreground mb-4">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted partner for companies worldwide seeking exceptional embedded systems expertise, recognized for technical excellence, innovation, and unwavering commitment to client success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principles that guide every decision and project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <FeatureCard key={index} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Expertise */}
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
                Team expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialists across every aspect of hardware development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-6"
              >
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Embedded Systems Engineers
                </h3>
                <p className="text-muted-foreground text-sm">
                  Firmware developers with expertise in ARM, AVR, PIC, and RISC-V architectures, real-time operating systems, and low-level optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-6"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Hardware Design Specialists
                </h3>
                <p className="text-muted-foreground text-sm">
                  PCB designers skilled in high-speed digital design, RF circuits, power management, and signal integrity analysis using industry-standard tools.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded p-6"
              >
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Manufacturing Engineers
                </h3>
                <p className="text-muted-foreground text-sm">
                  Production experts focused on DFM optimization, automated testing, quality control, and scaling from prototype to volume manufacturing.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our growth
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
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
                Certifications & credentials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized standards of excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-6 text-center"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground">Quality management systems</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-6 text-center"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">ISO 13485:2016</h3>
                <p className="text-sm text-muted-foreground">Medical devices quality management</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded p-6 text-center"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="heading-font text-lg font-semibold text-foreground mb-2">IPC-A-610</h3>
                <p className="text-sm text-muted-foreground">Electronics assembly standards</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
