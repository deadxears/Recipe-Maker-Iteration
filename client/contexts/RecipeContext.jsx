import React, { useContext, useState } from 'react';

const RecipeContext = React.createContext();
const SetRecipeContext = React.createContext();

function useRecipe() {
  return useContext(RecipeContext);
}
function useSetRecipe() {
  return useContext(SetRecipeContext);
}

function RecipeProvider({ children }) {
  const [recipe, setRecipes] = useState(null);
  console.log(recipe, "recipppppppe")
  console.log(children, "chilllldren")

  function setRecipe(newState) {
    setRecipes(newState);
  }

  return (
    <RecipeContext.Provider value={recipe}>
      <SetRecipeContext.Provider value={setRecipe}>{children}</SetRecipeContext.Provider>
    </RecipeContext.Provider>
  );
}

export { RecipeProvider, useRecipe, useSetRecipe };
