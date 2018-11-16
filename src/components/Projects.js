import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import typingGame from '../images/typing.png'
import stockfinder from '../images/stockfinder.png'
import play from '../images/play.png'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Projects(props) {
    const { classes } = props;
        return (
            <div id="home" className="front">
                <h1 > Projects </h1>
                <div className={classes.root}>
                    <Grid container spacing={24} >
                        <Grid item xs={4}>
                        <ProjectCard 
                            className={classes.paper}
                            title="Stock Finder"
                            description="A personal finance tool for stock portfolio review and analysis"
                            imageUrl= {stockfinder}
                            urls={[{link:"https://github.com/derekgch/Stock-finder-frontend", website:"github"},
                            {link:"https://www.youtube.com/watch?v=hIrq1UIZmIo", website:"Demo"}, 
                            {link:"https://frontend-stockfinder.herokuapp.com/", website:"heroku"}]}
                        />
                        
                        </Grid>
                        <Grid item xs={4}>
                        <ProjectCard 
                            title="Play and Learn"
                            description=" A web app that helps kids and teens to learn math and English"
                            imageUrl= {play}
                            urls={[{link:"www.youtube.com", website:"Github"},
                            {link:"https://www.youtube.com/watch?v=HcYxzMOqLIA", website:"Demo"}, 
                            ]}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
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