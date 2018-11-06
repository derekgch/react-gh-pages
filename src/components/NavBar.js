import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;

  const handleClick = (event) =>{
      // console.log(event.target.id)
    if(event.target.tagName === "BUTTON" || event.target.tagName === "SPAN"){
        let menu = event.target.innerText.toLowerCase().trim();
        // console.log(menu);
        props.handleMenuClick(menu);
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:"#42a5f5"}}>
        <Toolbar onClick={handleClick}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            
          </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Button color="inherit" >Home</Button>
            <Button color="inherit" >Projects</Button>
            <Button color="inherit" >Gallery</Button>
            <Button color="inherit" >About</Button>
          </Typography>

          <Button color="inherit" >Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);