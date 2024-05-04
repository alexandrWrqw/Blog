import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useSignInMutation } from '../../API/userApi';
import { setUser } from '../../store/userSlice';

import classes from './SignInPage.module.scss';
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Loader/Loader';

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUserDispatch = (data) => dispatch(setUser(data));
  const [loginAccount, { isLoading }] = useSignInMutation();

  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit, reset, setError } = methods;

  const onSubmit = ({ email, password }) => {
    const requestData = {
      user: {
        email,
        password,
      },
    };

    loginAccount(requestData)
      .unwrap()
      .then((userData) => {
        navigate('/');

        setUserDispatch(userData.user);
        localStorage.setItem('token', userData.user.token);

        reset();
        window.location.reload();
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

  if (isLoading) return <Loader />;

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

export default SignInPage;
