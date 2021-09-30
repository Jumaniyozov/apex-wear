import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import styles from './button.scss';
interface props {
  icon?: boolean;
  title: string;
  onClick: () => void;
}
const Button: React.FC<props> = ({ icon, title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title} {icon && <HiOutlineShoppingCart size={20} />}
    </button>
  );
};

export default Button;
