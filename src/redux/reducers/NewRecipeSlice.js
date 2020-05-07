import { createSlice } from '@reduxjs/toolkit';

export const newRecipeSlice = createSlice({
  name: 'newRecipe',
  initialState: {
    name: '',
    source: '',
    time: '',
    instructions: '',
    ingredients: []
  },
  reducers: {
    changeName: (state, action) => {
      state = {...state, name: action.payload}
    },
    changeSource: (state, action) => {
      state = {...state, source: action.payload}
    },
    changeTime: (state, action) => {
      state = {...state, time: action.payload}
    },
    changeInstructions: (state, action) => {
      state = {...state, instructions: action.payload}
    },

    addIngredient: (state, action) => {
      return {ingredients: [...state.ingredients, action.payload]};
    },

    deleteIngredient: (state, action) => {
      state = {ingredients: [...state.ingredients.splice(action.payload, 1)]}
    },

    resetIngredients: (state) => {
      return {...state, ingredients: []}
    }
  },
});

export const { changeName, changeSource, changeTime, changeInstructions, addIngredient, deleteIngredient, resetIngredients }
= newRecipeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectNewRecipe = state => state.newRecipe;

export default newRecipeSlice.reducer;
