import React, { useEffect, useRef } from 'react';
import { Send } from 'react-feather';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ inputValue, onInputChange, onMessageSubmit }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={onMessageSubmit}>
      <input
        ref={inputRef}
        className="form__input"
        placeholder="Saisissez votre message"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        required
        pattern="^(?!\s*$).+"
      />
      <button className="form__submit" type="submit">
        <Send size={32} />
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default Form;
