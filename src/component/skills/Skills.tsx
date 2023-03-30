import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Header} from "../UI/Header/Header";
import {SkillType} from "../../assets/Data/SkillsData/SkillsData";
import { Slide } from "react-awesome-reveal";


type SkillsPropsType = {
    skillsData: SkillType[]
}

const Skills: React.FC <SkillsPropsType> = ({skillsData}) => {
    return (
        <div id={'skills'} className={s.skills}>
            <Header textStart={'MY'} textEnd={'SKILLS'} titleBg={'SKILLS'}/>

            <div className={s.skillsBlock}>
                <Slide direction={'up'} triggerOnce cascade duration={600} damping={0.2}>
                {skillsData.map((el: SkillType) => <Skill key={el.title} title={el.title}
                                                          description={el.description}
                                                          images={el.images}
                />)}
                </Slide >
            </div>

        </div>

    )
}

export default Skills;

//export default Settings;