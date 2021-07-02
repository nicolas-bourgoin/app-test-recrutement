import {
  CHANGE_TEXT_INPUT,
  SEND_MESSAGE,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_ALL_MESSAGES_SUCCESS,
  GET_MESSAGES_SUCCESS,
  POST_CONVERSATION_SUCCESS,
  TOGGLE_CONVERSATION,
  CHANGE_NAME_CONSEILLER,
  GET_MESSAGES_BY_CONVERSATION_OPEN,
  POST_MESSAGE_SUCCESS,
  PATCH_CONVERSATION_SUCCESS,
  CHANGE_STATE_CONVERSATIONS,
  CHANGE_STATE_MESSAGES,
} from 'src/store/actions';

// state initial
const initialState = {
  loading: true,
  inputValue: '',
  inputNameConseiller: '',
  conversations: [],
  conversationIdActive: null,
  conversationHistoriqueId: null,
  conversationConseillerAtif: null,
  messages: [],
  displayHistoryMessages: false,
  displayMessages: false,
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
    case GET_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        conversationHistoriqueId: action.idConversation,
        displayHistoryMessages: true,
      };
    case POST_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          {
            id: action.id,
            name: action.name,
            archived: action.archived,
          },
        ],
        isOpenNewConversation: !state.isOpenNewConversation,
        inputNameConseiller: '',
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
    case GET_MESSAGES_BY_CONVERSATION_OPEN:
      return {
        ...state,
        displayMessages: true,
        conversationIdActive: action.idConversation,
        conversationConseillerAtif: action.nameConseiller,
        displayHistoryMessages: false,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        inputValue: '',
      };
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.messages,
      };
    case PATCH_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversations: action.conversations,
        conversationIdActive: null,
        conversationConseillerAtif: null,
        displayMessages: false,
      };
    case CHANGE_STATE_CONVERSATIONS:
      return {
        ...state,
        displayMessages: false,
      };
    case CHANGE_STATE_MESSAGES:
      return {
        ...state,
        messages: state.messages,
      };
    default:
      return state;
  }
};

export default reducer;
