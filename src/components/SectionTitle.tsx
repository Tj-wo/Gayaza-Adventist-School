import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-8 md:mb-12`}>
      <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 ${centered ? 'mx-auto' : ''} ${light ? 'bg-accent' : 'bg-accent'} mt-4`}></div>
    </div>
  );
};

export default SectionTitle;