import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteRecipe} from "../../../redux/reducers/RecipesSlice";
import ListRecipesContainer from "./ListRecipesContainer";
import {setSelectedRecipeIndex, toggleDialogConfirmDelete} from "../../../redux/reducers/ShowRecipeSlice";
import DeleteDialog from "../../Dialogs/DeleteDialog/DeleteDialog";

const ListRecipes = () => {
    const recipes = useSelector(state => state.recipes);
    const openDeleteDialog = useSelector(state => state.showRecipe.open);
    const selectedRecipe = useSelector(state => state.showRecipe.selectedRecipeIndex);
    const dispatch = useDispatch();

    const handleDelete = (i) => {
        dispatch(deleteRecipe(i));
    };

    const handleToggleDeleteDialogStatus = () => {
        dispatch(toggleDialogConfirmDelete());
    };

    const handleCloseDeleteDialog = () => {
        dispatch(toggleDialogConfirmDelete());
    };

    const handleSelectRecipeIndex = (i) => {
        dispatch(setSelectedRecipeIndex(i));
    };

    const props = {
        recipes,
        openDeleteDialog,
        selectedRecipe,
        handleDelete,
        handleToggleDeleteDialogStatus,
        handleCloseDeleteDialog,
        handleSelectRecipeIndex
    };

    return (
        <>
            <ListRecipesContainer {...props}/>
            <DeleteDialog {...props}/>
        </>
    )};

export default ListRecipes;