import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6px 12px',
    
    '& > *': {
      margin: theme.spacing(5),
    },
  },
  btns: {
    marginLeft: 150,
    '& > *': {
      margin: theme.spacing(1),
    },
    heading: {
      textAlign: 'center',
      marginLeft: 900
  },
    
  },
}));

export default function ContainedButtons({setCategory}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.btns}>
        <Typography variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
            className={classes.heading}>
                Popular Category
          </Typography>
        <Button variant="outlined" color="primary" onClick={() => setCategory(null)}>
          All
        </Button>
        <Button variant="contained" color="primary" href="#notices" onClick={() => setCategory("Notices")}>
          Notices
        </Button>
        <Button variant="contained" color="primary" href="#events" onClick={() => setCategory("Events")}>
          Events
        </Button>
        <Button variant="contained" color="primary" href="#articles" onClick={() => setCategory("Articles")}>
          Articles
        </Button>
        <Button variant="contained" color="primary" href="#adverts" onClick={() => setCategory("Advertisements")}>
          Advertisements
        </Button>
      </div>
    </div>
  );
}
