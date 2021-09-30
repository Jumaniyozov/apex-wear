import Button from 'components/Button';
import Search from 'components/checks/Search';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import ClientCard from './ClientCard';
import styles from './clientModal.scss';
import Input from './Input';

interface props {
  closeModal: () => void;
}

const ClientModal: React.FC<props> = ({ closeModal }) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  return (
    <div className={styles.client_modal}>
      <div className={styles.close}>
        <button onClick={closeModal}>
          <AiOutlineClose size={20} color={'#fff'} />
        </button>
      </div>

      <div className={styles.nav_buttons}>
        <button
          className={isCreate ? '' : styles.active_button}
          onClick={() => setIsCreate(false)}
        >
          Клиенты <hr />
        </button>
        <button
          className={isCreate ? styles.active_button : ''}
          onClick={() => setIsCreate(true)}
        >
          Новый клиент <hr />
        </button>
      </div>
      <div
        className={styles.container}
        style={{ display: isCreate ? 'none' : 'block' }}
      >
        <Search />
        <div className={styles.container_scroll}>
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
      <div style={{ display: !isCreate ? 'none' : 'block' }}>
        <div className={styles.create}>
          <FaUserCircle size={98} color={'#fff'} />
        </div>
        <Input label="Имя" value={name} setValue={setName} />
        <Input label="Номер" value={number} setValue={setNumber} />
        <div className={styles.button}>
          <Button title="Сохронить" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
