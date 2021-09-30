import React from 'react';
import styles from './hashTag.scss';
interface props {
  isActive: boolean;
}
const HashTag: React.FC<props> = ({ isActive }) => {
  return (
    <button className={isActive ? styles.active : styles.default}>
      Футболка
    </button>
  );
};

export default HashTag;
