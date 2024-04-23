import { Link } from 'react-router-dom';

import classes from './HeaderUnauth.module.scss';

function HeaderUnauth() {
  return (
    <div className={classes.container}>
      <button className={classes.in} type="button">
        <Link className={classes.reset} to="/authorization">
          Sign In
        </Link>
      </button>
      <button className={classes.up} type="button">
        Sign Up
      </button>
    </div>
  );
}

export default HeaderUnauth;
