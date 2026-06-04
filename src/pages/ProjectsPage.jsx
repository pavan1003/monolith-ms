
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'Smart IoT Gateway',
      description: 'Multi-protocol gateway enabling seamless communication between legacy industrial equipment and modern cloud platforms. Supports Modbus RTU/TCP, MQTT, OPC-UA, and custom protocols with edge processing capabilities.',
      techStack: ['Embedded Linux', 'MQTT', 'Modbus', 'AWS IoT Core', 'Docker', 'Node-RED'],
      results: '67% reduction in equipment downtime, real-time monitoring for 500+ devices across 3 manufacturing facilities'
    },
    {
      title: 'Automotive Control Module',
      description: 'Safety-critical electronic control unit for advanced driver assistance systems with real-time processing capabilities. Implements sensor fusion, object detection, and decision-making algorithms for collision avoidance.',
      techStack: ['ARM Cortex-M7', 'AUTOSAR', 'CAN Bus', 'ISO 26262', 'FreeRTOS', 'MISRA C'],
      results: 'Achieved ASIL-D certification, 3.2ms response time, deployed in 12,000+ vehicles'
    },
    {
      title: 'Industrial Sensor Network',
      description: 'Wireless sensor network for predictive maintenance in manufacturing facilities. Battery-powered nodes with edge machine learning for anomaly detection and long-range wireless communication.',
      techStack: ['LoRaWAN', 'STM32L4', 'TensorFlow Lite', 'InfluxDB', 'Grafana', 'Python'],
      results: '89% prediction accuracy for equipment failures, $1.2M annual savings in maintenance costs, 5-year battery life'
    },
    {
      title: 'Medical Device PCB',
      description: 'High-precision circuit board for portable diagnostic equipment with stringent regulatory requirements. Features low-noise analog front-end, isolated power supplies, and wireless data transmission.',
      techStack: ['Medical-grade PCB', 'Low-power MCU', 'BLE 5.0', 'EMI shielding', 'IEC 60601-1'],
      results: 'FDA 510(k) cleared, 72-hour battery life, <0.1% measurement error, ISO 13485 compliant manufacturing'
    },
    {
      title: 'Smart Energy Meter',
      description: 'Advanced metering infrastructure device with real-time power monitoring, tamper detection, and remote firmware updates. Supports multiple communication protocols for utility integration.',
      techStack: ['ARM Cortex-M4', 'Zigbee', 'AES-256', 'DLMS/COSEM', 'Secure Boot'],
      results: '99.8% uptime, deployed in 50,000+ homes, 40% reduction in billing disputes'
    },
    {
      title: 'Drone Flight Controller',
      description: 'High-performance flight controller for commercial drones with advanced stabilization, GPS navigation, and autonomous flight capabilities. Supports multiple sensor inputs and real-time telemetry.',
      techStack: ['STM32F7', 'IMU fusion', 'GPS/GNSS', 'MAVLink', 'PID control'],
      results: '±2cm position accuracy, 45-minute flight time, 2kg payload capacity'
    },
    {
      title: 'Retail POS Terminal',
      description: 'Point-of-sale terminal with touchscreen interface, payment processing, and inventory management. Features secure element for payment data, thermal printer interface, and cloud connectivity.',
      techStack: ['i.MX6', 'Linux', 'Qt', 'EMV', 'NFC', 'PCI DSS'],
      results: 'PCI DSS certified, 2-second transaction time, deployed in 800+ retail locations'
    },
    {
      title: 'Building Automation Controller',
      description: 'Centralized building management system for HVAC, lighting, and access control. Integrates with existing BACnet infrastructure and provides web-based monitoring interface.',
      techStack: ['Raspberry Pi CM4', 'BACnet', 'Modbus', 'MQTT', 'React', 'Node.js'],
      results: '32% energy savings, 200+ buildings managed, 99.5% system availability'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Monolith Microsystems</title>
        <meta name="description" content="Featured case studies showcasing our embedded systems expertise across IoT, automotive, industrial, medical, and consumer electronics." />
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
                Featured projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Real-world solutions delivering measurable results across diverse industries and applications.
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

        {/* Project Approach */}
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
                Our project approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Consistent methodology that ensures successful outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-6"
              >
                <div className="text-4xl font-bold text-primary mb-3">01</div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Discovery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into requirements, constraints, and success criteria to establish clear project scope.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-6"
              >
                <div className="text-4xl font-bold text-primary mb-3">02</div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  Architecture planning, component selection, and detailed design with regular client reviews.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded p-6"
              >
                <div className="text-4xl font-bold text-primary mb-3">03</div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Iterative development with continuous testing, validation, and refinement based on feedback.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded p-6"
              >
                <div className="text-4xl font-bold text-primary mb-3">04</div>
                <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                  Deployment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Production ramp, quality assurance, documentation, and ongoing support for long-term success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
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
                Proven results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Metrics that matter across our project portfolio
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,847</div>
                <p className="text-sm text-muted-foreground">Projects delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">97.3%</div>
                <p className="text-sm text-muted-foreground">Client satisfaction</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">47.2%</div>
                <p className="text-sm text-muted-foreground">Avg. time-to-market reduction</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.8%</div>
                <p className="text-sm text-muted-foreground">System reliability</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
