import React, { useEffect, useState } from 'react';
import Ratings from 'react-ratings-declarative';
import { useRouteMatch } from 'react-router-dom';
import { getComments } from '../../services/api';
import Comment from '../../components/comment/Comment';
import styles from './styles.module.scss';

const CommentsPage = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    getComments(id).then(({ data }) => setComments(data));
  }, [id]);

  return (
    <section className={styles.wrapper}>
      {comments.length ? (
        <ul className={styles.commentsList}>
          {comments.map((item) => (
            <Comment key={item.id} comment={item} />
          ))}
        </ul>
      ) : (
        <h3>No comments yet</h3>
      )}
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
    </section>
  );
};

export default CommentsPage;
