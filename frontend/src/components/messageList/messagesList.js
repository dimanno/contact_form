import React, {useEffect, useState} from 'react';

import Message from "../message/message";
import {useDispatch, useSelector} from "react-redux";
import {actionGetErrorMessageData, actionGetMessages} from "../../redux/actions";
import {getAllMessages} from "../../services/contactUs.service";

const MessagesList = () => {
    const messages = useSelector(({messages}) => messages);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getAllMessages())
    }, []);

    return (
        <div className={'listBox'}>
            {messages.map(message => <Message key={message.id} item={message}/>)}
        </div>
    );
};

export default MessagesList;
