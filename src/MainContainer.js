import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container';


class MainContainer extends Component {
    state ={
        menu: "HOME"
    }

    handleMenuClick = (menu) =>{
        this.setState({menu})
    }
    render() {
        return (
            <div>
                <NavBar handleMenuClick={this.handleMenuClick}/>
                <Container menu={this.state.menu}/>
                
            </div>
        );
    }
}

export default MainContainer;