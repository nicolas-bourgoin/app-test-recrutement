import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { changeTextInput, sendMessage } from 'src/store/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeTextInput(event.target.value));
  },
  onMessageSubmit: (event) => {
    event.preventDefault();
    console.log('envoi message');
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
