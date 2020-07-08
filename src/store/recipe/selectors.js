export function selectRecipes(reduxState) {
  const result = reduxState.recipes.recipes;
  return result;
}

export const selectRecipeById = (id) => (reduxState) => {
  if (reduxState.recipes.recipes.length) {
    const result = reduxState.recipes.recipes.find((recipe) => {
      return recipe.id === id;
    });

    return result;
  }
};

export function selectfilteredRecipes(reduxState) {
  const result = reduxState.recipes.filteredecipes;
  return result;
}

export function selectfilteredIngredients(reduxState) {
  const ingredientsIds = [];
  const result = reduxState.recipes.filteredecipes.flatMap((recipe) => {
    return recipe.ingredients.filter((ingredient) => {
      if (ingredientsIds.includes(ingredient.id)) {
        return false;
      }
      ingredientsIds.push(ingredient.id);
      return true;
    });
  });
  return result || [];
}
