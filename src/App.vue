<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard.vue';

const recipes = ref<Recipe[]>([]);

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  recipes.value = data.recipes;
});
</script>

<template>
  <div class="main-layout">
    <RecipeCard v-for="r in recipes" :key="r.id" :recipe="r" />
  </div>
</template>