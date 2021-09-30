import React from 'react';

import styles from './input.scss';

interface IProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput: React.FC<IProps> = ({ placeholder, value, setValue }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      className={styles.input}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default CustomInput;
