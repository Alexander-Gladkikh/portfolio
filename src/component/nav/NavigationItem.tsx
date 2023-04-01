import React from "react";
import s from "./Nav.module.scss";
import {Link} from "react-scroll";
import {motion} from "framer-motion";

type NavigationItemPropsType = {
  title: string
  sourceImage: string
  id: string
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000}
    }
  }
};
export const NavigationItem: React.FC<NavigationItemPropsType> = (
  {
    title,
    sourceImage,
    id
  }
) => {
  return (
    <motion.li
      className={s.navItem}
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <Link
        activeClass={s.active}
        to={id}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <span>{title}</span>
        <img className={s.image} src={sourceImage}/>
      </Link>
    </motion.li>
  );
}

