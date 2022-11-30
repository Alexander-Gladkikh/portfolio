import React from 'react';
import s from './Nav.module.scss'

function Nav() {
    return (
        <ul className={s.nav}>
            <li className={s.navItem}>
                <a href="">Home</a>
            </li>
            <li className={s.navItem}>
                <a href="">About Me</a>
            </li>
            <li className={s.navItem}>
                <a href="">Portfolio</a>
            </li>
            <li className={s.navItem}>
                <a href="">Contacts</a>
            </li>
        </ul>
    );
}

export default Nav;