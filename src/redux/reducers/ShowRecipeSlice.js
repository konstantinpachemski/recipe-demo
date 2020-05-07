import { createSlice } from '@reduxjs/toolkit';

export const ShowRecipeSlice = createSlice({
    name: 'showRecipe',
    initialState: {
        open: false,
        selectedRecipeIndex: 0,
    },
    reducers: {
        toggleDialogConfirmDelete: (state) => {
            return {...state, open: !state.open};
        },
        setSelectedRecipeIndex: (state, action) => {
            return {...state, selectedRecipeIndex: action.payload}
        }
    },
});

export const { toggleDialogConfirmDelete, setSelectedRecipeIndex } = ShowRecipeSlice.actions;

export default ShowRecipeSlice.reducer;
