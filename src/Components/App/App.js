import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useGetUserQuery } from '../../API/userApi';
import { setUser } from '../../store/userSlice';

import classes from './App.module.scss';
import Header from '../Header/Header';

function App() {
  const dispatch = useDispatch();

  const { data: userData, isLoading } = useGetUserQuery();
  const setUserDispatch = (data) => dispatch(setUser(data));

  useEffect(() => {
    if (!isLoading && localStorage.getItem('token')) {
      setUserDispatch(userData.user);
    }
  }, [isLoading]);

  return (
    <div className={classes.container}>
      <Header />

      <section className={classes.content}>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
