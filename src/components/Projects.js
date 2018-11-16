import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import image1 from '../images/derekchen.jpg'


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
                <h2 > Projects </h2>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                        <ProjectCard 
                            className={classes.paper}
                            title="google"
                            description="whatever"
                            imageUrl= {image1}
                            urls={[{link:"www.youtube.com", website:"youtube"}, {link:"www.youtube.com", website:"youtube"}]}
                        />
                        
                        </Grid>
                        <Grid item xs={4}>
                        <ProjectCard 
                            title="yoyo"
                            description="whatever"
                            imageUrl= {image1}
                            urls={[{link:"www.youtube.com", website:"youtube"}, {link:"www.youtube.com", website:"youtube"}]}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                        <ProjectCard 
                            title="yahoo"
                            description="whatever"
                            imageUrl= {image1}
                            urls={[{link:"www.youtube.com", website:"youtube"}, {link:"www.youtube.com", website:"youtube"}]}
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