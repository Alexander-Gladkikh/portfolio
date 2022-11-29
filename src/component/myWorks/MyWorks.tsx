import React from 'react';
import s from './MyWorks.module.css'
import Work from "./work/Work";
import container from '../../common/styles/Style.module.css'

function MyWorks() {
    return (
        <div className={`${s.myWork} ${container.container}`}>
            <div className={s.header}>
                <h2>Мои Работы</h2>
            </div>
            <div className={s.worksBlock}>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
            </div>
        </div>
    );
}

export default MyWorks;

