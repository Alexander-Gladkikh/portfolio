import React, {useEffect} from 'react';
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

const Header = () => {
    const theme = useTheme()

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    // useEffect(() => {
    //     const root = document.querySelector(':root') as HTMLElement;
    //
    //     root.style.setProperty(`--body-background-default`, `var(--body-background-${theme.theme})`)
    // }, [theme.theme])
    return (
        <div>
            <button style={{background: 'black', position: 'absolute', zIndex: 10000}}
                    onClick={changeTheme}>Click
            </button>
        </div>
    );
};

export default Header;