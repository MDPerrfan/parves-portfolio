import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBolt, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuActive && !e.target.closest('.menubar') && !e.target.closest('.hamburger')) {
      setMenuActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuActive]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuActive(false);
    }
  };

  const navLinks = [
    { id: 'home', icon: faHome, text: 'Home' },
    { id: 'about', icon: faUser, text: 'About Me' },
    { id: 'projects', icon: faBolt, text: 'Projects' },
    { id: 'skills', icon: faCubesStacked, text: 'Skills' },
    { id: 'contact', icon: faEnvelope, text: 'Contact' }
  ];

  return (
    <>
      <nav className="nav d-flex justify-content-center align-items-center">
        <ul className="d-flex justify-content-center align-items-center gap-5 fs-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id="nav-item"
              onClick={() => scrollToSection(link.id)}
              className="d-flex flex-lg-row gap-2 flex-sm-column align-items-center text-decoration-none border-0 bg-transparent"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.text}</span>
            </button>
          ))}
        </ul>

        <div 
          className={`hamburger ${menuActive ? 'hamburger-active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      {/* Menubar for mobile view */}
      <div className={`menubar ${menuActive ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="d-flex gap-2 flex-column align-items-center text-decoration-none border-0 bg-transparent w-100"
            >
              <span>{link.text}</span>
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;