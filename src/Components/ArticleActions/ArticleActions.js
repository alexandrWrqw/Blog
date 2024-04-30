import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDeleteArticleMutation } from '../../API/articlesApi';

import classes from './ArticleActions.module.scss';

function ArticleActions({ slug }) {
  const navigate = useNavigate();

  const [deleteArticle] = useDeleteArticleMutation();

  const onDelete = () => {
    deleteArticle(slug)
      .unwrap()
      .catch((e) => console.log(e));
    navigate(-1);
  };

  return (
    <div className={classes.container}>
      <button className={classes.delete} type="button" onClick={onDelete}>
        Delete
      </button>
      <button className={classes.edit} type="button">
        Edit
      </button>
    </div>
  );
}

ArticleActions.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ArticleActions;
