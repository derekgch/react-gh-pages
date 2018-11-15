import React, { Component } from 'react';
import selfImage from '../images/derekchen.jpg';
import Contact from './Contact';


class About extends Component {
    render() {
        return (
            <div className="front" id="home">
                <img src={selfImage} className="self-image" width="20%"/>
                <br></br>
                About me
                <p>Full stack web developer with a passion for being a part of the technology revolution.  With experience in Ruby on Rails, JavaScript, and React and a background in electrical and computer engineering, I discovered programing through hacking computer games and programming Ti-83 calculators as a teenager.  I bring strong skills in project management and analytical problem solving that help teams deliver in today’s fast-paced deployment cycles.</p>

            <Contact />
            </div>
        );
    }
}

export default About;