<script setup lang="ts">
import type { Recipe } from '../types';

// Defining props strictly ensures type safety throughout the app
defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <div class="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
    <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover rounded" />
    <h2 class="text-xl font-bold mt-2">{{ recipe.name }}</h2>
    <p class="text-gray-600">Cuisine: {{ recipe.cuisine }}</p>
    <p class="mt-2 font-semibold">Difficulty: {{ recipe.difficulty }}</p>
  </div>
</template>