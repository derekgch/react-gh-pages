import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Name from './Name';

class Container extends Component {

    shouldComponentUpdate(nextProps){
        if(this.props.menu != nextProps.menu){
            return true;
        }
        else{
            return false;
        }
    }

    selectPage = (menu) =>{
        // console.log(menu)
        switch (menu) {
            case "home":
                this.refs.home.scrollIntoView({behavior: "smooth"})
                return ;

            case "projects":
                this.refs.projects.scrollIntoView({behavior: "smooth"})
                return ;
                
            case "contact":
                return <Contact />;

            case "about":
                // console.log("ref?")
                this.refs.about.scrollIntoView({behavior: "smooth"})
                return;

            case "gallery":
                return <Gallery />;
        }
    }


    render() {
        this.selectPage(this.props.menu);
        return (
            <div className="container">
                {/* {this.selectPage(this.props.menu)} */}
                <div  ref="home">
                    <Home />
                </div>
               <Name />

                <div ref="projects">
                <Projects />
                </div>
                
                <div ref="about">
                <About />
                </div>
                
            </div>
        );
    }
}

export default Container;