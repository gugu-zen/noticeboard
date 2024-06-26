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

export default function Recent() {
    const classes = useStyles()

    return(
        <div>
            <Typography variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom>
                Recent Posts 
                </Typography>
                    <Divider />
            <br className={classes.spacing}/>
            <Typography>
                Anything else posted on Notice Board in 24 hrs
            </Typography>
        

        </div>  
    )   
}                                   