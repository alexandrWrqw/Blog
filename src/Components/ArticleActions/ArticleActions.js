import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDeleteArticleMutation } from '../../API/articlesApi';

import classes from './ArticleActions.module.scss';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

function ArticleActions({ article }) {
  const { slug } = article;

  const navigate = useNavigate();
  const [deleteArticle] = useDeleteArticleMutation();
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef(null);

  const onDelete = () => {
    deleteArticle(slug);
    navigate(-1);
  };

  const moveEdit = () => {
    navigate(`/article/${slug}/edit`, { state: article });
  };

  const handleClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes['delete-container']}>
        <button
          className={classes.delete}
          type="button"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>

        <ConfirmModal
          ref={modalRef}
          showModal={showModal}
          setShowModal={setShowModal}
          onDelete={onDelete}
        />
      </div>

      <button className={classes.edit} type="button" onClick={moveEdit}>
        Edit
      </button>
    </div>
  );
}

ArticleActions.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleActions;
