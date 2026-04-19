<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard.vue';
import NavBar from './components/NavBar.vue';
import FilterBar from './components/FilterBar.vue';

// 1. Define all your reactive state at the top
const recipes = ref<Recipe[]>([]);
const selectedCategory = ref<string>('All');
const searchQuery = ref<string>(''); // This was the missing piece

// 2. Lifecycle hook stands alone
onMounted(async () => {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  recipes.value = data.recipes;
});

// 3. One single computed property to handle all logic
const filteredRecipes = computed(() => {
  let result = recipes.value;

  // Filter by category
  if (selectedCategory.value !== 'All') {
    result = result.filter(r => r.cuisine === selectedCategory.value);
  }

  // Filter by search text
  if (searchQuery.value) {
    result = result.filter(r => 
      r.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return result;
});
</script>

<template>
  <div class="main-layout">
    <NavBar @search="(q) => searchQuery = q" />

    <FilterBar @filter="(cat) => selectedCategory = cat" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <RecipeCard 
        v-for="recipe in filteredRecipes" 
        :key="recipe.id" 
        :recipe="recipe" 
      />
    </div>
  </div>
</template>