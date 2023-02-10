import React from 'react';
import s from './Skill.module.scss'
import {CircularProgressbar} from "react-circular-progressbar";


type SkillPropsType = {
    title: string
    description: string
    progress: number
    images: string
}

function Skill(props: SkillPropsType) {
    return (
        <div style={{width: 200, height: 200}}>
            <CircularProgressbar value={props.progress} text={`${props.progress}%`} maxValue={100}
                                 styles={{
                                     // Customize the root svg element
                                     root: {},
                                     // Customize the path, i.e. the "completed progress"
                                     path: {
                                         // Path color
                                         stroke: `rgba(62, 152, 199, ${props.progress / 100})`,
                                         // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                         strokeLinecap: 'butt',
                                         // Customize transition animation
                                         transition: 'stroke-dashoffset 0.5s ease 0s',
                                         // Rotate the path
                                         transform: 'rotate(0.25turn)',
                                         transformOrigin: 'center center',
                                     },
                                     // Customize the circle behind the path, i.e. the "total progress"
                                     trail: {
                                         // Trail color
                                         stroke: 'red',
                                         // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                         strokeLinecap: 'butt',
                                         // Rotate the trail
                                         transform: 'rotate(0.25turn)',
                                         transformOrigin: 'center center',
                                     },
                                     // Customize the text
                                     text: {
                                         // Text color
                                         fill: 'green',
                                         // Text size
                                         fontSize: '16px',
                                     },
                                     // Customize background - only used when the `background` prop is true
                                     background: {
                                         fill: 'blue',
                                     },
                                 }}/>
        </div>
    );
}

export default Skill;



