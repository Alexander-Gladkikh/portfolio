import React from 'react';
import s from './Skill.module.scss'


type SkillPropsType = {
    title: string
    description: string
    images: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.skillContainer}>
                <img className={s.skillIcon} src={props.images} />
            </div>
            <span className={s.skillTitle}>{props.title}</span>
        </div>
    );
}

export default Skill;



