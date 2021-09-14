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


const useStyles = makeStyles({
    root: {
        maxWidth: 'lg',
        backgroundColor: "fefefe",
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
        marginLeft:30,
    }
})

export default  function Edit() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('')

   
    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, category, details, file})
            }).then(() => history.push('/'))
        }
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
        

    }



    return(
        <Container maxWidth="md">
            <Card className={classes.root}>
                <CardContent>
                <Typography
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Edit a Notice.
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
                    <FormControlLabel value="Announcements" control={<Radio  />} label="Announcements" />
                    <FormControlLabel value="Advertisements" control={<Radio />} label="Advertisements" />
                </RadioGroup>
            </FormControl>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                onChange={(e) => setTitle(e.target.value)}
                className={classes.field}
                label="Type a title"
                variant="filled"
                color="secondary"
                fullWidth
                value={title}
                />
                 <TextField
                 onChange={(e) => setDetails(e.target.value)}
                className={classes.field}
                label="Type a text"
                variant="filled"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                value={details}
                />
                
                <div onSubmit={handleSubmit}> 
                    <input
                        onSubmit={(e) => setCategory(e.target.files[0])}
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
                    onSubmit={(e) => setFile(e.target.files[0])}
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
            </Card>
        </Container>
    )
};
