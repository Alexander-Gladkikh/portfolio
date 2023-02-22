import React, {useEffect} from 'react';
import {useTheme} from "../../hooks/useTheme";

const Header = () => {
    const theme = useTheme()

function changeTheme () {}
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;

        root.style.setProperty(`--body-background-default`, `--body-background-${theme.theme}`)
    },[theme.theme])
    return (
        <div>
            <button onClick={changeTheme}>Click</button>
        </div>
    );
};

export default Header;