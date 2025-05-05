import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { BookOpen, GraduationCap, Users, Award, Beaker, Calculator, Book, Globe } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Academics</h1>
          <p className="text-xl max-w-2xl">
            Discover our comprehensive academic programs designed to nurture intellectual growth and prepare students for success.
          </p>
        </div>
      </div>

      {/* Academic Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                title="Academic Excellence"
                subtitle="Our commitment to providing quality education that prepares students for success"
              />
              <p className="text-gray-600 mb-6">
                At Gayaza Adventist Secondary School, we believe in providing a comprehensive education that challenges students to achieve their full potential. Our academic program combines rigorous coursework with practical applications and spiritual values.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BookOpen size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Quality Teaching</h3>
                  </div>
                  <p className="text-sm text-gray-600">Experienced and dedicated faculty</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <GraduationCap size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">College Prep</h3>
                  </div>
                  <p className="text-sm text-gray-600">University readiness focus</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Small Classes</h3>
                  </div>
                  <p className="text-sm text-gray-600">Individual attention</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Recognition</h3>
                  </div>
                  <p className="text-sm text-gray-600">Academic achievements</p>
                
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8471751/pexels-photo-8471751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Curriculum"
            subtitle="Comprehensive academic programs designed for student success"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Beaker size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Sciences</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Biology</li>
                <li>• Chemistry</li>
                <li>• Physics</li>
                <li>• Agricultural Science</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calculator size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Mathematics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Pure Mathematics</li>
                <li>• Additional Mathematics</li>
                <li>• Statistics</li>
                <li>• Business Mathematics</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Book size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• English Language</li>
                <li>• English Literature</li>
                <li>• Luganda</li>
                <li>• French (Optional)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Globe size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Humanities</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• History</li>
                <li>• Geography</li>
                <li>• Religious Education</li>
                <li>• Christian Religious Education</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Business Studies</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Economics</li>
                <li>• Commerce</li>
                <li>• Accounting</li>
                <li>• Entrepreneurship</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Practical Subjects</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Studies</li>
                <li>• Fine Art</li>
                <li>• Music</li>
                <li>• Physical Education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Academic Support"
            subtitle="Resources and programs to help students succeed"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tutorial Programs</h3>
              <p className="text-gray-600 mb-4">
                Extra help sessions and peer tutoring available for students who need additional support in specific subjects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• One-on-one tutoring</li>
                <li>• Group study sessions</li>
                <li>• Peer mentoring</li>
                <li>• Homework assistance</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Learning Resources</h3>
              <p className="text-gray-600 mb-4">
                Access to comprehensive learning materials and facilities to support academic success.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern library</li>
                <li>• Computer labs</li>
                <li>• Science laboratories</li>
                <li>• Online resources</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Academic Counseling</h3>
              <p className="text-gray-600 mb-4">
                Guidance and support for academic planning and career preparation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Course selection</li>
                <li>• University preparation</li>
                <li>• Career guidance</li>
                <li>• Study skills development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Academic Calendar"
            subtitle="Important dates and schedules for the academic year"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Term Dates 2025</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">First Term</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Start: February 1, 2025</li>
                        <li>Mid-Term: March 15-23</li>
                        <li>End: April 30, 2025</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Second Term</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Start: May 15, 2025</li>
                        <li>Mid-Term: June 28 - July 6</li>
                        <li>End: August 15, 2025</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Third Term</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Start: September 1, 2025</li>
                        <li>Mid-Term: October 18-26</li>
                        <li>End: December 5, 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Examination Periods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Internal Exams</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Mid-Term Exams: Week 6 of each term</li>
                        <li>End of Term Exams: Last 2 weeks of term</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">National Exams</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>O-Level (UCE): October-November</li>
                        <li>A-Level (UACE): November-December</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Join Our Academic Community?</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Take the first step towards academic excellence and personal growth at Gayaza Adventist Secondary School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/admissions" className="btn-primary bg-white text-primary hover:bg-accent hover:text-primary">
              Apply Now
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

export default Academics;