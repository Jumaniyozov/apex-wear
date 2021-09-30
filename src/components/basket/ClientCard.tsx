import React from 'react';
import styles from './clientCard.scss';

function ClientCard() {
  return (
    <div className={styles.client_card}>
      <img
        src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
        alt="Very-Sad-Image"
      />
      <div>
        <h1>Достон</h1>
        <p>+998 93 584 30 25</p>
      </div>
    </div>
  );
}

export default ClientCard;
