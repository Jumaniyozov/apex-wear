import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import styles from '../header.scss';
import { FiChevronLeft } from 'react-icons/fi';

// interface Props {}

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/home" className={styles.menu}>
        <FiChevronLeft size={20} />
      </NavLink>
      <div className={styles.title}>
        <h1>Корзина</h1>
      </div>
      <Link className={styles.menu} to="/checks">
        __
      </Link>
      <button className={styles.menu}>
        <HiOutlineShoppingBag size={20} />
        <p className={styles.upBag}>2</p>
        <p className={styles.downBag}>2 245 000</p>
      </button>
    </div>
  );
};

export default Header;
