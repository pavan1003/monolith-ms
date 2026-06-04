
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, techStack, results }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded p-6 transition-smooth hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
    >
      <h3 className="heading-font text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      {techStack && techStack.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {results && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-success mb-1">Results:</p>
          <p className="text-sm text-muted-foreground">{results}</p>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectCard;
