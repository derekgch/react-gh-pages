
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: "auto"
  },
  media: {

    objectFit: 'cover',
  },
};

function ProjectCard(props) {
    // console.log(props.urls);
    
  const { classes } = props;
  const generateButton = ()=>{
      let i =0;
    return props.urls.map( e =>{
        i++;
        return <Button key={e.website+Date.now()+i} href={e.link} size="small" color="primary">  {e.website} </Button>
    });
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="pictures"
          className={classes.media}
          height="240"
          image={props.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p" noWrap>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.urls ? generateButton(): null}
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);