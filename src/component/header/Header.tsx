import React from 'react';
import s from './Header.module.css'
import NavigationList from "../nav/NavigationList";
import container from '../../common/styles/Style.module.css'

function Header() {
    return (
        <header className={`${s.header} ${container.container}`}>
                <NavigationList/>
        </header>
    );
}

export default Header;