import React from 'react';
import s from './Footer.module.scss';
import style from '../../common/styles/Style.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";


const icons = [faVk, faGithub, faTelegram, faLinkedin]

function Footer() {


    return (
        <div className={`${s.footer} ${style.container}`}>
            <div className={s.copyright}>
                <p>© 2023, All Rights Reserved</p>
            </div>
            <div className={s.socialNetworks}>
                <ul className={s.socialNetworksLists}>
                    {icons.map((el, index) => <li key={index} className={s.socialNetworksItem}><FontAwesomeIcon icon={el}/></li>)}
                </ul>
            </div>
        </div>
    );
}

export default Footer;