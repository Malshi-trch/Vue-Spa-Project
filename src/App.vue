<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard.vue';
import NavBar from './components/NavBar.vue';
import FilterBar from './components/FilterBar.vue';
import { computed } from 'vue';

const recipes = ref<Recipe[]>([]);
const selectedCategory = ref<string>('All');

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  recipes.value = data.recipes;
});

const filteredRecipes = computed(() => {
  if (selectedCategory.value === 'All') return recipes.value;
  return recipes.value.filter(r => r.cuisine === selectedCategory.value);
});
</script>

<template>
 <div class="main-layout">
    <NavBar />

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