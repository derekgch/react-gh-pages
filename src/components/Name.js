import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

function Name() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(360deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Full Stack Developer']), 2000))
    ref.current.push(setTimeout(() => set(['Software Engineer']), 5000))
    ref.current.push(setTimeout(() => set(['Derek Guo Chen']), 8000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="name-title">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Name;



// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// // import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import EmailIcon from '@material-ui/icons/Email';
// import SvgIcon from '@material-ui/core/SvgIcon';


// const styles = {
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };

// function Name(props) {
//   const { classes } = props;

//   return (
//     <div className="" id="home" >
//     <Card className={classes.card} style={{background:"transparent", color:"black", boxShadow:"none"}}>
//       <CardContent>
//       <Typography variant="h3" component="h3">
//             Derek G Chen
//         </Typography>

//       <Typography variant="h6" component="h3">
//             Full-Stack Web Application Developer
//           </Typography>
//       </CardContent>

//     </Card>
//     </div>
//   );
// }

// Name.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Name);