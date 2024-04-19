import Markdown from 'react-markdown';

import classes from './ArticleItem.module.scss';

import ArticleTags from '../ArticleTags/ArticleTags';
import UserProfile from '../UserProfile/UserProfile';
import ArticleLikes from '../ArticleLikes/ArticleLikes';
import ArticleActions from '../ArticleActions/ArticleActions';

function ArticleItem() {
  const isFull = false;

  const fullContent = isFull ? (
    <Markdown className={classes.description}>Markdown</Markdown>
  ) : null;

  return (
    <li className={classes.container}>
      <div className={classes.short}>
        <div className={classes.content}>
          <div className={classes.header}>
            <h3>
              <button className={classes.title} type="button">
                Article title
              </button>
            </h3>

            <ArticleLikes />
          </div>

          <ArticleTags />

          <p
            style={
              isFull
                ? { color: 'rgba(0, 0, 0, 0.5)' }
                : { color: 'rgba(0, 0, 0, 0.75)' }
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className={classes.right}>
          <UserProfile />
          {isFull ? <ArticleActions /> : null}
        </div>
      </div>

      {fullContent}
    </li>
  );
}
export default ArticleItem;
