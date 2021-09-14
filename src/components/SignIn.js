import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import { googleProvider } from '../authmethod';
import firebase from './../firebaseConfig'


const useStyles = makeStyles((theme) => {
    return {
        spacing: {
            padding: theme.spacing(15)
        },
        root: {
            maxWidth: 400,
            backgroundColor: "#dcdcdc",
            marginLeft:100,
        },
        grow: {
            flexGrow: 1,
        },
        
        btn: {
            marginTop: 10,
            marginLeft:50,
            marginBottom: 30,
        },
        heading: {
            textAlign: 'center'
        }

    }
})


    function SignIn() {
        const classes = useStyles();
        const [user, setUser] = useState(null)

        const handleOnClick = async (provider) => {
            //const res = await socialMediaAuth(provider, true);
            console.log("Redirecting");
            const res = await firebase.auth().signInWithRedirect(provider)
            setUser(res)
            console.log("Redirecting");
        };

    return(
        <Container maxWidth="md" className={classes.spacing}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                    className={classes.heading}
                    variant="h5"
                    color="textSecondary"
                    component="h2"
                    gutterBottom
                    >
                        Sign In.
                    </Typography>
                    <Divider />
                
                    <form noValidate autoComplete="off">
                        
                        <div className={classes.grow} />
                        <br />
                        <br />
                        <Button 
                        className={classes.btn}
                        type="submit"
                        color="secondary"
                        variant="contained"
                        onClick={(e) => {
                            e.preventDefault()
                            console.log("Clicked")
                            handleOnClick(googleProvider)}}
                        >
                            Sign in with Google account
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </Container>
    )
};

export default SignIn;