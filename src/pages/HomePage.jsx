
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, CircuitBoard, Package, Factory, Car, Wifi, Cog, Smartphone, Plane, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const services = [
    {
      icon: Cpu,
      title: 'Embedded Systems Design',
      description: 'Custom firmware development, microcontroller programming, and real-time operating systems tailored to your specifications.'
    },
    {
      icon: CircuitBoard,
      title: 'PCB Design',
      description: 'Schematic design, layout optimization, and rapid prototyping for high-performance circuit boards.'
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'Full lifecycle support from concept to production, ensuring your vision becomes reality.'
    },
    {
      icon: Factory,
      title: 'Manufacturing Services',
      description: 'Assembly, testing, and quality assurance with rigorous standards for reliable products.'
    }
  ];

  const features = [
    {
      icon: CircuitBoard,
      title: 'Quality & Precision',
      description: 'Every component meets strict quality standards with thorough testing and validation.'
    },
    {
      icon: Cog,
      title: 'Scalability & Flexibility',
      description: 'Solutions that grow with your needs, from prototype to mass production.'
    },
    {
      icon: Cpu,
      title: 'Engineering Excellence',
      description: 'Experienced team with deep expertise in embedded systems and hardware design.'
    }
  ];

  const industries = [
    {
      title: 'Automotive',
      description: 'Advanced vehicle electronics and safety-critical systems for modern transportation.',
      useCases: ['Vehicle control modules', 'Safety systems', 'Infotainment'],
      metrics: '47.2% faster time-to-market',
      image: 'https://images.unsplash.com/photo-1677230017860-a8cc67785f0a?w=800&q=80'
    },
    {
      title: 'IoT',
      description: 'Connected devices and sensor networks that power the Internet of Things.',
      useCases: ['Smart sensors', 'Edge computing', 'Wireless connectivity'],
      metrics: '2,847 devices deployed',
      image: 'https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?w=800&q=80'
    },
    {
      title: 'Industrial Automation',
      description: 'Control systems and robotics for efficient manufacturing processes.',
      useCases: ['PLC systems', 'Robotics control', 'Process automation'],
      metrics: '83% efficiency improvement'
    },
    {
      title: 'Consumer Electronics',
      description: 'Smart devices and wearables that enhance everyday life.',
      useCases: ['Wearable tech', 'Smart home', 'Audio devices'],
      metrics: '12.4k units shipped'
    },
    {
      title: 'Aerospace',
      description: 'High-reliability systems for demanding aerospace applications.',
      useCases: ['Flight control', 'Navigation systems', 'Telemetry'],
      metrics: '99.97% reliability rate'
    },
    {
      title: 'Medical Devices',
      description: 'Precision electronics with regulatory compliance for healthcare.',
      useCases: ['Diagnostic equipment', 'Patient monitoring', 'Surgical tools'],
      metrics: 'FDA compliant',
      image: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?w=800&q=80'
    }
  ];

  const projects = [
    {
      title: 'Smart IoT Gateway',
      description: 'Multi-protocol gateway enabling seamless communication between legacy industrial equipment and modern cloud platforms.',
      techStack: ['Embedded Linux', 'MQTT', 'Modbus', 'AWS IoT'],
      results: '67% reduction in downtime, real-time monitoring for 500+ devices'
    },
    {
      title: 'Automotive Control Module',
      description: 'Safety-critical ECU for advanced driver assistance systems with real-time processing capabilities.',
      techStack: ['ARM Cortex-M7', 'AUTOSAR', 'CAN Bus', 'ISO 26262'],
      results: 'Achieved ASIL-D certification, 3.2ms response time'
    },
    {
      title: 'Industrial Sensor Network',
      description: 'Wireless sensor network for predictive maintenance in manufacturing facilities.',
      techStack: ['LoRaWAN', 'STM32', 'Edge ML', 'Time-series DB'],
      results: '89% prediction accuracy, $1.2M annual savings'
    },
    {
      title: 'Medical Device PCB',
      description: 'High-precision circuit board for portable diagnostic equipment with stringent regulatory requirements.',
      techStack: ['Medical-grade PCB', 'Low-power design', 'EMI shielding', 'IEC 60601'],
      results: 'FDA 510(k) cleared, 72-hour battery life'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Monolith Microsystems - Precision Embedded Systems & Hardware Solutions</title>
        <meta name="description" content="Expert embedded systems design, PCB development, and manufacturing services for automotive, IoT, industrial automation, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1532186773960-85649e5cb70b?w=1920&q=80"
              alt="Advanced manufacturing facility with precision equipment"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="heading-font text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Build your hardware with precision
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              >
                Expert embedded systems design and manufacturing services that bring your hardware vision to life.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                    Start your project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
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
                Our services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive hardware solutions from design to production
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                Why choose us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on a foundation of quality, flexibility, and expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
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
                Industries we serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
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
                Featured projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world solutions delivering measurable results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
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

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to transform your hardware vision?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to bring precision engineering to your next project
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded transition-smooth hover:shadow-lg hover:shadow-primary/30">
                  Get started today
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
