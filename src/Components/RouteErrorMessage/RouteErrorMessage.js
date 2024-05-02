import { useRouteError } from 'react-router-dom';

import classes from './RouteErrorMessage.module.scss';

function RouteErrorMessage() {
  const error = useRouteError();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Oops!</h1>
      <p className={classes.text}>This page does not exist..</p>
      <p className={classes.message}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default RouteErrorMessage;
