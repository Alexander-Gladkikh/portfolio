import React from 'react';
import s from './work.module.scss';


type WorkPropsType = {
    title: string
    description: string
    images: string
    links?: string
}

const Work: React.FC<WorkPropsType> = ({title, description, images, links}) => {
    return (
        <div className={s.myWork}>
            <img className={s.img} src={images} alt=""/>
            <a href={links}>
             <div className={s.info}>
               <span className={s.title}>{title}</span>
               <p className={s.description}>{description}</p>
            </div>
           </a>
        </div>
    );
}

export default Work;
