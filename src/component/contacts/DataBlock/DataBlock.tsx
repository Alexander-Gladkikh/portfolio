import React from 'react';
import s from './DataBlock.module.scss'

type DataBlockPropsType = {
    image: string
    title: string
    body: string
}

const DataBlock: React.FC<DataBlockPropsType> = ({title, body, image}) => {
    return (
        <div className={s.dataBlock}>
            <div className={s.image}>
                <img src={image}/>
            </div>
            <div className={s.text}>
                <h4 className={s.textTitle}>{title}</h4>
                <a href={body} className={s.textBody}>{body}</a>
            </div>
        </div>
    );
};

export default DataBlock;