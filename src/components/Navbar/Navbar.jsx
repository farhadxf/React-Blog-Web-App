import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

import { Link, NavLink } from 'react-router-dom';
const Navbar = ({ theme, toggleTheme }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update body overflow when isMobile changes, preventing scrolling
  useEffect(() => {
    document.body.style.overflow = isMobile ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='/assets/icons/blog-web.PNG' alt='Logo' />
        </Link>
      </div>

      <div className='nav-menu-bar'>
        <nav>
          <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
            <li>
              <NavLink className='nav-link' to={'/'} onClick={() => setIsMobile(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to={'/tech'} onClick={() => setIsMobile(false)}>
                Tech
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to={'/space'} onClick={() => setIsMobile(false)}>
                Space
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to={'/beyond'} onClick={() => setIsMobile(false)}>
                Beyond
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to={'/about'} onClick={() => setIsMobile(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to={'/contact'} onClick={() => setIsMobile(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <span className='material-symbols-outlined'>close</span>
          ) : (
            <span className='material-symbols-outlined'>menu</span>
          )}
        </button>
      </div>
      {/* theme */}
      <div className='toggle-theme' onClick={toggleTheme}>
        <button className='material-symbols-outlined'>{theme === 'light' ? 'light_mode' : 'dark_mode'}</button>
      </div>
    </div>
  );
};

// Prop validation
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
