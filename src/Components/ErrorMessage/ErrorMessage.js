import { Alert } from 'antd';

import classes from './ErrorMessage.module.scss';

function ErrorMessage() {
  return (
    <div className={classes.container}>
      <Alert
        message="Error :("
        description="An unexpected error has occurred, try reloading the page, 
          if that doesn’t help, then we’re already looking into the problem"
        type="error"
      />
    </div>
  );
}

export default ErrorMessage;
