import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { alpha, makeStyles, Avatar } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {AddOutlined, HomeOutlined, QueryBuilderOutlined } from '@material-ui/icons';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import socialMediaAuth from '../auth';
import { googleProvider } from '../authmethod';
import firebase from '../firebaseConfig';


const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            //background: "#f9f9f9",
            width: "100%",
            height: "100%",
            padding: theme.spacing(5)
        },
        drawer: {
            width: drawerWidth,
            backgroundColor: '#1f1f1f'
        },
        drawerPaper: {
            width: drawerWidth,
        },
        logo: {
            margin: 15,
        },
        typography: {
            '& > * + *': {
                marginLeft: theme.spacing(2),
              },
        },
        label: {
            fontSize: 25,
            fontWeight: 'medium',
        }, 
        root: {
            display: 'flex',
            
        },
        grow: {
            flexGrow: 1,
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: { 
            width: `calc(100% - ${drawerWidth}px)`,
           backgroundColor: "#033E8C", 
           color: "#fff", 
           boxShadow: "0px 0px 0px 0px",
        },
        menu: {
            width: '600px',
            marginTop: 30,
            marginRight: 40

        },
        footer: {
            top: 'auto',
            bottom: 0,
            width: `calc(100% - ${drawerWidth}px)`,
            backgroundColor: "#3c3c3c",
            boxShadow: "0px 0px 0px 0px",
            padding: theme.spacing(-2)
        },
        footerText: {
            textAlign: 'center',
            justifyContent: 'center'
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('lg')]: {
              marginLeft: theme.spacing(3),
              width: 400,
            },
          },
          search1: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('lg')]: {
              marginLeft: theme.spacing(3),
              width: 150,
            },
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "inherit"
          },
          inputRoot: {
            color: 'inherit',
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: 350,
            },
          },
          inputInput1: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: 150,
            },
          },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'flex',
            },
        },
        active: {
            color: "#1e1e1e",
            '&:hover': {
                color: '#cd8500'
            },
        },
        card: {
            minWidth: 40,
            marginTop: 30,
            backgroundColor: "#cd8500",
            color: "#fff",
        },
        btn: {
            color: "#1e1e1e",
            marginLeft:50,
            marginBottom: 20,
        },
        toolbar: theme.mixins.toolbar,
    }

})

function Layout({ children }){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState(null)

    socialMediaAuth(googleProvider, false)
        .then((res) => setUser(res))
        .catch((err) => setUser(err))

     const menuItems  = [  
      {
        text: "Home",
        icon: <HomeOutlined className={classes.list} />,
        path: "/"
      },
      { 
          text: "Recently posted",
          icon: <QueryBuilderOutlined className={classes.list} />,
          path: "/recent"
      },
      {
          text: " Create new notice",
          icon: <AddOutlined className={classes.list}/> ,
          path: "/create"
      }
    ] 
    
    const [anchorEl, setAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const logout = () => {
    firebase.auth().signOut()
    setUser(null)
}

  const renderMenu = (
    <Menu
    className={classes.menu}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Account setting</MenuItem>

        <Divider />
        <br />
        <MenuItem onClick={logout}>{user? "Log out":"Log in"}</MenuItem>
        </Menu>
  );

    return(
        <div className={classes.root}>
            <AppBar
            className={classes.appbar}
            >
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 2 new notifications" color="inherit">
                            <Badge badgeContent={1} color="primary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                            {user?.photoURL ? <Avatar src={user.photoURL}/>: <AccountCircle  />}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}

            {/** Side drawer */}

            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
            >
                <div> 
                    <Typography  className={classes.typography}>
                        <Link to={'/'}>
                            <img id="logo" className={classes.logo} src="https://www.cc.ac.mw/images/UnimaLogo.png" alt="logo"  height="60" />
                        </Link>  
                    </Typography>                          
                </div>

                <Divider />

                {/** list items */}
                <List className={classes.list} >
                    <br />
                   {/*} <div className={classes.search1}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput1,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> 
                    <br /> */}


                   {menuItems.map(item =>
                    <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.path === item.path ? classes.active : null}
                            >
                                <ListItemIcon >{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                  </ListItem>)} 
                        
                </List>
                <Divider />
                {/* <div><Footer /></div> */}

            </Drawer>
            
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                { children }
            </div>
            
        </div>
    )
}

export default Layout;