import PropTypes from 'prop-types';
import { format } from 'date-fns';

import classes from './UserProfile.module.scss';
import avatar from './avatar.svg';

function UserProfile({ author, isArticle, whenCreated }) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <h2 className={classes.name}>{author.username}</h2>
        {isArticle ? (
          <span className={classes['sub-title']}>
            {format(new Date(whenCreated), 'MMMM d, y')}
          </span>
        ) : null}
      </div>

      <img
        className={classes.img}
        src={author.image ? author.image : avatar}
        alt="avatar"
      />
    </div>
  );
}

UserProfile.defaultProps = {
  author: {},
  whenCreated: '',
};

UserProfile.propTypes = {
  author: PropTypes.object,
  isArticle: PropTypes.bool.isRequired,
  whenCreated: PropTypes.string,
};

export default UserProfile;
