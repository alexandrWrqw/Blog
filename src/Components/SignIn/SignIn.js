import { useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useSignInMutation } from '../../API/userApi';
import { setUser } from '../../store/userSlice';

import Input from '../Input/Input';
import classes from './SignIn.module.scss';

function SignIn() {
  const [loginAccount] = useSignInMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const setUserDispatch = (data) => dispatch(setUser(data));

  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit, reset, setError } = methods;

  const onSubmit = ({ email, password }) => {
    const user = {
      user: {
        email,
        password,
      },
    };

    loginAccount(user)
      .unwrap()
      .then((userData) => {
        setUserDispatch(userData.user);
        reset();
        navigate('/');
      })
      .catch(() => {
        setError('email', {
          type: 'invalid',
          message: 'Email or password is invalid',
        });
        setError('password', {
          type: 'invalid',
          message: 'Email or password is invalid',
        });
      });
  };

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.title}>Sign In</h2>

          <Input
            label="Email address"
            id="email"
            type="email"
            placeholder="Email address"
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
          />

          <button className={classes.login} type="submit">
            Login
          </button>

          <p className={classes.text}>
            Don’t have an account?{' '}
            <Link to="/sign-up">
              <button type="button">Sign Up</button>
            </Link>
            .
          </p>
        </form>
      </FormProvider>
    </div>
  );
}

export default SignIn;
