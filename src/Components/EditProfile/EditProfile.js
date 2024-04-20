import classes from './EditProfile.module.scss';
import createInputs from '../../tools/createInputs/createInputs';

function EditProfile() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h2 className={classes.title}>Edit profile</h2>

        {createInputs([
          'Username',
          'Email address',
          'New password',
          'Avatar image (url)',
        ])}

        <button className={classes.save} type="button">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
