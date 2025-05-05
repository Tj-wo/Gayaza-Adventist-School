import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { School, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Student Life', path: '/student-life' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News & Events', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(null);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <School 
              size={36} 
              className={`${isScrolled ? 'text-primary' : 'text-white'} drop-shadow-md`} 
            />
            <div className={`${isScrolled ? 'text-primary' : 'text-white'} font-heading font-bold text-xl md:text-2xl drop-shadow-md`}>
              <span>Gayaza</span>
              <span className="text-accent ml-1">Adventist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-accent bg-primary bg-opacity-90'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/portal"
              className="ml-2 btn-primary"
            >
              Student Portal
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white fixed top-[72px] left-0 right-0 h-screen transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom py-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md font-medium ${
                  isActive
                    ? 'text-white bg-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/portal"
            className="btn-primary text-center mt-4"
            onClick={closeMenu}
          >
            Student Portal
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;