import React, { useState } from 'react';
import { FormControlLabel, FormLabel, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoIcon from '@material-ui/icons/Photo';
import { AttachFileOutlined } from '@material-ui/icons';


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

    function Create() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [file, setFile] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('')

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
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, category, details, file})
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
                Create a New Notice.
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

                <FormControl 
                className={classes.field}
                >
                    <FormLabel>Category</FormLabel>
                    <RadioGroup 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel value="Popular" control={<Radio />} label="Popular" />
                        <FormControlLabel value="Notice" control={<Radio />} label="Notice" />
                        <FormControlLabel value="Event" control={<Radio />} label="Event" />
                        <FormControlLabel value="Advertisement" control={<Radio />} label="Advertisement" />
                    </RadioGroup>
                </FormControl>

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

export default Create;