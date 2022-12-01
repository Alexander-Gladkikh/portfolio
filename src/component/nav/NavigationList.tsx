import React from 'react';
import s from './Nav.module.scss'
import homeImage from '../../assets/images/home.svg';
import aboutImage from '../../assets/images/about-me.svg';
import portfolioImage from '../../assets/images/portfolio.svg';
import contactsImage from '../../assets/images/contacts.svg';
import {NavigationItem} from "./NavigationItem";

function NavigationList() {

    return (
        <ul className={s.nav}>
            <NavigationItem title={'HOME'} sourceImage={homeImage}/>
            <NavigationItem title={'ABOUT ME'} sourceImage={aboutImage}/>
            <NavigationItem title={'PORTFOLIO'} sourceImage={portfolioImage}/>
            <NavigationItem title={'CONTACTS'} sourceImage={contactsImage}/>

        </ul>
    );
}

export default NavigationList;


