import React from 'react';
import s from './Nav.module.scss'
import homeImage from '../../assets/images/home.svg';
import mySkills from '../../assets/images/my-skills.svg';
import portfolioImage from '../../assets/images/portfolio.svg';
import contactsImage from '../../assets/images/contacts.svg';
import {NavigationItem} from "./NavigationItem";
import { NavigationItemType } from '../../assets/Data/NavigationData/NavigationData';
import Settings from "../settings/Settings";

type NavigationListPropsType = {
    navigationListData: NavigationItemType[]
}

const NavigationList: React.FC<NavigationListPropsType> = ({navigationListData}) => {

    return (
        <div>
            <ul className={s.nav}>
                <li className={s.settings}>
                    <Settings/>
                </li>
                {navigationListData.map((el:NavigationItemType) => {
                    return <NavigationItem key={el.title} title={el.title} sourceImage={el.images} id={el.id}/>
                })}
            </ul>
        </div>

    );
}

export default NavigationList;


