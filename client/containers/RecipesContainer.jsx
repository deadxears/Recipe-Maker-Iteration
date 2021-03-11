import axios from 'axios';
import React, { useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import RecipeDisplay from '../components/RecipeDisplay';
import { useRecipe, useSetRecipe } from '../contexts/RecipeContext';
import { useInventory } from '../contexts/InventoryContexts';

function RecipesContainer() {
  const inventory = useInventory();
  console.log(inventory, "line 10 recipes containerkdfjfkjslkdfjslf")
  const recipe = useRecipe();
  const setRecipe = useSetRecipe();
 

  if (inventory === null) return 'inLoading';

  useEffect(() => {
    // console.log('inventory', inventory)
    if (!recipe) {
      axios
        .post('./api/recipes', inventory)
        .then((res) => {
          // console.log('res.data', res.data);
          setRecipe(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  if (recipe === null) {
    return 'Loading...';
  }

  const RecipesDisplay = Object.values(recipe).reduce((acc, ele, index) => {
   acc.push(<RecipeDisplay key={`rd${index}`} recipe={ele} />);
    return acc;
  }, []);

  return (
    <div id='recipeContainer'>
      <CardDeck style={{ width: '800px', display: 'flex', flexDirection: 'column' }}>{RecipesDisplay}</CardDeck>
    </div>
  );
}

export default RecipesContainer;
