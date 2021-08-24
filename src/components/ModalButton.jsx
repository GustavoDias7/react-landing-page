import React from 'react';
import { GlobalContext } from './GlobalContext';

const ModalButton = ({ innerText = 'Buy now' }) => {
  const {handleModal} = React.useContext(GlobalContext);
    return (
        <button onClick={() => handleModal()} className="button">
          {innerText}
        </button>
    )
}

export default ModalButton; 