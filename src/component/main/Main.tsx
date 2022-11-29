import React from 'react';
import s from './Main.module.css'
import container from '../../common/styles/Style.module.css'

function Main() {
    return (
      <div className={`${s.main} ${container.container}`}>
          <div className={s.info}>
              <span>Приветствие</span>
              <h1>Меня зовут Александр</h1>
              <p>Я frontend - разработчик</p>
          </div>
          <div className={s.photo}></div>
      </div>
    );
}

export default Main;