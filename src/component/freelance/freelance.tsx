import React from 'react';
import s from './freelance.module.css'
import style from 'src/common/styles/Style.module.scss'

function Freelance() {
    return (
        <div className={`${s.freelance} ${style.container}`}>
                <span className={s.title}>Рассматриваю вариант удалённой работы</span>
                <button className={style.button}>Нанять меня</button>
        </div>
    );
}

export default Freelance;