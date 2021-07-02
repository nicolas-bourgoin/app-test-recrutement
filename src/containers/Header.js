import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { changeStateConversations } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  changeStateConversations: () => {
    dispatch(changeStateConversations());
  },
});

export default connect(null, mapDispatchToProps)(Header);
