import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContextProvider';
import Logo from '../logo/Logo';
import routes from '../../routes';
import styles from './styles.module.scss';

const Header = () => {
  const isAuth = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={['container', styles.headerContainer].join(' ')}>
        <Logo />
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {routes.map((item) => {
              return (
                item.inNavmenu && (
                  <li key={item.label} className={styles.navItem}>
                    <NavLink
                      exact={item.exact}
                      to={item.path}
                      className={styles.link}
                      activeClassName={styles.activeLink}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              );
            })}
          </ul>
        </nav>
        {isAuth ? (
          <div className={styles.userMenu}>User Menu</div>
        ) : (
          <div className={styles.loginLink}>
            <Link to={'/login'}>Login | Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;