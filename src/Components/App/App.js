import { Outlet } from 'react-router-dom';

import classes from './App.module.scss';

import Header from '../Header/Header';

function App() {
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
