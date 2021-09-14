import React, { useState, useHistory } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import {  Send } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

export default function ShareComments() {
    const classes = useStyles()
    const history = useHistory()
    const [content,setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
   
    }
    


    return(
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
            />
            
            <IconButton className={classes.icon}>
                <Send />
            </IconButton>  

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Thanks
                    </Typography>
                
                </CardContent>
            </Card>  
        </form>
        
        
    )
}