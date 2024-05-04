// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as emptyHeartIcon } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeartIcon } from '@fortawesome/free-solid-svg-icons';

import useAuth from '../../hooks/useAuth';
import {
  useSetFavoriteArticleMutation,
  useDeleteFavoriteArticleMutation,
} from '../../API/articlesApi';

import classes from './ArticleLikes.module.scss';

function ArticleLikes({ article }) {
  const { isAuth } = useAuth();

  const { slug, favorited, favoritesCount } = article;

  const [setLike] = useSetFavoriteArticleMutation();
  const [deleteLike] = useDeleteFavoriteArticleMutation();

  const handleClick = () => {
    if (favorited) {
      deleteLike(slug);
    } else {
      setLike(slug);
    }
  };

  const activeLikeIcon = (
    <FontAwesomeIcon icon={filledHeartIcon} className={classes.filled} />
  );

  const likeIcon = (
    <FontAwesomeIcon icon={emptyHeartIcon} className={classes.empty} />
  );

  const styles = isAuth
    ? `${classes.container} ${classes['container-active']}`
    : `${classes.container}`;

  return (
    <button
      className={styles}
      type="button"
      disabled={!isAuth}
      onClick={handleClick}
    >
      {favorited ? activeLikeIcon : likeIcon}

      <span className={classes.count}>{favoritesCount}</span>
    </button>
  );
}

ArticleLikes.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleLikes;
