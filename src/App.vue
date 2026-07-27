<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
    
    <!-- Connected Theme Prop and Custom Emit Listener -->
    <NavBar :is-dark-mode="state.darkMode" @toggle-dark-mode="updateDarkModeDOM" />

    <!-- Details Modal/Overlay Screen -->
    <RecipeDetail v-if="state.selectedRecipe" :recipe="state.selectedRecipe" />

    <!-- Primary Application Content views -->
    <main v-else class="flex-1 pb-24 max-w-7xl w-full mx-auto">
      <!-- Browse View Segment -->
      <div v-if="state.currentTab === 'search'">
        <!-- Polished Interactive Search Container with Amber Highlights -->
        <div class="p-4 max-w-md mx-auto mb-2">
          <div
            class="relative flex items-center bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 px-3 py-2 transition-all focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 focus-within:shadow-md">
            <span class="text-gray-400 mr-2 text-sm">🔍</span>
            <input type="text" v-model="searchQuery" placeholder="Search for your favorite meal..."
              class="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-gray-400 text-gray-800 dark:text-white font-medium" />
          </div>
        </div>

        <FilterBar @filter-change="handleFilter" />

        <!-- Asynchronous Load State Handling indicators -->
        <div v-if="loading" class="text-center py-12 text-sm text-gray-500 font-medium">
          Fetching beautiful recipes...
        </div>
        <div v-else-if="error" class="text-center py-12 text-sm text-rose-500 font-medium">
          {{ error }}
        </div>

        <!-- Main Responsive Application Grid Framework -->
        <div v-else class="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>

      <!-- Bookmarked Favorites View Segment -->
      <div v-else-if="state.currentTab === 'favorite'">
        <h2 class="text-center text-lg font-black tracking-wide my-6 uppercase">Your Saved Favorites</h2>
        <div v-if="favoriteRecipes.length === 0" class="text-center py-12 text-sm text-gray-400">
          No favorite recipes added yet.
        </div>
        <div v-else class="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <RecipeCard v-for="recipe in favoriteRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>

      <!-- Authentication Simulation Profile Segment -->
      <div v-else-if="state.currentTab === 'profile'">
        <AuthScreen />
      </div>
    </main>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Recipe, RecipeResponse } from './types/recipe';
import { state } from './store/appStore';
import NavBar from './components/NavBar.vue';
import BottomNav from './components/BottomNav.vue';
import FilterBar from './components/FilterBar.vue';
import RecipeCard from './components/RecipeCard.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import AuthScreen from './components/AuthScreen.vue';

const recipes = ref<Recipe[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const searchQuery = ref('');
const activeFilters = ref({ main: 'All Recipes', sub: '' });

// 1. Theme Manager Side Effect Logic
const updateDarkModeDOM = () => {
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Fetch data and handle initialization states
onMounted(async () => {
  // 2. Initialize DOM state immediately when mounting component
  updateDarkModeDOM();

  try {
    const res = await fetch('https://dummyjson.com/recipes?limit=50');
    if (!res.ok) throw new Error('Network issue loading target endpoint.');
    const data: RecipeResponse = await res.json();
    recipes.value = data.recipes;
  } catch (err: any) {
    error.value = err.message || 'Failed to populate dataset.';
  } finally {
    loading.value = false;
  }
});

const handleFilter = (filters: { main: string; sub: string }) => {
  activeFilters.value = filters;
};

// Advanced multi-tier filter matching engine matching design states
const filteredRecipes = computed(() => {
  return recipes.value.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase());

    let matchesMain = true;
    if (activeFilters.value.main !== 'All Recipes') {
      matchesMain = recipe.mealType.some(type =>
        type.toLowerCase() === activeFilters.value.main.toLowerCase()
      ) || recipe.tags.some(tag =>
        tag.toLowerCase() === activeFilters.value.main.toLowerCase()
      );
    }

    let matchesSub = true;
    if (activeFilters.value.sub) {
      matchesSub = recipe.name.toLowerCase().includes(activeFilters.value.sub.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase() === activeFilters.value.sub.toLowerCase());
    }

    return matchesSearch && matchesMain && matchesSub;
  });
});

const favoriteRecipes = computed(() => {
  return recipes.value.filter(r => state.favorites.includes(r.id));
});
</script>