import React from 'react';
import s from './MyWorks.module.css'
import Work from "./work/Work";
import container from '../../common/styles/Style.module.css'
import {Header} from "../UI/Header/Header";



function MyPortfolio() {
    return (
        <div className={`${s.myWork} ${container.container}`}>
            <Header text={'PORTFOLIO'}/>
            <div className={s.worksBlock}>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
                <Work title={'Название проекта'} description={'Описание проекта'}/>
            </div>
        </div>
    );
}

export default MyPortfolio;

