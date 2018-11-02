import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container />
                
            </div>
        );
    }
}

export default MainContainer;