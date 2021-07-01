import React from 'react';
import PropTypes from 'prop-types';

import './historique.scss';

const Historique = ({
  conversations, loadMessages, messagesArchives, isActive,
}) => (
  <div className="historique">
    <ul className="historique_conversations">
      <h2>Historique des conversations</h2>
      {conversations.map((conversation) => (
        <li className={isActive ? 'is_active' : ''} id={conversation.id} onClick={loadMessages} key={conversation.id}>
          {conversation.name}
        </li>
      ))}
    </ul>
    {messagesArchives.length > 0
    && (
    <div className="historique_messages">
      {messagesArchives.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </div>
    )}
  </div>
);

Historique.propTypes = {
  conversations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loadMessages: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  messagesArchives: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      conversationId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Historique;
