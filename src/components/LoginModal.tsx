import React, { useState } from 'react';
import Button from './login/Button';
import CustomInput from './login/CustomInput';
import styles from './modal.scss';
import { useSelector } from 'react-redux';

const LoginModal: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const errors = useSelector((state) => state.user.errors);

  return (
    <div className={styles.modal}>
      <h1 className={styles.title}>APEX</h1>
      <CustomInput placeholder="Логин" value={login} setValue={setLogin} />
      <CustomInput
        placeholder="Пароль"
        value={password}
        setValue={setPassword}
      />
      {errors && <p>{errors}</p>}
      <Button login={login} password={password} />
    </div>
  );
};

export default LoginModal;
