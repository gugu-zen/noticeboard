import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Notes from '../components/Notes';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonBases from '../components/page/ButtonBases';




const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
          },
          details: {
            display: 'flex',
            flexDirection: 'column',
          },
          heading: {
              textAlign: 'center',
              marginLeft: 300
          },
          content: {
            flex: '1 0 auto',
          },
        home: {
            fontWeight: 'medium',
        },
        spacing: {
            padding: theme.spacing(1)
        }
    };
})

export default function Home() {
    const classes = useStyles()
    const [category, setCategory] = useState(null)
     
    console.warn("Category: " + category)
    return(
        <div>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.heading}>
                        Welcome,
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.heading}>
                        UNIMA Online Notice Board
                    </Typography>
                    </CardContent>
                </div>
            </Card>
            <ButtonBases setCategory={setCategory}/>
            <Divider />
            <br className={classes.spacing}/>
            <Notes category={category}/>
        </div>
        
        
    )
}