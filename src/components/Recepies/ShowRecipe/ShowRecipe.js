import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {listRecipeCardStyle, showRecipeCardStyle} from "../../../styles";
import {deleteRecipe} from "../../../redux/reducers/RecipesSlice";
import ShowRecipeContainer from "./ShowRecipeContainer";
import DeleteDialog from "../../Dialogs/DeleteDialog/DeleteDialog";
import {toggleDialogConfirmDelete} from "../../../redux/reducers/ShowRecipeSlice";

const ShowRecipe = (props) => {

    const classes = listRecipeCardStyle();
    const classes2 = showRecipeCardStyle();

    const recipes = useSelector(state => state.recipes);
    const openDeleteDialog = useSelector(state => state.showRecipe.open);
    const dispatch = useDispatch();

    const selectedRecipe = props.match.params.recipe;

    const handleDelete = (i) => {
        dispatch(deleteRecipe(i));
    };

    const handleToggleDeleteDialogStatus = () => dispatch(toggleDialogConfirmDelete());

    const handleCloseDeleteDialog = () => {
        dispatch(toggleDialogConfirmDelete());
    };

    props = {
        classes,
        classes2,
        recipes,
        selectedRecipe,
        openDeleteDialog,
        handleDelete,
        handleToggleDeleteDialogStatus,
        handleCloseDeleteDialog,
        ...props
    };


    return (
        <>
            <ShowRecipeContainer {...props} />
            <DeleteDialog {...props} />
        </>
    );
};

export default ShowRecipe;
