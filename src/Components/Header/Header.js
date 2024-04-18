import classes from './Header.module.scss';

import HeaderUnauth from '../HeaderUnauth/HeaderUnauth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

function Header() {
  const devFlag = true;

  return (
    <header className={classes.container}>
      <h1 className={classes.title}>Realworld Blog</h1>

      <div>{devFlag ? <HeaderAuth /> : <HeaderUnauth />}</div>
    </header>
  );
}

export default Header;
