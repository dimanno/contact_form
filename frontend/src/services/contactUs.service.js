import  axios from 'axios';
import {actionGetMessages, actionAddMessage} from "../redux/actions";

let config = {
    baseURL: 'http://localhost:5000/messages',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
};

let axiosInstance = axios.create(config);

const getAllMessages = () => async (dispatch) => {
    const response = await axiosInstance.get('/');
    dispatch(actionGetMessages(response.data));
};

const createMessage = (dataMessageObj) => async (dispatch) => {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/messages',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        data: dataMessageObj
    });
    console.log(response.data);
    dispatch(actionAddMessage(response.data));
};

export {
    getAllMessages,
    createMessage,
}
