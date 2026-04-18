export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  difficulty: string;
  cuisine: string;
  image: string;
  rating: number;
}

export interface RecipeResponse {
  recipes: Recipe[];
}