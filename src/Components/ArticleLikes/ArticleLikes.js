import { useEffect, useState } from 'react';
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
  const [liked, setLiked] = useState(favorited);
  const [count, setCount] = useState();

  const [setLike] = useSetFavoriteArticleMutation();
  const [deleteLike] = useDeleteFavoriteArticleMutation();

  const handleClick = () => {
    if (liked) {
      deleteLike(slug);
      setLiked(false);

      setCount((prev) => prev - 1);
    } else {
      setLike(slug);
      setLiked(true);

      setCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCount(favoritesCount);
  }, []);

  const activeLikeIcon = (
    <FontAwesomeIcon icon={filledHeartIcon} className={classes.filled} />
  );

  const likeIcon = (
    <FontAwesomeIcon icon={emptyHeartIcon} className={classes.empty} />
  );

  const styles = isAuth
    ? `${classes.container} ${classes['container-hover']}`
    : `${classes.container}`;

  return (
    <button
      className={styles}
      type="button"
      disabled={!isAuth}
      onClick={handleClick}
    >
      {liked ? activeLikeIcon : likeIcon}

      <span className={classes.count}>{count}</span>
    </button>
  );
}

ArticleLikes.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleLikes;
