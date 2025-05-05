import React from 'react';
import { Link } from 'react-router-dom';
import { School, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <School size={32} className="text-accent" />
              <div className="text-xl font-heading font-bold">
                <span>Gayaza</span>
                <span className="text-accent ml-1">Adventist</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Nurturing academic excellence with Christian values since 1985. Developing the whole person - mentally, physically, and spiritually.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-accent transition-colors duration-200">Academics</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-accent transition-colors duration-200">Admissions</Link>
              </li>
              <li>
                <Link to="/student-life" className="text-gray-300 hover:text-accent transition-colors duration-200">Student Life</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-accent transition-colors duration-200">News & Events</Link>
              </li>
              <li>
                <Link to="/portal" className="text-gray-300 hover:text-accent transition-colors duration-200">Student Portal</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span className="text-gray-300">P.O. Box 25133, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-gray-300">+256 414 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-gray-300">info@gayazaadventist.edu</span>
              </li>
            </ul>
          </div>
          
          {/* School Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">School Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Monday - Friday:</span> 8:00 AM - 4:30 PM
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Saturday:</span> Closed (Sabbath)
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Sunday:</span> Closed
              </li>
              <li className="text-gray-300 mt-4">
                <span className="font-medium">Admin Office:</span> 8:00 AM - 5:00 PM (Weekdays)
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Gayaza Adventist Secondary School. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Use</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors duration-200">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;