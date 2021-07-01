import {
  // une fonction pour créer le store
  createStore,
  // une fonction pour brancher un middleware
  applyMiddleware,
} from 'redux';

// une fonction pour gérer les devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import conversationMiddleware from 'src/middlewares/conversation';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(conversationMiddleware),
  ),
);

export default store;
