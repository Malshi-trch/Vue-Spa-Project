<template>
  <header
    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center transition-colors duration-200 sticky top-0 z-40">
    
    <!-- 1. Left placeholder to balance the flex layout layout spacing -->
    <div class="w-24 hidden sm:block"></div>

    <!-- 2. Centered Title Block -->
    <div class="text-center flex-1 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
      <h1 class="text-xl font-bold text-gray-900 dark:text-white tracking-wide">RECIPE BOOK</h1>
      <p class="text-xs md:text-sm text-gray-500 dark:text-gray-300 tracking-wide font-medium mt-1">
  Find Your Favourite Meal...
</p>
    </div>
    
    <!-- 3. Right Aligned Toggle Button -->
    <div class="ml-auto sm:ml-0 z-10">
      <button @click="handleToggle"
        class="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 transition-all"
        aria-label="Toggle Dark Mode">
        <span v-if="isDarkMode">☀️ Light Mode</span>
        <span v-else>🌙 Dark Mode</span>
      </button>
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