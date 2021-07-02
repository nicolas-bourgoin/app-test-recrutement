// constantes qui définissent le nom de nos actions
// ceci afin d'avoir une gestion d'erreur
// et de ne pas se tromper sur les strings
export const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';
export const GET_MESSAGES_BY_CONVERSATION = 'GET_MESSAGES_BY_CONVERSATION';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const POST_NEW_CONVERSATION = 'POST_NEW_CONVERSATION';
export const POST_CONVERSATION_SUCCESS = 'POST_CONVERSATION_SUCCESS';
export const TOGGLE_CONVERSATION = 'TOGGLE_CONVERSATION';
export const CHANGE_NAME_CONSEILLER = 'CHANGE_NAME_CONSEILLER';
export const GET_MESSAGES_BY_CONVERSATION_OPEN = 'GET_MESSAGES_BY_CONVERSATION_OPEN';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const ARCHIVE_CONVERSATION = 'ARCHIVE_CONVERSATION';
export const PATCH_CONVERSATION_SUCCESS = 'PATCH_CONVERSATION_SUCCESS';
export const CHANGE_STATE_CONVERSATIONS = 'CHANGE_STATE_CONVERSATIONS';

// action qui déclenche la requete
export const getConversations = () => ({
  type: GET_CONVERSATIONS,
});

// action qui déclenche la requete
export const getMessages = () => ({
  type: GET_MESSAGES,
});

// action lorsque la réponse de l'api arrive
export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  conversations: conversations,
});

// action lorsque la réponse de l'api arrive
export const getAllMessagesSuccess = (messages) => ({
  type: GET_ALL_MESSAGES_SUCCESS,
  messages: messages,
});

// action qui déclenche la requete
export const getMessagesByConversation = (idConversation) => ({
  type: GET_MESSAGES_BY_CONVERSATION,
  idConversation,
});

// action lorsque la réponse de l'api arrive
export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  messages: messages,
});

// action lorsqu'on clique sur créer une conversation
export const newConversation = () => ({
  type: POST_NEW_CONVERSATION,
});

export const toggleConversation = () => ({
  type: TOGGLE_CONVERSATION,
});

export const changeNameConseiller = (newValue) => ({
  type: CHANGE_NAME_CONSEILLER,
  newValue,
});

// action lorsque la réponse de l'api arrive
export const postConversationSuccess = (conversation) => ({
  type: POST_CONVERSATION_SUCCESS,
  id: conversation.id,
  name: conversation.name,
  archived: conversation.archived,
});

// action qui déclenche la requete
export const getMessagesByConversationOpen = (idConversation, nameConseiller) => ({
  type: GET_MESSAGES_BY_CONVERSATION_OPEN,
  idConversation,
  nameConseiller,
});

export const changeTextInput = (newValue) => ({
  type: CHANGE_TEXT_INPUT,
  newValue,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message: message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

// action lorsque la réponse de l'api arrive
export const postMessageSuccess = (messages) => ({
  type: POST_MESSAGE_SUCCESS,
  messages: messages,
});

export const getArchiveConversation = () => ({
  type: ARCHIVE_CONVERSATION,
});

// action lorsque la réponse de l'api arrive
export const patchConversationSuccess = (conversations) => ({
  type: PATCH_CONVERSATION_SUCCESS,
  conversations: conversations,
});

export const changeStateConversations = () => ({
  type: CHANGE_STATE_CONVERSATIONS,
});

