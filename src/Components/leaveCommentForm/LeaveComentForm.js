import React, { useState } from 'react';
import Ratings from 'react-ratings-declarative';
import styles from './styles.module.scss';

const LeaveCommentForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <form className={styles.form}>
      <div className={styles.rating}>
        <Ratings
          widgetDimensions={'20px'}
          widgetSpacings={'4px'}
          widgetRatedColors="orange"
          widgetHoverColors="orange"
          rating={rating}
          changeRating={setRating}
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
      </div>
      <textarea className={styles.input}></textarea>
      <button type="submit" className={styles.button}>
        Leave comment
      </button>
    </form>
  );
};

export default LeaveCommentForm;
