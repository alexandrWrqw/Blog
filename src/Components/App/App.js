import classes from './App.module.scss';

import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import ArticleItem from '../ArticleItem/ArticleItem';

function App() {
  const devFlag = false;

  return (
    <div className={classes.container}>
      <Header />

      <section className={classes.content}>
        {devFlag ? <ArticleList /> : null}
        <ArticleItem />
      </section>
    </div>
  );
}

export default App;
