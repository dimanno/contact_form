import React from 'react';
import {Link} from 'react-router-dom'

import MessagesList from "../messageList/messagesList";


const Response = () => {
    return (
        <div>
            <div>
                <h2>Your message has been sent successfully</h2>
                <Link to={'/'}>Contact Form</Link>
                <MessagesList/>
            </div>
        </div>
    );
};

export default Response;
