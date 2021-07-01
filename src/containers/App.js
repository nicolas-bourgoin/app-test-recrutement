import { connect } from 'react-redux';
import App from 'src/components/App';
import { getConversations } from 'src/store/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadConversations: () => {
    dispatch(getConversations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
