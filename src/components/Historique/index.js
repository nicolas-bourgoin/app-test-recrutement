import React from 'react';
import PropTypes from 'prop-types';

import './historique.scss';

const Historique = ({
  conversations, loadMessagesByConversation, messagesArchives, isActive, displayHistoryMessages
}) => (
  <div className="historique">
    <ul className="historique_conversations">
      <h2>Historique des conversations</h2>
      {conversations.map((conversation) => (
        <li className={isActive ? 'is_active' : ''} id={conversation.id} onClick={loadMessagesByConversation} key={conversation.id}>
          Conversation de {conversation.name}
        </li>
      ))}
    </ul>
    {displayHistoryMessages
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
  loadMessagesByConversation: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  displayHistoryMessages: PropTypes.bool.isRequired,
  messagesArchives: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      conversationId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Historique;
