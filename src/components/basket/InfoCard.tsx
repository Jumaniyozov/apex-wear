import React from 'react';
import style from './infoCard.scss';

function InfoCard() {
  return (
    <div className={style.info_card}>
      <h1>Корзина</h1>
      <div className={style.row}>
        <p>Комплект для маль. (красный)</p>
        <p>2 шт</p>
      </div>
      <div className={style.row}>
        <p>Комплект для маль. (красный)</p>
        <p>2 шт</p>
      </div>
      <p>Скидка 3%</p>
      <button>
        <p>продать</p>
        <p>158 000 сум</p>
      </button>
    </div>
  );
}

export default InfoCard;
