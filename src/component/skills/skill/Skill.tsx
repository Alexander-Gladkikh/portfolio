import React from 'react';
import s from './Skill.module.css'


type SkillPropsType = {
    title: string
    description: string
}

function Skills(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

export default Skills;