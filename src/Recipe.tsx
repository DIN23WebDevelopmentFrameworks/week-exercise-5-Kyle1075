import React from "react";
import { IRecipe } from "./types";

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe:React.FC<IRecipeProps> = ({recipeData}) => {
    return(
        <div>
      <h2>{recipeData.name}</h2>
      <img src={recipeData.image} alt={recipeData.name} />
      <p>Servings: {recipeData.servings}</p>
      <p>Prep Time: {recipeData.prepTimeMinutes} mins</p>
      <p>Cook Time: {recipeData.cookTimeMinutes} mins</p>
      <p>Difficulty: {recipeData.difficulty}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipeData.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipeData.instructions.map((instruction, idx) => (
          <li key={idx}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;