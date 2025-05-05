import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import { news, events } from '../data/slides';

const News: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">News & Events</h1>
          <p className="text-xl max-w-2xl">
            Stay updated with the latest happenings at Gayaza Adventist Secondary School.
          </p>
        </div>
      </div>

      {/* Latest News Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Latest News"
            subtitle="Keep up with our school's achievements and announcements"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                excerpt={item.excerpt}
                category={item.category}
                date={item.date}
                author={item.author}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Mark your calendar for these important dates"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* School Calendar */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Academic Calendar"
            subtitle="Important dates for the academic year"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Term Dates 2025</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">First Term</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Term Begins: February 1, 2025</li>
                    <li>Mid-Term Break: March 15-23, 2025</li>
                    <li>Term Ends: April 30, 2025</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Second Term</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Term Begins: May 15, 2025</li>
                    <li>Mid-Term Break: June 28 - July 6, 2025</li>
                    <li>Term Ends: August 15, 2025</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Third Term</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Term Begins: September 1, 2025</li>
                    <li>Mid-Term Break: October 18-26, 2025</li>
                    <li>Term Ends: December 5, 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;