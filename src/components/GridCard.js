import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "auto",
    padding: theme.spacing.unit * 3,
    margin: 50
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});



function ComplexGrid(props) {
    const generateButton = ()=>{
        let i =0;
      return props.urls.map( e =>{
          i++;
          return <Button key={e.website+Date.now()+i} href={e.link} size="small" color="primary">  {e.website} </Button>
      });
    }


  const { classes } = props;
  return (
    <Paper className={classes.root}>
    
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={props.imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {props.title}
              </Typography>
              <Typography gutterBottom>{props.description}</Typography>
            </Grid>
            <Grid item>
              <Typography>
              {generateButton()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);