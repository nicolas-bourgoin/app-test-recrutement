import { connect } from 'react-redux';
import Sidebar from 'src/components/SideBar';
import { getMessagesByConversationOpen, getConversations} from 'src/store/actions';

const mapStateToProps = (state) => ({
  conversations: state.conversations.filter(((conversation) => conversation.archived === false)),
});

const mapDispatchToProps = (dispatch) => ({
  openMessagerie: (event) => {
    const idConversation = event.target.id;
    const nameConseiller = event.target.getAttribute('data-conseiller');
    dispatch(getMessagesByConversationOpen(idConversation, nameConseiller));
  },
  loadConversations: () => {
    dispatch(getConversations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
