import {
  CHANGE_TEXT_INPUT,
  ADD_MESSAGE,
  SEND_MESSAGE,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_MESSAGES_SUCCESS,
  POST_CONVERSATION_SUCCESS,
  TOGGLE_CONVERSATION,
  CHANGE_NAME_CONSEILLER,
} from 'src/store/actions';

import dateTime from 'src/selectors/dateTime';

const initialState = {
  loading: false,
  inputValue: '',
  inputNameConseiller: '',
  conversations: [],
  messages: [],
  isActive: false,
  isOpenNewConversation: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversations: action.conversations,
        loading: false,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages,
        isActive: true,
      };
    case POST_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversations: action.conversations,
      };
    case TOGGLE_CONVERSATION:
      return {
        ...state,
        isOpenNewConversation: !state.isOpenNewConversation,
      };
    case CHANGE_TEXT_INPUT:
      return {
        ...state,
        inputValue: action.newValue,
      };
    case CHANGE_NAME_CONSEILLER:
      return {
        ...state,
        inputNameConseiller: action.newValue,
      };
    // j'envoie un message dans le websocket
    case SEND_MESSAGE:
      return {
        ...state,
        inputValue: '',
      };
    // je recois un message
    case ADD_MESSAGE:
      // je renvoie un nouveau state
      return {
        ...state,
        messages: [ // pour les messages, on recrée un nouveau tableau
          // on recopie l'ancien tableau de messages
          ...state.messages,
          // on ajoute, a la fin du tableau, le nouveau message
          // pas besoin de le faire transiter dans l'action :
          // on l'a déja dans le state !
          // je construis un nouvel objet qui contient
          // le message que j'ajoute
          {
            id: action.message.id,
            author: action.message.author,
            content: action.message.content,
            createdAt: dateTime(),
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
