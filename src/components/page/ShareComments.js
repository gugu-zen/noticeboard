import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { addComment } from '../../firestore'
import socialMediaAuth from '../../auth';
import { googleProvider } from '../../authmethod';

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

    const [user, setUser] = useState(null)
    console.warn(user)

    socialMediaAuth(googleProvider, false)
        .then((res) => setUser(res))
        .catch((err) => setUser(err))

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
        <div>
            <form onSubmit={handleSubmit}>
                
               <TextField
                    onChange={(e) => setContent(e.target.value)}
                    className={classes.comment}
                    autofocus
                    margin="normal"
                    placeholder="Add comment"
                    variant="standard"
                    color="default"
                    fullWidth
                    action=''
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                />
                
                <IconButton className={classes.icon}>
                    <Send />
                </IconButton>  
            </form> 

            <div>
                <Card className={classes.root}>
                <CardHeader/>
                    <CardContent>
                        <Typography className={classes.title} variant="body2" 
                    style={{display: 'inline-block'}}
                     gutterBottom>
                        {content}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>      
       
        
    )
}