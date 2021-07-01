import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import NewConversation from 'src/containers/NewConversation';

import './header.scss';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
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
      {currentPath === '/conversations'
     && <NewConversation />}
    </header>
  );
};

export default Header;
