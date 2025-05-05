import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Lock, User } from 'lucide-react';

const Portal: React.FC = () => {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Student Portal</h1>
          <p className="text-xl max-w-2xl">
            Access your academic information, resources, and school services.
          </p>
        </div>
      </div>

      {/* Login Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* User Type Toggle */}
            <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
              <button
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  isStudent
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsStudent(true)}
              >
                Student Login
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                  !isStudent
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setIsStudent(false)}
              >
                Parent Login
              </button>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    className="input-field pl-10"
                    placeholder={isStudent ? "Student ID" : "Parent ID"}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="input-field pl-10"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full btn-primary">
                Sign In
              </button>
            </form>

            {/* Help Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Need Help?</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-primary">How to activate your account</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">Portal user guide</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary">Contact technical support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Portal Features"
            subtitle="Access these services through your portal account"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Academic Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• View grades and progress reports</li>
                <li>• Access course materials</li>
                <li>• Check class schedules</li>
                <li>• Download study resources</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Communication</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Message teachers</li>
                <li>• View announcements</li>
                <li>• Access school calendar</li>
                <li>• Receive notifications</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Administrative</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Update personal information</li>
                <li>• View attendance records</li>
                <li>• Access fee statements</li>
                <li>• Submit forms and requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;