import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import wave from "../assets/—Pngtree—blue wavy lines background cartoon_2177519.png"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useStore } from '../store/state';
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
        opacity: 0.1
  },
  top: {
    color: '#429bb8',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));


function CircularProgressWithLabel(props) {
  const {water} = useStore()
  const classes = useStylesFacebook();
  return (
    <Box  position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={200}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
       
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={200}
        thickness={4}
        {...props}
      />
      <Box
        
    
        top={0}
        left={0}
        bottom={0}
        right={0}
      
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
          <div className="bg-white w-5/6 h-5/6 rounded-full">
        <span className="text-gray-500 mt-3">Drunk</span>
        <Typography style={{fontSize:"20px"}} variant="caption" component="div" color="textPrimary" >{`${Math.round(
          props.value*(water>2000?40:20),
        )} ML`}</Typography>
        <span  className="z-1 text-gray-500 ">{water > 2000?"Out of 4000 ML target":"Out of 2000 ML target"}</span>
        
        <div className="text-center bg-blue-500 hover:bg-blue-700 mt-1 opacity-25 rounded-full rounded-t-3xl h-3/6">
           
        </div>
        
        </div>

      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);
 const {water, setWater} = useStore()
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 2000 ? 0 : prevProgress + 100));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return<><div className="text-center"> <CircularProgressWithLabel value={water/(water>2000?40:20)} /></div><hr style={{borderWidth:"1px", borderStyle:"inset", marginTop:"10px"}}></hr></>;
}