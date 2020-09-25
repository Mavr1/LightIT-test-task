import React, { useContext } from 'react';
import styles from './styles.module.scss';
import ProductCard from '../../components/productCard/ProductCard';
import { useRouteMatch } from 'react-router-dom';
import { Context } from '../../context/ContextProvider';

const ProductsPage = () => {
  const {
    context: { products },
  } = useContext(Context);

  const { url } = useRouteMatch();

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.title}>Our Products</h1>
        <ul className={styles.productsList}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} pathUrl={url} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;
