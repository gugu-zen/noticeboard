import React, { useState } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import Collapse from '@material-ui/core/Collapse';
import { Delete } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import Comment from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem'; 
import { makeStyles } from '@material-ui/core';
import { blue, green, orange, pink, yellow } from '@material-ui/core/colors';
import socialMediaAuth from '../auth';
import { googleProvider } from '../authmethod';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import EditingDialogue from './EditingDialogue';
import ShareComments from './page/ShareComments';


const useStyles = makeStyles( (theme) =>({ 
    root: {
        borderRadius: 10,
        marginBottom: 30,
        width: '200%',
    },
    media: {
        maxWidth: '100%',
        maxHeight: '60%',
        height: 'auto',
        width: '100%'
    },
    menu: {
        marginLeft: 40,
        width: 300,
        height: 300
    },
    categoryColor: {
        color: (note) => {
            if (note.category === 'Notices') {
                return green[500]
            }
            else if (note.category === 'Events') {
                return pink[500]
            }
            else if (note.category === 'Articles') {
                return yellow[700]
            }
            else if (note.category === 'Advertisements') {
                return orange[500]
            }
            else {
                return blue[500]
            }
        }
    },
    comment: {
        maxWidth: "90%",
        marginLeft: 25,
        marginBottom: 20
    },
}));

export default function NoteCard({note, handleChange, handleDelete}) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorEl, open] = useState(null);
    const handleClick = event => {
       open(event.currentTarget);
    };

    const handleClose = () => {
       open(null);
    };

    const onSnackbarClose = (e, reason) => {
        if (reason === 'Canceled!') {
        return;
        }
        setSnackbarOpen(false);
        setSnackbarMessage('');
        };
       

    const onShowConfirm = () => {
        if (user?.email === note.user?.email)
            setDialogOpen(true);

        else alert("You Can Delete your own posts only!")
    };
    const onCancel = () => {
        setDialogOpen();
    };

    const [user, setUser] = useState(null)
    console.warn(user)

    socialMediaAuth(googleProvider, false)
        .then((res) => setUser(res))
        .catch((err) => setUser(err))


    return (
        <div>
            <Card elevation={3} className={classes.root}>
                <CardHeader
                avatar={
                    <div>
                        {note.user?.photoURL ? <Avatar src={note.user.photoURL}/>: <AccountCircle  />}
                        </div>
                }
                action={
                    <div>
                        <IconButton
                        aria-label="setting" 
                        onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu 
                        id="Menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className={classes.menu}
                        >
                             <MenuItem>
                               <EditingDialogue note={note} user={user}/>
                            </MenuItem>        
              
                            <MenuItem onClick={onShowConfirm}>
                                <Delete />Delete
                                <Dialog
                                    disableBackdropClick
                                    disableEscapeKeyDown
                                    maxWidth="xs"
                                    open={dialogOpen}
                                >
                                    <DialogTitle>Are You Sure?</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            If you delete this, it can't be undone.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={onCancel} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                        variant="contained"
                                        onClick={(e) => {
                                            handleDelete(note)
                                            setDialogOpen(false)
                                            e.currentTarget.parentNode.parentNode.parentNode.parentNode.style.display = "none"
                                        }}
                                        color="primary"
                                        >
                                            Confirm
                                        </Button>
                                        <Snackbar
                                        open={snackbarOpen}
                                        message={snackbarMessage}
                                        onClose={onSnackbarClose}
                                        autoHideDuration={4000}
                                        />

                                    </DialogActions>
                                </Dialog>
                            </MenuItem>
                        </Menu>
                    </div>               

                }
                title={note.user?.username}
                subheader= {moment(note.date.toDate()).fromNow()}
                />
                <CardContent>
                <Typography>
                        <Button
                        className={classes.categoryColor}
                        color="primary" 
                        size="large"
                        style={{textTransform:"none"}}>
                            {note.category}
                        </Button>
                    </Typography>
                    <Typography variant="body1">
                        <Box fontSize={20}
                        fontWeight="fontWeightBold"
                        style={{textTransform: "capitalize"}}>
                            {note.title}
                        </Box>
                    </Typography>
                    <br />
                    <Typography 
                    variant="body2" 
                    style={{display: 'inline-block'}}

                    >
                        <Box
                        fontSize={18}>
                         {note.details}
                        </Box>
                    </Typography>
                </CardContent>
                    <img src={note.photoURL} alt="" className={classes.media} />
                <Divider />
                <CardActions className={classes.spacing}>
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton 
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                        <Comment />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <ShareComments />
                </Collapse>
            </Card>
            
        </div>
    );
}
