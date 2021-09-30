import Input from 'components/basket/Input';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './clients_card.scss';

function ClientsCard() {
  return (
    <div className={styles.card}>
      <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" />
      <div>
        <h1>Достон</h1>
        <p>+998 93 584 30 25</p>
      </div>
      <button className={styles.close_btn}>
        <AiFillCloseCircle size={24} color={'#FF5D47'} />
      </button>
    </div>
  );
}

export default ClientsCard;
