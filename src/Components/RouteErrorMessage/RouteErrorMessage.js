import { useRouteError } from 'react-router-dom';

import classes from './RouteErrorMessage.module.scss';

function RouteErrorMessage() {
  const error = useRouteError();

  return (
    <div className={classes.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default RouteErrorMessage;
