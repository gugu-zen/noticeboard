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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + './assets/29.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          details: {
            display: 'flex',
            flexDirection: 'column',
            margin: 30
          },
          heading: {
              textAlign: 'center',
              marginLeft: 150,
              color: "#fff"
          },
          heading2: {
            textAlign: 'center',
            fontSize: 20,
            marginLeft: 150,
            marginTop: 10,
            color: "#fff"
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
                    <Typography component="h4" variant="h4" className={classes.heading}>
                        Welcome, {note.user?.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.heading2}>
                        Try University of Malawi Notice Board and enrich your college life!
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