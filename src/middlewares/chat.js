import { SEND_MESSAGE, CONNECT_WEBSOCKET, addMessage } from 'src/store/actions';

const API_URL = process.env.API_URL || 'http://localhost:3002';

// on déclare le socket en global
// afin qu'il soit accessible tout le temps
let socket;

// chatMiddleware : middleware qui gérera les actions
// qui concernent le chat et les websockets
const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      // on crée un canal d'échange avec le serveur
      // et on le stocke dans notre variable socket
      socket = window.io(`${API_URL}`);

      // on se met en mode écoute
      socket.on('send_message', (message) => {
        // ICI il faudra déclencher une action REDUX
        // pour ajouter le message dans le store
        // et donc l'afficher
        store.dispatch(addMessage(message));
      });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();

      // ici on fera le socket.emit
      socket.emit('send_message', { author: state.nickname, content: state.inputValue, createdAt: state.messages.created });
      // je nexte mon action SEND_MESSAGE
      // car je veux qu'elle arrive dans le reducer
      // car je veux vider mon input lorsque j'envoie un message
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
