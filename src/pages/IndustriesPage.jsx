
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';

function IndustriesPage() {
  const industries = [
    {
      title: 'Automotive',
      description: 'Advanced vehicle electronics and safety-critical systems for modern transportation.',
      useCases: [
        'Electronic control units (ECUs)',
        'Advanced driver assistance systems (ADAS)',
        'Infotainment and connectivity',
        'Battery management systems',
        'Vehicle-to-everything (V2X) communication'
      ],
      metrics: '47.2% faster time-to-market for automotive clients',
      image: 'https://images.unsplash.com/photo-1677230017860-a8cc67785f0a?w=800&q=80'
    },
    {
      title: 'IoT',
      description: 'Connected devices and sensor networks that power the Internet of Things.',
      useCases: [
        'Smart sensors and edge devices',
        'Wireless connectivity (WiFi, BLE, LoRaWAN)',
        'Cloud integration and data pipelines',
        'Low-power design for battery operation',
        'Secure firmware and OTA updates'
      ],
      metrics: '2,847 IoT devices deployed across 12 countries',
      image: 'https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?w=800&q=80'
    },
    {
      title: 'Industrial Automation',
      description: 'Control systems and robotics for efficient manufacturing processes.',
      useCases: [
        'Programmable logic controllers (PLCs)',
        'Industrial robotics control',
        'Process automation and monitoring',
        'Machine vision systems',
        'Predictive maintenance solutions'
      ],
      metrics: '83% efficiency improvement in production lines'
    },
    {
      title: 'Consumer Electronics',
      description: 'Smart devices and wearables that enhance everyday life.',
      useCases: [
        'Wearable health and fitness devices',
        'Smart home controllers',
        'Audio and multimedia devices',
        'Portable electronics',
        'User interface and display systems'
      ],
      metrics: '12.4k consumer devices shipped in 2025'
    },
    {
      title: 'Aerospace',
      description: 'High-reliability systems for demanding aerospace applications.',
      useCases: [
        'Flight control systems',
        'Navigation and guidance',
        'Telemetry and data acquisition',
        'Avionics and instrumentation',
        'Radiation-hardened designs'
      ],
      metrics: '99.97% reliability rate in aerospace deployments'
    },
    {
      title: 'Medical Devices',
      description: 'Precision electronics with regulatory compliance for healthcare.',
      useCases: [
        'Diagnostic equipment',
        'Patient monitoring systems',
        'Surgical instruments',
        'Portable medical devices',
        'FDA and IEC 60601 compliance'
      ],
      metrics: 'FDA 510(k) cleared devices with ISO 13485 certification',
      image: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?w=800&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries - Monolith Microsystems</title>
        <meta name="description" content="Specialized embedded systems solutions for automotive, IoT, industrial automation, consumer electronics, aerospace, and medical devices." />
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
                Industry-specific solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Deep expertise across diverse sectors, delivering tailored embedded systems that meet unique industry requirements.
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

        {/* Industry Expertise */}
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
                Cross-industry expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experience spans multiple sectors, enabling us to bring best practices and innovative approaches to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-xl font-semibold text-foreground mb-3">
                  Regulatory compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience with ISO 9001, ISO 13485, FDA 510(k), IEC 60601, ISO 26262, and other industry-specific standards ensures your product meets all requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-xl font-semibold text-foreground mb-3">
                  Safety-critical systems
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proven track record in automotive, aerospace, and medical applications where reliability and safety are paramount, with rigorous validation processes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-xl font-semibold text-foreground mb-3">
                  Scalable architectures
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designs that scale from prototype to high-volume production, with consideration for manufacturing efficiency and cost optimization at every stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded p-6"
              >
                <h3 className="heading-font text-xl font-semibold text-foreground mb-3">
                  Technology partnerships
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Relationships with leading semiconductor manufacturers, tool vendors, and certification bodies streamline development and reduce time to market.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default IndustriesPage;
