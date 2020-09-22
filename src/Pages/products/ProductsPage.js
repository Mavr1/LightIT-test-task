import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getProducts } from '../../services/api';
import ProductCard from '../../components/productCard/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => setProducts(data));
  }, []);

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.title}>Our Products</h1>
        <ul className={styles.productsList}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;
