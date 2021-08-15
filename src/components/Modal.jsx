import React from "react";

const Modal = () => {
  const modalDisplay = {
    display: false ? 'block' : 'none'
  }

  return (
    <div className="modal" style={modalDisplay}>
      <div className="container">
        <div className="modal-content">
          <div>
            <h2>Modal</h2>
            <button className="button">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
