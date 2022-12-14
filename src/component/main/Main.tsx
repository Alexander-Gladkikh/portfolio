import React from 'react';
import s from './Main.module.scss'
import container from '../../common/styles/Style.module.css'

function Main() {
    return (
        <div className={`${s.main} ${container.container}`}>
            <div className={s.photo}></div>
            <div className={s.info}>
                <h1>I'M ALEXANDER.</h1>
                <span>Front-end developer</span>
                <p>I'm a Russian based front‑end
                    developer focused on crafting
                    clean & user‑friendly experiences,
                    I am passionate about building
                    excellent software that improves
                    the lives of tho around me.</p>
            </div>
        </div>
    );
}

export default Main;