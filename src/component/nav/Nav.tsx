import React from 'react';
import s from './Nav.module.css'

function Nav() {
    return (
        <ul className={s.nav}>
            <li className={s.navItem}>
                <a href="">Главная</a>
            </li>
            <li className={s.navItem}>
                <a href="">Скиллы</a>
            </li>
            <li className={s.navItem}>
                <a href="">Работы</a>
            </li>
            <li className={s.navItem}>
                <a href="">Контакты</a>
            </li>
        </ul>
    );
}

export default Nav;