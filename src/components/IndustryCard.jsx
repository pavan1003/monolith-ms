
import React from 'react';
import { motion } from 'framer-motion';

function IndustryCard({ title, description, useCases, metrics, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded overflow-hidden transition-smooth hover-glow"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={`${title} industry solutions`}
            className="w-full h-full object-cover transition-smooth hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="heading-font text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        {useCases && useCases.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Use Cases:</p>
            <ul className="space-y-1">
              {useCases.map((useCase, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {metrics && (
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-success font-medium text-white">{metrics}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default IndustryCard;
