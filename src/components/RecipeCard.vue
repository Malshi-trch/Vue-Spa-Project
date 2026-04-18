<script setup lang="ts">
import type { Recipe } from '../types';

// The 'recipe' prop is the only thing this component needs
defineProps<{ recipe: Recipe }>();
</script>

<template>
  <div class="card">
    <img :src="recipe.image" :alt="recipe.name" />
    <h2>{{ recipe.name }}</h2>
    <p>{{ recipe.cuisine }}</p>
  </div>
</template>