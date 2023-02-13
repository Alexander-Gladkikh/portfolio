import homeImage from "../../images/home.svg";
import mySkills from "../../images/my-skills.svg";
import portfolioImage from "../../images/portfolio.svg";
import contactsImage from "../../images/contacts.svg";

export const navigationListData: NavigationItemType[] = [
    {title: 'HOME', images: homeImage},
    {title: 'MY SKILLS', images: mySkills},
    {title: 'PORTFOLIO', images: portfolioImage},
    {title: 'CONTACTS', images: contactsImage},
]

export type NavigationItemType = {
    title: string
    images: string
}