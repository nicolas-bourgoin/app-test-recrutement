import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({
  conversationId, content,
}) => (
  <div className="messages">
    <div className="message__author">{conversationId}</div>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  conversationId: PropTypes.number.isRequired,
};

export default Message;
