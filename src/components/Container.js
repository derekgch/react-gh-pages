import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Name from './Name';
import Lang from './Lang';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


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
                <Parallax pages={4} scrolling={true} horizontal={false} ref={ref => (this.parallax = ref)}>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <span onClick={() => this.parallax.scrollTo(1)}><Home /></span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.5}>
                        <span onClick={() => this.parallax.scrollTo(2)}><Name /></span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.5}>
                        <span onClick={() => this.parallax.scrollTo(3)}><Projects /></span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.5}>
                        <span onClick={() => this.parallax.scrollTo(0)}><About /></span>
                    </ParallaxLayer>
                </Parallax>
            </div>
        );
    }
}

export default Container;