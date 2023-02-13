import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Header} from "../UI/Header/Header";
import {SkillType} from "../../assets/Data/SkillsData/SkillsData";

type SkillsPropsType = {
    skillsData: SkillType[]
}

const Skills: React.FC <SkillsPropsType> = ({skillsData}) => {
    return (
        <div className={s.skills}>
            <Header textStart={'MY'} textEnd={'SKILLS'}/>
            <div className={s.skillsBlock}>
                {skillsData.map((el: SkillType) => <Skill title={el.title}
                                                          description={el.description}
                                                          images={el.images}
                />)}
            </div>
        </div>

    )
}

export default Skills;

//export default Header;