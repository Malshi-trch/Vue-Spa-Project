<script setup lang="ts">
// Two-way binding for search tracking
const searchQuery = defineModel<string>({ default: '' });

defineProps<{ isDark: boolean }>();
defineEmits<{ (e: 'toggle-theme'): void }>();
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-3 border-b border-gray-100 dark:border-zinc-800 flex flex-col gap-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <span class="text-xl">📖</span>
        <span class="font-bold text-gray-800 dark:text-white tracking-tight">RECIPE BOOK</span>
      </div>
      
      <!-- Theme Switch Button -->
      <button 
        @click="$emit('toggle-theme')" 
        class="p-2 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:scale-105 active:scale-95 transition"
      >
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>

    <!-- Search Input matching Figma Viewports -->
    <div class="relative w-full">
      <span class="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="Search for your favorite recipe..." 
        class="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white rounded-xl text-sm border border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none transition"
      />
    </div>
  </nav>
</template>