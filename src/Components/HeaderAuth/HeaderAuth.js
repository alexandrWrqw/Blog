import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen as editIcon } from '@fortawesome/free-solid-svg-icons';

import classes from './HeaderAuth.module.scss';

import UserProfile from '../UserProfile/UserProfile';

function HeaderAuth() {
  return (
    <div className={classes.container}>
      <button className={classes['create-art']} type="button">
        Create article
      </button>

      <button
        className={classes['edit-profile']}
        type="button"
        aria-label="edit profile"
      >
        <FontAwesomeIcon icon={editIcon} className={classes['edit-icon']} />
        <UserProfile author={{ username: 'Alexandr' }} isArticle={false} />
      </button>

      <button className={classes.out} type="button">
        Log Out
      </button>
    </div>
  );
}

export default HeaderAuth;
