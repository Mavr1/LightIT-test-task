import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/ContextProvider';
import { register, logIn } from '../../services/api';
import styles from './styles.module.scss';

const AuthForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [typeRegister, setTypeRegister] = useState(false);

  const { setContext } = useContext(Context);

  const handleInputUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleInputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleTypeRegister = () => {
    setTypeRegister((currentState) => {
      if (currentState) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regParams = {
      username: userName,
      password,
    };

    if (typeRegister) {
      try {
        const { token, success } = await register(regParams);
        setContext((state) => ({ ...state, isAuth: success, name: userName }));
        localStorage.setItem('auth', JSON.stringify({ token, userName }));
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    } else {
      try {
        const { token, success, message } = await logIn(regParams);
        setContext((state) => ({ ...state, isAuth: success, name: userName }));
        localStorage.setItem('auth', JSON.stringify({ token, userName }));
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        }
        message && alert(message);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>{typeRegister ? 'Register' : 'Log in'}</h2>
      <p className={styles.description}>
        {typeRegister
          ? 'For registration please fill the fields below. Already have an account.'
          : "For log in please fill the fields below. Don't have an account?"}{' '}
        <button
          className={styles.buttonSwitch}
          type="button"
          onClick={handleTypeRegister}
        >
          {typeRegister ? 'Log in' : 'Register'}
        </button>
        .
      </p>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          pattern="(^[A-Za-zА-Яа-яЁё]).{2,}"
          maxLength="30"
          id="name"
          type="text"
          placeholder="Your name"
          name="userName"
          value={userName}
          onChange={handleInputUserName}
          required
          autoFocus
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input + ' ' + styles.inputPassword}
          placeholder="Your password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputPassword}
          minLength="6"
          maxLength="15"
          required
        />
        <div className={styles.authBtnWrapper}>
          <button className={styles.buttonSubmit} type="submit">
            {typeRegister ? 'Register' : 'Log in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
