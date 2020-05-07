import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './reducers/RecipesSlice';
import newRecipeReducer from "./reducers/NewRecipeSlice";
import addIngredientDialogReducer from './reducers/AddIngredientDialogSlice';
import showRecipeReducer from './reducers/ShowRecipeSlice';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    newRecipe: newRecipeReducer,
    addIngredientDialog: addIngredientDialogReducer,
    showRecipe: showRecipeReducer,
  },
});
