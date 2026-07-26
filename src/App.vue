<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard.vue';
import NavBar from './components/NavBar.vue';
import FilterBar from './components/FilterBar.vue';

// 1. Core State
const recipes = ref<Recipe[]>([]);
const selectedCategory = ref<string>('All');
const searchQuery = ref<string>(''); // For the search bar

// 2. UX State (Loading & Errors)
const isLoading = ref<boolean>(true);
const errorMessage = ref<string | null>(null);

// 3. Resilient Data Fetching
onMounted(async () => {
  try {
    isLoading.value = true;
    errorMessage.value = null;
    
    const res = await fetch('https://dummyjson.com/recipes');
    if (!res.ok) throw new Error('Failed to fetch recipes from server.');
    
    const data = await res.json();
    recipes.value = data.recipes;
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'An unexpected error occurred.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});

// 4. Combined Filter & Search Logic
const filteredRecipes = computed(() => {
  let result = recipes.value;

  // Step A: Filter by cuisine category
  if (selectedCategory.value !== 'All') {
    result = result.filter(r => r.cuisine === selectedCategory.value);
  }

  // Step B: Filter by search query text
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase().trim();
    result = result.filter(r => 
      r.name.toLowerCase().includes(query) || 
      r.ingredients.some(ing => ing.toLowerCase().includes(query))
    );
  }

  return result;
});
</script>