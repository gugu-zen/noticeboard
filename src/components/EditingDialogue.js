import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { FormControlLabel, FormLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { updateNotice } from '../firestore';


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

export default function EditingDialogue(props) {

    const classes = useStyles();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [note, setNote] = useState(props.note);
    const [c, setC] = useState()

    const onDialogOpen = () => {
        setDialogOpen(true);
    };

    const onDialogClose = () => {
        setDialogOpen(false);
    };

    const onUpdate = () => {
        onDialogClose();
        updateNotice(note)
    };

    const onShowConfirm = () => {
        if (props.user?.email === note.user?.email)
            onDialogOpen();

        else alert("You Can Update your own posts only!")
    };


    return (
        <Fragment>
            <div onClick={onShowConfirm} ><Edit />Edit</div>
            <Dialog open={dialogOpen} onClose={onDialogClose} >
                <DialogTitle>
                    <Typography
                    variant="h5"
                    color="textSecondary"
                    component="h2"
                    gutterBottom
                    >
                        Edit a Notice.
                    </Typography>
                    <Divider />
                </DialogTitle>
                <DialogContent>
                    <FormControl 
                    className={classes.field}
                    >
                        <FormLabel className={classes.text}>Category</FormLabel>
                        <RadioGroup 
                        className={classes.radio}
                        row aria-label="position"
                        value={note.category} 
                        onChange={(e, v) => {
                            console.warn("Category changed " + v)
                           note.category = v
                           setNote(note)
                           setC(v)
                        }}
                        >
                            <FormControlLabel value="Notices" control={<Radio className={classes.focused} />} label="Notices" />
                            <FormControlLabel value="Events" control={<Radio />} label="Events" />
                            <FormControlLabel value="Articles" control={<Radio  />} label="Articles" />
                            <FormControlLabel value="Advertisements" control={<Radio />} label="Advertisements" />
                        </RadioGroup>
                    </FormControl>

            
                    <form noValidate autoComplete="off" onSubmit='{handleSubmit}'>
                        <TextField
                        className={classes.field}
                        label="Type a title"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        onChange={(e, v) => { 
                            console.warn("Title changed " + e.target.value)
                            note.title = e.target.value
                            setNote(note)
                            setC(e.target.value)
                        }}
                        value={note.title}
                        />
                        <TextField
                       onChange={(e, v) => {
                        console.warn("Details changed " + e.target.value)
                           note.details = e.target.value
                           setNote(note)
                           setC(e.target.value)
                        }}
                        className={classes.field}
                        label="Type a text"
                        value={note.details}
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        />
                    </ form>
                </DialogContent>
                <DialogActions>
                    <Button 
                    color="primary" 
                    onClick={onDialogClose}
                    >
                        Cancel 
                    </Button>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={onUpdate}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            
        </Fragment>
    );
}
    