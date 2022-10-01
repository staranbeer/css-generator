import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

const navLinks = [
  { name: 'Button', link: '/editor/button' },
  { name: 'Paragraph', link: '/editor/para' },
  { name: 'Input', link: '/editor/input' },
];
function Header() {
  return (
    <header className="flex items-center px-10 py-4 border-b border-gray-300 shadow-sm">
      <div className="flex items-end gap-20">
        <div>
          <img src={logo} alt="" className="h-7" />
        </div>
        <nav>
          <ul className="flex gap-6 font-medium">
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.name}
                to={navLink.link}
                className={({ isActive }) => (isActive
                  ? ' text-blue-500 underline underline-offset-8'
                  : 'inactive')}
              >
                {navLink.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
