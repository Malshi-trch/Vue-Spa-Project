<template>
  <div @click="actions.selectRecipe(recipe)"
    class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group">
    <div class="relative overflow-hidden rounded-xl aspect-square bg-gray-100 mb-3">
      <img :src="recipe.image" :alt="recipe.name" loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <button @click.stop="actions.toggleFavorite(recipe.id)"
        class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-transform">
        {{ isFav ? '❤️' : '🤍' }}
      </button>
    </div>

    <h3 class="text-sm font-bold text-gray-800 dark:text-gray-100 line-clamp-2 text-center mb-2 min-h-[2.5rem]">
      {{ recipe.name }}
    </h3>

    <div
      class="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 pt-1 border-t border-gray-100 dark:border-gray-800">
      <span class="flex items-center gap-1">⭐ {{ recipe.rating }}</span>
      <span class="flex items-center gap-1">⏱️ {{ recipe.prepTimeMinutes }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Recipe } from '../types/recipe';
import { state, actions } from '../store/appStore';

const props = defineProps<{ recipe: Recipe }>();
const isFav = computed(() => state.favorites.includes(props.recipe.id));
</script>