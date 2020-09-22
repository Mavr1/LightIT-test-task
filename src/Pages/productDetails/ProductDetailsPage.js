import React, { useEffect, useState } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import CommentsPage from '../comments/CommentsPage';
import { getProducts } from '../../services/api';
import styles from './styles.module.scss';

const ProductDetailsPage = () => {
  const {
    params: { id },
    path,
    url,
  } = useRouteMatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts().then(({ data }) =>
      setProduct(
        data.find((item) => {
          return item.id.toString() === id;
        })
      )
    );
  }, [id]);

  const { title, img, text } = product;

  const uri = 'http://smktesting.herokuapp.com/static/';

  return (
    <section className={styles.productDetails}>
      <div className="container">
        <section className={styles.details}>
          <h1 className={styles.title}>{title}</h1>
          {img && <img className={styles.image} src={uri + img} alt={title} />}
          <h2 className={styles.descriptionTitle}>Product description</h2>
          <p className={styles.description}>{text}</p>
        </section>
        <section className={styles.comments}>
          <NavLink className={styles.commentsTitle} to={`${url}/comments`}>
            Comments
          </NavLink>
          <Route path={`${path}/comments`} component={CommentsPage} />
        </section>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
