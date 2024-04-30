import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen as editIcon } from '@fortawesome/free-solid-svg-icons';

import { removeUser } from '../../store/userSlice';
import useAuth from '../../hooks/useAuth';

import classes from './HeaderAuth.module.scss';
import UserProfile from '../UserProfile/UserProfile';

function HeaderAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, image } = useAuth();

  const removeUserDispatch = () => dispatch(removeUser());

  const logOut = () => {
    removeUserDispatch();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className={classes.container}>
      <Link to="/new-article">
        <button className={classes['create-art']} type="button">
          Create article
        </button>
      </Link>

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

      <button className={classes.out} type="button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default HeaderAuth;
