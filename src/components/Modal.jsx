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

  return (
    <div
      className="modal"
      onClick={clickOut}
      style={{display: modal ? 'block' : 'none'}}
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
