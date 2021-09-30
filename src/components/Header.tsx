import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { IoDownload, IoPush } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import styles from './header.scss';
interface Props {
  openMenu?: () => void;
}

const Header: React.FC<Props> = ({ openMenu }) => {
  return (
    <div className={styles.header}>
      {openMenu ? (
        <button className={styles.menu} onClick={openMenu}>
          <AiOutlineMenu size={20} />
        </button>
      ) : (
        <NavLink className={styles.menu} to="/home">
          <FiChevronLeft size={20} />
        </NavLink>
      )}
      <div className={styles.search}>
        <input
          className={styles.search_input}
          placeholder="Артикул или название товара..."
        />
        <button className={styles.search_btn}>
          <FiSearch size={20} />
        </button>
      </div>
      <div className={styles.btn_group}>
        <button
          className={`${styles.btn_group_btn} ${styles.btn_group_btn_active}`}
        >
          <IoPush size={20} />
          <p>Продажа</p>
        </button>
        <button className={styles.btn_group_btn}>
          <IoDownload size={30} />
          <p>Перемещение</p>
        </button>
      </div>
      <button className={styles.menu} onClick={() => {}}>
        __
      </button>
      <NavLink className={styles.menu} to="./basket">
        <HiOutlineShoppingBag size={20} />
        <p className={styles.upBag}>2</p>
        <p className={styles.downBag}>2 245 000</p>
      </NavLink>
    </div>
  );
};

export default Header;
