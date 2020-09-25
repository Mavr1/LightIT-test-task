import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import CommentsPage from '../comments/CommentsPage';
import { favoriteAdd, favoriteRemove } from '../../helpers/helpers';
import { Context } from '../../context/ContextProvider';
import { getProducts } from '../../services/api';
import styles from './styles.module.scss';

const ProductDetailsPage = () => {
  const {
    params: { id },
    path,
    url,
  } = useRouteMatch();

  const {
    context: { isAuth },
  } = useContext(Context);

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts()
      .then(({ data }) =>
        setProduct(
          data.find((item) => {
            return item.id.toString() === id;
          })
        )
      )
      .catch((error) => console.error('Error: ', error));
  }, [id]);

  const { title, img, text } = product;

  const uri = 'http://smktesting.herokuapp.com/static/';

  const handleFavorites = () => {
    if (true) {
      favoriteRemove(id);
    } else {
      favoriteAdd(id, isAuth);
    }
  };

  return (
    <section className={styles.productDetails}>
      <div className="container">
        <section className={styles.details}>
          <h1 className={styles.title}>{title}</h1>
          {img && <img className={styles.image} src={uri + img} alt={title} />}
          {
            <button className={styles.btnFavorites} onClick={handleFavorites}>
              Add to Favorites
            </button>
          }
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
