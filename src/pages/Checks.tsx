import Button from 'components/Button';
import Check from 'components/checks/Check';
import Search from 'components/checks/Search';
import React from 'react';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styles from './checks.scss';

function Checks() {
  return (
    <div className={styles.checks}>
      <div className={styles.checks_left}>
        <div className={styles.nav}>
          <NavLink to="/home" className={styles.back}>
            <FiChevronLeft size={20} />
          </NavLink>
          <h1>Чеки</h1>
        </div>
        <div className={styles.check}>
          <h1>Чек №021</h1>
          <div>
            <p>Комплект для маль. (красный)</p>
            <p>2 шт</p>
          </div>
          <div>
            <p>Безрукавка вязанная</p>
            <p>2 шт</p>
          </div>
        </div>
        <div className={styles.btn}>
          <Button title="Распечатка" onClick={() => {}} />
        </div>
      </div>
      <div className={styles.checks_right}>
        <Search />

        <div className={styles.container}>
          <p>31.08.2021</p>
          <Check />
        </div>
      </div>
    </div>
  );
}

export default Checks;
