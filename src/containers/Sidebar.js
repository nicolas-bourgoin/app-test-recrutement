import { connect } from 'react-redux';
import Sidebar from 'src/components/SideBar';
import { getMessagesByConversationOpen } from 'src/store/actions';

const mapStateToProps = (state) => ({
  conversations: state.conversations.filter(((conversation) => conversation.archived === false)),
});

const mapDispatchToProps = (dispatch) => ({
  openMessagerie: (event) => {
    const idConversation = event.target.id;
    dispatch(getMessagesByConversationOpen(idConversation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
