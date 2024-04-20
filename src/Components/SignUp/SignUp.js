import classes from './SignUp.module.scss';

import createInputs from '../../tools/createInputs/createInputs';

function SignUp() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Create new account</h2>

        {createInputs([
          'Username',
          'Email address',
          'Password',
          'Repeat password',
        ])}

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
