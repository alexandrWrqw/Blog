import PropTypes from 'prop-types';

import classes from './ArticleTags.module.scss';

function ArticleTags({ tags }) {
  let content =
    tags && tags.map((tag) => <li className={classes.tag}>{tag}</li>);

  if (!tags.length) content = <li className={classes['no-tag']}>No tags</li>;

  return <ul className={classes.container}>{content}</ul>;
}

ArticleTags.defaultProps = {
  tags: [],
};

ArticleTags.propTypes = {
  tags: PropTypes.array,
};

export default ArticleTags;
