import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Delete, Edit, ThumbUpOutlined, ThumbDownOutlined} from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import Comment from '@material-ui/icons/Comment';
import { IconButton, Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';  
import MenuItem from '@material-ui/core/MenuItem'; 



import { makeStyles } from '@material-ui/core';
import { blue, green, orange, pink, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles({
    root: {
        borderRadius: 10,
        marginBottom: 30,
        width: '200%',
    },
    spacing:{
       marginRight : 30
    },
    media: {
        height: 0,
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'Popular') {
                return yellow[700]
            }
            if (note.category === 'Notices') {
                return green[500]
            }
            if (note.category === 'Events') {
                return pink[500]
            }
            if (note.category === 'Adverts') {
                return orange[500]
            }
            return blue[500]
        }
    },
})

function NoteCard({note, handleChange, handleDelete}) {

    const classes = useStyles()

   const [anchorEl, open] = useState(null);
   const handleClick = event => {
       open(event.currentTarget);
   };

   const handleClose = () => {
       open(null);
   };

    

    return (
        <div>
            <Card elevation={3} className={classes.root}>
                <CardHeader
                avatar={
                    <div>
                        <Avatar 
                        src= '' 
                        alt= ''
                        style={{width: '40px', 
                        marginRight: 10, display: 
                        'inline-block', verticalAlign: 'middle'}}
                        />
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
                        >
                            <MenuItem onClick={() => handleChange(note.id)}>
                               <Edit />Edit
                            </MenuItem>                         
                            <MenuItem onClick={() => handleDelete(note.id)}>
                                <Delete />Delete
                            </MenuItem>
                        </Menu>
                    </div>               

                }
                title={note.title}
                subheader={note.category}
                
                />

                <CardContent>
                <Typography variant="body2" >
                        {note.title}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    input={note.file}
                />
                <Divider />
                <CardActions className={classes.spacing}
                 >
                     <IconButton aria-label="comment">
                <ThumbUpOutlined /> 
                </IconButton>
                <IconButton aria-label="comment">
                 <ThumbDownOutlined />
                </IconButton>
                <IconButton aria-label="comment">
                <Comment />
                </IconButton>
            </CardActions>
            </Card>
        </div>
    )
}

export default NoteCard;