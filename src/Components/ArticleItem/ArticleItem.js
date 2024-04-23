import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import limitText from '../../tools/limitText/limitText';

import classes from './ArticleItem.module.scss';
// import { useGetSoloArticleQuery } from '../../API/articlesApi';

import ArticleTags from '../ArticleTags/ArticleTags';
import UserProfile from '../UserProfile/UserProfile';
import ArticleLikes from '../ArticleLikes/ArticleLikes';
import ArticleActions from '../ArticleActions/ArticleActions';

function ArticleItem({ article, isFull }) {
  const devFlag = false;

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
              <Link to={`/articles/${article.slug}`}>
                <button className={classes.title} type="button">
                  {isFull ? title : limitText(title, 55)}
                </button>
              </Link>
            </h3>

            <ArticleLikes favoritesCount={article.favoritesCount} />
          </div>

          <ArticleTags tags={article.tagList} isFull={isFull} />

          <p className={classes.description}>
            {isFull ? description : limitText(description, 145)}
          </p>
        </div>

        <div className={classes.right}>
          <UserProfile
            author={article.author}
            isArticle
            whenCreated={article.createdAt}
          />
          {devFlag ? <ArticleActions /> : null}
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
  isFull: PropTypes.bool.isRequired,
};

export default ArticleItem;
