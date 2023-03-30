import s from "./Header.module.scss";
import React from "react";

type HeaderPropsType = {
    textStart: string
    textEnd: string
    titleBg: string
}
export const Header: React.FC<HeaderPropsType> = ({textStart, textEnd, titleBg}) => {
    return (
        <div className={s.header}>
            <h2 className={s.headerText}>{textStart} <span>{textEnd}</span></h2>
            <span className={s.titleBg}>{titleBg}</span>
        </div>
    )
}