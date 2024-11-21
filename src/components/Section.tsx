import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Section({ id, title, icon, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-3 mb-12">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;