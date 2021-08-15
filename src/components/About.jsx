import React from 'react';
import AboutImages from './AboutImages';
import AboutList from './AboutList';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="side-left">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <AboutList />
                </div>
                <div className="side-right">
                    <AboutImages />
                </div>
            </div>
        </section>
    )
}

export default About;