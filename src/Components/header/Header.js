import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={['container', styles.headerContainer].join(' ')}>
        <div className={styles.logo}>logo</div>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            {routes.map((item) => {
              console.log('item :>> ', item);
              return (
                item.inNavmenu && (
                  <li key={item.label} className={styles.navItem}>
                    <NavLink
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
      </div>
    </header>
  );
};

export default Header;
