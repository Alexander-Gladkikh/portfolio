import React from 'react';
import logo from '../../assets/images/right-arrow.svg'
import s from './MyButton.module.scss'

const MyButton: React.FC<any> = ({children, ...props}) => {
    return (
        <button className={s.myButton}>
            <span className={s.myButtonText}>{children}</span>
            <img className={s.myButtonImg} src={logo} alt="arrow-right"/>
        </button>
    );
};

export default MyButton;