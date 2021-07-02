import { connect } from 'react-redux';
import { getArchiveConversation } from 'src/store/actions';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  msgList: state.messages.filter(((message) => message.conversationId == state.conversationIdActive)),
  conversationIdActive: state.conversationIdActive,
  conversationConseillerActif: state.conversationConseillerAtif,
});

const mapDispatchToProps = (dispatch) => ({
  archiveConversation: () => {
    dispatch(getArchiveConversation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps )(Messages);
