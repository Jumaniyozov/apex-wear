import Input from 'components/basket/Input';
import Button from 'components/Button';
import Search from 'components/checks/Search';
import ClientsCard from 'components/clients/ClientsCard';
import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiChevronLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styles from './clients.scss';

function Clients() {
  const [create, setCreate] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <div className={styles.clients}>
      <div className={styles.clients_left}>
        <div className={styles.nav}>
          <NavLink to="/home" className={styles.back}>
            <FiChevronLeft size={20} />
          </NavLink>
          <h1>Чеки</h1>
        </div>
        <div
          className={styles.create_btn}
          style={{ display: create ? 'none' : 'block' }}
        >
          <button onClick={() => setCreate(true)}>
            <AiFillPlusCircle size={165} color={'#F0B826'} />
          </button>
        </div>
        <div
          className={styles.create}
          style={{ display: !create ? 'none' : 'block' }}
        >
          <div className={styles.avatar}>
            <img
              src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"
              alt=""
            />
            <AiFillPlusCircle
              size={60}
              color={'#F0B826'}
              className={styles.plus}
            />
          </div>
          <Input
            label="Имя"
            fromClients={true}
            value={name}
            setValue={setName}
          />
          <Input
            label="Номер"
            fromClients={true}
            value={number}
            setValue={setNumber}
          />
          <div className={styles.done_btn}>
            <Button title="Сохронить" onClick={() => setCreate(false)} />
          </div>
        </div>
      </div>
      <div className={styles.clients_right}>
        <Search />
        <div className={styles.container}>
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
          <ClientsCard />
        </div>
      </div>
    </div>
  );
}

export default Clients;
