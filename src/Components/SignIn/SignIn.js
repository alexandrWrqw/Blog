import classes from './SignIn.module.scss';
import createInputs from '../../tools/createInputs/createInputs';

function SignIn() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Sign In</h2>

        {createInputs(['Email address', 'Password'])}

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
