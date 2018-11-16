

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';


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

  return (
    <Card className={classes.card} style={{background:"transparent", color:"white"}}>
      <CardContent>
      <Typography variant="h5" component="h3">
            Contact
        </Typography>

      <Typography variant="h5" component="h3" >

            

            <Button size="large" className={classes.button}  href="https://www.linkedin.com/in/derekgc/">
                <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 555 576">
                    <path d="M0 499V77l2-6C9 36 29 13 63 3l11-3h407l5 2c34 7 57 28 66 63l3 12v422l-1 5c-8 36-28 59-62 69l-11 3H74l-5-1c-34-8-56-29-66-64l-3-12zm322-266v-31c0-3 0-5-4-5h-75c-4 0-4 1-4 4v251c0 5 1 6 5 6h73c4 0 5-1 5-5v-43l1-104c0-21 16-45 41-46 15-1 30 4 38 19 6 11 8 23 8 35v138c0 5 1 6 5 6h73c4 0 6-1 6-5V309c0-22-3-43-12-63-8-20-22-36-42-46-16-7-33-10-51-8-21 1-39 9-54 25l-13 16zm-129 95V202c0-4-1-5-5-5h-74c-4 0-5 2-5 6v249c0 4 1 6 5 6h73c6 0 6 0 6-6V328zM153 72c-20 0-41 9-47 34-5 18 4 42 21 50 10 5 20 6 31 5 32-3 49-35 36-64-9-18-24-25-41-25z"/>
                    <path fill="#fff" d="M322 233l13-16c15-16 33-24 54-25 18-2 35 1 51 8 20 10 34 26 42 46 9 20 12 41 12 63v144c0 4-2 5-6 5h-73c-4 0-5-1-5-6V314c0-12-2-24-8-35-8-15-23-20-38-19-25 1-41 25-41 46l-1 104v43c0 4-1 5-5 5h-73c-4 0-5-1-5-6V226v-25c0-3 0-4 4-4h75c4 0 4 2 4 4v32zM193 328v124c0 6 0 6-6 6h-73c-4 0-5-2-5-6V203c0-4 1-6 5-6h74c4 0 5 1 5 5v126zM153 72c17 0 32 7 40 25 14 29-3 61-35 64-11 1-21 0-31-5-17-8-26-32-21-50 6-25 27-34 47-34z"/>
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