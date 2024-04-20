import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import classes from './ArticleItem.module.scss';

import ArticleTags from '../ArticleTags/ArticleTags';
import UserProfile from '../UserProfile/UserProfile';
import ArticleLikes from '../ArticleLikes/ArticleLikes';
import ArticleActions from '../ArticleActions/ArticleActions';

function ArticleItem({ article }) {
  const isFull = false;

  const body = isFull ? (
    <Markdown className={classes.description}>{article.body}</Markdown>
  ) : null;

  const title =
    article.title.trim() !== '' ? (
      article.title
    ) : (
      <div className={classes['no-title']}>No title</div>
    );

  return (
    <li className={classes.container}>
      <div className={classes.short}>
        <div className={classes.content}>
          <div className={classes.header}>
            <h3>
              <button className={classes.title} type="button">
                {title}
              </button>
            </h3>

            <ArticleLikes favoritesCount={article.favoritesCount} />
          </div>

          <ArticleTags tags={article.tagList} />

          <p
            style={
              isFull
                ? { color: 'rgba(0, 0, 0, 0.5)' }
                : { color: 'rgba(0, 0, 0, 0.75)' }
            }
          >
            {article.description}
          </p>
        </div>

        <div className={classes.right}>
          <UserProfile author={article.author} />
          {isFull ? <ArticleActions /> : null}
        </div>
      </div>

      {body}
    </li>
  );
}

ArticleItem.defaultProps = {
  article: {},
};

ArticleItem.propTypes = {
  article: PropTypes.object,
};

export default ArticleItem;
