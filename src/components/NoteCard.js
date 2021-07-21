import React from 'react'
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ThumbUpOutlined } from '@material-ui/icons';
import Comment from '@material-ui/icons/Comment';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { blue, green, orange, pink, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles({
    root: {
        borderRadius: 10,
        marginBottom: 30
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
    }
})

function NoteCard({note, handleDelete}) {
    const classes = useStyles()

    return (
        <div>
            <Card elevation={3} className={classes.root}>
                <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                  </IconButton> 
                }
                title={note.title}
                subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>

                <CardMedia
                    className={classes.media}
                    image="/media/img/10.jpg"
                    title=""
                />

                <CardActions disableSpacing>
                <IconButton aria-label="like">
                <ThumbUpOutlined />
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