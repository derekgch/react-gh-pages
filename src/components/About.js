import React, { Component } from 'react';
import selfImage from '../images/derekchen.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <img src={selfImage} className="self-image"/>
                <br></br>
                About me
                <p>Full stack web developer with a passion for being a part of the technology revolution.  With experience in Ruby on Rails, JavaScript, and React and a background in electrical and computer engineering, I discovered programing through hacking computer games and programming Ti-83 calculators as a teenager.  I bring strong skills in project management and analytical problem solving that help teams deliver in today’s fast-paced deployment cycles.</p>

            </div>
        );
    }
}

export default About;