import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/react-todo/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/react-todo/about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: '#ff4500', width: '20px', height: '20px' }}
          />
        ) : (
          <FiMenu style={{ color: '#ff4500', width: '20px', height: '20px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
