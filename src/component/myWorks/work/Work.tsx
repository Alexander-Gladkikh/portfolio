import React from 'react';
import s from './work.module.css';
import style from '../../../common/styles/Style.module.css';


type WorkPropsType = {
    title: string
    description: string
}

const Work: React.FC <WorkPropsType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={s.info}>
                <span className={s.title}>{title}</span>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
}

export default Work;