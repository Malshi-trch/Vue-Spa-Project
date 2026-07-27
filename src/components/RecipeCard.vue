<template>
  <div 
    @click="actions.selectRecipe(recipe)"
    class="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800/60 overflow-hidden cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative"
  >
    <!-- Favorite Button Container with Backdrop Blur -->
    <button 
      @click.stop="toggleFavorite"
      class="absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-sm border border-gray-100/20 dark:border-gray-700/30 hover:scale-110 active:scale-95 transition-all duration-200"
      :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
    >
      <span class="text-sm block leading-none">
        {{ isFavorite ? '❤️' : '🤍' }}
      </span>
    </button>

    <!-- Image Wrapper with Subtle Zoom Effect -->
    <div class="aspect-square w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <img 
        :src="recipe.image" 
        :alt="recipe.name"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Details Content Block -->
    <div class="p-3 flex flex-col flex-1 justify-between">
      <h3 class="text-sm font-bold text-gray-800 dark:text-gray-100 line-clamp-2 tracking-tight group-hover:text-amber-500 transition-colors">
        {{ recipe.name }}
      </h3>
      
      <!-- Flex alignment fixing the footer row -->
      <div class="flex justify-between items-center mt-3 pt-2 border-t border-gray-50 dark:border-gray-800 text-[11px] font-semibold">
        <div class="flex items-center text-amber-500">
          <span class="mr-1">⭐</span>
          <span>{{ recipe.rating.toFixed(1) }}</span>
        </div>
        <div class="flex items-center text-gray-400 dark:text-gray-500 font-medium">
          <span class="mr-1">⏱️</span>
          <span>{{ recipe.prepTimeMinutes }} min</span>
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

const toggleFavorite = () => {
  actions.toggleFavorite(props.recipe.id);
};
</script>