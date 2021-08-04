import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoIcon from '@material-ui/icons/Photo';
import { AttachFileOutlined } from '@material-ui/icons';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    input: {
        display: 'hidden',
      },
})

    function Edit() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [file, setFile] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
  
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, details, file})
            }).then(() => history.push('/'))
        }

    }

    return(
        <Container>
            <Typography
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Edit Notice.
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                onChange={(e) => setTitle(e.target.value)}
                className={classes.field}
                label="Add title"
                variant="standard"
                color="secondary"
                fullWidth
                required
                error={titleError} 
                value=""
                />
                 <TextField
                 onChange={(e) => setDetails(e.target.value)}
                className={classes.field}
                label="Add details"
                variant="standard"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError} 
                value=""
                />
                
                <div onSubmit={handleSubmit}> 
                    <input
                        onChange={(e) => setFile(e.target.value)}
                        accept="document/*"
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
                    onChange={(e) => setFile(e.target.value)}
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
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                >
                    Update
                </Button>

            </form>

        </Container>
    )
};

export default Edit;