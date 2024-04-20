import classes from './Loader.module.scss';

function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader} />
    </div>
  );
}

export default Loader;
