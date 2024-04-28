import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import classes from './Header.module.scss';

import HeaderUnauth from '../HeaderUnauth/HeaderUnauth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

function Header() {
  const { isAuth } = useAuth();

  return (
    <header className={classes.container}>
      <h1 className={classes.title}>
        <Link className={classes.reset} to="/">
          Realworld Blog
        </Link>
      </h1>

      <div>{isAuth ? <HeaderAuth /> : <HeaderUnauth />}</div>
    </header>
  );
}

export default Header;
