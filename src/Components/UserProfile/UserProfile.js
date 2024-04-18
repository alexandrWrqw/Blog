import classes from './UserProfile.module.scss';
import avatar from './avatar.svg';

function UserProfile() {
  const devFlag = false;

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <h2 className={classes.title}>John Doe</h2>
        {devFlag ? (
          <span className={classes['sub-title']}>March 5, 2020</span>
        ) : null}
      </div>

      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default UserProfile;
