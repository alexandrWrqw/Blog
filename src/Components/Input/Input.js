import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import classes from './Input.module.scss';

function Input({ label, id, type, placeholder }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const options = {
    username: {
      required: 'This is required',
      minLength: {
        value: 3,
        message: 'Your name needs to be at least 3 characters',
      },
      maxLength: {
        value: 20,
        message: 'Your name needs to be at most of 20 characters',
      },
    },

    email: {
      required: 'This is required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Your email address must be valid',
      },
    },

    password: {
      required: 'This is required',
      minLength: {
        value: 6,
        message: 'Your name needs to be at least 6 characters',
      },
      maxLength: {
        value: 40,
        message: 'Your name needs to be at most of 40 characters',
      },
    },

    cpassword: {
      required: 'This is required',
      validate: (value) =>
        watch('password') === value ? true : 'Passwords must match',
    },
  };

  return (
    <label className={classes.container} htmlFor={id}>
      <span>{label}</span>

      <input
        className={classes.field}
        style={errors?.[id] ? { borderColor: '#F5222D' } : null}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, options[id])}
      />

      <p className={classes.error}>{errors?.[id] && errors[id].message}</p>
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
