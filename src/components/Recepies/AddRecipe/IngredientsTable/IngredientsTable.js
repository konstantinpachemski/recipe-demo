import React from 'react';
import IngredientsTableContainer from "./IngredientsTableContainer";
import {useDispatch, useSelector} from "react-redux";
import {deleteIngredient} from "../../../../redux/reducers/NewRecipeSlice";

const IngredientsTable = () => {

    const ingredientsBucket = useSelector(state => state.newRecipe.ingredients);
    const dispatch = useDispatch();

    const handleDelete = (i) => {
        dispatch(deleteIngredient(i));
    };

    const propsIngredientsTableContainer = {ingredientsBucket, handleDelete};

    return (
        <>
            <IngredientsTableContainer {...propsIngredientsTableContainer}/>
        </>
    );
};

export default IngredientsTable;