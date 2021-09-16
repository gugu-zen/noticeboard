import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import makeStyles from '@material-ui/'

const useStyles = makeStyles((theme) => {
    return {
        comment: {
            maxWidth: "90%",
            marginLeft: 25,
            marginBottom: 20
        }, 
        icon: {
            float: 'right',
            marginTop: -30,
            marginRight: 20,
        },       
    };
})

export default function ShareComments(note) {
    const classes = useStyles()
    const [content,setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (content ){
            const res = await addComment({
                content,
                date: new Date()
            }).history.push('/')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <Avatar className={classes.orange}>{note.user?.photoURL ? <Avatar src={note.user.photoURL}/>: <AccountCircle  />}</Avatar><TextField
                onChange={(e) => setContent(e.target.value)}
                className={classes.comment}
                autofocus
                margin="normal"
                placeholder="Add comment"
                variant="standard"
                color="default"
                fullWidth
                action=''
            />
            
            <IconButton className={classes.icon}>
                <Send />
            </IconButton>  

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {content}
                    </Typography>
                
                </CardContent>
            </Card>
        </form>
        
        
    )
}