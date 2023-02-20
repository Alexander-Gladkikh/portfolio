import React from 'react';
import s from './Contacts.module.scss'
import style from '../../common/styles/Style.module.css'
import {Header} from "../UI/Header/Header";
import DataBlock from "./DataBlock/DataBlock";
import {ContactType} from "../../assets/Data/ContactsData/ContactsData";
import MyButton from "../UI/MyButton/MyButton";
import icon from '../../assets/images/send.svg';
const Fade = require("react-reveal/Fade")

type ContactsPropsType = {
    contactsData: ContactType[]
}

const Contacts: React.FC<ContactsPropsType> = ({contactsData}) => {
    return (
        <div className={`${s.contacts} ${style.container}`}>
            <Header textStart={'GET IN'} textEnd={'TOUCH'}/>

            <div className={s.dataAndForm}>
                <Fade left>
                    <div className={s.data}>
                        <h3 className={s.dataHeader}>DON'T BE SHY !</h3>
                        <p className={s.dataText}>Feel free to get in touch with me. I am always open to discussing new
                            projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        {contactsData.map((el: ContactType) => {
                            return <DataBlock
                                title={el.title}
                                body={el.body}
                                image={el.image}
                            />
                        })}
                    </div>
                </Fade>
                <Fade right>
                <div className={s.formContainer}>
                    <form action="get" className={s.form}>
                        <input type="text" placeholder={'Your Name'}/>
                        <input type={'email'} placeholder={'Your Email'}/>
                        <textarea placeholder={'Your Message'}></textarea>
                    </form>
                    <MyButton icon={icon}>SEND MESSAGE</MyButton>
                </div>
                    </Fade>
            </div>
        </div>
    );
}

export default Contacts;