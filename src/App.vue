<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Recipe } from './types'; // Import the interface
import RecipeCard from './components/RecipeCard.vue';

const recipes = ref<Recipe[]>([]); // Strict typing here

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  recipes.value = data.recipes;
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <RecipeCard 
      v-for="recipe in recipes" 
      :key="recipe.id" 
      :recipe="recipe" 
    />
  </div>
</template>