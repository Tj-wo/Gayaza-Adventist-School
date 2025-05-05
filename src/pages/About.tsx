import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import StaffCard from '../components/StaffCard';
import { staff } from '../data/slides';
import { BookOpen, GraduationCap, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Learn about our rich history, mission, values, and the dedicated team that makes
            Gayaza Adventist Secondary School a center of excellence.
          </p>
        </div>
      </div>

      {/* History & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row">
            {/* Tabs */}
            <div className="lg:w-1/4 mb-6 lg:mb-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4 font-heading">About Our School</h3>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === 'history'
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Our History
                  </button>
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === 'mission'
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Mission & Vision
                  </button>
                  <button
                    onClick={() => setActiveTab('values')}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === 'values'
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Our Values
                  </button>
                  <button
                    onClick={() => setActiveTab('campus')}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === 'campus'
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Campus & Facilities
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tab Contents */}
            <div className="lg:w-3/4 lg:pl-10">
              {activeTab === 'history' && (
                <div className="fade-in">
                  <SectionTitle
                    title="Our History"
                    subtitle="Founded on principles of excellence and faith-based education."
                  />
                  <div className="mb-6">
                    <img
                      src="https://images.pexels.com/photos/8422378/pexels-photo-8422378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Historical photo of the school"
                      className="w-full h-auto rounded-lg shadow-md mb-8"
                    />
                    <p className="text-gray-700 mb-4">
                      Gayaza Adventist Secondary School was established in 1985 by the Seventh-day Adventist Church to provide quality education rooted in Christian values. What began as a small institution with just three classrooms and 45 students has grown into one of the most respected educational institutions in Uganda.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The school's journey began when church leaders recognized the need for an educational institution that would not only offer academic excellence but also nurture the spiritual growth of students. The first principal, Professor James Muwanga, established a strong foundation based on academic rigor and spiritual development.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Through the years, the school has expanded its facilities, enhanced its academic programs, and built a reputation for producing well-rounded graduates who excel in various fields. Despite its growth, the school has remained committed to its founding principles of providing an education that balances intellectual, physical, and spiritual development.
                    </p>
                    <p className="text-gray-700">
                      Today, Gayaza Adventist Secondary School stands as a testament to the vision of its founders, continuing to shape the lives of young people by providing an education that prepares them not only for career success but also for a life of service and purpose.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold font-heading mb-3">Key Milestones</h3>
                    <ul className="space-y-3">
                      <li className="flex">
                        <span className="font-semibold mr-2">1985:</span>
                        <span>Establishment of Gayaza Adventist Secondary School with three classrooms</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">1990:</span>
                        <span>Construction of the main administrative building and additional classrooms</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">1995:</span>
                        <span>Introduction of science laboratories and library facilities</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">2000:</span>
                        <span>Expansion of boarding facilities to accommodate more students</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">2010:</span>
                        <span>Modernization of facilities including computer labs and multimedia centers</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">2015:</span>
                        <span>Celebration of 30 years of educational excellence</span>
                      </li>
                      <li className="flex">
                        <span className="font-semibold mr-2">2020:</span>
                        <span>Introduction of advanced technology integration in teaching and learning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'mission' && (
                <div className="fade-in">
                  <SectionTitle
                    title="Mission & Vision"
                    subtitle="Guiding principles that define our purpose and aspirations."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-primary">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <Target size={24} className="text-primary mr-2" />
                        Our Mission
                      </h3>
                      <p className="text-gray-700">
                        To provide a Christ-centered education that nurtures academic excellence, spiritual growth, and service to humanity, preparing students to be responsible citizens and leaders in their communities.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-accent">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <GraduationCap size={24} className="text-accent mr-2" />
                        Our Vision
                      </h3>
                      <p className="text-gray-700">
                        To be a leading Adventist educational institution recognized for academic excellence, spiritual nurture, and the development of well-rounded individuals prepared for service in this world and throughout eternity.
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold font-heading mb-3">Our Purpose</h3>
                    <p className="text-gray-700 mb-4">
                      At Gayaza Adventist Secondary School, we believe that true education means more than pursuing a certain course of study. It involves the harmonious development of the physical, mental, and spiritual powers. We are committed to:
                    </p>
                    <ul className="space-y-3 text-gray-700 ml-6 mb-4 list-disc">
                      <li>Providing a balanced curriculum that fosters intellectual curiosity and critical thinking</li>
                      <li>Creating an environment where students can develop a personal relationship with Jesus Christ</li>
                      <li>Instilling values of integrity, responsibility, and service to others</li>
                      <li>Nurturing the unique talents and abilities of each student</li>
                      <li>Preparing students for successful careers and meaningful contributions to society</li>
                    </ul>
                    <p className="text-gray-700">
                      Our ultimate aim is to develop thinkers rather than mere reflectors of others' thoughts, individuals who are capable of making decisions based on principle rather than expediency, and who are prepared to serve God and humanity.
                    </p>
                  </div>
                  <div className="bg-primary text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold font-heading mb-3">Our Philosophy</h3>
                    <p className="mb-4">
                      We believe that each student is a unique individual of inestimable worth, created in the image of God. Education should therefore address the whole person, developing the physical, mental, spiritual, and social aspects of each student's life.
                    </p>
                    <p>
                      We recognize that parents are the primary educators in a child's life, and we seek to work in partnership with families to provide an educational environment that reinforces the values taught at home and in church.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="fade-in">
                  <SectionTitle
                    title="Our Core Values"
                    subtitle="The principles that guide our educational approach and community life."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <Heart size={24} className="text-secondary mr-2" />
                        Faith
                      </h3>
                      <p className="text-gray-700">
                        We believe in nurturing a personal relationship with God and integrating faith into all aspects of learning and life.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <BookOpen size={24} className="text-secondary mr-2" />
                        Excellence
                      </h3>
                      <p className="text-gray-700">
                        We strive for the highest standards in academic achievement and personal development, encouraging students to develop their talents to the fullest.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Integrity
                      </h3>
                      <p className="text-gray-700">
                        We promote honesty, accountability, and ethical behavior in all interactions, teaching students to uphold high moral standards.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Community
                      </h3>
                      <p className="text-gray-700">
                        We foster a supportive, inclusive environment where mutual respect, collaboration, and meaningful relationships can flourish.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Service
                      </h3>
                      <p className="text-gray-700">
                        We encourage a spirit of selfless service, preparing students to make positive contributions to their communities and society.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold font-heading mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Responsibility
                      </h3>
                      <p className="text-gray-700">
                        We teach students to take ownership of their actions, choices, and development, preparing them for the responsibilities of adult life.
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold font-heading mb-3">How We Live Our Values</h3>
                    <p className="mb-4">
                      Our core values are not just words on a page—they are principles that we integrate into every aspect of school life. From classroom instruction to extracurricular activities, from administrative policies to community service projects, these values inform our decisions and shape our culture.
                    </p>
                    <p>
                      We believe that by consistently modeling and reinforcing these values, we create an environment where students not only learn about them but internalize them, carrying these principles into their future lives and careers.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'campus' && (
                <div className="fade-in">
                  <SectionTitle
                    title="Campus & Facilities"
                    subtitle="Our modern campus provides an ideal environment for learning and growth."
                  />
                  <div className="mb-8">
                    <img
                      src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="School campus"
                      className="w-full h-auto rounded-lg shadow-md mb-6"
                    />
                    <p className="text-gray-700 mb-4">
                      Situated on 15 acres of beautifully landscaped grounds in Gayaza, our campus provides a peaceful and conducive environment for learning. The school's architecture blends traditional Ugandan design elements with modern functionality, creating spaces that are both aesthetically pleasing and practical for educational purposes.
                    </p>
                    <p className="text-gray-700">
                      Our facilities have been designed to support our commitment to providing a holistic education, with spaces dedicated to academic learning, spiritual growth, physical development, and social interaction.
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-heading mb-4">Our Facilities Include:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold font-heading mb-2">Academic Facilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Modern classrooms with multimedia capabilities
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Fully equipped science laboratories
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Computer labs with high-speed internet
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Library with extensive resource collection
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold font-heading mb-2">Spiritual Facilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Chapel for worship services and assemblies
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Prayer rooms for personal reflection
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Chaplain's office for spiritual guidance
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold font-heading mb-2">Recreational Facilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Sports fields for football, volleyball, and track
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Basketball and tennis courts
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Fitness center and gymnasium
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Recreational areas and gardens
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold font-heading mb-2">Residential Facilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Comfortable dormitories for boarding students
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Dining hall serving nutritious meals
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Student common rooms and study areas
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold font-heading mb-3">Campus Safety & Security</h3>
                    <p className="mb-4">
                      The safety and security of our students is a top priority. Our campus is equipped with:
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>24-hour security personnel</li>
                      <li>Controlled access points</li>
                      <li>CCTV monitoring systems</li>
                      <li>Well-lit pathways and buildings</li>
                      <li>Regular safety drills and protocols</li>
                      <li>On-site health clinic with qualified staff</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the dedicated professionals who guide our institution."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <StaffCard 
                key={index}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                bio={member.bio}
                email={member.email}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn-outline inline-flex items-center">
              View All Staff
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Community Says" 
            subtitle="Hear from our students, parents, alumni, and staff about their experiences."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "Gayaza Adventist Secondary School provided me with an exceptional education that prepared me not only academically but also spiritually and socially. The teachers genuinely care about their students and go the extra mile to ensure their success."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/8059129/pexels-photo-8059129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Student portrait" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Nakigozi</h4>
                  <p className="text-sm text-gray-600">Alumni, Class of 2020</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "As a parent, I've been impressed with the values and discipline instilled in my children at Gayaza Adventist. The school creates a nurturing environment where students are encouraged to excel not just academically but in character development as well."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/8942905/pexels-photo-8942905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Parent portrait" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Mr. Daniel Kato</h4>
                  <p className="text-sm text-gray-600">Parent of two students</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "Teaching at Gayaza Adventist has been a fulfilling experience. The administration supports professional development, and there's a strong sense of community among staff. I love being able to integrate faith into my teaching and make a lasting impact."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/8363737/pexels-photo-8363737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Teacher portrait" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Ms. Grace Namuganza</h4>
                  <p className="text-sm text-gray-600">Mathematics Teacher, 8 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Join Our School Community</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Interested in learning more about Gayaza Adventist Secondary School? We invite you to visit our campus and see firsthand what makes our school special.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/admissions" className="btn-primary bg-white text-primary hover:bg-accent hover:text-primary">
              Apply for Admission
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;