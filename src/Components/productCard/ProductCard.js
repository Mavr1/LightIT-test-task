import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const ProductCard = ({ product }) => {
  const { id, title, img } = product;
  const url = 'http://smktesting.herokuapp.com/static/';
  return (
    <li className={styles.productItem}>
      <Link to={{ pathname: `/products/${id}`, state: product }}>
        <img src={url + img} alt={title} />
        <h2 className={styles.title}>{title}</h2>
      </Link>
    </li>
  );
};

export default ProductCard;
