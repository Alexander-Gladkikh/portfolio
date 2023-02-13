import React from 'react';
import s from './Nav.module.scss'
import homeImage from '../../assets/images/home.svg';
import mySkills from '../../assets/images/my-skills.svg';
import portfolioImage from '../../assets/images/portfolio.svg';
import contactsImage from '../../assets/images/contacts.svg';
import {NavigationItem} from "./NavigationItem";
import { NavigationItemType } from '../../assets/Data/NavigationData/NavigationData';

type NavigationListPropsType = {
    navigationListData: NavigationItemType[]
}

const NavigationList: React.FC<NavigationListPropsType> = ({navigationListData}) => {

    return (
        <ul className={s.nav}>
            {navigationListData.map((el:NavigationItemType) => {
                return <NavigationItem title={el.title} sourceImage={el.images}/>
            })}
        </ul>
    );
}

export default NavigationList;


