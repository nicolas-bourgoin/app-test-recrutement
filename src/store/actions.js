// constantes qui définissent le nom de nos actions
// ceci afin d'avoir une gestion d'erreur
// et de ne pas se tromper sur les strings
export const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';
export const GET_MESSAGES_BY_CONVERSATION = 'GET_MESSAGES_BY_CONVERSATION';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

// action qui déclenche la requete
export const getConversations = () => ({
  type: GET_CONVERSATIONS,
});

// action lorsque la réponse de l'api arrive
export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  conversations: conversations,
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
 

export const changeTextInput = (newValue) => (
  {
    type: CHANGE_TEXT_INPUT,
    newValue,
    // note : shorthand property
    // equivalent de newValue: newValue
  }
);

// addMessage : ajoute un message a la liste
// appelé lorsque on recoit un message
// message est un objet contenant : { author, content, id}
// en provenance du serveur (websocket)
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message: message,
});

// envoie un message au serveur
// pas besoin de parametres pour cette action
// les infos sont déja dans le store :
// - nickname
// - texte du message
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

