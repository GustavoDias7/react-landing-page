import React, { Component } from 'react';
import BuyButton from "./BuyButton";

class CallToAction extends Component {
    render() {
        return (
            <section className="call-to-action">
                <div className="container">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eligendi!</h2>
                    <BuyButton handleModalSate={this.props.handleModalSate} />
                </div>
            </section>
        )
    }
}

export default CallToAction;