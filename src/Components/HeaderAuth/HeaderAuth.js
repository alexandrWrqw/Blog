import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen as editIcon } from '@fortawesome/free-solid-svg-icons';

import { removeUser } from '../../store/userSlice';

import classes from './HeaderAuth.module.scss';
import UserProfile from '../UserProfile/UserProfile';

function HeaderAuth() {
  const dispatch = useDispatch();
  const removeUserDispatch = () => dispatch(removeUser());

  const { username, image } = useSelector((state) => state.user);

  return (
    <div className={classes.container}>
      <button className={classes['create-art']} type="button">
        Create article
      </button>

      <Link to="profile">
        <button
          className={classes['edit-profile']}
          type="button"
          aria-label="edit profile"
        >
          <FontAwesomeIcon icon={editIcon} className={classes['edit-icon']} />
          <UserProfile user={{ username, image }} isArticle={false} />
        </button>
      </Link>

      <button
        className={classes.out}
        type="button"
        onClick={removeUserDispatch}
      >
        Log Out
      </button>
    </div>
  );
}

export default HeaderAuth;
