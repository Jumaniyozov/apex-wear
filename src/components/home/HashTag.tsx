import React from 'react';
import styles from './hashTag.scss';
interface props {
  isActive: boolean;
}
const HashTag: React.FC<props> = ({ isActive, category }) => {
  return (
    <button className={isActive ? styles.active : styles.default}>
      {category}
    </button>
  );
};

export default HashTag;
