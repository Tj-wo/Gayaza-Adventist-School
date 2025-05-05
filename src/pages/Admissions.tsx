import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, FileText, DollarSign, CalendarDays, CheckCircle, Clock } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Admissions</h1>
          <p className="text-xl max-w-2xl">
            Join our community of learners and discover the transformative power of a Christ-centered education.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                title="Welcome to Admissions"
                subtitle="We're excited that you're considering Gayaza Adventist Secondary School for your education journey."
              />
              <p className="text-gray-600 mb-6">
                Our admissions process is designed to be comprehensive yet straightforward, ensuring we find students who will thrive in our academic environment and contribute to our school community. We look for students who demonstrate:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-success mr-2" />
                  <span>Academic potential and enthusiasm for learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-success mr-2" />
                  <span>Good character and positive attitude</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-success mr-2" />
                  <span>Willingness to embrace our Christian values</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-success mr-2" />
                  <span>Interest in personal and spiritual growth</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Admission Process"
            subtitle="Follow these steps to join our school community"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">1. Submit Application</h3>
              <p className="text-gray-600 mb-4">
                Complete and submit the online application form along with all required documents.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Application form</li>
                <li>• Previous academic records</li>
                <li>• Birth certificate</li>
                <li>• Passport-size photographs</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">2. Entrance Assessment</h3>
              <p className="text-gray-600 mb-4">
                Take the entrance examination and complete an interview with our admissions team.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Mathematics assessment</li>
                <li>• English proficiency test</li>
                <li>• Personal interview</li>
                <li>• Parent meeting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-light bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">3. Acceptance & Enrollment</h3>
              <p className="text-gray-600 mb-4">
                Upon acceptance, complete the enrollment process and prepare for your academic journey.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Accept offer letter</li>
                <li>• Pay registration fees</li>
                <li>• Submit medical forms</li>
                <li>• Attend orientation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Fee Structure"
            subtitle="Investment in your child's future"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <DollarSign size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold font-heading">Tuition Fees</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Registration Fee (One-time)</span>
                  <span className="font-semibold">UGX 150,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tuition per Term (Day Scholar)</span>
                  <span className="font-semibold">UGX 850,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tuition per Term (Boarding)</span>
                  <span className="font-semibold">UGX 1,500,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Development Fee (Annual)</span>
                  <span className="font-semibold">UGX 200,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold font-heading">Payment Schedule</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">First Term</span>
                  <span className="font-semibold">February 1st</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Second Term</span>
                  <span className="font-semibold">May 15th</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Third Term</span>
                  <span className="font-semibold">September 1st</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Payment plans are available upon request and approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Important Dates"
            subtitle="Key dates for the upcoming academic year"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CalendarDays size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold font-heading">Term One</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Application Deadline</span>
                  <span className="font-semibold">January 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Entrance Exam</span>
                  <span className="font-semibold">January 20, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Term Begins</span>
                  <span className="font-semibold">February 1, 2025</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CalendarDays size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold font-heading">Term Two</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Application Deadline</span>
                  <span className="font-semibold">April 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Entrance Exam</span>
                  <span className="font-semibold">May 5, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Term Begins</span>
                  <span className="font-semibold">May 15, 2025</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CalendarDays size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold font-heading">Term Three</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Application Deadline</span>
                  <span className="font-semibold">August 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Entrance Exam</span>
                  <span className="font-semibold">August 20, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Term Begins</span>
                  <span className="font-semibold">September 1, 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Begin Your Journey With Us</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Take the first step towards a transformative education experience at Gayaza Adventist Secondary School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="btn-primary bg-white text-primary hover:bg-accent hover:text-primary">
              Download Application Form
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Contact Admissions Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;