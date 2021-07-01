import { connect } from 'react-redux';
import Historique from 'src/components/Historique';
import { getMessagesByConversation } from 'src/store/actions';



const mapStateToProps = (state) => ({
  conversations: state.conversations.filter(((conversation) => conversation.archived === true)),
  messagesArchives: state.messages,
  isActive: state.isActive,
  displayHistoryMessages: state.displayHistoryMessages,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessagesByConversation: (event) => {
    const idConversation = event.target.id;
    dispatch(getMessagesByConversation(idConversation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Historique);
