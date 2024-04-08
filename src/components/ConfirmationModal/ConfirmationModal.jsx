import React from 'react';
import './confirmationModal.scss';
import { useDispatch } from 'react-redux';
import { clearOrder, hideClearOrer } from '../../Redux/handleOrderSlice.js';

const ConfirmationModal = () => {
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(clearOrder());
    dispatch(hideClearOrer());
  };

  const onCancel = () => dispatch(hideClearOrer());

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__content">
        <p>Are you sure you want to clear the order?</p>
        <div className="confirmation-modal__buttons">
          <button onClick={onCancel}>Cancel</button>
          <button className="confirmation-modal__btn-confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
