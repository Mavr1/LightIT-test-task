import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Context } from '../../context/ContextProvider';
import Comment from '../../components/comment/Comment';
import LeaveCommentForm from '../../components/leaveCommentForm/LeaveComentForm';
import { getComments } from '../../services/api';
import styles from './styles.module.scss';

const CommentsPage = () => {
  const {
    context: { isAuth },
  } = useContext(Context);

  const {
    params: { id },
  } = useRouteMatch();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id)
      .then(({ data }) => setComments(data))
      .catch((error) => console.error('Error: ', error));
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
      {isAuth && <LeaveCommentForm productId={id} setComments={setComments} />}
    </section>
  );
};

export default CommentsPage;
