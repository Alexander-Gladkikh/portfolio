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
    {title: 'HTML5', description: 'Responsive design, flex, links, headers, images and etc', images: htmlIcon},
    {title: 'SASS/SCSS', description: 'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries', images: sassIcon},
    {title: 'JS/TS', description: 'Native JS: classes, functions, working with arrays and objects, Promises, REST Api; TS: as type, generics, infer', images: typescriptIcon},
    {title: 'REACT', description: 'Class and functional components, components life-cycle methods, props, hooks, HOC', images: reactIcon},
    {title: 'REDUX', description: 'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit', images: reduxIcon},
    {title: 'STORYBOOK', description: 'Testing components and modules, decorators', images: storybookIcon},
    {title: 'UNIT-TEST', description: 'Testing choosen modules and the whole application\'s workability', images: testIcon},
    {title: 'GIT', description: 'Creating new repositories, push- and pull-requets, merge, repos cloning', images: gitIcon},
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