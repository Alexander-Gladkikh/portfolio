import homeImage from "../../images/home.svg";
import mySkills from "../../images/my-skills.svg";
import portfolioImage from "../../images/portfolio.svg";
import contactsImage from "../../images/contacts.svg";

export const navigationListData: NavigationItemType[] = [
    {id: 'main', title: 'HOME', images: homeImage},
    {id: 'skills', title: 'MY SKILLS', images: mySkills},
    {id: 'myProjects', title: 'PORTFOLIO', images: portfolioImage},
    {id: 'contacts', title: 'CONTACTS', images: contactsImage},
]

export type NavigationItemType = {
    title: string
    images: string
    id: string
}