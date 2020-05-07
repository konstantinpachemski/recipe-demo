import { createSlice } from '@reduxjs/toolkit';

export const AddIngredientDialogSlice = createSlice({
    name: 'addIngredientDialog',
    initialState: {
        open: false,
        availableIngredients: [
            "Flour",
            "Milk",
            "Oil",
            "Salt",
            "Sugar",
            "Eggs",
            "Tomatoes",
            "Peppers",
            "Cheese",
            "Potatoes",
            "Meat"
        ],
        chosenIngredient: '',
        chosenQuantity: ''

    },
    reducers: {
        toggleDialog: (state) => {
            return {...state, open: !state.open};
        },
        setIngredient: (state, action) => {
            return {...state, chosenIngredient: action.payload}
        },
        setQuantity: (state, action) => {
            return {...state, chosenQuantity: action.payload}
        },
        resetDialog: (state) => {
            return {...state, open: false, chosenIngredient: '', chosenQuantity: ''}
        }
    },
});

export const { toggleDialog, setIngredient, setQuantity, resetDialog } = AddIngredientDialogSlice.actions;

export default AddIngredientDialogSlice.reducer;
