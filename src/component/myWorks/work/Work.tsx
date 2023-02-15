import React from 'react';
import s from './work.module.scss';


type WorkPropsType = {
    title: string
    description: string
    images: string
}

const Work: React.FC<WorkPropsType> = ({title, description, images}) => {
    return (
        <div className={s.myWork}>
            <img className={s.myWorkImg} src={images} alt=""/>
            <div className={s.info}>
                <span className={s.title}>{title}</span>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
}

export default Work;