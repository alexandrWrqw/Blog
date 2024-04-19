import classes from './SignIn.module.scss';

function SignIn() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Sign In</h2>

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

        <button className={classes.login} type="button">
          Login
        </button>

        <p className={classes.text}>
          Don’t have an account? <button type="button">Sign Up</button>.
        </p>
      </form>
    </div>
  );
}

export default SignIn;
