import React from 'react';
import s from './Footer.module.css';
import style from '../../common/styles/Style.module.css'

function Footer() {
    return (
       <div className={`${s.footer} ${style.container}`}>
           <span className={s.title}>Иван Иванов</span>
           <div className={s.footerWrapper}>
               <div className={s.footerBlock}></div>
               <div className={s.footerBlock}></div>
               <div className={s.footerBlock}></div>
               <div className={s.footerBlock}></div>
           </div>
           <span className={s.copyright}>все права защищены</span>
       </div>
    );
}

export default Footer;