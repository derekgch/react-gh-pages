import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';

class Container extends Component {
    selectPage = (menu) =>{
        // console.log(menu)
        switch (menu) {
            case "home":
                return <Home />;

            case "projects":
                return <Projects />;
                

            case "contact":
                return <Contact />;

            case "about":
                return <About />;

            case "gallery":
                return <Gallery />;
        }
    }


    render() {
        return (
            <div>
                {this.selectPage(this.props.menu)}
            </div>
        );
    }
}

export default Container;