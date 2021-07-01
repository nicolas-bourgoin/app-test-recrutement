import { connect } from 'react-redux';
import { getAarchiveConversation } from 'src/store/actions';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  msgList: state.messages.filter(((message) => message.conversationId === state.conversationIdActive)),
  conversationIdActive: state.conversationIdActive,
});

const mapDispatchToProps = (dispatch) => ({
  archiveConversation: () => {
    dispatch(getAarchiveConversation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps )(Messages);
