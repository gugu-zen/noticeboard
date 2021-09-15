import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    //const [content,setContent] = useState('')

    /*const handleSubmit = async (e) => {
        e.preventDefault()
        if (content ){
            const res = await AddComment({
                content,
                date: new Date()
            }).history.push('/')
        }
    }
    */
    


    return(
        <form onSubmit='{handleSubmit}'>
            
            <Avatar className={classes.orange}>N</Avatar><TextField
            onChange='{(e) => setContent(e.target.value)}'
            avatar={
                <div>
                    {note.user?.photoURL ? <Avatar src={note.user.photoURL}/>: <AccountCircle  />}
                    </div>
            }
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

            {/*<Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {note.content}
                    </Typography>
                
                </CardContent>
    </Card>  */}
        </form>
        
        
    )
}