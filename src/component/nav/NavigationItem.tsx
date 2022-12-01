import React from "react";
import s from "./Nav.module.scss";

type NavigationItemPropsType = {
    title: string
    sourceImage: string
}
export const NavigationItem:React.FC<NavigationItemPropsType> = (
    {
        title,
        sourceImage
    }
) => {
    return (
        <li className={s.navItem}>
            <a href="#">
                <span>{title}</span>
                <img className={s.image} src={sourceImage} alt="Image Home"/>
            </a>
        </li>
    );
}