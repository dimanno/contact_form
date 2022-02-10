import React from 'react';
import classes from './InputMessage.module.css'
const InputMessage = (props) => {
    const {body, handleChangeInput, errorMessageData} = props
    return (
        <div>
            <textarea
                name={'body'}
                rows="6"
                cols="50"
                value={body}
                onChange={handleChangeInput}
                autoComplete="off"
                placeholder={'Your message*'}
                className={classes.inputMessage}
            />
            <div className={classes.error_msg_style}>
                {errorMessageData.body}
            </div>
        </div>
    );
};

export default InputMessage;
