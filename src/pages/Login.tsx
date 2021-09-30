import LoginModal from 'components/LoginModal';
import React, { useState } from 'react';
import styles from './login.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginModal />
    </div>
  );
};

export default Login;
