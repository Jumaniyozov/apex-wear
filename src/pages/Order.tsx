import Header from 'components/Header';
import React from 'react';
import styles from './order.scss';
import icon1 from '../../assets/image_1345.png';
import icon2 from '../../assets/image1768.png';
import icon3 from '../../assets/image940.png';
import icon4 from '../../assets/Ellipse150.png';
import icon5 from '../../assets/image1019.png';
import icon6 from '../../assets/image997.png';
import NumberInput from 'components/NumberInput';
import Button from 'components/Button';
function Order() {
  return (
    <div className={styles.order}>
      <Header />
      <div className={styles.container}>
        <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" />
        <div className={styles.container_info}>
          <h2>Толстовка для маль.</h2>
          <p>
            <img src={icon1} className={styles.small_icon} />
            <span>артикул:</span> FK124
          </p>
          <p>
            <img src={icon2} className={styles.small_icon} />
            <span>тип полотна:</span> Двухнитка П/Э
          </p>
          <p>
            <img src={icon3} className={styles.small_icon} />
            <span>размеры:</span> 8-9-10
          </p>
          <p>
            <img src={icon4} className={styles.small_icon} />
            <span>цвет:</span> джинсовый
          </p>
          <p style={{ color: 'black' }}>
            <img src={icon5} className={styles.medium_icon} />
            <span>цена:</span> 36 000 сум
          </p>
          <p style={{ color: 'black' }}>
            <img src={icon6} className={styles.medium_icon} />
            <span>Сумма за пачку:</span> 108 000 сум
          </p>
          <div className={styles.calc}>
            <p>Количество:</p>
            <NumberInput />
          </div>
          <div className={styles.btn}>
            <Button icon={true} title="В карзину" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
        <img
          src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Order;
