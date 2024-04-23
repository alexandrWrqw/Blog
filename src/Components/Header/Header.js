import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

import HeaderUnauth from '../HeaderUnauth/HeaderUnauth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

function Header() {
  const devFlag = false;

  return (
    <header className={classes.container}>
      <h1 className={classes.title}>
        <Link className={classes.reset} to="/articles">
          Realworld Blog
        </Link>
      </h1>

      <div>{devFlag ? <HeaderAuth /> : <HeaderUnauth />}</div>
    </header>
  );
}

export default Header;
