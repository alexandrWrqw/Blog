import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import classes from './ArticleForm.module.scss';
import EditTags from '../EditTags/EditTags';
import Input from '../Input/Input';

function ArticleForm({ submit, edit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form className={classes.form} onSubmit={handleSubmit(submit)}>
      <h2 className={classes.title}>
        {edit ? 'Edit article' : 'Create new article'}
      </h2>

      <Input label="Title" id="title" type="text" placeholder="Title" />

      <Input
        label="Short description"
        id="description"
        type="text"
        placeholder="Description"
      />

      <label className={classes.label} htmlFor="body">
        <span>Text</span>

        <textarea
          className={`${classes.field} ${classes.scroll}`}
          style={errors?.text ? { borderColor: '#F5222D' } : null}
          id="body"
          placeholder="Text"
          rows={10}
          {...register('body', { required: 'This is required' })}
        />

        <p className={classes.error}>{errors?.body && errors.body.message}</p>
      </label>

      <EditTags />

      <button className={classes.create} type="submit">
        Send
      </button>
    </form>
  );
}

ArticleForm.propTypes = {
  submit: PropTypes.func.isRequired,
  edit: PropTypes.bool,
};

ArticleForm.defaultProps = {
  edit: false,
};

export default ArticleForm;
