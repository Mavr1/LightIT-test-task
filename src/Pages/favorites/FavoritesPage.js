import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import { Context } from '../../context/ContextProvider';
import { sortFavorites } from '../../helpers/helpers';
import styles from './styles.module.scss';

const FavoritesPage = () => {
  const {
    context: { products },
  } = useContext(Context);

  const { url } = useRouteMatch();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = sortFavorites(products);
    setFavorites(favorites);
  }, [products]);

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.title}>Your favorites Products</h1>
        <ul className={styles.productsList}>
          {favorites?.map((item) => (
            <ProductCard key={item.id} product={item} pathUrl={url} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FavoritesPage;
