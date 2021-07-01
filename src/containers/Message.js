import { connect } from 'react-redux';

import Message from 'src/components/Message';

// nouveauté !
// ownProps est le 2eme parametre facultatif
// de mapStateToProps
// il contient les propriétés données dans le JSX
// qui ne proviennent pas de redux

const mapStateToProps = (state, ownProps) => ({
  // si state.nickname correspond a l'auteur du message
  // alors c'est un message de moi
  // je mets isMine à true
  isMine: state.nickname === ownProps.author,
 
});

export default connect(mapStateToProps)(Message);
