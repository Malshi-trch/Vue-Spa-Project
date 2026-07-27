<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-2 flex justify-around items-center z-40 shadow-lg transition-colors duration-200">
    <!-- Search Tab Button -->
    <button 
      @click="handleTabChange('search')"
      class="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200"
      :class="state.currentTab === 'search' ? 'text-amber-500 font-bold scale-105' : 'text-gray-400 dark:text-gray-500 font-medium hover:text-gray-600 dark:hover:text-gray-300'"
    >
      <span class="text-lg">🔍</span>
      <span class="text-[10px] tracking-wider uppercase">Search</span>
    </button>

    <!-- Favorites Tab Button -->
    <button 
      @click="handleTabChange('favorite')"
      class="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200"
      :class="state.currentTab === 'favorite' ? 'text-amber-500 font-bold scale-105' : 'text-gray-400 dark:text-gray-500 font-medium hover:text-gray-600 dark:hover:text-gray-300'"
    >
      <span class="text-lg">⭐</span>
      <span class="text-[10px] tracking-wider uppercase">Favorites</span>
    </button>

    <!-- Profile Tab Button -->
    <button 
      @click="handleTabChange('profile')"
      class="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200"
      :class="state.currentTab === 'profile' ? 'text-amber-500 font-bold scale-105' : 'text-gray-400 dark:text-gray-500 font-medium hover:text-gray-600 dark:hover:text-gray-300'"
    >
      <span class="text-lg">👤</span>
      <span class="text-[10px] tracking-wider uppercase">Profile</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { state, actions } from '../store/appStore';

const handleTabChange = (tab: 'search' | 'favorite' | 'profile') => {
  // Call the correct action name verified by your TypeScript error
  actions.setTab(tab);
  
  // Clear recipe selection view automatically when switching tabs
  if (state.selectedRecipe) {
    actions.selectRecipe(null);
  }
};
</script>