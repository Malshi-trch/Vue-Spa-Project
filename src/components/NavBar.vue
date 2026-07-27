<template>
  <header
    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center transition-colors duration-200 sticky top-0 z-40">
    <div>
      <h1 class="text-xl font-bold text-gray-900 dark:text-white tracking-wide">RECIPE BOOK</h1>
      <p class="text-xs text-gray-500 dark:text-gray-400">Find Your Favourite Meal...</p>
    </div>
    <button @click="toggleDarkMode"
      class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform"
      aria-label="Toggle Dark Mode">
      <span v-if="state.darkMode">☀️ Light Mode</span>
      <span v-else>🌙 Dark Mode</span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { state, actions } from '../store/appStore';
const toggleDarkMode = actions.toggleDarkMode;
</script>