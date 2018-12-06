import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import typingGame from '../images/typing.png'
import stockfinder from '../images/stockfinder.png'
import play from '../images/play.png';
import stockSimulator from '../images/stock-simulator.png'
import GridCard from './GridCard';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

function Projects(props) {
    const { classes } = props;
        return (
            <div id="home" className="front">
                <h1 > Projects </h1>
                <div >

                    <Grid container spacing={24}  justify = "center">

                    <Grid item xs={6} >
                        <ProjectCard 
                            title="Trade Simulator"
                            description="A stock trade application allows users to simulate buy/sell stocks at real time prices."
                            imageUrl= {stockSimulator}
                            urls={[{link:"https://github.com/derekgch/trade-simulator", website:"Github"}, 
                                {link:"https://derekgch.github.io/trade-simulator", website:"Demo website"}]}
                            />

                    </Grid>
                        <Grid item xs={6}>
                        <ProjectCard 
                            className={classes.paper}
                            title="Stock Finder"
                            description="A personal finance tool for stock portfolio review and analysis"
                            imageUrl= {stockfinder}
                            urls={[{link:"https://github.com/derekgch/Stock-finder-frontend", website:"github"},
                            {link:"https://www.youtube.com/watch?v=hIrq1UIZmIo", website:"Demo video"}, 
                            {link:"https://frontend-stockfinder.herokuapp.com/", website:"heroku"}]}
                        />
                        
                        </Grid>
                        <Grid item xs={6}>
                        <ProjectCard 
                            title="Play and Learn"
                            description=" A web app that helps kids and teens to learn math and English"
                            imageUrl= {play}
                            urls={[{link:"https://github.com/derekgch/play-and-learn-frontend", website:"Github"},
                            {link:"https://www.youtube.com/watch?v=HcYxzMOqLIA", website:"Demo video"}, 
                            {link:"https://derekgch.github.io/play-and-learn-frontend/", website:"S-Player Demo"}, 

                            ]}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <ProjectCard 
                                title="Typing Game"
                                description="A 30-second timed game help people track, practice, and improve their typing skills"
                                imageUrl= {typingGame}
                                urls={[{link:"https://github.com/derekgch/typing-game", website:"Github"}, {link:"https://hidden-woodland-52554.herokuapp.com/main.html", website:"Heroku"}]}
                                />

                        </Grid>
                        
                    </Grid>
                </div>
            </div>
        );
}


// export default Projects;

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Projects);