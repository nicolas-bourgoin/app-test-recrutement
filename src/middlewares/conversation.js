import axios from 'axios';
import {
  GET_CONVERSATIONS, getConversationsSuccess, GET_MESSAGES_BY_CONVERSATION, getMessagesSuccess,
} from 'src/store/actions';

const conversation = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CONVERSATIONS: {
      // traitement de la requete get pour obtenir toutes les conversations
      axios.get('http://localhost:3000/conversations')
        .then((response) => {
          store.dispatch(getConversationsSuccess(response.data));
        })
        .catch((error) => console.log('error', error));

      next(action);
      break;
    }
    case GET_MESSAGES_BY_CONVERSATION: {
      // traitement de la requete get pour obtenir toutes les messages d'une conversation
      const { idConversation } = action;
      axios.get(`http://localhost:3000/conversations/${idConversation}/messages`)
        .then((response) => {
          store.dispatch(getMessagesSuccess(response.data));
        })
        .catch((error) => console.log('error', error));

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default conversation;
