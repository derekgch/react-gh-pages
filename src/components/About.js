// import React, { Component } from 'react';
// import selfImage from '../images/derekchen.jpg';
// import Contact from './Contact';


// class About extends Component {
//     render() {
//         return (
//             <div className="front" id="home">
//                 <img src={selfImage} className="self-image" width="20%"/>
//                 <br></br>
//                 About me
//                 <p>Full stack web developer with a passion for being a part of the technology revolution.  With experience in Ruby on Rails, JavaScript, and React and a background in electrical and computer engineering, I discovered programing through hacking computer games and programming Ti-83 calculators as a teenager.  I bring strong skills in project management and analytical problem solving that help teams deliver in today’s fast-paced deployment cycles.</p>

//             <Contact />
//             </div>
//         );
//     }
// }

// export default About;


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import selfImage from '../images/derekchen.jpg';

import Contact from './Contact';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function About(props) {
  const { classes } = props;

  return (
      <div className="front" id="home" >
        <Card className={classes.card} style={{background:"transparent", color:"white"}}>
            <CardContent>
            <Typography variant="h5" component="h2" >
            <img src={selfImage} className="self-image" width="25%"/>
            <br></br>
                About
   
                </Typography>

                <Typography component="p">
                Full stack web developer with a passion for being a part of the technology revolution.  With experience in Ruby on Rails, JavaScript, and React and a background in electrical and computer engineering, I discovered programing through hacking computer games and programming Ti-83 calculators as a teenager.  I bring strong skills in project management and analytical problem solving that help teams deliver in today’s fast-paced deployment cycles.

                </Typography>
            </CardContent>

        </Card>
          <Contact />
      </div>

  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);