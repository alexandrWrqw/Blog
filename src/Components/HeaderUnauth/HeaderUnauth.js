import { Link } from 'react-router-dom';

import classes from './HeaderUnauth.module.scss';

function HeaderUnauth() {
  return (
    <div className={classes.container}>
      <Link className={classes.reset} to="/authorization">
        <button className={classes.in} type="button">
          Sign In
        </button>
      </Link>

      <Link className={classes.reset} to="/registration">
        <button className={classes.up} type="button">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default HeaderUnauth;
