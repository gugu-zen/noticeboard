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

export default function Explore() {
    const classes = useStyles()

    return(
        <div>
            <Typography variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom>
                Explore Blog Posts
                </Typography>
                    <Divider />
            <br className={classes.spacing}/>
            <Typography variant="h6">
                Topics
            </Typography>
            <Divider />
            <br />
            <Typography>
                News
            </Typography>
            <Typography>
                Articles
            </Typography>
            <Typography>
                Entertainment
            </Typography>
            <Typography>
                Announcement
            </Typography>
            <Typography>
                Religion
            </Typography>
            <Typography>
                Sports
            </Typography>

        </div>  
    )   
}                                   