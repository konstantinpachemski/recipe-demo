import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Controller} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const AddIngredientDialogContainer = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Button
                onClick={() => props.handleToggleDialogStatus()}
                color="primary"
                variant="contained"
            >
                Add
            </Button>

            <Dialog open={props.open} onClose={props.handleClose} >
                <DialogTitle>Add ingredient</DialogTitle>
                <DialogContent>

                    <form onSubmit={props.onSubmit}>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Ingredient</InputLabel>
                            <Controller
                                as={<Select label={'Ingredients'}/>}
                                name="ingredient"
                                control={props.control}
                                rules={{ required: true }}
                                onChange={([selected]) => {
                                    // React Select return object instead of value for selection
                                    // handleChangeIngredient(selected);
                                    return selected.target.value;
                                }}
                                error={!!props.errors.ingredient}
                                defaultValue=''>
                                {props.availableIngredients.map(ingredient => <MenuItem key={ingredient} value={ingredient}>{ingredient}</MenuItem> )}

                            </Controller>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Quantity</InputLabel>
                            <Controller
                                as={Input}
                                type={'number'}
                                name="quantity"
                                control={props.control}
                                rules={{ required: true }}
                                error={!!props.errors.quantity}
                                defaultValue={props.chosenQuantity} />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.onSubmit} color="primary" type="submit">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddIngredientDialogContainer;