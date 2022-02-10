import {
    GET_MESSAGES,
    ADD_MESSAGES,
    GET_ERROR_MESSAGE_DATA,
    INSERT_MESSAGE_DATA

} from './actionTypes';

const actionGetMessages = (messageArray) => {
    return {type: GET_MESSAGES, payload: messageArray};
}

const actionAddMessage = (messageDataObj) => {
    return {type: ADD_MESSAGES, payload: messageDataObj};
}

const actionInsertMessageData = (messageDataObj) => {
    return {type: INSERT_MESSAGE_DATA, payload: messageDataObj};
}

const actionGetErrorMessageData = (messageDataObj) => {
    return {type: GET_ERROR_MESSAGE_DATA, payload: messageDataObj};
}

export {
    actionGetMessages,
    actionAddMessage,
    actionInsertMessageData,
    actionGetErrorMessageData,
};
