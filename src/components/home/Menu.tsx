import React, { useEffect } from 'react';
import styles from './menu.scss';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineTicket } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/users/usersSlice';

function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleLogoutClick = (e) => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (!loggedIn) {
      sessionStorage.removeItem('uid_warehouse');
      sessionStorage.removeItem('userToken');
      history.push('/');
    }
  }, [history, loggedIn]);

  return (
    <div className={styles.menu}>
      <h1>Достон</h1>
      <hr />
      <ul>
        <NavLink to="/clients">
          <li>
            <RiContactsLine size={26} /> <p>Клиенты</p>
          </li>
        </NavLink>
        <NavLink to="/checks">
          <li>
            <HiOutlineTicket size={26} /> <p>Чеки</p>
          </li>
        </NavLink>
        <button onClick={handleLogoutClick}>
          <li className={styles.quit}>
            <BiLogOut size={26} /> <p>Выйти</p>
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Menu;
