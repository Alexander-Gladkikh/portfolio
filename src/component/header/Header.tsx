import React from 'react';
import s from './Header.module.css'
import Nav from "../nav/Nav";
import container from '../../common/styles/Style.module.css'

function Header() {
    return (
        <header className={`${s.header} ${container.container}`}>
                <Nav/>
        </header>
    );
}

export default Header;