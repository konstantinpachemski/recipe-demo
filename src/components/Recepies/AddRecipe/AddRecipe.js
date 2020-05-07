import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addRecipe} from '../../../redux/reducers/RecipesSlice';
import {useForm} from "react-hook-form";
import AddRecipeContainer from "./AddRecipeContainer";
import { useHistory } from "react-router-dom";

const AddRecipe = () => {
    const history = useHistory();
    const newRecipe = useSelector(state => state.newRecipe);
    const ingredientsBucket = useSelector(state => state.newRecipe.ingredients);
    const dispatch = useDispatch();

    const {register, setValue, handleSubmit, errors} = useForm();

    const onSubmit = handleSubmit(({name, source, time, instructions}) => {
        dispatch(addRecipe({
            name: name,
            source: source,
            ingredients: newRecipe.ingredients,
            time: time,
            instructions: instructions
        }));
        history.push('/');
        }
    );

    const props = {
        newRecipe,
        register,
        setValue,
        onSubmit,
        errors,
        ingredientsBucket
    };

    return (
        <AddRecipeContainer {...props}/>
    );
};

export default AddRecipe;
