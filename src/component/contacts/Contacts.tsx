import React from 'react';
import s from './Contacts.module.css'
import style from '../../common/styles/Style.module.css'

function Contacts() {
    return (
        <div className={`${s.contacts} ${style.container}`}>

            <span className={s.title}>Контакты</span>

            <form action="get" className={s.form}>
                <input type="text" value={'Контактная информация'}/>
                <input value={'Контактная информация'}/>
                <textarea></textarea>
            </form>
            <div>
            <button className={style.button}>Отправить</button>
            </div>

        </div>
    );
}

export default Contacts;