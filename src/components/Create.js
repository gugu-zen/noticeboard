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


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

    function Create() {
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
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
                body: JSON.stringify({title, details, category})
            }).then(() => history.push('/'))
        }

    }

    return(
        <Container>
            <Typography
            variant="h6"
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

                <FormControl 
                className={classes.field}
                >
                    <FormLabel>Category</FormLabel>
                    <RadioGroup 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel value="Popular" control={<Radio />} label="Popular" />
                        <FormControlLabel value="Notices" control={<Radio />} label="Notices" />
                        <FormControlLabel value="Events" control={<Radio />} label="Events" />
                        <FormControlLabel value="Adverts" control={<Radio />} label="Adverts" />
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