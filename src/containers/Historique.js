import { connect } from 'react-redux';
import Historique from 'src/components/Historique';
import { getMessagesByConversation } from 'src/store/actions';

const mapStateToProps = (state) => ({
  conversations: state.conversations,
  messagesArchives: state.messages,
  isActive: state.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: (event) => {
    const idConversation = event.target.id;
    dispatch(getMessagesByConversation(idConversation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Historique);
