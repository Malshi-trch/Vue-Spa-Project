<template>
  <div 
    @click="selectRecipe"
    class="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800/60 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
  >
    <!-- Image Wrapper with standard aspect ratio and favorite button -->
    <div class="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <img 
        :src="recipe.image" 
        :alt="recipe.name" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Glassmorphic Favorite Button -->
      <button 
        @click.stop="toggleFavorite"
        class="absolute top-2 right-2 p-2 rounded-full backdrop-blur-md bg-black/30 hover:bg-black/50 border border-white/10 text-white transition-all active:scale-90"
      >
        <span :class="isFavorite ? 'text-rose-500' : 'text-white/80'">
          {{ isFavorite ? '❤️' : '🤍' }}
        </span>
      </button>
    </div>

    <!-- Info Content Area -->
    <div class="p-3 md:p-4">
      <!-- Upgraded Title Sizing & Legibility -->
      <h3 class="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100 line-clamp-1 tracking-tight mb-2 group-hover:text-amber-500 transition-colors">
        {{ recipe.name }}
      </h3>
      
      <!-- Upgraded Meta Data Display -->
      <div class="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-1">
          <span class="text-amber-400 text-sm">⭐</span>
          <span class="text-gray-700 dark:text-gray-300">{{ recipe.rating.toFixed(1) }}</span>
        </div>
        <div class="flex items-center gap-1 opacity-90">
          <span>⏱️</span>
          <span>{{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} min</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Recipe } from '../types/recipe';
import { state, actions } from '../store/appStore';

const props = defineProps<{
  recipe: Recipe;
}>();

const isFavorite = computed(() => state.favorites.includes(props.recipe.id));

const selectRecipe = () => {
  actions.selectRecipe(props.recipe);
};

const toggleFavorite = () => {
  actions.toggleFavorite(props.recipe.id);
};
</script>