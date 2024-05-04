import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useSignUpMutation } from '../../API/userApi';
import { setUser } from '../../store/userSlice';

import classes from './SignUpPage.module.scss';
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Loader/Loader';

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUserDispatch = (data) => dispatch(setUser(data));
  const [createAccount, { isLoading }] = useSignUpMutation();

  const methods = useForm({ mode: 'onSubmit' });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = methods;

  const onSubmit = ({ username, email, password }) => {
    const requestData = {
      user: {
        username,
        email,
        password,
      },
    };

    createAccount(requestData)
      .unwrap()
      .then((userData) => {
        setUserDispatch(userData.user);
        localStorage.setItem('token', userData.user.token);

        reset();
        navigate('/');
        window.location.reload();
      })
      .catch((e) => {
        if (e.data.errors.username) {
          setError('username', {
            type: 'busy',
            message: 'Username is already taken',
          });
        }

        if (e.data.errors.email) {
          setError('email', {
            type: 'busy',
            message: 'Email is already taken',
          });
        }
      });
  };

  if (isLoading) return <Loader />;

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
          />

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

export default SignUpPage;
