import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core'
import Page from '../components/Page'


const useStyles = makeStyles((theme) => ({
  container: {
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + './assets/29.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
      objectFit: 'contain',
  },
  heading: {
      color: '#fff',
      fontSize: 55,
      marginTop: -1,
  },
  span: {
      color: '#cd8500',
  },
  typography: {
      color: '#fff',
      marginTop: 20,
      fontSize: 30,
      textAlign: 'center'

  },
  heroBtn: {
      marginTop: 30,
  },
  btn: {
      width: '120%',
      height: "60px",
      backgroundColor: '#1565c0',
      color: "#fff",
      '&:hover': {
          backgroundColor: '#cd8500',
          color: "#fff",
          textDecoration: 'none',
      },
      transition: '350ms all ease-in-out',
      
  },
})); 

export default function Hero() {

  const classes = useStyles();
  

  return (
    <div className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
            ACCESS IT <span className={classes.span}>ANYWHERE.</span>
        </Typography>
        <Typography variant="h4" className={classes.heading}>
            USE IT <span className={classes.span}>ANYTIME.</span>
        </Typography>
        <Typography className={classes.typography}>
            Try University of Malawi Notice Board and enrich your college life!
        </Typography>
        <div className={classes.heroBtn} >
            <Button
            color="secondary" 
            className={classes.btn}
            >
                <Router>
                    <Switch>
                        <Route exact path="/home">
                            <Page />
                        </Route>
                    </Switch>
                </Router>
            </Button>
        </div>
    </div>
  );
}

