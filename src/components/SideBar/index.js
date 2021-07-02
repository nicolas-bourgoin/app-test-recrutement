import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';

const SideBar = ({
  conversations, isActive, openMessagerie,
}) => (
  <div className="sidebar">
    <ul className="sidebar_conservations_open">
      <h2>Conversations en cours</h2>
      {conversations.map((conversation) => (
        <li
          className={isActive == conversation.id ? 'is_active' : ''}
          data-conseiller={conversation.name}
          id={conversation.id}
          onClick={openMessagerie}
          key={conversation.id}
        >
          Conversation de {conversation.name}
        </li>
      ))}
    </ul>
  </div>
);

SideBar.propTypes = {
  conversations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  openMessagerie: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SideBar;
