import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav className="menu">
      <NavLink
        activeClassName="menu-link--active"
        className="menu-link"
        exact
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        activeClassName="menu-link--active"
        className="menu-link"
        exact
        to="/conversations"
      >
        Conversations
      </NavLink>
    </nav>
  </header>
);



export default Header;
