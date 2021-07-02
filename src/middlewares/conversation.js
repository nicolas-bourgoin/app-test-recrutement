import axios from 'axios';
import {
  GET_CONVERSATIONS,
  GET_MESSAGES,
  getConversationsSuccess,
  getAllMessagesSuccess,
  GET_MESSAGES_BY_CONVERSATION,
  getMessagesSuccess,
  POST_NEW_CONVERSATION,
  postConversationSuccess,
  SEND_MESSAGE,
  postMessageSuccess,
  ARCHIVE_CONVERSATION,
  patchConversationSuccess,
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
    case GET_MESSAGES: {
      // traitement de la requete get pour obtenir tous les messages
      axios.get('http://localhost:3000/messages')
        .then((response) => {
          store.dispatch(getAllMessagesSuccess(response.data));
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
          console.log(response.data);
          store.dispatch(getMessagesSuccess(response.data, idConversation));
        })
        .catch((error) => console.log('error', error));

      next(action);
      break;
    }
    case POST_NEW_CONVERSATION: {
      // traitement de la requete post pour créer une nouvelle conversation
      const state = store.getState();
      const postConversationRequest = {
        method: 'post',
        url: 'http://localhost:3000/conversations',
        data: {
          name: state.inputNameConseiller,
        },
      };
      axios(postConversationRequest)
        .then((response) => {
          store.dispatch(postConversationSuccess(response.data));
        })
        .catch((error) => console.log('error', error));

      next(action);
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();
      const idConversation = state.conversationIdActive;
      const postMessageRequest = {
        method: 'post',
        url: `http://localhost:3000/conversations/${idConversation}/messages`,
        data: {
          content: state.inputValue,
        },
      };
      axios(postMessageRequest)
        .then((response) => {
          console.log(response.data);
          store.dispatch(postMessageSuccess(response.data));
        })
        .catch((error) => console.log('error', error));

      next(action);
      break;
    }
    case ARCHIVE_CONVERSATION: {
      const state = store.getState();
      const idConversation = state.conversationIdActive;
      const putMessageRequest = {
        method: 'patch',
        url: `http://localhost:3000/conversations/${idConversation}`,
        data: {
          archived: true,
        },
      };
      axios(putMessageRequest)
        .then((response) => {
          console.log(response.data);
          store.dispatch(patchConversationSuccess(response.data));
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
