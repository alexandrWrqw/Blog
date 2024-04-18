import classes from './ArticleTags.module.scss';

function ArticleTags() {
  return (
    <ul className={classes.container}>
      <li className={classes.tag}>ArticleTag</li>
      <li className={classes.tag}>ArticleTag</li>
    </ul>
  );
}

export default ArticleTags;
