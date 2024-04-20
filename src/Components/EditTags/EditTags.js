import classes from './EditTags.module.scss';

function EditTags() {
  return (
    <label className={classes.container} htmlFor="tag">
      <span className={classes.title}>Tags</span>

      <div className={classes['added-tags']}>
        <input className={classes.field} value="added tag" disabled />
        <button className={classes.delete} type="button">
          Delete
        </button>
      </div>

      <div className={classes['add-tag']}>
        <input className={classes.field} id="tag" placeholder="tag" />
        <button className={classes.add} type="button">
          Add tag
        </button>
      </div>
    </label>
  );
}

export default EditTags;
