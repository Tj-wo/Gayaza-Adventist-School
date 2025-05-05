import React from 'react';
import HeroSlider from '../components/HeroSlider';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';
import { homeSlides, events, news } from '../data/slides';
import { GraduationCap, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider slides={homeSlides} />
      
      {/* Welcome Section */}
      <section id="learn-more" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Welcome to Gayaza Adventist Secondary School" 
                subtitle="A premier Seventh-day Adventist institution dedicated to developing well-rounded students through excellence in academics, character, and service."
              />
              <p className="text-gray-600 mb-6">
                Founded in 1985, Gayaza Adventist Secondary School provides a Christ-centered education that balances academic rigor with spiritual growth and character development. Our dedicated faculty and staff are committed to creating a nurturing environment where students can thrive intellectually, physically, socially, and spiritually.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Academic Excellence</h3>
                    <p className="text-gray-600 text-sm">Comprehensive curriculum focused on developing critical thinking skills.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Christian Values</h3>
                    <p className="text-gray-600 text-sm">Education rooted in Adventist principles and biblical teachings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Holistic Development</h3>
                    <p className="text-gray-600 text-sm">Programs that nurture the mental, physical, and spiritual needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Supportive Community</h3>
                    <p className="text-gray-600 text-sm">A caring environment where students feel valued and supported.</p>
                  </div>
                </div>
              </div>
              <a href="/about" className="btn-primary inline-flex items-center">
                Learn More About Us
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8471751/pexels-photo-8471751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Students in classroom" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-primary">35+</span>
                    <span className="text-sm text-gray-600">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-white">Students Enrolled</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">40+</div>
              <p className="text-white">Qualified Teachers</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-white">University Acceptance</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <p className="text-white">Student Clubs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Stay updated with the latest happenings and activities at our school."
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
          <div className="text-center mt-10">
            <a href="/news" className="btn-outline inline-flex items-center">
              View All Events
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="School campus" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent rounded-lg hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-primary rounded-lg hidden md:block"></div>
              </div>
            </div>
            <div>
              <SectionTitle 
                title="Why Choose Gayaza Adventist School?" 
                subtitle="We offer a unique educational experience that sets us apart from other institutions."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-accent text-primary p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Faith-Based Environment</h3>
                    <p className="text-gray-600">Education rooted in Seventh-day Adventist values, fostering spiritual growth alongside academic excellence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent text-primary p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Strong Academic Program</h3>
                    <p className="text-gray-600">Rigorous curriculum designed to challenge students and prepare them for higher education and career success.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent text-primary p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Dedicated Faculty</h3>
                    <p className="text-gray-600">Experienced teachers committed to mentoring students and providing personalized attention.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent text-primary p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Balanced Education</h3>
                    <p className="text-gray-600">Focus on developing the whole person - intellectually, physically, socially, and spiritually.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent text-primary p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Safe and Supportive Environment</h3>
                    <p className="text-gray-600">A nurturing community where students feel secure, valued, and encouraged to reach their full potential.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/admissions" className="btn-primary inline-flex items-center">
                  Apply Now
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Latest News" 
            subtitle="Stay informed about recent developments and achievements at our school."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div className="text-center mt-10">
            <a href="/news" className="btn-outline inline-flex items-center">
              View All News
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Join Our School Community?</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Take the first step towards a transformative educational experience at Gayaza Adventist Secondary School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/admissions" className="btn-primary bg-white text-primary hover:bg-accent hover:text-primary">
              Apply for Admission
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;