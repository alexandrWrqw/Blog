import classes from './createInputs.module.scss';

export default function createInputs(arrayLabels) {
  return arrayLabels.map((label) => {
    let inputType;

    switch (label) {
      case 'Password':
      case 'Repeat password':
      case 'New password':
        inputType = 'password';
        break;

      case 'Email address':
        inputType = 'email';
        break;

      case 'Avatar image (url)':
        inputType = 'url';
        break;

      default:
        inputType = 'text';
    }

    return (
      <label key={label} className={classes.label} htmlFor={label}>
        <span>{label}</span>
        <input
          className={classes.field}
          id={label}
          type={inputType}
          placeholder={label}
        />
      </label>
    );
  });
}
