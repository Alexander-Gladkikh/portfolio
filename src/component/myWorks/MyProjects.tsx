import React from 'react';
import s from './MyWorks.module.scss'
import Work from "./work/Work";
import container from 'src/common/styles/Style.module.scss'
import {Header} from "../UI/Header/Header";
import {WorkType} from "../../assets/Data/MyPortfolioData/MyPortfolioData";
import {Fade} from "react-awesome-reveal";


type MyPortfolioPropsType = {
    MyProfileData: WorkType[]
}
const MyProjects: React.FC<MyPortfolioPropsType> = ({MyProfileData}) => {
    return (
        <div id={'myProjects'} className={`${s.myWork} ${container.container}`}>
            <Header textStart={'MY'} textEnd={'PORTFOLIO'} titleBg={'MYWORK'}/>
            <div className={s.worksBlock}>
                <Fade direction={'up'} triggerOnce cascade duration={600} damping={0.2}>
                {MyProfileData.map((el:WorkType, index) => {
                    return <Work key={index} title={el.title} description={el.description} images={el.images}/>
                })}
                </Fade>
            </div>
        </div>
    );
}

export default MyProjects;

