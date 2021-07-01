import React from 'react';
import PropTypes from 'prop-types';

import './newconversation.scss';

const Newconversation = ({
  isOpen,
  onSubmitConversation,
  onNewConversationToggle,
  nameConseiller,
  onChangeNameConseiller,
}) => (
  <div
    className={isOpen ? 'newconversation newconversation--open' : 'newconversation'}
  >
    {!isOpen
    && (
    <button
      className="newconversation__toggle"
      onClick={onNewConversationToggle}
      type="button"
    >
      Créer une conversation
    </button>
    )}
    {isOpen
    && (
    <form
      className="newconversation__form"
      onSubmit={onSubmitConversation}
    >
      <input
        className="newconversation__input"
        value={nameConseiller}
        onChange={onChangeNameConseiller}
        type="text"
        placeholder="nom du conseiller"
      />
      <button
        className="newconversation__submit"
        type="submit"
      >
        Créer la conversation
      </button>
    </form>
    )}
  </div>
);

Newconversation.propTypes = {
  nameConseiller: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onChangeNameConseiller: PropTypes.func.isRequired,
  onSubmitConversation: PropTypes.func.isRequired,
  onNewConversationToggle: PropTypes.func.isRequired,
};

export default Newconversation;
