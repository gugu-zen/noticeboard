import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
        home: {
            fontWeight: 'medium',
        },
        spacing: {
            padding: theme.spacing(10)
        }
    };
})

export default function Bookmark() {
    const classes = useStyles()

    return(
        <div>
            <Typography variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom>
                Bookmark
                </Typography>
                    <Divider />
            <br className={classes.spacing}/>
            <Typography>
                find bookmarkd blog posts here
            </Typography>         

        </div>  
    )   
}                                   