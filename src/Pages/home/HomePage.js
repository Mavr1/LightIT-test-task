import React from 'react';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>The best platform for growing sales</h1>
          <h2 className={styles.subTitle}>
            Put your customers at the heart of your business
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nulla repudiandae rerum qui. Labore suscipit nostrum sunt minus
            voluptate? Porro!
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            vero aut quibusdam, molestiae ipsa accusamus! Nulla officia quae
            similique architecto, sed laboriosam perspiciatis beatae sint
            impedit est, iusto asperiores! Soluta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
