import { Pagination } from 'antd';

import classes from './ArticleList.module.scss';

import ArticleItem from '../ArticleItem/ArticleItem';

function ArticleList() {
  return (
    <ul className={classes.container}>
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />

      <Pagination
        className={classes.pagination}
        defaultCurrent={1}
        total={50}
        pageSize={5}
        showSizeChanger={false}
        hideOnSinglePage
      />
    </ul>
  );
}

export default ArticleList;
