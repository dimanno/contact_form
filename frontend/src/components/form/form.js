import './form.css';

import {useDispatch, useSelector} from "react-redux";

import {
    actionGetErrorMessageData
} from '../../redux/actions';

import {
    inputValidator,
} from "../../validators";
import {createMessage} from "../../services/contactUs.service";
import {actionInsertMessageData} from "../../redux/actions/actions";
import {useNavigate} from "react-router-dom";
import MyButton from "../UI/button/myButton";
import InputName from "../UI/inputs/InputName";
import InputEmail from "../UI/inputs/InputEmail";
import InputMessage from "../UI/inputs/InputMessage";

function UserForm() {
    const {
        messageData: formState,
        errorMessageData
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const {
        username,
        email,
        body,
    } = formState;

    let navigate = useNavigate();

    const handleChangeInput = (event) => {
        const {target: {name, value}} = event;

        event.preventDefault();

        const error = inputValidator(name, value);

        dispatch(actionGetErrorMessageData({
            ...errorMessageData,
            [name]: error
        }));

        dispatch(actionInsertMessageData({
            ...formState,
            [name]: value
        }));
    };

    const handleClickSend = (e) => {
        // e.preventDefault()
        const messageCreate = (messageDataObj, errorMessageData) => {
            const {
                _id,
                ...messageDataForFetch
            } = messageDataObj

            const errorArray = Object.values(errorMessageData);
            const error = errorArray.join('').length;

            const isCreateExist =
                (!error) &&
                (!Object.values(messageDataForFetch).includes(''))

            if (isCreateExist) {
                dispatch(createMessage(formState));
                navigate('/messages')
                return
            }

            dispatch(actionGetErrorMessageData({
                ...errorMessageData,
            }));
        };
        messageCreate(formState, errorMessageData)
    };

    return (
        <div>
            <div className={'title'}>Reach out to us!</div>
            <form className={'form'}>
                <InputName
                    username={username}
                    handleChangeInput={handleChangeInput}
                    errorMessageData={errorMessageData}
                />
                <InputEmail
                    email={email}
                    handleChangeInput={handleChangeInput}
                    errorMessageData={errorMessageData}
                />
                <InputMessage
                    body={body}
                    handleChangeInput={handleChangeInput}
                    errorMessageData={errorMessageData}
                />
                <div>
                    <MyButton handleClickSend={handleClickSend}>Send message</MyButton>
                </div>
            </form>
        </div>

    );
}

export default UserForm;
