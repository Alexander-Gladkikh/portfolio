import React from 'react';
import s from './Main.module.scss'
import container from '../../common/styles/Style.module.css'
import MyButton from "../UI/MyButton/MyButton";
import icon from '../../assets/images/right-arrow.svg';

const Fade = require("react-reveal/Fade");



function Main() {
    return (
        <div className={`${s.main} ${container.container}`}>
            <Fade left>
                <div className={s.photo}></div>
            </Fade>
            <Fade right>
                <div className={s.info}>
                    <h1 className={s.infoTitle}>I'M ALEXANDER.</h1>
                    <span className={s.infoSubtitle}>Front-end developer</span>
                    <p>I'm a Russian based front‑end
                        developer focused on crafting
                        clean & user‑friendly experiences,
                        I am passionate about building
                        excellent software that improves
                        the lives of tho around me.
                    </p>
                    <MyButton icon={icon}>About Me</MyButton>
                </div>
            </Fade>
        </div>
    );
}

export default Main;