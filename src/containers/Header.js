import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { newConversation } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  handleConversation: () => {
    dispatch(newConversation());
  },
});

export default connect(null, mapDispatchToProps)(Header);
