import {Theme} from "../context/ThemeContext";

export function changeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    root.style.setProperty(`--body-background-default`, `var(--body-background-${theme})`)
}