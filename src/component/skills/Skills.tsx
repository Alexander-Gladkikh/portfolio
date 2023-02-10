import React from 'react';
import s from './Skills.module.css'
import container from '../../common/styles/Style.module.css'
import Skill from "./skill/Skill";
import {v1} from "uuid";

const skillsData: skillType[] = [
    {id: v1(), title: 'HTML5', description: 'Описание навыка', progress: 50, images: 'html-icon.svg'},
    // {id: v1(), title: 'SASS/SCSS', description: 'Описание навыка', progress: 50, images: 'sass-icon.svg'},
    // {id: v1(), title: 'JS/TS', description: 'Описание навыка', progress: 50, images: 'typescript-icon.svg'},
    // {id: v1(), title: 'REACT', description: 'Описание навыка', progress: 50, images: 'react-icon.svg'},
    // {id: v1(), title: 'REDUX', description: 'Описание навыка', progress: 50, images: 'redux-icon.svg'},
    // {id: v1(), title: 'STORYBOOK', description: 'Описание навыка', progress: 50, images: 'storybook-icon.svg'},
    // {id: v1(), title: 'UNIT-TEST', description: 'Описание навыка', progress: 50, images: 'test-icon.svg'},
    // {id: v1(), title: 'GIT', description: 'Описание навыка', progress: 50, images: 'git-icon.svg'},
]

type skillType = {
    id: string
    title: string
    description: string
    progress: number
    images: string
}

function Skills() {
    return (
        <div className={`${s.skills}`}>
            <div className={container.container}>
                <div className={s.header}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={s.skillsBlock}>
                    {skillsData.map((el: skillType) => <Skill title={el.title}
                                                              description={el.description}
                                                              progress={el.progress}
                                                              images={el.images}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Skills;