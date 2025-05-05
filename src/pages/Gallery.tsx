import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { gallery } from '../data/slides';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(cat => cat.category === selectedCategory);

  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl">
            Explore life at Gayaza Adventist Secondary School through our collection of photos and memories.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="School Life in Pictures"
            subtitle="Browse through moments captured across our campus"
            centered
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All Categories
            </button>
            {gallery.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === cat.category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredGallery.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative group overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;