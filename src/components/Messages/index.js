import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Message';
import './messages.scss';

const Messages = ({ msgList, conversationIdActive, archiveConversation }) => {
  const listRef = useRef(null);

  // est appelé lorsque la propriété msgList change
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgList]);

  return (
    <div
      ref={listRef}
      className="messages-list"
      id={conversationIdActive}
    >
      <div onClick={archiveConversation} className="archive_conversation">X</div>
      {msgList.map((message) => (
        <Message
          conversationId={message.conversationId}
          content={message.content}
          key={message.id}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  msgList: PropTypes.arrayOf(
    PropTypes.shape({
      conversationId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  conversationIdActive: PropTypes.number.isRequired,
  archiveConversation: PropTypes.func.isRequired,
};

export default Messages;
