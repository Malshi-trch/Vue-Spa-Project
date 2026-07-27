<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
      <!-- Title and Mode Toggle Row -->
      <div class="w-full flex items-center justify-between mb-2">
        <div class="w-24 hidden sm:block"></div>
        <div class="text-center flex-1 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <h1 class="text-xl md:text-2xl font-black tracking-wider uppercase text-gray-900 dark:text-white">RECIPE BOOK</h1>
          <p class="text-xs md:text-sm text-gray-500 dark:text-gray-300 tracking-wide font-medium mt-1">Find Your Favourite Meal...</p>
        </div>
        <div class="flex-1 flex justify-end">
          <button 
            @click="handleToggle"
            class="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 transition-all flex items-center gap-1.5 shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            <span v-if="isDarkMode">☀️ Light Mode</span>
            <span v-else>🌙 Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { actions } from '../store/appStore';

defineProps<{
  isDarkMode: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle-dark-mode'): void;
}>();

const handleToggle = () => {
  if (actions && typeof actions.toggleDarkMode === 'function') {
    actions.toggleDarkMode();
  }
  emit('toggle-dark-mode');
};
</script>