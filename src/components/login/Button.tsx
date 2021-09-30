import React, { useEffect, useState } from 'react';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import styles from './button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggingUser, selectUser } from '../../features/users/usersSlice';

const Button: React.FC = (props) => {
  let history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  function handleLoginClick(event) {
    event.preventDefault();
    dispatch(
      fetchLoggingUser({ login: props.login, password: props.password })
    );
  }

  useEffect(() => {
    if (loggedIn) {
      sessionStorage.setItem(
        'uid_warehouse',
        user.result.warehouse.uidWarehouse
      );
      history.push('/home');
    }
  }, [history, loggedIn, user]);

  return (
    <button
      disabled={loading}
      className={styles.button}
      onClick={(event) => handleLoginClick(event)}
    >
      Войти
    </button>
  );
};

export default Button;
