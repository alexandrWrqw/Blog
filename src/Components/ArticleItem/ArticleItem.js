import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import useAuth from '../../hooks/useAuth';

import classes from './ArticleItem.module.scss';
import limitText from '../../tools/limitText/limitText';

import ArticleTags from '../ArticleTags/ArticleTags';
import UserProfile from '../UserProfile/UserProfile';
import ArticleLikes from '../ArticleLikes/ArticleLikes';
import ArticleActions from '../ArticleActions/ArticleActions';

function ArticleItem({ article, isFull }) {
  const { isAuth, username } = useAuth();
  const navigate = useNavigate();

  const body = isFull ? (
    <ReactMarkdown className={classes.body}>{article.body}</ReactMarkdown>
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
              <button
                className={classes.title}
                type="button"
                onClick={() => navigate(`/articles/${article.slug}`)}
              >
                {isFull ? title : limitText(title, 55)}
              </button>
            </h3>

            <ArticleLikes article={article} />
          </div>

          <ArticleTags tags={article.tagList} isFull={isFull} />

          <p className={classes.description}>
            {isFull ? description : limitText(description, 145)}
          </p>
        </div>

        <div className={classes.right}>
          <UserProfile
            user={article.author}
            isArticle
            whenCreated={article.createdAt}
          />
          {isFull && isAuth && article.author.username === username ? (
            <ArticleActions article={article} />
          ) : null}
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
