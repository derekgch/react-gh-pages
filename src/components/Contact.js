// import React, { Component } from 'react';

// class Contact extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Contact Me:</h3>
//                 <div className="links">
//                 <a href="https://www.linkedin.com/in/derekgc/">LinkedIn</a> 
//                 <a href="https://github.com/derekgch">GitHub</a> 
//                 <a href="mailto:derek@derekgc.com">Email</a>
//                 </div>

//             </div>
//         );
//     }
// }

// export default Contact;


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import EmailIcon from '@material-ui/icons/Email';



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

function Contact(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h1" component="h1" >
            <Button size="large" className={classes.button}  href="https://www.linkedin.com/in/derekgc/">LinkedIn</Button>
            <Button size="large" className={classes.button} href="https://github.com/derekgch">GitHub</Button>
            <Button size="large" className={classes.button} href="mailto:derek@derekgc.com">
            <EmailIcon />
            </Button>

          </Typography>
      </CardContent>

    </Card>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);