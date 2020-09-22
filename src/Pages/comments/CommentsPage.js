import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getComments } from '../../services/api';
import Comment from '../../components/comment/Comment';
import styles from './styles.module.scss';
import LeaveCommentForm from '../../components/leaveCommentForm/LeaveComentForm';

const CommentsPage = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const [comments, setComments] = useState([]);

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
        <p>No comments yet</p>
      )}
      <LeaveCommentForm />
    </section>
  );
};

export default CommentsPage;
