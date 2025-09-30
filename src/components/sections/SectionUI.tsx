'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '../../types/directus-schema';
import { getDirectusAssetURL } from '@/lib/directus/directus-utils';

const SkeletonImage = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-2xl ${className}`}></div>
);

interface SectionRendererProps {
  section: Section;
  index: number;
}

export default function SectionRenderer({ section, index }: SectionRendererProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    console.error(`Failed to load image for section ${section.id}`);
    setImageLoading(false);
  };

  // Determine background and layout based on section type and index
  const getSectionClasses = () => {
    const baseClasses = "py-6 px-4";
    
    if (section.section_type === 'hero') {
      return baseClasses;
    }
    
    if (section.section_type === 'feature') {
      return index % 2 === 0 ? `${baseClasses} bg-gray-50` : baseClasses;
    }
    
    return baseClasses;
  };

  const getLayoutClasses = () => {
    if (section.section_type === 'hero') {
      return "flex flex-col lg:flex-row items-center gap-12";
    }
    
    if (section.section_type === 'feature') {
      return index % 2 === 0 
        ? "flex flex-col lg:flex-row items-center gap-12"
        : "flex flex-col lg:flex-row items-center gap-12";
    }
    
    return "flex flex-col lg:flex-row items-center gap-12";
  };

  const getContentClasses = () => {
    if (section.section_type === 'hero') {
      return "flex-1";
    }
    
    if (section.section_type === 'feature') {
      return index % 2 === 0 
        ? "flex-1 text-center lg:text-left"
        : "flex-1 order-1 lg:order-2";
    }
    
    return "flex-1";
  };

  const getImageClasses = () => {
    if (section.section_type === 'hero') {
      return "flex-1 flex justify-center lg:justify-end w-full";
    }
    
    if (section.section_type === 'feature') {
      return index % 2 === 0 
        ? "flex-1 flex justify-center lg:justify-end w-full"
        : "flex-1 flex justify-center lg:justify-start order-2 lg:order-1 w-full";
    }
    
    return "flex-1 flex justify-center lg:justify-end w-full";
  };

  const getTitleClasses = () => {
    if (section.section_type === 'hero') {
      return "text-5xl lg:text-6xl font-bold text-blue-600 mb-8 leading-tight";
    }
    
    return "text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight";
  };

  const getDescriptionClasses = () => {
    if (section.section_type === 'hero') {
      return "text-md text-gray-700 leading-relaxed max-w-2xl";
    }
    
    return "text-md text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0";
  };

  return (
    <div className={getSectionClasses()}>
      <div className="max-w-7xl mx-auto">
        <div className={getLayoutClasses()}>
          {/* Content */}
          <div className={getContentClasses()}>
            {section.subtitle && (
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">
                {section.subtitle}
              </p>
            )}
            
            {section.title && (
              <h1 className={getTitleClasses()}>
                {section.title.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </h1>
            )}
            
            {section.description && (
              <p className={getDescriptionClasses()}>
                {section.description}
              </p>
            )}
            
            {section.content && (
              <p className="text-sm text-gray-500 mt-4">
                {section.content}
              </p>
            )}
          </div>

          {/* Image */}
          {section.image && (
            <div className={getImageClasses()}>
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl">
                {imageLoading && (
                  <SkeletonImage className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] absolute inset-0" />
                )}
                <Image
                  src={getDirectusAssetURL(section.image)}
                  alt={`${section.section_type} - ${section.title || 'Section'}`}
                  width={600}
                  height={400}
                  unoptimized={true}
                  className={`w-full h-auto rounded-2xl transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  priority={section.section_type === 'hero'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
