import React, { Component } from 'react';

class BuyButton extends Component {
    handleClick() {
        const newState = true;
        this.props.handleModalSate(newState);
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} className="button">
              Buy now
            </button>
        )
    }
}

export default BuyButton; 