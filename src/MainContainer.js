import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container';
import _debounce from 'lodash/debounce';


class MainContainer extends Component {
    state ={
        menu: "",
        showMenu:false,
        scrollPos:0,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
                
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll=_debounce((event)=> {

        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
           x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
           y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };

        if(scroll.y > this.state.scrollPos){            
            this.setState({showMenu:false, scrollPos:scroll.y, menu:""});
        }else{
            this.setState({showMenu:true, scrollPos:scroll.y, menu: ""});
        }


        
        // console.log('the scroll things', event, scroll)
    }, 600)

    handleMenuClick = (menu) =>{
        this.setState({menu})
    }
   
    render() {
        const navbarClassName = this.state.showMenu? "nav ScrollDown" : "nav ScrollUp";
        return (
            <div >
                <nav className={navbarClassName} >
                    <NavBar handleMenuClick={this.handleMenuClick} />
                </nav>
                <Container menu={this.state.menu}/>
                
            </div>
        );
    }
}

export default MainContainer;