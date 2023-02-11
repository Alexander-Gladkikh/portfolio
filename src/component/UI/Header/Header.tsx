import s from "./Header.module.scss";
import React from "react";

type HeaderPropsType = {
    text: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <h2 className={s.headerText}>MY <span>{props.text}</span></h2>
        </div>
    )
}