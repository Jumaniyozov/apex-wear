import NumberInput from 'components/NumberInput';
import React from 'react';
import styles from './card.scss';

function Card() {
  return (
    <div className={styles.card}>
      <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" />
      <div>
        <h2>Толстовка для маль (джинсовый)</h2>
        <p>артикул: FK124</p>
        <div className={styles.calc}>
          <NumberInput isCard={true} />
          <p>36 000 сум</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
