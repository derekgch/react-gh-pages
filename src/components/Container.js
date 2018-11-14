import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';

class Container extends Component {
    componentDidMount(){
        // this.refs.home.scrollIntoView();
        // this.refs.about.scrollIntoView()
        

    }
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
                return <Home />;

            case "projects":
                this.refs.projects.scrollIntoView({behavior: "smooth"})
                return <Projects />;
                
            case "contact":
                return <Contact />;

            case "about":
                console.log("ref?")
                this.refs.about.scrollIntoView({behavior: "smooth"})
                return <About />;

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