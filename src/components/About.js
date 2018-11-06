import React, { Component } from 'react';
import selfImage from '../images/derekchen.jpg';

class About extends Component {
    render() {
        return (
            <div>
                About
                <img src={selfImage} className="self-image"/>
            </div>
        );
    }
}

export default About;