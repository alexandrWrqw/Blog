import classes from './CreateArticle.module.scss';

import EditTags from '../EditTags/EditTags';

function CreateArticle() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Create new article</h2>

        <label className={classes.label} htmlFor="text">
          <span>Text</span>
          <textarea
            className={`${classes.field} ${classes.scroll}`}
            id="text"
            placeholder="Text"
            rows={10}
          />
        </label>

        <EditTags />

        <button className={classes.create} type="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
