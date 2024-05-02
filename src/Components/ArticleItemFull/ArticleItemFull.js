import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetSoloArticleQuery } from '../../API/articlesApi';

import ArticleItem from '../ArticleItem/ArticleItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

function ArticleItemFull() {
  const { slug } = useParams();
  const {
    data: articleData,
    error,
    isLoading,
    refetch,
  } = useGetSoloArticleQuery(slug);

  const loading = isLoading ? <Loader /> : null;
  const content = articleData && (
    <ArticleItem article={articleData.article} isFull />
  );
  const errorMessage = error ? <ErrorMessage /> : null;

  useEffect(() => {
    setTimeout(refetch, 500);
  }, []);

  return (
    <>
      {loading}
      {content}
      {errorMessage}
    </>
  );
}

export default ArticleItemFull;
