import React from 'react';
import s from './MyButton.module.scss'

const MyButton: React.FC<any> = ({children, icon, ...props}) => {
    return (
        <button className={s.myButton}>
            <span className={s.myButtonText}>{children}</span>
            <img className={s.myButtonImg} src={icon} alt="arrow-right"/>
        </button>
    );
};

export default MyButton;