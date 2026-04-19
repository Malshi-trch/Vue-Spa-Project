<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard.vue';
import NavBar from './components/NavBar.vue';
import FilterBar from './components/FilterBar.vue';

const recipes = ref<Recipe[]>([]);

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  recipes.value = data.recipes;
});

const handleFilter = (category: string) => {
  if (category === 'All') {
    // Reset to full list
  } else {
    // Logic: Filter your 'recipes' array based on the category
    console.log("Filtering by:", category);
  }
};
</script>

<template>
  <div class="main-layout">
    <RecipeCard v-for="r in recipes" :key="r.id" :recipe="r" />
    <NavBar />
    <FilterBar @filter="handleFilter" />
  </div>
</template>
