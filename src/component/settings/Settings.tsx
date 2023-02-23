import React from 'react';
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './Settings.module.scss';
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-regular-svg-icons";

const Settings = () => {
    const theme = useTheme()

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <div className={s.settings}>
            {theme.theme === Theme.LIGHT
                ? <FontAwesomeIcon icon={faMoon} onClick={changeTheme}/>
                : <FontAwesomeIcon icon={faSun} onClick={changeTheme}/>
            }

        </div>
    );
};

export default Settings;

// <FontAwesomeIcon icon="fa-regular fa-sun" />
//<FontAwesomeIcon icon="fa-regular fa-moon" />