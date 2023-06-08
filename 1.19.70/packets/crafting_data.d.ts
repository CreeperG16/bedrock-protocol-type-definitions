import {
  Recipes,
  PotionTypeRecipes,
  PotionContainerChangeRecipes,
  MaterialReducer,
} from "../types";

export type crafting_data = {
  recipes: Recipes;
  potion_type_recipes: PotionTypeRecipes;
  potion_container_recipes: PotionContainerChangeRecipes;
  material_reducers: MaterialReducer[];
  clear_recipes: boolean;
};
