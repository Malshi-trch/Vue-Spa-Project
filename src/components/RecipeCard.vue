<script setup lang="ts">
// Define the interface with a flexible index signature 
// to accept any additional fields required by full Recipe models
interface Recipe {
  id: number;
  title?: string;
  name?: string;
  rating: string;
  time: string;
  image?: string;
  [key: string]: any; // Safely permits extra properties like ingredients, instructions, etc.
}

// Accept the recipe data as a prop from the parent view
defineProps<{
  recipe: Recipe;
}>();
</script>

<template>
  <div
    class="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-3 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md active:scale-98 transition duration-200">
    <!-- Card Image Placeholder -->
    <div
      class="w-full aspect-video bg-gray-100 dark:bg-zinc-800 rounded-xl mb-3 overflow-hidden flex items-center justify-center">
      <span class="text-2xl opacity-40">🍲</span>
    </div>

    <!-- Title Layout (Supports either title or name properties dynamically) -->
    <h4 class="text-sm font-semibold text-gray-800 dark:text-zinc-100 line-clamp-2 mb-2 min-h-[40px] leading-tight">
      {{ recipe.title || recipe.name }}
    </h4>

    <!-- Metadata Details Footer -->
    <div
      class="flex justify-between items-center text-xs font-medium text-gray-500 dark:text-zinc-400 pt-1 border-t border-gray-50 dark:border-zinc-800/50">
      <span class="flex items-center gap-1">
        <span class="text-amber-500">⭐</span> {{ recipe.rating }}
      </span>
      <span class="flex items-center gap-1">
        <span>⏱️</span> {{ recipe.time }}
      </span>
    </div>
  </div>
</template>