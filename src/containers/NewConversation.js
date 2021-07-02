import { connect } from 'react-redux';

import NewConversation from 'src/components/Newconversation';

import {
  toggleConversation,
  changeNameConseiller,
  newConversation,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpenNewConversation,
});

const mapDispatchToProps = (dispatch) => ({
  // afficher ou masquer le formulaire
  onNewConversationToggle: () => {
    dispatch(toggleConversation());
  },
  onChangeNameConseiller: (event) => {
    dispatch(changeNameConseiller(event.target.value));
  },
  onSubmitConversation: (event) => {
    event.preventDefault();
    dispatch(newConversation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewConversation);
