import React from "react";
import s from "./Nav.module.scss";
import {Link} from "react-scroll";

type NavigationItemPropsType = {
    title: string
    sourceImage: string
    id: string
}
export const NavigationItem:React.FC<NavigationItemPropsType> = (
    {
        title,
        sourceImage,
        id
    }
) => {
    return (
        <li className={s.navItem}>
            <Link
                activeClass={s.active}
                to={id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <span>{title}</span>
                <img className={s.image} src={sourceImage} />
            </Link>
        </li>
    );
}

