import Card from 'components/basket/Card';
import Header from 'components/basket/Header';
import React, { useState } from 'react';
import styles from './basket.scss';
import { FaUserCircle } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import InfoCard from 'components/basket/InfoCard';
import Sale from 'components/basket/Sale';
import PriceInput from 'components/basket/PriceInput';
import Modal from 'react-modal';
import ClientModal from 'components/basket/ClientModal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent',
  },
};
// Modal.setAppElement('#yourAppElement');
function Basket() {
  // let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.basket}>
      <Header />
      <div className={styles.container}>
        <div className={styles.container_left}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.container_right}>
          <button className={styles.user} onClick={openModal}>
            <FaUserCircle size={20} />
            <p>Клиент</p>
            <GrFormClose size={20} color={'#fff'} />
          </button>
          <InfoCard />
          <Sale />
          <PriceInput />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ClientModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default Basket;
