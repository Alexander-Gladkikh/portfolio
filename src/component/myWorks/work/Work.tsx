import React from 'react';
import s from './work.module.css';
import style from '../../../common/styles/Style.module.css';


type SkillPropsType = {
    title: string
    description: string
}

function Skills(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={s.info}>
                <span className={s.title}>{props.title}</span>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Skills;