import React from 'react';
import styles from './input.scss';
interface props {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fromClients?: boolean;
}
const Input: React.FC<props> = ({ label, value, setValue, fromClients }) => {
  return (
    <div className={styles.input}>
      <label style={{ color: fromClients ? '#22252A80' : '#FFFFFF80' }}>
        {label}:
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          backgroundColor: fromClients ? '#F3F3F3' : '#64666A',
          color: fromClients ? '#22252A' : '#FFF',
        }}
      />
    </div>
  );
};

export default Input;
