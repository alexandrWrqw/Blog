import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import limitText from '../../tools/limitText/limitText';

import classes from './ArticleItem.module.scss';

import ArticleTags from '../ArticleTags/ArticleTags';
import UserProfile from '../UserProfile/UserProfile';
import ArticleLikes from '../ArticleLikes/ArticleLikes';
import ArticleActions from '../ArticleActions/ArticleActions';

function ArticleItem({ article }) {
  const isFull = false;

  const body = isFull ? (
    <Markdown className={classes.body}>{article.body}</Markdown>
  ) : null;

  const title =
    article.title !== null && article.title.trim() !== '' ? (
      article.title
    ) : (
      <span className={classes['no-content']}>No title</span>
    );

  const description =
    article.description !== null && article.description.trim() !== '' ? (
      article.description
    ) : (
      <span className={classes['no-content']}>No description</span>
    );

  return (
    <li className={classes.container}>
      <div className={classes.short}>
        <div className={classes.content}>
          <div className={classes.header}>
            <h3>
              <button className={classes.title} type="button">
                {limitText(title, 55)}
              </button>
            </h3>

            <ArticleLikes favoritesCount={article.favoritesCount} />
          </div>

          <ArticleTags tags={article.tagList} />

          <p className={classes.description}>{limitText(description, 145)}</p>
        </div>

        <div className={classes.right}>
          <UserProfile
            author={article.author}
            isArticle
            whenCreated={article.createdAt}
          />
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
