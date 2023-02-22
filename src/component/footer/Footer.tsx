import React from 'react';
import s from './Footer.module.scss';
import style from '../../common/styles/Style.module.css'
import vkIcon from '../../assets/images/social-icon/vk-icon.svg'
import gitHubIcon from '../../assets/images/social-icon/github-icon.svg'
import telegrammIcon from '../../assets/images/social-icon/telegramm-icon.svg'

const icons = [vkIcon, gitHubIcon, telegrammIcon]

function Footer() {
    return (
        <div className={`${s.footer} ${style.container}`}>
            <div className={s.copyright}>
                <p>© 2023, All Rights Reserved</p>
            </div>
            <div className={s.socialNetworks}>
                <ul>
                {icons.map((el) => {
                    return(
                        <li key={el}>
                            <a href="#">
                                <img className={s.icon} src={el} alt={el}/>
                            </a>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    );
}

export default Footer;