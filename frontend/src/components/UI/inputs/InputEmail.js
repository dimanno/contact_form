import React from 'react';
import classes from './InputEmail.module.css'
const InputEmail = (props) => {
    const {email, handleChangeInput, errorMessageData} = props
    return (
        <div className={'input-wrap'}>
            <input
                type="email"
                name={'email'}
                value={email}
                onChange={handleChangeInput}
                autoComplete="off"
                placeholder={'Your e-mail*'}
                className={classes.inputEmail}
            />
            <div className={classes.error_msg_style}>
                {errorMessageData.email}
            </div>
        </div>
    );
};

export default InputEmail;
