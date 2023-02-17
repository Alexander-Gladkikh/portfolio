import React from 'react';
import s from './MyWorks.module.scss'
import Work from "./work/Work";
import container from '../../common/styles/Style.module.css'
import {Header} from "../UI/Header/Header";
import {WorkType} from "../../assets/Data/MyPortfolioData/MyPortfolioData";

type MyPortfolioPropsType = {
    MyProfileData: WorkType[]
}
const MyPortfolio: React.FC<MyPortfolioPropsType> = ({MyProfileData}) => {
    return (
        <div className={`${s.myWork} ${container.container}`}>
            <Header textStart={'MY'} textEnd={'PORTFOLIO'}/>
            <div className={s.worksBlock}>
                {MyProfileData.map((el:WorkType) => {
                    return <Work title={el.title} description={el.description} images={el.images}/>
                })}

            </div>
        </div>
    );
}

export default MyPortfolio;

