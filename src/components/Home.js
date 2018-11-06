import React, { Component } from 'react';
import Background from '../images/Santorini.jpg';

class Home extends Component {
    render() {
        return (
            <div className='front' id="home">
                {/* <img src={Background} className="background-home" width="auto"/> */}
                <div className="name-title">
                <h1 >Derek Guo Chen</h1>
                <h2 >Full Stack Web Developer</h2>
                </div>



            </div>
        );
    }
}

export default Home;