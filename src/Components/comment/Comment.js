import React from 'react';
import styles from './styles.module.scss';

const Comment = ({ comment }) => {
  const {
    created_by: { username },
    created_at,
    rate,
    text,
  } = comment;
  const date = new Date(created_at);
  return (
    <article className={styles.comment}>
      <div className={styles.wrapper}>
        <div className={styles.rate}>{rate}</div>
        <p className={styles.author}>{username}</p>
        <p className={styles.date}>{date.toLocaleString()}</p>
      </div>
      <p className={styles.description}>{text}</p>
    </article>
  );
};

export default Comment;
