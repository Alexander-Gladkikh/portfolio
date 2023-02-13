import s from "./Header.module.scss";
import React from "react";

type HeaderPropsType = {
    textStart: string
    textEnd: string
}
export const Header: React.FC<HeaderPropsType> = ({textStart, textEnd}) => {
    return (
        <div className={s.header}>
            <h2 className={s.headerText}>{textStart} <span>{textEnd}</span></h2>
        </div>
    )
}