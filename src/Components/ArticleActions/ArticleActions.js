import classes from './ArticleActions.module.scss';

function ArticleActions() {
  return (
    <div className={classes.container}>
      <button className={classes.delete} type="button">
        Delete
      </button>
      <button className={classes.edit} type="button">
        Edit
      </button>
    </div>
  );
}

export default ArticleActions;
