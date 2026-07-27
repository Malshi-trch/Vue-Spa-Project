<template>
  <div class="flex-1 max-w-4xl w-full mx-auto px-4 py-6 md:py-10 animate-fade-in">
    <!-- Top Action Row -->
    <div class="flex items-center justify-between mb-6">
      <button 
        @click="closeDetail"
        class="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95"
      >
        <span>←</span> Back to recipes
      </button>
      <span class="text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full">
        {{ recipe.cuisine }}
      </span>
    </div>

    <!-- Main Container Grid -->
    <div class="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800/60 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
      
      <!-- Left Column: Media Presentation -->
      <div class="relative w-full aspect-video md:aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <img 
          :src="recipe.image" 
          :alt="recipe.name" 
          class="w-full h-full object-cover"
        />
        <!-- Glassmorphic Info Panel -->
        <div class="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/40 text-white rounded-2xl px-4 py-3 flex justify-between items-center text-xs font-semibold shadow-sm border border-white/10">
          <div class="flex items-center gap-1">
            <span class="text-amber-400 text-sm">⭐</span>
            <span>{{ recipe.rating.toFixed(1) }} Rating</span>
          </div>
          <div class="flex items-center gap-1 opacity-90">
            <span>⏱️</span>
            <span>{{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} mins Total</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Panel View Content -->
      <div class="p-6 md:p-8 flex flex-col justify-center h-full min-h-128">
        <div>
          <!-- Heading Setup -->
          <div class="text-center md:text-left mb-6">
            <h2 class="text-xl md:text-2xl font-black text-gray-900 dark:text-white tracking-tight uppercase leading-snug">
              {{ recipe.name }}
            </h2>
            <div class="w-12 h-1 bg-amber-500 rounded-full mx-auto md:mx-0 mt-2"></div>
          </div>

          <!-- Component Tab System -->
          <div class="bg-gray-100 dark:bg-gray-800/80 p-1 rounded-2xl flex items-center mb-6 max-w-sm mx-auto md:mx-0">
            <button 
              @click="activeTab = 'ingredients'"
              class="flex-1 text-center py-2 text-xs font-bold rounded-xl transition-all"
              :class="activeTab === 'ingredients' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'"
            >
              Ingredients
            </button>
            <button 
              @click="activeTab = 'instructions'"
              class="flex-1 text-center py-2 text-xs font-bold rounded-xl transition-all"
              :class="activeTab === 'instructions' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'"
            >
              Instructions
            </button>
          </div>

          <!-- Dynamic Panel Switch Container -->
          <div class="h-64 overflow-y-auto pr-1">
            <!-- Ingredients Block -->
            <ul v-if="activeTab === 'ingredients'" class="space-y-2.5">
              <li 
                v-for="(ingredient, idx) in recipe.ingredients" 
                :key="idx"
                class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/40 px-3 py-2 rounded-xl border border-gray-100/50 dark:border-gray-800/30"
              >
                <span class="text-amber-500 font-bold mt-0.5">•</span>
                <span>{{ ingredient }}</span>
              </li>
            </ul>

            <!-- Instructions Block -->
            <ol v-else class="space-y-3.5">
              <li 
                v-for="(step, idx) in recipe.instructions" 
                :key="idx"
                class="flex gap-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <span class="flex items-center justify-center bg-amber-500 text-white font-bold text-[10px] w-5 h-5 rounded-full shrink-0 mt-0.5">
                  {{ idx + 1 }}
                </span>
                <span class="leading-relaxed">{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>

        <!-- Footer Breakdown Segment -->
        <div class="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center text-xs font-semibold text-gray-500">
          <div class="bg-gray-50 dark:bg-gray-800/30 p-2.5 rounded-xl">
            <span class="block text-[10px] uppercase tracking-wider opacity-60 mb-0.5">Difficulty</span>
            <span class="text-gray-800 dark:text-gray-200 capitalize text-sm font-bold">{{ recipe.difficulty }}</span>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/30 p-2.5 rounded-xl">
            <span class="block text-[10px] uppercase tracking-wider opacity-60 mb-0.5">Servings</span>
            <span class="text-gray-800 dark:text-gray-200 text-sm font-bold">🍴 {{ recipe.servings }} people</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Recipe } from '../types/recipe';
import { actions } from '../store/appStore';

defineProps<{
  recipe: Recipe;
}>();

const activeTab = ref<'ingredients' | 'instructions'>('ingredients');

const closeDetail = () => {
  actions.selectRecipe(null);
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>