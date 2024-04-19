import classes from './SignUp.module.scss';

function SignUp() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Create new account</h2>

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

        <label className={classes.label} htmlFor="password">
          <span>Password</span>
          <input
            className={classes.field}
            id="password"
            type="password"
            placeholder="Password"
          />
        </label>

        <label className={classes.label} htmlFor="repeat-password">
          <span>Repeat Password</span>
          <input
            className={classes.field}
            id="repeat-password"
            type="password"
            placeholder="Password"
          />
        </label>

        <label className={classes['label-agree']} htmlFor="agree">
          <input className={classes.checkbox} id="agree" type="checkbox" />
          <span>I agree to the processing of my personal information</span>
        </label>

        <button className={classes.create} type="button">
          Create
        </button>

        <p className={classes.text}>
          Already have an account? <button type="button">Sign In</button>.
        </p>
      </form>
    </div>
  );
}

export default SignUp;
