import PropTypes from 'prop-types';
import { v4 as uniqueKey } from 'uuid';

import classes from './ArticleTags.module.scss';

function ArticleTags({ tags, isFull }) {
  const filter =
    tags &&
    tags.filter(
      (tag) => tag.trim() !== '' && tag !== null && tag !== undefined,
    );

  let content = filter.map((tag) => (
    <li key={uniqueKey()} className={classes.tag}>
      {tag}
    </li>
  ));

  if (!content.length) content = <li className={classes['no-tag']}>No tags</li>;

  return (
    <ul
      className={`${classes.container} ${isFull ? classes.wrap : classes.limit}`}
    >
      {content}
    </ul>
  );
}

ArticleTags.defaultProps = {
  tags: [],
};

ArticleTags.propTypes = {
  tags: PropTypes.array,
  isFull: PropTypes.bool.isRequired,
};

export default ArticleTags;
