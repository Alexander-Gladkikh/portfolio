import React from 'react';
import s from './Skills.module.css'
import container from '../../common/styles/Style.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={`${s.skills}`}>
            <div className={container.container}>
                <div className={s.header}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={s.skillsBlock}>
                    <Skill title={'HTML/CSS'} description={'Описание навыка'}/>
                    <Skill title={'JS'} description={'Описание навыка'}/>
                    <Skill title={'React'} description={'Описание навыка'}/>
                    <Skill title={'React'} description={'Описание навыка'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;