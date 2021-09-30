import React, { useState } from 'react';
import styles from './numberInput.scss';
interface props {
  isCard?: boolean;
}

const NumberInput: React.FC<props> = ({ isCard }) => {
  const [value, setvalue] = useState<number | string>(0);
  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let str = e.target.value;
    console.log(str);

    if (str === '0' || Number(str) === 0) {
      setvalue('');
    }
    setvalue(parseFloat(str));
  };
  const decrease = () => {
    if (value !== 0) {
      setvalue(Number(value) - 1);
    }
  };
  const increase = () => {
    setvalue(Number(value) + 1);
  };
  console.log(value === NaN, value);
  console.log(typeof value);

  return (
    <div className={isCard ? styles.container_card : styles.container_order}>
      <button className={styles.spinner_button} onClick={decrease}>
        <b>-</b>{' '}
      </button>
      <input
        type="number"
        value={value}
        min="0"
        onChange={(e) => changeNumber(e)}
        onFocus={() => (value === 0 ? setvalue('') : setvalue(value))}
        onBlur={() => {
          Number(value) > 0 ? setvalue(value) : setvalue(0);
        }}
      />
      <button className={styles.spinner_button} onClick={increase}>
        <b>+</b>
      </button>
    </div>
  );
};

export default NumberInput;
