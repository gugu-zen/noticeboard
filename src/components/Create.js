import React, { useState } from 'react';
import { FormControlLabel, FormLabel, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoIcon from '@material-ui/icons/Photo';
import { AttachFileOutlined, Send } from '@material-ui/icons';
import socialMediaAuth from '../auth';
import { googleProvider } from '../authmethod';
import { addNotice } from '../firestore';
import SignIn from './SignIn';
// import * as mdb from 'mdb-ui-kit'; 
//import { Input } from 'mdb-ui-kit'; // module

const useStyles = makeStyles({
    root: {
        maxWidth: 'lg',
        backgroundColor: "fefefe",
    },
    grow: {
        flexGrow: 1,
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        color: "#282A3A",
    },
    input: {
        display: 'hidden',
    },
    text: {
    fontSize: 20
    },
    radio: {
        marginTop: 25,
    },
    focused: {
        '&:focus': {
            color: "#fff"
        },
    },
    btn: {
        marginTop: 10,
        marginLeft:10,
    }
})

    function Create() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [user, setUser] = useState(null)
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const val = "\n";


    socialMediaAuth(googleProvider, false)
        .then((res) => setUser(res))
        .catch((err) => setUser(err))
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title && details) {
            setLoading(true)
            const res = await addNotice({
                title,
                details,
                category,
                date: new Date(),
                user: {
                    username: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                },
                photoURL: ""
            }, file?.length? file[0] : null)
            setLoading(false)

            if (!res) {
                alert("Upload failed")
            } else history.push('/')
        }      

    }
    
    return(
        <Container maxWidth="md">
            {user?.email ? <Card className={classes.root}>
                <CardContent>
                <Typography
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Create a New Notice.
            </Typography>
            <Divider />

            <FormControl 
            className={classes.field}
            >
                <FormLabel className={classes.text}>Category</FormLabel>
                <RadioGroup 
                className={classes.radio}
                row aria-label="position"
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                >
                    <FormControlLabel value="Notices" control={<Radio className={classes.focused} />} label="Notices" />
                    <FormControlLabel value="Events" control={<Radio />} label="Events" />
                    <FormControlLabel value="Articles" control={<Radio  />} label="Articles" />
                    <FormControlLabel value="Advertisements" control={<Radio />} label="Advertisements" />
                </RadioGroup>
            </FormControl>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                onChange={(e) => setTitle(e.target.value)}
                className={classes.field}
                placeholder="Type a title"
                variant="outlined"
                color="secondary"
                fullWidth
                />
                 <TextField
                 onChange={(e) => setDetails(e.target.value)}
                className={classes.field}
                placeholder="Type a text"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                defaultValue={val} 
                style={{textTransform: "capitalize"}}
                />
                
                <div > 
                    <input
                        onChange={(e) => {
                            setFile(e.target.files)
                        }}
                        name="upload"
                        accept="attach*/"
                        className={classes.input}
                        id="raised-button-file"
                        multiple
                        type="file"
                        hidden
                        
                    />
                    
                    <label 
                    htmlFor="raised-button-file"
                    >
                        <IconButton
                        variant="raised" 
                        color="secondary" 
                        component="span"
                        >
                        <AttachFileOutlined />
                        </IconButton>
                    </label>
                    <input 
                   onChange={(e) => {
                    setFile(e.target.files)
                    }}
                    accept="image/*" 
                    className={classes.input} 
                    id="icon-button-file" 
                    type="file" 
                    hidden
                    />
                   
                    
                    <label 
                    htmlFor="icon-button-file"
                    >
                        <IconButton
                        color="secondary" 
                        aria-label="upload picture" 
                        component="span"
                        >
                        <PhotoIcon />
                        </IconButton>
                    </label>
                </div>
                <div className={classes.grow} />
                <Button 
                className={classes.btn}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<Send />}
                >
                    Update
                </Button>

            </form>

                </CardContent>
            </Card> : <SignIn/>
            }

            {loading ?
            <div class="progress">
            <div
              class="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div> : ""}
        </Container>


    )
};

export default Create;