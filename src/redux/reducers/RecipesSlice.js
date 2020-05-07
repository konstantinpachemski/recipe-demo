import { createSlice } from '@reduxjs/toolkit';

export const RecipesSlice = createSlice({
  name: 'recipes',
  initialState: [{
    name: 'Sweet Monkey Bread',
    source: 'https://www.allrecipes.com/recipe/6815/monkey-bread-i/',
    time: '00:10',
    instructions: 'Here\'s the easiest, most basic way to make monkey bread. Be sure to bake it in a Bundt pan and not a 2-part pan with a removable bottom (the kind you\'d make an angel food cake in) because the hot caramel sauce will leak through the bottom and ruin your oven.\n' +
        '\n' +
        'Allrecipes home cook dmf offers this smart tip: "Try not to fill the Bundt pan too high or else it will overflow while baking and create a big mess." Leave a good two or three inches at the top of the pan to allow for the dough to expand as it bakes.',
    ingredients: [
      {
        ingredient: 'Coffee',
        quantity: '50'
      },
      {
        ingredient: 'Water',
        quantity: '200'
      },
    ]
  },
    {
      name: 'Chef John\'s Cheese Blintzes',
      source: 'https://www.allrecipes.com/recipe/242406/chef-johns-cheese-blintzes',
      time: '01:15',
      instructions: 'Place 3 eggs, flour, milk, water, vegetable oil, sugar, salt, and vanilla extract in a blender. Blend until completely smooth, 1 or 2 minutes, scraping down sides as needed. Let batter sit at room temperature 30 minutes.\n' +
          '\n' +
          'Whisk together ricotta cheese, cream cheese, lemon zest, egg, sugar, and salt in a mixing bowl. Mix together thoroughly. Cover and refrigerate.\n' +
          '\n' +
          'Heat a 10-inch, non-stick skillet over medium-high heat. Spray or brush lightly with vegetable oil. Pour in about 1/4 cup batter. Immediately swirl batter around to coat bottom of pan. Cook until surface looks dry, about 1 minute. Flip crepe over to briefly cook other side, about 30 seconds. Remove to a plate. Repeat with the rest of batter. Stack crepes.\n' +
          '\n' +
          'Preheat oven to 325 degrees F (165 degrees C). Lightly butter a baking dish.\n' +
          '\n' +
          'Spoon 3 to 4 tablespoons of filling onto the crepe, about an inch from edge nearest you. Fold edge over filling and flatten slightly. Fold in both sides, then roll up crepe into a small filled rectangle, ending with the seam on the bottom, creating a blintz.\n' +
          '\n' +
          'Melt butter in skillet over medium heat. Cook the blintzes until golden brown on both sides, turning gently, about 2 minutes. Transfer to buttered baking dish.\n' +
          '\n' +
          'Bake in preheated oven to firm up the filling, about 12 minutes. Cool blintzes 10 minutes before serving. Dust lightly with confectioners\' sugar.',
      ingredients: [
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
      ]
    },
    {
      name: 'Gingerbread Coffee',
      source: 'https://www.allrecipes.com/recipe/27027/gingerbread-coffee',
      time: '00:20',
      instructions: 'In a small bowl, mix together the molasses, brown sugar, baking soda, ginger and cinnamon until well blended. Cover and refrigerate for at least 10 minutes.\n' +
          'Add about a 1/4 cup of coffee to each cup, then stir in about a tablespoon of the spice mixture until dissolved. Fill cup to within an inch of the top with coffee. Stir in half and half to taste, then garnish with whipped cream and a light dusting of cloves.',
      ingredients: [
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
      ]
    },

    {
      name: 'Kafe',
      source: 'https://www.makijato.mk',
      time: '00:10',
      instructions: 'Во топло млеко дададето го шеќерот, квасецот, јајцата, жолчките, околу две раце брашно и путер. Се добро соединете и постепено дадавајте го брашното замесувајки убаво мазно тесто кое е малку лепливо. Оставете околу еден час да стаса се додека не го дуплира својот волумен.\n' +
          'Тестото извадете го на побрашнете површина со оклагија расукајте колку што можете потенко.\n' +
          'Филот нанесете го тенко сеуште додека е млак за да може убаво да се премачка.\n' +
          'Мотајте во ролат и на начинот на кој ви е покажан во дополнителните слики. Самото мотање може да си го направите на начин на кој ви е на вас најлесен, може да си направите плетенка.\n' +
          'Ролатотот го оставаме да стаса околу половина час го премачкуваме и ја наросуваме со смесата од брашно, шеќер и путер.\n' +
          'Фил\n' +
          'На пареа или на пониска температура растопите чоколада и путер. Во смесата измешајте го какаото, шеќер во прав, сол и цимет.\n' +
          'Посип\n' +
          'Сите состојки за посипот замесете ги грубо т.е во ронки\n' +
          'Со ронките посипете го премачканиот ролат.\n' +
          'На здравје!!!' ,
      ingredients: [
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
        {
          ingredient: 'Coffee',
          quantity: '50'
        },
        {
          ingredient: 'Water',
          quantity: '200'
        },
      ]
    }],
  reducers: {
    addRecipe: (state, action) => {
     state = [...state, state.push(action.payload)]
    },
    deleteRecipe: (state, action) => {
      state = [...state.splice(action.payload, 1)]
    },
  },
});

export const { addRecipe, deleteRecipe } = RecipesSlice.actions;


export default RecipesSlice.reducer;
