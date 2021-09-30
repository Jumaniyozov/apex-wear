import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './search.scss';

function Search() {
  return (
    <div className={styles.checks_right_search}>
      <input placeholder="Поиск ..." />
      <FiSearch size={20} />
    </div>
  );
}

export default Search;
