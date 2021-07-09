import React, {Component} from 'react';
import AboutList from './AboutList';

class About extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                './images/phone-01.jpg',
                './images/phone-02.jpg',
                './images/phone-03.jpg',
                './images/phone-04.jpg',
            ],
        }
    }

    changeImages(event) {
        const imagesSrcList = this.state.images;
        const mainImage = imagesSrcList[0];
        const clickedImgIndex = event.target.dataset.index;
        imagesSrcList[0] = imagesSrcList[clickedImgIndex];
        imagesSrcList[clickedImgIndex] = mainImage;
        this.setState({imagesSrcList});
    }

    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="side-left">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <AboutList />
                    </div>
                    <div className="side-right">
                        <div className="product-images">
                            <div className="main-image">
                                <img src={this.state.images[0]} alt="Imagem 1 do produto" />
                            </div>
                            <ul className="small-images">
                                {
                                    this.state.images.map((image, index) => {
                                        if (index === 0) return null;
                                        return (
                                            <li key={image+index}>
                                                <img
                                                    onClick={this.changeImages.bind(this)} 
                                                    data-index={index} src={this.state.images[index]} 
                                                    alt={`Imagem ${++index} do produto`} 
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;