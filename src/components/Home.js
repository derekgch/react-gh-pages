import React, { Component } from 'react';
import Background from '../images/Santorini.jpg';

class Home extends Component {
    render() {
        return (
            <div className='front' id="home">
                {/* <img src={Background} className="background-home" width="auto"/> */}
                <h1 className="name-title">Derek Guo Chen</h1>

            </div>
        );
    }
}

export default Home;