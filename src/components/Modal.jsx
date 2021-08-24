import React from 'react';
import { GlobalContext } from './GlobalContext';
import ModalButton from './ModalButton';

const Modal = () => {
  const { modal, handleModal } = React.useContext(GlobalContext);

  function clickOut({ target, currentTarget }) {
    if (target === currentTarget) {
      handleModal();
    }
  }

  if (!modal) return null;
  return (
    <div
      className="modal"
      onClick={clickOut}
    >
      <div>
        <div className="modal-content">
          <div>
            <h2>Modal</h2>
            <ModalButton innerText={'Close'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
