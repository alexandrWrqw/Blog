import classes from './EditProfile.module.scss';

function EditProfile() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Edit profile</h2>

        <label className={classes.label} htmlFor="username">
          <span>Username</span>
          <input
            className={classes.field}
            id="username"
            type="text"
            placeholder="Username"
          />
        </label>

        <label className={classes.label} htmlFor="email">
          <span>Email address</span>
          <input
            className={classes.field}
            id="email"
            type="email"
            placeholder="Email address"
          />
        </label>

        <label className={classes.label} htmlFor="new-password">
          <span>Password</span>
          <input
            className={classes.field}
            id="new-password"
            type="password"
            placeholder="New password"
          />
        </label>

        <label className={classes.label} htmlFor="avatar-url">
          <span>Avatar image (url)</span>
          <input
            className={classes.field}
            id="avatar-url"
            type="url"
            placeholder="Avatar image"
          />
        </label>

        <button className={classes.save} type="button">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
