import { useParams } from 'react-router-dom';

import { useGetSoloArticleQuery } from '../../API/articlesApi';

import ArticleItem from '../../Components/ArticleItem/ArticleItem';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import Loader from '../../Components/Loader/Loader';

function ArticlePage() {
  const { slug } = useParams();
  const {
    data: articleData,
    error,
    isLoading,
  } = useGetSoloArticleQuery(slug, { refetchOnMountOrArgChange: true });

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

export default ArticlePage;
