import React from 'react';
import classes from "./InputName.module.css";

const InputName = (props) => {
    const {username, handleChangeInput, errorMessageData} = props
    return (
        <div>
            <input
                type="text"
                name={'name'}
                value={username}
                onChange={handleChangeInput}
                autoComplete="off"
                placeholder={'Your name*'}
                className={classes.inputUsername}
            />
            <div className={classes.error_msg_style}>
                {errorMessageData.name}
            </div>
        </div>

    );
};

export default InputName;
