import {
    GET_MESSAGES,
    ADD_MESSAGES,
    INSERT_MESSAGE_DATA,
   GET_ERROR_MESSAGE_DATA,
} from '../actions';

const defaultMessageData = {
    _id: '',
    name: '',
    email: '',
    body: ''
};

const errorMessageData = {
    name: '',
    email: '',
    body: ''
};

const initialState = {
    messages: [],
    messageData: {...defaultMessageData},
    errorMessageData: {...errorMessageData}
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MESSAGES:
            return {...state, messages: [...payload].reverse()};

        case ADD_MESSAGES:
            return {...state, messages: [...state.messages, payload]};

        case INSERT_MESSAGE_DATA:
            return {...state, messageData: {...state.messageData, ...payload}};

        case GET_ERROR_MESSAGE_DATA:
            return {...state, errorMessageData: {...state.errorMessageData, ...payload}};

        default:
            return state;
    }
};

export default rootReducer;
