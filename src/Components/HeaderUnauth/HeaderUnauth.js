import { useNavigate } from 'react-router-dom';

import classes from './HeaderUnauth.module.scss';

function HeaderUnauth() {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button
        className={classes.in}
        type="button"
        onClick={() => navigate('/sign-in')}
      >
        Sign In
      </button>

      <button
        className={classes.up}
        type="button"
        onClick={() => navigate('/sign-up')}
      >
        Sign Up
      </button>
    </div>
  );
}

export default HeaderUnauth;
