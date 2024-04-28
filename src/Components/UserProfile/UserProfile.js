import PropTypes from 'prop-types';
import { format } from 'date-fns';

import classes from './UserProfile.module.scss';

function UserProfile({ user, isArticle, whenCreated }) {
  const defaultAvatar =
    'https://static.productionready.io/images/smiley-cyrus.jpg';

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <h2 className={classes.name}>{user.username}</h2>

        {isArticle ? (
          <span className={classes['sub-title']}>
            {format(new Date(whenCreated), 'MMMM d, y')}
          </span>
        ) : null}
      </div>

      <img
        className={classes.img}
        src={user.image ? user.image : defaultAvatar}
        alt="avatar"
      />
    </div>
  );
}

UserProfile.defaultProps = {
  user: {},
  whenCreated: '',
};

UserProfile.propTypes = {
  user: PropTypes.object,
  isArticle: PropTypes.bool.isRequired,
  whenCreated: PropTypes.string,
};

export default UserProfile;
