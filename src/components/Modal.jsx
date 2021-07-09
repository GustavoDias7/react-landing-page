import React, { Component } from "react";

class Modal extends Component {
  handleClick(event) {
    if (event.currentTarget !== event.target) return;
    const newState = false;
    this.props.handleModalSate(newState);
  }
  render() {
    const modalDisplay = {
      display: this.props.modalDisplay ? 'block' : 'none'
    }
    return (
      <div className="modal" style={modalDisplay} onClick={this.handleClick.bind(this)}>
        <div className="container">
          <div className="modal-content">
            <div>
              <h2>Modal</h2>
              <button className="button" onClick={this.handleClick.bind(this)}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    }
}

export default Modal;
