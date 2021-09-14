import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  loginButton: {
    width: '80px',
    marginRight: theme.spacing(2),
    backgroundColor: '#cd8500',
    '&:hover': {
      backgroundColor: '#F2BE5C',
    },
    transition: '500ms all ease-in-out'
  },
  logo: {
    fontStyle: 'Ubuntu',
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="sticky">
        <Toolbar>
          <Router>
          <Link to={'/'} >
            <img id="logo" className={classes.logo} src="https://www.cc.ac.mw/images/UnimaLogo.png" alt="logo"  height="60" />  
          </Link> 
          </Router>
          <Typography variant="h6" className={classes.logo}>
            UNIMA Notice Board
          </Typography>
          <div className={classes.grow} />
          <Button color="inherit" className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
