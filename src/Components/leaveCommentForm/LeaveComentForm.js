import React, { useState } from 'react';
import Ratings from 'react-ratings-declarative';
import { addComment, getComments } from '../../services/api';
import styles from './styles.module.scss';

const LeaveCommentForm = ({ productId, setComments }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleInput = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToPost = {
      rate: Number(rating),
      text,
    };

    const response = await addComment(productId, commentToPost);

    if (response) {
      const { data } = await getComments(productId);
      setRating(0);
      setText('');
      setComments(data);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <textarea
        className={styles.input}
        value={text}
        onChange={handleInput}
      ></textarea>
      <button type="submit" className={styles.button}>
        Leave comment
      </button>
    </form>
  );
};

export default LeaveCommentForm;
