import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({
  content, conversationConseiller,
}) => (
  <div className="messages">
    <div className="message__author">{conversationConseiller}</div>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  conversationConseiller: PropTypes.string.isRequired,
};

export default Message;
