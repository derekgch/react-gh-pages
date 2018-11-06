import React, { Component } from 'react';
import Background from '../images/Santorini.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="name-title">Derek Guo Chen</h1>
                <img src={Background} className="background-home" width="auto"/>
            </div>
        );
    }
}

export default Home;