import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useSignUpMutation } from '../../API/userApi';

import classes from './SignUp.module.scss';
import Input from '../Input/Input';

function SignUp() {
  const [alreadyTakenValues, setAlreadyTakenValues] = useState([]);
  const [createAccount] = useSignUpMutation();

  const methods = useForm({ mode: 'onSubmit' });
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async ({ username, email, password }) => {
    const userData = {
      user: {
        username,
        email,
        password,
      },
    };

    try {
      await createAccount(userData).unwrap();

      reset();
      setAlreadyTakenValues([]);
    } catch (e) {
      if (e.data.errors?.username)
        setAlreadyTakenValues((prev) => [...prev, getValues('username')]);

      if (e.data.errors?.email)
        setAlreadyTakenValues((prev) => [...prev, getValues('email')]);
    }
  };

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.title}>Create new account</h2>

          <Input
            label="Username"
            id="username"
            type="text"
            placeholder="Username"
            alreadyTakenValues={alreadyTakenValues}
          />

          <Input
            label="Email address"
            id="email"
            type="email"
            placeholder="Email address"
            alreadyTakenValues={alreadyTakenValues}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
          />

          <Input
            label="Repeat password"
            id="cpassword"
            type="password"
            placeholder="Password"
          />

          <label className={classes['label-agree']} htmlFor="agree">
            <input
              className={classes.checkbox}
              style={errors?.agreement ? { color: '#F5222D' } : null}
              id="agree"
              type="checkbox"
              {...register('agreement', { required: true })}
            />
            <span>I agree to the processing of my personal information</span>
            {errors?.agreement ? (
              <div className={classes.necessarily}>*</div>
            ) : null}
          </label>

          <button className={classes.create} type="submit">
            Create
          </button>

          <p className={classes.text}>
            Already have an account?{' '}
            <Link to="/sign-in">
              <button type="button">Sign In</button>
            </Link>
            .
          </p>
        </form>
      </FormProvider>
    </div>
  );
}

export default SignUp;
