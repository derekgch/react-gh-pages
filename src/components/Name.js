// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
// });

// function Name(props) {
//   const { classes } = props;

//   return (
//     <div>
//       <Paper className={classes.root} elevation={1} style={{background:"transparent"}}>
//         <Typography variant="h3" component="h3">
//           Derek Guo Chen
//         </Typography>
//         <Typography variant="h5">
//             Full-Stack Web Developer
//         </Typography>
//       </Paper>
//     </div>
//   );
// }

// Name.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Name);



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
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

function Name(props) {
  const { classes } = props;

  return (
    <div className="" id="home" >
    <Card className={classes.card} style={{background:"transparent", color:"black", boxShadow:"none"}}>
      <CardContent>
      <Typography variant="h3" component="h3">
            Derek Chen
        </Typography>

      <Typography variant="h6" component="h3">
            Full-Stack Web Application Developer
          </Typography>
      </CardContent>

    </Card>
    </div>
  );
}

Name.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Name);