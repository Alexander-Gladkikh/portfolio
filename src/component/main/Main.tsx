import React from 'react';
import s from './Main.module.scss'
import container from '../../common/styles/Style.module.css'
import {Button, Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EastIcon from '@mui/icons-material/East';
import MyButton from "../UI/MyButton/MyButton";


function Main() {
    return (
        <div className={`${s.main} ${container.container}`}>
            <div className={s.photo}></div>
            <div className={s.info}>
                <h1 className={s.infoTitle} >I'M ALEXANDER.</h1>
                <span className={s.infoSubtitle}>Front-end developer</span>
                <p>I'm a Russian based front‑end
                    developer focused on crafting
                    clean & user‑friendly experiences,
                    I am passionate about building
                    excellent software that improves
                    the lives of tho around me.
                </p>
                <MyButton startIcon={<DeleteIcon/>}>About Me</MyButton>
            </div>

        </div>
    );
}

export default Main;