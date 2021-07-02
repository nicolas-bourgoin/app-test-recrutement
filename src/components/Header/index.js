import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import NewConversation from 'src/containers/NewConversation';

import './header.scss';

const Header = ({changeStateConversations}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="header">
      <nav className="menu">
        <NavLink
          activeClassName="menu-link--active"
          className="menu-link"
          exact
          onClick={changeStateConversations}
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

Header.propTypes = {
  changeStateConversations: PropTypes.func.isRequired,
};


export default Header;
