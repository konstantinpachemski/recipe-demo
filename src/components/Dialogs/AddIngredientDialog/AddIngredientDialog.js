import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetDialog, toggleDialog} from "../../../redux/reducers/AddIngredientDialogSlice";
import {useForm} from "react-hook-form";
import {addIngredient} from "../../../redux/reducers/NewRecipeSlice";
import AddIngredientDialogContainer from "./AddIngredientDialogContainer";

const AddIngredientDialog = () => {

    const open = useSelector(state => state.addIngredientDialog.open);
    const chosenIngredient = useSelector(state => state.addIngredientDialog.chosenIngredient);
    const chosenQuantity = useSelector(state => state.addIngredientDialog.chosenQuantity);
    const availableIngredients = useSelector(state => state.addIngredientDialog.availableIngredients);

    const dispatch = useDispatch();

    const handleToggleDialogStatus = () => dispatch(toggleDialog());

    const handleClose = () => {
        dispatch(toggleDialog());
        dispatch(resetDialog());
    };

    const { control, handleSubmit, errors } = useForm();

    const onSubmit = handleSubmit(({ingredient, quantity}) => {
        dispatch(addIngredient({ingredient: ingredient, quantity: quantity}));
        dispatch(resetDialog());
    });


    const props = {
        open,
        control,
        errors,
        onSubmit,
        chosenIngredient,
        chosenQuantity,
        availableIngredients,
        handleToggleDialogStatus,
        handleClose,
    };

    return (
        <AddIngredientDialogContainer {...props}/>
    );
};

export default AddIngredientDialog;