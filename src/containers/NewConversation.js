import { connect } from 'react-redux';

import NewConversation from 'src/components/Newconversation';

import {
  toggleConversation,
  changeNameConseiller,
  onSubmit,
  submitNewConversation
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
    console.log('change name conseiller');
    dispatch(changeNameConseiller(event.target.value));
  }
  // envoi du formulaire
  //onSubmit: (event) => {
    // on ne veut pas que la page se recharge
  //  event.preventDefault();
  //  console.log('je veux créer une nouvelle conversation');
    //dispatch(submitNewConversation());
  //},
});

export default connect(mapStateToProps, mapDispatchToProps)(NewConversation);
