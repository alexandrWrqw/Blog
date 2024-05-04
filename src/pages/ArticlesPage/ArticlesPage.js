import { useNavigate, useSearchParams } from 'react-router-dom';

import { Pagination } from 'antd';
import { useGetAllArticlesQuery } from '../../API/articlesApi';

import classes from './ArticlesPage.module.scss';

import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import ArticleItem from '../../Components/ArticleItem/ArticleItem';
import Loader from '../../Components/Loader/Loader';

function ArticlesPage() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  const offset = (page - 1) * 5; // пропускать по 5 статей, начиная со 2 страницы
  const {
    data: articlesData,
    error,
    isLoading,
  } = useGetAllArticlesQuery(offset, {
    refetchOnMountOrArgChange: true,
  });

  const onChange = (value) => {
    navigate('/articles');
    setSearchParams({ ...searchParams, page: value });
  };

  const articles = articlesData && articlesData.articles;
  const articlesCount = articlesData && articlesData.articlesCount;

  const content =
    articlesData &&
    articles.map((article) => (
      <ArticleItem key={article.slug} article={article} isFull={false} />
    ));

  const pagination = articlesData && (
    <Pagination
      className={classes.pagination}
      showSizeChanger={false}
      total={articlesCount}
      hideOnSinglePage
      pageSize={5}
      current={page}
      onChange={onChange}
    />
  );

  const loading = isLoading ? <Loader /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <ul className={classes.container}>
      {loading}
      {content}
      {pagination}
      {errorMessage}
    </ul>
  );
}

export default ArticlesPage;
