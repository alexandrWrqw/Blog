import classes from './App.module.scss';

import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import ArticleItem from '../ArticleItem/ArticleItem';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import EditProfile from '../EditProfile/EditProfile';

function App() {
  const devFlag = false;
  const devFlag2 = false;
  const devFlag3 = false;
  const devFlag4 = false;
  const devFlag5 = false;

  return (
    <div className={classes.container}>
      <Header />

      <section className={classes.content}>
        {devFlag ? <ArticleList /> : null}
        {devFlag2 ? <ArticleItem /> : null}
        {devFlag3 ? <SignUp /> : null}
        {devFlag4 ? <SignIn /> : null}
        {devFlag5 ? <EditProfile /> : null}
      </section>
    </div>
  );
}

export default App;
