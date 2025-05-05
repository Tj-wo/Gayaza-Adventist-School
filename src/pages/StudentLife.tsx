import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Book, Users, Heart, Music, Trophy, Globe } from 'lucide-react';

const StudentLife: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Student Life</h1>
          <p className="text-xl max-w-2xl">
            Experience a vibrant community where academic excellence meets spiritual growth and personal development.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                title="Life at Gayaza Adventist"
                subtitle="Discover the unique experience of being part of our school community"
              />
              <p className="text-gray-600 mb-6">
                At Gayaza Adventist Secondary School, student life is rich with opportunities for growth, learning, and fellowship. Our diverse community creates an environment where students can develop their talents, build lasting friendships, and prepare for their future while growing in their faith.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Book size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Academic Life</h3>
                  </div>
                  <p className="text-sm text-gray-600">Engaging classes and study programs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Social Life</h3>
                  </div>
                  <p className="text-sm text-gray-600">Strong community and friendships</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Heart size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Spiritual Life</h3>
                  </div>
                  <p className="text-sm text-gray-600">Faith-based activities and worship</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Trophy size={20} className="text-primary mr-2" />
                    <h3 className="font-semibold">Extra-Curricular</h3>
                  </div>
                  <p className="text-sm text-gray-600">Sports, clubs, and activities</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students on campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs and Activities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Clubs & Activities"
            subtitle="Explore your interests and develop new skills"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Academic Clubs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Book size={18} className="text-primary mr-2" />
                  Science Club
                </li>
                <li className="flex items-center">
                  <Globe size={18} className="text-primary mr-2" />
                  Debate Society
                </li>
                <li className="flex items-center">
                  <Book size={18} className="text-primary mr-2" />
                  Mathematics Club
                </li>
                <li className="flex items-center">
                  <Globe size={18} className="text-primary mr-2" />
                  Literature Club
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Arts & Culture</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Music size={18} className="text-primary mr-2" />
                  School Choir
                </li>
                <li className="flex items-center">
                  <Music size={18} className="text-primary mr-2" />
                  Drama Club
                </li>
                <li className="flex items-center">
                  <Music size={18} className="text-primary mr-2" />
                  Art Club
                </li>
                <li className="flex items-center">
                  <Music size={18} className="text-primary mr-2" />
                  Cultural Dance
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sports</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Trophy size={18} className="text-primary mr-2" />
                  Football Team
                </li>
                <li className="flex items-center">
                  <Trophy size={18} className="text-primary mr-2" />
                  Basketball Team
                </li>
                <li className="flex items-center">
                  <Trophy size={18} className="text-primary mr-2" />
                  Athletics
                </li>
                <li className="flex items-center">
                  <Trophy size={18} className="text-primary mr-2" />
                  Volleyball Team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Life */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Spiritual Life"
            subtitle="Growing in faith and character"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Chapel service"
                className="rounded-lg shadow-xl mb-6 lg:mb-0"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Worship Services</h3>
                  <p className="text-gray-600">
                    Regular chapel services, morning devotions, and Sabbath worship provide opportunities for spiritual growth and fellowship.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bible Study Groups</h3>
                  <p className="text-gray-600">
                    Small group Bible studies allow students to deepen their understanding of Scripture and build meaningful relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Service</h3>
                  <p className="text-gray-600">
                    Regular outreach activities help students develop a heart for service and make a positive impact in the community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Spiritual Counseling</h3>
                  <p className="text-gray-600">
                    Our chaplain and spiritual mentors are available to provide guidance and support for students' spiritual journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Student Leadership"
            subtitle="Developing tomorrow's leaders today"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Student Council</h3>
              <p className="text-gray-600 mb-4">
                Elected student representatives who work with administration to address student needs and organize school events.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Voice student concerns</li>
                <li>• Organize school events</li>
                <li>• Promote school spirit</li>
                <li>• Lead by example</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Class Leadership</h3>
              <p className="text-gray-600 mb-4">
                Each class has its own leadership structure to manage class affairs and organize activities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Class representatives</li>
                <li>• Academic coordinators</li>
                <li>• Sports captains</li>
                <li>• Social coordinators</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Prefect Body</h3>
              <p className="text-gray-600 mb-4">
                Selected students who help maintain order and discipline while serving as role models.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Head prefects</li>
                <li>• Dormitory prefects</li>
                <li>• Library prefects</li>
                <li>• Dining hall prefects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Join Our Vibrant Community</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            Experience the unique blend of academic excellence, spiritual growth, and personal development at Gayaza Adventist Secondary School.
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

export default StudentLife;