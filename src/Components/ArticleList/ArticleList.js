import { useState } from 'react';
import { Pagination } from 'antd';
import { useGetArticlesQuery } from '../../API/articlesApi';

import classes from './ArticleList.module.scss';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ArticleItem from '../ArticleItem/ArticleItem';
import Loader from '../Loader/Loader';

function ArticleList() {
  const [page, setPage] = useState(1);

  const offset = (page - 1) * 5; // пропускать по 5 статей, начиная со 2 страницы
  const { data: articlesData, error, isLoading } = useGetArticlesQuery(offset);

  const articles = articlesData && articlesData.articles;
  const articlesCount = articlesData && articlesData.articlesCount;

  const content =
    articlesData &&
    articles.map((article) => (
      <ArticleItem key={article.slug} article={article} />
    ));

  const pagination = articlesData && (
    <Pagination
      className={classes.pagination}
      showSizeChanger={false}
      total={articlesCount}
      hideOnSinglePage
      pageSize={5}
      current={page}
      onChange={setPage}
    />
  );

  const loading = isLoading ? <Loader /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <ul className={classes.container}>
      {loading}
      {content}
      {errorMessage}
      {pagination}
    </ul>
  );
}

export default ArticleList;
