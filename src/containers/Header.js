import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { changeStateConversations, changeStateMessages } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  changeStateConversations: () => {
    dispatch(changeStateConversations());
  },
  changeStateMessages: () => {
    dispatch(changeStateMessages());
  },
});

export default connect(null, mapDispatchToProps)(Header);
