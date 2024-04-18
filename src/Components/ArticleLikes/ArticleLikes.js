import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as emptyHeartIcon } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeartIcon } from '@fortawesome/free-solid-svg-icons';

import classes from './ArticleLikes.module.scss';

function ArticleLikes() {
  const devFlag = false;

  const activeLikeIcon = (
    <FontAwesomeIcon icon={filledHeartIcon} className={classes.filled} />
  );

  const likeIcon = (
    <FontAwesomeIcon icon={emptyHeartIcon} className={classes.empty} />
  );

  return (
    <button className={classes.container} type="button">
      {devFlag ? activeLikeIcon : likeIcon}

      <span className={classes.count}>12</span>
    </button>
  );
}

export default ArticleLikes;
