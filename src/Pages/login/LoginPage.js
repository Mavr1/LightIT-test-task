import React from 'react';
import AuthForm from '../../components/authForm/AuthForm';
import styles from './styles.module.scss';

const LoginPage = () => {
  return (
    <div className="container">
      <section className={styles.login}>
        <AuthForm />
      </section>
    </div>
  );
};

export default LoginPage;
