import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import { getProducts } from '../../services/api';
import styles from './styles.module.scss';

const FavoritesPage = () => {
  const { url } = useRouteMatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(({ data }) => setProducts(data))
      .catch((error) => console.error('Error: ', error));
  }, []);

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.title}>Your favorites Products</h1>
        <ul className={styles.productsList}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} pathUrl={url} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FavoritesPage;
