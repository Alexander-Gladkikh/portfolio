import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import {
    gitIcon,
    htmlIcon,
    reactIcon,
    reduxIcon,
    sassIcon,
    storybookIcon,
    testIcon,
    typescriptIcon
} from "../../assets/Data/images";

const skillsData: skillType[] = [
    {title: 'HTML5', description: 'Описание навыка', images: htmlIcon},
    {title: 'SASS/SCSS', description: 'Описание навыка', images: sassIcon},
    {title: 'JS/TS', description: 'Описание навыка', images: typescriptIcon},
    {title: 'REACT', description: 'Описание навыка', images: reactIcon},
    {title: 'REDUX', description: 'Описание навыка', images: reduxIcon},
    {title: 'STORYBOOK', description: 'Описание навыка', images: storybookIcon},
    {title: 'UNIT-TEST', description: 'Описание навыка', images: testIcon},
    {title: 'GIT', description: 'Описание навыка', images: gitIcon},
]

type skillType = {
    title: string
    description: string
    images: string
}

function Skills() {
    return (
            <div className={s.skills}>
                <div className={s.header}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={s.skillsBlock}>
                    {skillsData.map((el: skillType) => <Skill title={el.title}
                                                              description={el.description}
                                                              images={el.images}
                    />)}
                </div>
            </div>

    )
}

export default Skills;