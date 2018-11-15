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
import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedIn from './LinkedIn';


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
            <Button size="large" className={classes.button}  href="https://www.linkedin.com/in/derekgc/">linkedin
                <SvgIcon>
                <path  d="M22 617V221l2-6c7-33 27-55 61-64l12-3h406l5 1c34 8 57 28 66 60l3 12v396l-1 6c-8 33-28 55-62 64l-11 3H96l-5-1c-34-8-56-28-66-61l-3-11zm322-250v-29c0-3 0-5-4-5l-75 1c-4 0-4 1-4 4v235c0 5 1 6 5 6h73c4 0 5-1 5-5v-40l1-98c0-20 16-42 41-44 15 0 30 4 38 19 6 10 8 21 8 32v131c0 4 1 5 5 5h73c4 0 6-1 6-5V439c0-21-3-41-12-60-8-19-22-33-42-42-16-8-33-10-51-9-21 2-39 9-54 24l-13 15zm-129 90V338c0-3-1-5-5-5h-74c-4 0-5 2-5 6v234c0 4 1 6 5 6h73c6 0 6 0 6-6V457zm-40-242c-20 0-41 10-47 32-5 18 4 40 21 48 10 5 20 6 31 5 32-4 49-34 36-61-9-17-24-23-41-24z" transform="translate(-22 -148)"/>
                <path  d="M96 148l-11 3c-34 9-54 31-61 64l-2 6v-73zM22 617l3 11c10 34 32 53 66 61l5 1H22zM503 690l11-3c34-9 54-31 62-64l1-6v73zM577 221l-3-12a82 82 0 0 0-66-59l-5-2h74zM344 367l13-15c15-15 33-22 54-24 18-1 35 1 51 9 20 9 34 23 42 42 9 19 12 39 12 60v135c0 4-2 5-6 5h-73c-4 0-5-1-5-6V443c0-11-2-22-8-32-8-15-23-20-38-19-25 2-41 24-41 44l-1 98v40c0 4-1 5-5 5h-73c-4 0-5-1-5-6V360v-22c0-3 0-5 4-5h75c4 0 4 2 4 5v29zM215 457v116c0 6 0 6-6 6h-73c-4 0-5-1-5-6V339c0-4 1-6 5-6h74c4 0 5 2 5 5v119zM175 215c17 1 32 7 40 24 14 27-3 57-35 61-11 1-21 0-31-5-17-8-26-30-21-48 6-22 27-32 47-32z" className="cls-1" transform="translate(-22 -148)"/>  
                </SvgIcon>
            </Button>
            <Button size="large" className={classes.button} href="https://github.com/derekgch">
                <SvgIcon >
                    <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                </SvgIcon>
            </Button>
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