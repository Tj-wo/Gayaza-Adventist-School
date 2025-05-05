import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            We'd love to hear from you. Reach out to us with any questions about admissions, academics, or campus visits.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="We're here to answer any questions you may have about our school."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary-light bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      P.O. Box 25133, Kampala, Uganda<br />
                      Gayaza Road, 15 km from Kampala City Center
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@gayazaadventist.edu" className="text-primary hover:underline">info@gayazaadventist.edu</a><br />
                      Admissions: <a href="mailto:admissions@gayazaadventist.edu" className="text-primary hover:underline">admissions@gayazaadventist.edu</a><br />
                      Principal's Office: <a href="mailto:principal@gayazaadventist.edu" className="text-primary hover:underline">principal@gayazaadventist.edu</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      Main Office: <a href="tel:+256414123456" className="text-primary hover:underline">+256 414 123456</a><br />
                      Admissions Office: <a href="tel:+256414123457" className="text-primary hover:underline">+256 414 123457</a><br />
                      Emergency Contact: <a href="tel:+256414123458" className="text-primary hover:underline">+256 414 123458</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:30 PM<br />
                      Saturday: Closed (Sabbath)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#E4405F] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <SectionTitle
            title="Find Us"
            subtitle="Visit our campus to experience Gayaza Adventist Secondary School in person."
            centered
          />
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7570977419196!2d32.61999797468707!3d0.34999939962452214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb66a752b21f%3A0x3e2c599a034b01e1!2sGayaza%2C%20Uganda!5e0!3m2!1sen!2sus!4v1686123456789!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our school."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What are the school hours?</h3>
                <p className="text-gray-700">
                  School hours are from 8:00 AM to 4:30 PM, Monday through Friday. Administrative offices are open from 8:00 AM to 5:00 PM on weekdays.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How can I arrange a campus tour?</h3>
                <p className="text-gray-700">
                  Campus tours can be arranged by contacting our Admissions Office at admissions@gayazaadventist.edu or by calling +256 414 123457. Tours are typically conducted on Mondays, Wednesdays, and Fridays between 9:00 AM and 3:00 PM.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What are the admission requirements?</h3>
                <p className="text-gray-700">
                  Admission requirements include completed application forms, previous academic records, recommendation letters, and an entrance examination. Detailed information can be found on our Admissions page or by contacting the Admissions Office.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Is transportation available for day students?</h3>
                <p className="text-gray-700">
                  Yes, the school provides transportation services for day students from various locations in and around Kampala. Routes and schedules are available from the Administrative Office.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How can I apply for financial aid or scholarships?</h3>
                <p className="text-gray-700">
                  Information about financial aid and scholarships can be obtained from our Finance Office. Applications typically require financial documentation and are reviewed on a case-by-case basis.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What extracurricular activities are available?</h3>
                <p className="text-gray-700">
                  We offer a wide range of extracurricular activities including sports (football, basketball, volleyball, track), clubs (debate, science, music, drama), and spiritual programs. Students are encouraged to participate in activities that align with their interests.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-4">
                Don't see your question here? Feel free to contact us directly.
              </p>
              <a href="mailto:info@gayazaadventist.edu" className="btn-primary">
                Email Your Question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Join Our School?</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Take the first step towards a quality education that nurtures academic excellence and spiritual growth.
          </p>
          <a href="/admissions" className="btn-primary bg-white text-primary hover:bg-accent hover:text-primary">
            Apply for Admission
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;