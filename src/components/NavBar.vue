<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
      <!-- Title and Mode Toggle Row -->
      <div class="w-full flex items-center justify-between mb-2">
        <div class="flex-1"></div>
        <div class="text-center">
          <h1 class="text-xl md:text-2xl font-black tracking-wider uppercase text-gray-900 dark:text-white">Recipe Book</h1>
          <p class="text-xs md:text-sm text-gray-500 dark:text-gray-300 tracking-wide font-medium mt-1">Find Your Favourite Meal...</p>
        </div>
        <div class="flex-1 flex justify-end">
          <button 
            @click="$emit('toggle-darkMode')"
            class="px-3 py-1.5 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>{{ isDarkMode ? '🌙' : '☀️' }}</span>
            <span class="hidden sm:inline">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  isDarkMode: boolean;
}>();

defineEmits<{
  (e: 'toggle-darkMode'): void;
}>();
</script>