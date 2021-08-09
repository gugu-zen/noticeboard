import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Divider, makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import {AddOutlined, HomeOutlined, SearchOutlined, QueryBuilderOutlined } from '@material-ui/icons';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import {Link,NavLink} from 'react-router-dom';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: "#f9f9f9",
            width: "100%",
            height: "100vh",
            padding: theme.spacing(5)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: { 
            width: `calc(100% - ${drawerWidth}px)`,
           backgroundColor: "#3c3c3c", 
           color: "white", 
           boxShadow: "0px 0px 0px 0px"
        },
        toolbar: theme.mixins.toolbar
    }
})

function Layout({ children }){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
      {
        text: " Home",
        icon: <HomeOutlined color="secondary" />,
        path: "/"
      },
      {
          text: " Search",
          icon: <SearchOutlined color="secondary" />,
          path: "/search"
      },
      {
          text: " Recent notices",
          icon: <QueryBuilderOutlined color="secondary" />,
          path: "/recent"
      },
      {
          text: " Create new notice",
          icon: <AddOutlined color="secondary" />,
          path: "/create"
      }
    ]

    return(
        <div className={classes.root}>

            {/** App bar */}

            <AppBar
            className={classes.appbar}
            >
                <Toolbar>
                    <Typography style={{ textSizeAdjust : "40px"}}>
                     UNIMA notice Board
                    </Typography>
                </Toolbar>
            </AppBar>

            {/** Side navigation drawer */}

            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper
            }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                      
                          <img height="60px" src="https://www.cc.ac.mw/images/UnimaLogo.png" alt="unimalogo"/>
        
                    </Typography>
                </div>
                <Divider />

                {/** list items */}
                <List>
                    {menuItems.map(item => 
                        <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>)}
                        
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                { children }
            </div>
        </div>
    )
}

export default Layout;