import { useParams } from 'react-router-dom';

import ArticleItem from '../ArticleItem/ArticleItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import { useGetSoloArticleQuery } from '../../API/articlesApi';

function ArticleItemFull() {
  const { slug } = useParams();
  const { data: articleData, error, isLoading } = useGetSoloArticleQuery(slug);

  const loading = isLoading ? <Loader /> : null;
  const content = articleData && (
    <ArticleItem article={articleData.article} isFull />
  );
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <>
      {loading}
      {content}
      {errorMessage}
    </>
  );
}

export default ArticleItemFull;
