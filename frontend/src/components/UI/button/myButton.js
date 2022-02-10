import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
    const {handleClickSend} = props
    console.log(props);
    return (
        <button  onClick={handleClickSend} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
