import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContextProvider';
import Comment from '../../components/comment/Comment';
import LeaveCommentForm from '../../components/leaveCommentForm/LeaveComentForm';
import { getComments } from '../../services/api';
import styles from './styles.module.scss';

const CommentsPage = () => {
  const {
    auth: { isAuth },
  } = useContext(AuthContext);

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
      {isAuth && <LeaveCommentForm />}
    </section>
  );
};

export default CommentsPage;
