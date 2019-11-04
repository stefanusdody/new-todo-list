import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  tech: {
    marginTop: theme.spacing(8),
  },
  img: {
    width: "100%",
    marginRight: theme.spacing(1),
  },
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className={classes.tech}>
     <Grid  item xs={12} sm={12} md={12}>
       <img src={require('../assets/frontend.png')} className={classes.img} alt=""/>
     </Grid>
     <Grid  item xs={12} sm={12} md={12}>
       <img src={require('../assets/backend.png')} className={classes.img} alt=""/>
     </Grid>
    </div>
  );
}

export default TechStack;
