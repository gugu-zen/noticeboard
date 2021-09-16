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
            backgroundColor: '	#f5f5f5'
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

export default function Home(note) {
    const classes = useStyles()
    const [category, setCategory] = useState(null)
     
    console.warn("Category: " + category)
    return(
        <div>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.heading}>
                        Welcome, {note.user?.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.heading}>
                        Start using the notice board now!
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