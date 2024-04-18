import classes from './HeaderUnauth.module.scss';

function HeaderUnauth() {
  return (
    <div className={classes.container}>
      <button className={classes.in} type="button">
        Sign In
      </button>
      <button className={classes.up} type="button">
        Sign Up
      </button>
    </div>
  );
}

export default HeaderUnauth;
