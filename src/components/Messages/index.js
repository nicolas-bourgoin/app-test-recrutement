import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Connected from 'src/containers/Message';
import './messages.scss';

const Messages = ({ msgList }) => {
  const listRef = useRef(null);

  // effet appelé lorsque la propriété msgList change
  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgList]); // tableau de dépendances

  return (
    <div
      ref={listRef}
      className="messages-list"
    >
      {msgList.map((message) => (
        <Connected
          author={message.author}
          content={message.content}
          createdAt={message.createdAt}
          key={message.content + message.author}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  msgList: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
