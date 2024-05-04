import PropTypes from 'prop-types';

import classes from './Loader.module.scss';

function Loader({ styles }) {
  return (
    <div className={classes.container}>
      <div className={classes.loader} style={styles} />
    </div>
  );
}

Loader.defaultProps = {
  styles: {},
};

Loader.propTypes = {
  styles: PropTypes.object,
};

export default Loader;
