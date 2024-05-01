import PropTypes from 'prop-types';

import { forwardRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import classes from './ConfirmModal.module.scss';

const ConfirmModal = forwardRef(
  ({ showModal, setShowModal, onDelete }, ref) => (
    <div ref={ref} className={showModal ? classes.visible : classes.hidden}>
      <FontAwesomeIcon icon={faCircleExclamation} className={classes.icon} />
      <span>Are you sure to delete this article?</span>

      <div className={classes.actions}>
        <button
          className={classes.no}
          type="button"
          onClick={() => setShowModal(false)}
        >
          No
        </button>

        <button className={classes.yes} type="button" onClick={onDelete}>
          Yes
        </button>
      </div>
    </div>
  ),
);

ConfirmModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ConfirmModal;
