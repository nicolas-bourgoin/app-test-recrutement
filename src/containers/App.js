import { connect } from 'react-redux';
import App from 'src/components/App';
import { getConversations, getMessages } from 'src/store/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  displayMessages: state.displayMessages,
});

const mapDispatchToProps = (dispatch) => ({
  loadConversations: () => {
    dispatch(getConversations());
  },
  loadMessages: () => {
    dispatch(getMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
