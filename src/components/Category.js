import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    form: {
    },
    btn: {
        marginTop: 20
    },
    text: {
        marginBottom: 10,
        fontSize: 20
    }
})

 function Category() {

    const classes = useStyles()
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() }
    
    return(
        <div className={classes.form}>
            <FormControl className={classes.field} onSubmit={handleSubmit}>
                    <FormLabel className={classes.text}>
                        Category
                    </FormLabel>
                    <RadioGroup 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="Popular" control={<Radio />} label="Popular" />
                        <FormControlLabel value="Notices" control={<Radio />} label="Notices" />
                        <FormControlLabel value="Events" control={<Radio />} label="Events" />
                        <FormControlLabel value="Adverts" control={<Radio />} label="Adverts" />
                    </RadioGroup>
                </FormControl>
                
                <div className={classes.btn}>
                <Button 
                type="submit"
                color="secondary"
                variant="contained"
                onClick
                endIcon={<KeyboardArrowRightIcon />}
                >
                    Continue
                </Button> 
                </div>
        </div>
    )
}

export default Category;