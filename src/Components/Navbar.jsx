import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuActive, setMenuActive] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="nav d-flex justify-content-center align-items-center">
        <ul className="d-flex justify-content-center align-items-center gap-5 fs-5">
          <Link
            id="nav-item"
            to="/"
            className={`d-flex flex-lg-row gap-2 flex-sm-column align-items-center text-decoration-none ${currentPath === '/' ? 'text-black' : ''}`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link
            id="nav-item"
            to="/about"
            className={`d-flex flex-lg-row gap-2 flex-sm-column align-items-center text-decoration-none ${currentPath === '/about' ? 'text-black' : ''}`}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </Link>
          <Link
            id="nav-item"
            to="/projects"
            className={`d-flex flex-lg-row gap-2 flex-sm-column align-items-center text-decoration-none ${currentPath === '/projects' ? 'text-black' : ''}`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Projects</span>
          </Link>
          <Link
            id="nav-item"
            to="/contact"
            className={`d-flex flex-lg-row gap-2 flex-sm-column align-items-center text-decoration-none ${currentPath === '/contact' ? 'text-black' : ''}`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </Link>
        </ul>

        <div className={`hamburger ${menuActive ? 'hamburger-active' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>

        </div>
      </nav>

      {/* Menubar for mobile view */}
      <div className={`menubar ${menuActive ? 'active' : ''}`}>
        <ul>
          <Link
            id="nav-item"
            to="/"
            className={`d-flex gap-2 flex-column align-items-center text-decoration-none ${currentPath === '/' ? 'text-black' : ''}`}
            onClick={toggleMenu}  // Close menu on click
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            id="nav-item"
            className={`d-flex gap-2 flex-column align-items-center text-decoration-none ${currentPath === '/about' ? 'text-black' : ''}`}
            onClick={toggleMenu}  // Close menu on click
          >
            <span>About Me</span>
          </Link>
          <Link
            to="/projects"
            id="nav-item"
            className={`d-flex gap-2 flex-column align-items-center text-decoration-none ${currentPath === '/projects' ? 'text-black' : ''}`}
            onClick={toggleMenu}  // Close menu on click
          >
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            id="nav-item"
            className={`d-flex gap-2 flex-column align-items-center text-decoration-none ${currentPath === '/contact' ? 'text-black' : ''}`}
            onClick={toggleMenu}  // Close menu on click
          >
            <span>Contact</span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
