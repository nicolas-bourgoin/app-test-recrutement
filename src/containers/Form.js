import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { changeTextInput, sendMessage } from 'src/store/actions';

// on importe notre selecteur
// un selecteur est une fonction pure qui prend en parametre le state
// et renvoie une donnée projetée depuis le state
import isUserLogged from 'src/selectors/isUserLogged';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  // on appelle notre selecteur en lui donnant le state a un instant T
  isLogged: isUserLogged(state),
  // équivalent de
  // isLogged: state.nickname != null,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeTextInput(event.target.value));
  },
  onMessageSubmit: (event) => {
    event.preventDefault();
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
