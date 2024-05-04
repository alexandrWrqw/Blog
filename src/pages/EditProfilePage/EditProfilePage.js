import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useUpdateUserMutation } from '../../API/userApi';
import { setUser } from '../../store/userSlice';
import useAuth from '../../hooks/useAuth';

import classes from './EditProfilePage.module.scss';
import Input from '../../Components/Input/Input';
import Loader from '../../Components/Loader/Loader';

function EditProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editAccount, { isLoading }] = useUpdateUserMutation();
  const {
    username: defaultUserName,
    email: defaultEmail,
    image: defaultImage,
  } = useAuth();

  const updateUserDispatch = (data) => dispatch(setUser(data));

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      username: defaultUserName,
      email: defaultEmail,
      image: defaultImage,
    },
  });
  const { handleSubmit, reset, setError } = methods;

  const onSubmit = ({ username, email, password, image }) => {
    const requestData = {
      user: {
        username,
        email,
        password,
        image,
      },
    };

    editAccount(requestData)
      .unwrap()
      .then((editedData) => {
        updateUserDispatch(editedData.user);

        reset();
        navigate('/');
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
          <h2 className={classes.title}>Edit profile</h2>

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
            label="New password"
            id="password"
            type="password"
            placeholder="Password"
          />

          <Input
            label="Avatar image (url)"
            id="image"
            type="url"
            placeholder="Avatar image"
          />

          <button className={classes.save} type="submit">
            Save
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default EditProfilePage;
